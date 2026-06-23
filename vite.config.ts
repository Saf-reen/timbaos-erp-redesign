import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Pure client-side SPA build — no SSR, no Nitro, no server runtime.
export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    // Generates routeTree.gen.ts from src/routes/ — code-splits each route automatically
    TanStackRouterVite({ autoCodeSplitting: true }),
    react(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
