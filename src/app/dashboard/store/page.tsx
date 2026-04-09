import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tienda | METAMEN100',
};

export default function StorePage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl text-white">Tienda</h1>
      <p className="text-[#B0B0B0]">Catálogo de 49+ items — Implementar en M12</p>
    </main>
  );
}
