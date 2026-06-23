/**
 * Node.js HTTP wrapper for the Web-Standard fetch handler produced by
 * TanStack Start / Nitro (cloudflare-module preset).
 *
 * Render Web Services run Node.js, not Cloudflare Workers, so we adapt
 * the exported `default.fetch(request)` into a plain http.createServer.
 */
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const PORT = parseInt(process.env.PORT || "3000", 10);

// Lazy-load the SSR handler built by Nitro/TanStack Start
let handler;
async function getHandler() {
  if (!handler) {
    const mod = await import("./dist/server/server.js");
    handler = mod.default ?? mod;
  }
  return handler;
}

const MIME = {
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".css": "text/css",
  ".html": "text/html",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".webp": "image/webp",
};

const server = createServer(async (req, res) => {
  try {
    // Serve static assets from dist/client directly (faster, avoids SSR overhead)
    if (req.url && req.url.startsWith("/assets/")) {
      const filePath = join(__dirname, "dist/client", req.url.split("?")[0]);
      try {
        const data = await readFile(filePath);
        const ext = extname(filePath);
        res.writeHead(200, {
          "Content-Type": MIME[ext] || "application/octet-stream",
          "Cache-Control": "public, max-age=31536000, immutable",
        });
        res.end(data);
        return;
      } catch {
        // fall through to SSR handler
      }
    }

    // All other requests go through the SSR handler
    const h = await getHandler();

    const origin = `http://${req.headers.host || `localhost:${PORT}`}`;
    const url = new URL(req.url || "/", origin);

    // Collect request body
    const bodyChunks = [];
    for await (const chunk of req) bodyChunks.push(chunk);
    const bodyBuffer = Buffer.concat(bodyChunks);

    const webRequest = new Request(url.toString(), {
      method: req.method || "GET",
      headers: Object.entries(req.headers).reduce((acc, [k, v]) => {
        if (v !== undefined) acc[k] = Array.isArray(v) ? v.join(", ") : v;
        return acc;
      }, {}),
      body: bodyBuffer.length > 0 ? bodyBuffer : undefined,
    });

    const webResponse = await h.fetch(webRequest, {}, {});

    res.statusCode = webResponse.status;
    webResponse.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    const responseBody = await webResponse.arrayBuffer();
    res.end(Buffer.from(responseBody));
  } catch (err) {
    console.error("[server-node] Unhandled error:", err);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`[server-node] Listening on http://0.0.0.0:${PORT}`);
});
