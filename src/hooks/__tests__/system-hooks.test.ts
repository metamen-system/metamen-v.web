import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import { useHapticFeedback, VIBRATE } from '../useHapticFeedback';
import { useMediaQuery } from '../useMediaQuery';
import { useOnlineStatus } from '../useOnlineStatus';
import { useReducedMotion } from '../useReducedMotion';

type MockMediaQueryList = {
  matches: boolean;
  media: string;
  onchange: ((this: MediaQueryList, ev: MediaQueryListEvent) => unknown) | null;
  addEventListener: ReturnType<typeof vi.fn>;
  removeEventListener: ReturnType<typeof vi.fn>;
  dispatchEvent: ReturnType<typeof vi.fn>;
  addListener: ReturnType<typeof vi.fn>;
  removeListener: ReturnType<typeof vi.fn>;
};

function invokeListeners(
  listeners: Set<EventListenerOrEventListenerObject>,
  eventType: string,
): void {
  const event = new Event(eventType);

  listeners.forEach((handler) => {
    if (typeof handler === 'function') {
      handler(event);
      return;
    }
    handler.handleEvent(event);
  });
}

// ═══════════════════════════════════════════
// TEST 1: useMediaQuery (M02-034)
// ═══════════════════════════════════════════

describe('useMediaQuery', () => {
  let listeners: Map<string, Set<(e: MediaQueryListEvent) => void>>;
  let mockMatches: boolean;
  let matchMediaMock: ReturnType<typeof vi.fn>;
  let latestMediaQueryList: MockMediaQueryList | null;

  beforeEach(() => {
    listeners = new Map();
    mockMatches = false;
    latestMediaQueryList = null;

    // Mock window.matchMedia
    matchMediaMock = vi.fn((query: string) => {
      const mediaQueryList: MockMediaQueryList = {
        matches: mockMatches,
        media: query,
        onchange: null,
        addEventListener: vi.fn((event: string, handler: (e: MediaQueryListEvent) => void) => {
          if (!listeners.has(event)) listeners.set(event, new Set());
          listeners.get(event)?.add(handler);
        }),
        removeEventListener: vi.fn((event: string, handler: (e: MediaQueryListEvent) => void) => {
          listeners.get(event)?.delete(handler);
        }),
        dispatchEvent: vi.fn(),
        addListener: vi.fn(), // deprecated — should NOT be called
        removeListener: vi.fn(), // deprecated — should NOT be called
      };

      latestMediaQueryList = mediaQueryList;

      return mediaQueryList as unknown as MediaQueryList;
    });

    vi.stubGlobal('matchMedia', matchMediaMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('retorna false cuando media query NO coincide', () => {
    mockMatches = false;
    const { result } = renderHook(() => useMediaQuery('(max-width: 767px)'));
    expect(result.current).toBe(false);
  });

  it('retorna true cuando media query SÍ coincide', () => {
    mockMatches = true;
    const { result } = renderHook(() => useMediaQuery('(max-width: 767px)'));
    expect(result.current).toBe(true);
  });

  it('usa addEventListener (NO addListener deprecated)', () => {
    renderHook(() => useMediaQuery('(max-width: 767px)'));

    expect(latestMediaQueryList).not.toBeNull();
    expect(latestMediaQueryList?.addEventListener).toHaveBeenCalledWith(
      'change',
      expect.any(Function),
    );
    // Verificar que NO se usó el deprecated addListener
    expect(latestMediaQueryList?.addListener).not.toHaveBeenCalled();
  });

  it('actualiza en tiempo real cuando el media query cambia', () => {
    mockMatches = false;

    const { result } = renderHook(() => useMediaQuery('(max-width: 767px)'));
    expect(result.current).toBe(false);

    // Simular cambio de viewport
    act(() => {
      const changeHandlers = listeners.get('change');
      changeHandlers?.forEach((handler) => {
        handler({
          matches: true,
          media: '(max-width: 767px)',
        } as MediaQueryListEvent);
      });
    });

    expect(result.current).toBe(true);
  });

  it('limpia listeners en cleanup (unmount)', () => {
    const { unmount } = renderHook(() => useMediaQuery('(max-width: 767px)'));
    unmount();

    expect(latestMediaQueryList).not.toBeNull();
    expect(latestMediaQueryList?.removeEventListener).toHaveBeenCalledWith(
      'change',
      expect.any(Function),
    );
  });
});

// ═══════════════════════════════════════════
// TEST 2: useHapticFeedback (M02-035)
// ═══════════════════════════════════════════

describe('useHapticFeedback', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  describe('constante VIBRATE', () => {
    it('impactLight es [50]', () => {
      expect(VIBRATE.impactLight).toEqual([50]);
    });

    it('impactMedium es [100]', () => {
      expect(VIBRATE.impactMedium).toEqual([100]);
    });

    it('impactHeavy es [200]', () => {
      expect(VIBRATE.impactHeavy).toEqual([200]);
    });

    it('success es [100, 50, 100]', () => {
      expect(VIBRATE.success).toEqual([100, 50, 100]);
    });

    it('error es [200, 100, 200, 100, 200]', () => {
      expect(VIBRATE.error).toEqual([200, 100, 200, 100, 200]);
    });

    it('funeral es [300, 150, 300, 150, 300]', () => {
      expect(VIBRATE.funeral).toEqual([300, 150, 300, 150, 300]);
    });

    it('tiene exactamente 6 patrones', () => {
      expect(Object.keys(VIBRATE)).toHaveLength(6);
    });
  });

  describe('hook vibrate()', () => {
    it('llama navigator.vibrate cuando la API está disponible', () => {
      const mockVibrate = vi.fn(() => true);
      vi.stubGlobal('navigator', { vibrate: mockVibrate });

      const { result } = renderHook(() => useHapticFeedback());

      act(() => {
        result.current.vibrate(VIBRATE.success);
      });

      expect(mockVibrate).toHaveBeenCalledWith([100, 50, 100]);
    });

    it('NO lanza error cuando Vibration API NO está disponible', () => {
      // Simular navegador sin Vibration API (como Chrome desktop)
      vi.stubGlobal('navigator', {});

      const { result } = renderHook(() => useHapticFeedback());

      // Esto NO debe lanzar ningún error
      expect(() => {
        act(() => {
          result.current.vibrate(VIBRATE.impactLight);
          result.current.vibrate(VIBRATE.impactMedium);
          result.current.vibrate(VIBRATE.impactHeavy);
          result.current.vibrate(VIBRATE.success);
          result.current.vibrate(VIBRATE.error);
          result.current.vibrate(VIBRATE.funeral);
        });
      }).not.toThrow();
    });

    it('acepta un número simple como patrón', () => {
      const mockVibrate = vi.fn(() => true);
      vi.stubGlobal('navigator', { vibrate: mockVibrate });

      const { result } = renderHook(() => useHapticFeedback());

      act(() => {
        result.current.vibrate(50);
      });

      expect(mockVibrate).toHaveBeenCalledWith(50);
    });
  });
});

// ═══════════════════════════════════════════
// TEST 3: useReducedMotion (M02-036)
// ═══════════════════════════════════════════

describe('useReducedMotion', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('retorna true cuando prefers-reduced-motion es reduce', () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn((query: string) => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
        onchange: null,
      })),
    );

    const { result } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(true);
  });

  it('retorna false cuando prefers-reduced-motion NO es reduce', () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn((query: string) => ({
        matches: false,
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
        onchange: null,
      })),
    );

    const { result } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(false);
  });
});

