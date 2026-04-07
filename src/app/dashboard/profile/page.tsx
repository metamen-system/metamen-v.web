import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perfil | METAMEN100",
};

export default function ProfilePage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-white">Perfil</h1>
      <p className="text-base text-[#B0B0B0]">
        Información del usuario y ajustes — Implementar en M15
      </p>
    </main>
  );
}
