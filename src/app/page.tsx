import Link from "next/link";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="[font-family:var(--font-space-grotesk)] text-[#D4AF37] text-3xl sm:text-4xl font-bold text-center px-4">
        METAMEN100 — Protocolo de 100 Días
      </h1>
      <Link
        href="/login"
        prefetch={false}
        className="mt-8 text-lg font-semibold text-white hover:text-[#D4AF37] transition-colors duration-200 tracking-[0.2em] uppercase"
      >
        INGRESAR
      </Link>
    </main>
  );
}