// ═══════════════════════════════════════════
// TEST 4: useOnlineStatus (M02-037)
// ═══════════════════════════════════════════

describe('useOnlineStatus', () => {
  let onlineListeners: Set<EventListenerOrEventListenerObject>;
  let offlineListeners: Set<EventListenerOrEventListenerObject>;

  beforeEach(() => {
    onlineListeners = new Set();
    offlineListeners = new Set();

    // Mock para capturar listeners de online/offline
    vi.spyOn(window, 'addEventListener').mockImplementation(((
      event: string,
      handler: EventListenerOrEventListenerObject,
    ): void => {
      if (event === 'online') onlineListeners.add(handler);
      if (event === 'offline') offlineListeners.add(handler);
    }) as typeof window.addEventListener);

    vi.spyOn(window, 'removeEventListener').mockImplementation(((
      event: string,
      handler: EventListenerOrEventListenerObject,
    ): void => {
      if (event === 'online') onlineListeners.delete(handler);
      if (event === 'offline') offlineListeners.delete(handler);
    }) as typeof window.removeEventListener);
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('retorna true cuando está online (estado por defecto)', () => {
    vi.spyOn(navigator, 'onLine', 'get').mockReturnValue(true);
    const { result } = renderHook(() => useOnlineStatus());
    expect(result.current).toBe(true);
  });

  it('retorna false cuando está offline inicialmente', () => {
    vi.spyOn(navigator, 'onLine', 'get').mockReturnValue(false);
    const { result } = renderHook(() => useOnlineStatus());
    expect(result.current).toBe(false);
  });

  it('cambia a false cuando se dispara evento offline', () => {
    vi.spyOn(navigator, 'onLine', 'get').mockReturnValue(true);
    const { result } = renderHook(() => useOnlineStatus());
    expect(result.current).toBe(true);

    // Simular desconexión
    act(() => {
      invokeListeners(offlineListeners, 'offline');
    });

    expect(result.current).toBe(false);
  });

  it('cambia a true cuando se dispara evento online', () => {
    vi.spyOn(navigator, 'onLine', 'get').mockReturnValue(false);
    const { result } = renderHook(() => useOnlineStatus());
    expect(result.current).toBe(false);

    // Simular reconexión
    act(() => {
      invokeListeners(onlineListeners, 'online');
    });

    expect(result.current).toBe(true);
  });

  it('ciclo completo: online → offline → online', () => {
    vi.spyOn(navigator, 'onLine', 'get').mockReturnValue(true);
    const { result } = renderHook(() => useOnlineStatus());
    expect(result.current).toBe(true);

    act(() => {
      invokeListeners(offlineListeners, 'offline');
    });
    expect(result.current).toBe(false);

    act(() => {
      invokeListeners(onlineListeners, 'online');
    });
    expect(result.current).toBe(true);
  });

  it('limpia listeners en cleanup (unmount)', () => {
    vi.spyOn(navigator, 'onLine', 'get').mockReturnValue(true);
    const { unmount } = renderHook(() => useOnlineStatus());

    expect(onlineListeners.size).toBe(1);
    expect(offlineListeners.size).toBe(1);

    unmount();

    expect(onlineListeners.size).toBe(0);
    expect(offlineListeners.size).toBe(0);
  });
});
