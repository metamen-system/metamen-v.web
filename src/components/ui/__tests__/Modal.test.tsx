import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import Modal from '@/components/ui/Modal';

const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

function getDialogFocusableElements(dialog: HTMLElement): HTMLElement[] {
  return Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
}

describe('Modal', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('Tab cycles forward within modal', async () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()} title="Test">
        <button type="button">First</button>
        <button type="button">Second</button>
        <button type="button">Third</button>
      </Modal>,
    );

    const dialog = screen.getByRole('dialog');

    await waitFor(() => {
      expect(document.activeElement).toBe(dialog);
    });

    const focusableElements = getDialogFocusableElements(dialog);
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    if (!firstFocusable || !lastFocusable) {
      throw new Error('Expected focusable elements inside modal');
    }

    lastFocusable.focus();
    fireEvent.keyDown(dialog, { key: 'Tab' });

    expect(document.activeElement).toBe(firstFocusable);
  });

  it('Shift+Tab cycles backward within modal', async () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()} title="Test">
        <button type="button">First</button>
        <button type="button">Second</button>
        <button type="button">Third</button>
      </Modal>,
    );

    const dialog = screen.getByRole('dialog');

    await waitFor(() => {
      expect(document.activeElement).toBe(dialog);
    });

    const focusableElements = getDialogFocusableElements(dialog);
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    if (!firstFocusable || !lastFocusable) {
      throw new Error('Expected focusable elements inside modal');
    }

    firstFocusable.focus();
    fireEvent.keyDown(dialog, { key: 'Tab', shiftKey: true });

    expect(document.activeElement).toBe(lastFocusable);
  });

  it('Focus restores to previous element on close', async () => {
    const externalButton = document.createElement('button');
    externalButton.type = 'button';
    externalButton.textContent = 'Outside';
    document.body.appendChild(externalButton);
    externalButton.focus();

    const onClose = vi.fn();
    const { rerender } = render(
      <Modal isOpen={true} onClose={onClose} title="Test">
        <button type="button">Inside</button>
      </Modal>,
    );

    const dialog = screen.getByRole('dialog');

    await waitFor(() => {
      expect(document.activeElement).toBe(dialog);
    });

    rerender(
      <Modal isOpen={false} onClose={onClose} title="Test">
        <button type="button">Inside</button>
      </Modal>,
    );

    await waitFor(() => {
      expect(document.activeElement).toBe(externalButton);
    });

    externalButton.remove();
  });

  it('Pressing Escape calls onClose', () => {
    const onClose = vi.fn();

    render(
      <Modal isOpen={true} onClose={onClose} title="Test">
        <p>Content</p>
      </Modal>,
    );

    fireEvent.keyDown(window, { key: 'Escape' });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('Modal panel has correct ARIA attributes', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()} title="My Title">
        <p>Body</p>
      </Modal>,
    );

    const dialog = screen.getByRole('dialog');
    const title = screen.getByText('My Title');

    expect(dialog.getAttribute('aria-modal')).toBe('true');
    expect(dialog.getAttribute('aria-labelledby')).toBe('modal-title');
    expect(title.id).toBe('modal-title');
  });

  it('Modal without title has no aria-labelledby', () => {
    render(
      <Modal isOpen={true} onClose={vi.fn()}>
        <p>Body</p>
      </Modal>,
    );

    const dialog = screen.getByRole('dialog');

    expect(dialog.hasAttribute('aria-labelledby')).toBe(false);
  });

  it('Clicking overlay calls onClose', () => {
    const onClose = vi.fn();

    render(
      <Modal isOpen={true} onClose={onClose} title="Test">
        <p>Body</p>
      </Modal>,
    );

    const dialog = screen.getByRole('dialog');
    const overlay = dialog.parentElement;

    if (!overlay) {
      throw new Error('Expected modal overlay element');
    }

    fireEvent.click(overlay);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('Clicking inside panel does NOT call onClose', () => {
    const onClose = vi.fn();

    render(
      <Modal isOpen={true} onClose={onClose} title="Test">
        <p>Body</p>
      </Modal>,
    );

    fireEvent.click(screen.getByText('Body'));

    expect(onClose).not.toHaveBeenCalled();
  });
});
