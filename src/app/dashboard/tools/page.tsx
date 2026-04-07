import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arsenal | METAMEN100",
};

// TODO M11: Replace with full Arsenal tools grid (9 tools)
export default function ToolsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#FFFFFF]">Arsenal</h1>
      <p className="text-[#B0B0B0] mt-2">Grid de 9 herramientas — Implementar en M11</p>
    </div>
  );
}
