import type { ReactNode } from "react";

export function PageHero({
  title,
  subtitle,
  children,
  bgImage,
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  bgImage?: string;
}) {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Background — photo or gradient */}
      {bgImage ? (
        <>
          <img
            src={bgImage}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-deep)]/90 to-primary/80" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-deep)] via-primary to-[var(--primary-deep)]" />
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_20%_30%,white_0%,transparent_40%),radial-gradient(circle_at_80%_70%,white_0%,transparent_35%)]" />
        </>
      )}
      <div className="container-x relative py-20 text-center">
        <h1 className="font-display font-extrabold text-4xl md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl mx-auto text-white/85">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
