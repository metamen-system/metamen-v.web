import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TUS 6 VECTORES | METAMEN100",
};

export default function OnboardingVectorsPage() {
  return (
    <div className="flex min-h-full items-center justify-center px-6 text-center">
      <div className="max-w-md space-y-6">
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">TUS 6 VECTORES</h1>
        <p className="text-lg text-[#B0B0B0]">Calibrando identidad bio-digital...</p>
        <div className="rounded-lg border border-dashed border-[#2D2D2D] p-8">
          <p className="text-[#808080]">Tutorial interactivo de vectores — Implementar en M08</p>
        </div>
      </div>
    </div>
  );
}
