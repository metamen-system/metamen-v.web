export default function Loading() {
  return (
    <div
      role="status"
      className="flex min-h-screen items-center justify-center bg-[#0A0A0A]"
    >
      <div className="h-12 w-12 animate-pulse rounded-full bg-[#1A1A1A]" />
      <span className="sr-only">Cargando...</span>
    </div>
  );
}
