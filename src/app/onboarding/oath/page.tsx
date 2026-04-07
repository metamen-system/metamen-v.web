import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Juramento — METAMEN100",
};

export default function OathPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4">
      <h1 className="text-center text-3xl font-black tracking-wide text-white sm:text-4xl">
        CONTRATO DE TRASCENDENCIA
      </h1>
      <p className="text-center text-base text-[#B0B0B0]">Mantén presionado 3 segundos para firmar</p>
      <p className="text-center text-sm text-[#808080]">Long-press 3s exacto — Implementar en M08</p>
    </main>
  );
}
