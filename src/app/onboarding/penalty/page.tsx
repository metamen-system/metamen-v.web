export const metadata = {
  title: 'METAMEN100 — Declara tu Precio',
};

export default function PenaltyPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 gap-6">
      <h1 className="text-3xl font-black text-[#FF073A]">DECLARA TU PRECIO</h1>
      <p className="text-base text-[#B0B0B0]">Si tu avatar muere, este será tu castigo real.</p>
      <div className="w-full max-w-md h-32 rounded-lg border border-[#2D2D2D] bg-[#1A1A1A] flex items-center justify-center">
        <span className="text-sm text-[#808080] px-4 text-center">
          Campo de texto 10-280 chars, inmutable — Implementar en M08
        </span>
      </div>
    </div>
  );
}
