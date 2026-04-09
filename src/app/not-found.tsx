import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-[72px] font-black text-[#FF073A] leading-none">404</h1>
        <p className="mt-4 text-lg text-[#B0B0B0]">Ruta no encontrada</p>
        <Link href="/" className="mt-6 inline-block text-[#D4AF37] hover:underline">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
