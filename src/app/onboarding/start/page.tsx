import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SISTEMA INICIALIZADO | METAMEN100',
};

export default function OnboardingStartPage() {
  return (
    <main className="min-h-screen flex items-center justify-center flex-col gap-6 px-4">
      <h1 className="text-center text-3xl md:text-4xl font-black text-[#00FF88]">
        SISTEMA INICIALIZADO
      </h1>
      <p className="text-center text-lg font-semibold text-[#FFB800]">
        ⚠️ Comienzas con 5 de 10 corazones
      </p>
      <p className="text-center text-sm italic text-[#808080]">
        Push permissions + Day 1 start — Implementar en M08
      </p>
    </main>
  );
}
