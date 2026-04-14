'use client';

import { useEffect, useState } from 'react';

import streakFireAnimation from '../../../../public/animations/streak_fire.json';

import { Button } from '@/components/ui/Button';
import { LongPressButton } from '@/components/ui/LongPressButton';
import { LottiePlayer } from '@/components/ui/LottiePlayer';
import { Modal } from '@/components/ui/Modal';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useToastStore } from '@/hooks/useToast';

function TestControlButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-xl border border-bg-elevated bg-bg-card px-4 py-3 font-semibold text-white transition-colors hover:bg-bg-elevated"
    >
      {label}
    </button>
  );
}

export default function UITestPage() {
  const [hasMounted, setHasMounted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const addToast = useToastStore((state) => state.addToast);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const reducedMotionLabel = hasMounted && reducedMotion ? 'ACTIVE ✓' : 'INACTIVE';
  const reducedMotionLabelClass =
    hasMounted && reducedMotion ? 'text-state-success' : 'text-text-primary';

  return (
    <div className="mx-auto max-w-3xl space-y-10 p-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold text-white">UI Test - Reduced Motion</h1>
        <p className="text-sm text-text-secondary">
          Reduced motion: <span className={reducedMotionLabelClass}>{reducedMotionLabel}</span>
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-text-secondary">
          1. Button Variants (hover to test)
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <Button disabled>Disabled</Button>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-text-secondary">
          2. Modal (focus trap + Escape)
        </h2>
        <TestControlButton label="Open Modal" onClick={() => setModalOpen(true)} />
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Test Modal">
          <p className="mb-4 text-text-secondary">
            Modal content. Press Tab to test the focus trap.
          </p>
          <div className="flex gap-4">
            <TestControlButton label="Cancel" onClick={() => setModalOpen(false)} />
            <TestControlButton label="Confirm" onClick={() => setModalOpen(false)} />
          </div>
        </Modal>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-text-secondary">
          3. Toast (2500ms auto-dismiss)
        </h2>
        <div className="flex flex-wrap gap-4">
          <TestControlButton
            label="Success Toast"
            onClick={() => addToast({ type: 'success', title: 'Success toast' })}
          />
          <TestControlButton
            label="Error Toast"
            onClick={() => addToast({ type: 'error', title: 'Error toast' })}
          />
          <TestControlButton
            label="Warning Toast"
            onClick={() => addToast({ type: 'warning', title: 'Warning toast' })}
          />
          <TestControlButton
            label="Info Toast"
            onClick={() => addToast({ type: 'info', title: 'Info toast' })}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-text-secondary">4. LongPressButton (3000ms)</h2>
        <LongPressButton
          label="HOLD 3 SECONDS"
          holdingLabel="HOLDING..."
          variant="danger"
          onComplete={() => {
            const completedAt = Math.round(performance.now());
            console.log(`LongPressButton completed at: ${completedAt}ms`);
            addToast({
              type: 'success',
              title: `Completed at ${completedAt}ms`,
            });
          }}
        />
        <LongPressButton
          label="GOLD VARIANT"
          variant="gold"
          onComplete={() => addToast({ type: 'info', title: 'Gold press completed' })}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-text-secondary">5. LottiePlayer</h2>
        <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-bg-card">
          <LottiePlayer
            animationData={streakFireAnimation}
            autoplay={true}
            loop={true}
            width={128}
            height={128}
          />
        </div>
      </section>
    </div>
  );
}
