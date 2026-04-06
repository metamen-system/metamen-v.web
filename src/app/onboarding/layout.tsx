export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col">
      <header className="flex items-center justify-center py-6 px-4">
        {/* TODO M08: Implementar ProgressDots dinámico con onboarding_step */}
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2D]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2D]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2D]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2D]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2D]" />
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center px-4">{children}</main>
    </div>
  );
}
