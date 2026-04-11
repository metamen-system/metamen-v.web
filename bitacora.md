# METAMEN100 — BITACORA DE PROYECTO

# ══════════════════════════════════════════════════════════════

# Este documento es el ESTADO VIVO del proyecto.

# Todo agente DEBE leerlo al inicio de cada sesión.

# Todo agente DEBE actualizarlo después de cada tarea completada.

# ══════════════════════════════════════════════════════════════

## ESTADO GENERAL

| Campo                   | Valor                                           |
| ----------------------- | ----------------------------------------------- |
| Fase actual             | Cierre M01 + Hotfix CI/CD completado            |
| Módulo en curso         | **M02: Design System & Componentes UI**         |
| Última tarea completada | `M02-024` — pageTransition en `constants.ts` |
| Próxima tarea           | `M02-025` — Preset `buttonPress` |
| Bloqueadores            | Ninguno                                         |
| Fecha inicio proyecto   | 2026-02-21                                      |
| Branch                  | config/M02-framer-presets                       |

## DEUDA TÉCNICA PENDIENTE

| ID Deuda | Descripción                                                                                                                                                                                                  | Archivo afectado    | Asignada a  | Severidad                           |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- | ----------- | ----------------------------------- |
| DT-001   | `eslint.config.mjs` importa `eslint-config-next/core-web-vitals` sin extensión `.js`. ESLint 9 con módulos ESM estrictos falla al resolver el módulo. Fix: cambiar a `eslint-config-next/core-web-vitals.js` | `eslint.config.mjs` | **M01-085** | 🟡 IMPORTANTE — bloquea `pnpm lint` |

---

## MAPA DE PROGRESO (MODULOS CORE)

```text
M01: Infraestructura             [██████████] 110/110  ← COMPLETADO ✅
M02: Design System               [██░░░░░░░░] 24/108
M03: Base de Datos               [░░░░░░░░░░] 0/??
M04: Autenticación               [░░░░░░░░░░] 0/??
M05: Motor Core TS               [░░░░░░░░░░] 0/??
M06: Motor Transaccional         [░░░░░░░░░░] 0/??
M07: Renderizado Avatar          [░░░░░░░░░░] 0/??
M08: Flujo Onboarding            [░░░░░░░░░░] 0/??
M09: Dashboard & Pantalla        [░░░░░░░░░░] 0/??
M10: Sistema de Tareas           [░░░░░░░░░░] 0/??
M11: Sistema de Herramientas     [░░░░░░░░░░] 0/??
M12: Economia & Tienda           [░░░░░░░░░░] 0/??
M13: Judgement/Muerte/Resurrec.  [░░░░░░░░░░] 0/??
M14: Suscripción & Pagos         [░░░░░░░░░░] 0/??
M15: Perfil & Configuración      [░░░░░░░░░░] 0/??
M16: Notificaciones & Web Push   [░░░░░░░░░░] 0/??
M17: Pipeline IA (Capa 0)        [░░░░░░░░░░] 0/??
M18: Offline, PWA & SW           [░░░░░░░░░░] 0/??
M19: Seguridad & Compliance      [░░░░░░░░░░] 0/??
M20: Observabilidad & Testing    [░░░░░░░░░░] 0/??
M21: Background Jobs (Inngest)   [░░░░░░░░░░] 0/??
M22: Estado & Data Fetching      [░░░░░░░░░░] 0/??
```

## REGISTRO DE TAREAS COMPLETADAS

- **Total actual**: 134 tareas completadas.

### BLOQUE CONSOLIDADO M01-001 a M01-110 (MODULO 01)

- **Rango**: `M01-001` → `M01-110`
- **Estado global**: ✅ COMPLETADO / APROBADO
- **Fecha de cierre**: 2026-04-10
- **Módulo**: 01 — Infraestructura & Fundación del Proyecto
- **Aprobación auditoría**: 100% consolidado (incluye reauditorías)
- **Resumen ejecutivo de entregables**:
  - Bootstrap de repositorio y base técnica: Next.js 15, React 19, TypeScript estricto, pnpm y configuración inicial de calidad.
  - Arquitectura App Router con rutas auth/app/onboarding y handlers API base.
  - Estructura canónica de carpetas (`src/lib`, `src/components`, `src/actions`, `src/hooks`, `src/providers`, `public`, `tests`).
  - Seguridad y PWA base: middleware, headers, manifest, robots/sitemap y service worker placeholder.
  - Tooling y CI/CD: ESLint, Prettier, Husky, lint-staged, workflows CI/Preview/Production y validaciones de build/typecheck/lint.
  - Verificaciones finales del módulo: compilación TypeScript, lint y build de producción en verde.
- **Ramas utilizadas y mergeadas**:
  - `setup/M01-base-infrastructure`
  - `feat/M01-routing-pages`
  - `setup/M01-architecture-folders`
  - `config/M01-security-pwa`
  - `tooling/M01-quality-ci`
- **Hotfix post-cierre incluido (2026-04-10)**:
  - `env.ts` ajustado para validar variables server-only en runtime y evitar falla de build en CI.
  - Workflows de GitHub Actions actualizados para runtime Node 24 (`actions/checkout@v6`, `actions/setup-node@v6`, `pnpm/action-setup@v5`).
  - Estabilización de workflow de producción (E2E/build/deploy) con `NEXT_PUBLIC_*` placeholders en CI.
- **Notas**:
  - Este bloque reemplaza el detalle individual de tareas M01 para mantener `bitacora.md` ligero.
  - Se conserva trazabilidad general del módulo sin perder estado de cierre ni hotfix de CI/CD.

### BLOQUE CONSOLIDADO M02-001 a M02-024 (MODULO 02 — PARCIAL)

- **Rango**: `M02-001` → `M02-024`
- **Estado global**: ✅ COMPLETADO / APROBADO (bloque parcial)
- **Fecha de cierre del bloque**: 2026-04-11
- **Módulo**: 02 — Design System & Componentes UI
- **Aprobación auditoría**: 100% consolidado (incluye reauditorías)
- **Resumen ejecutivo de entregables**:
  - Instalación de utilidades UI base y creación de helper `cn()` para composición de clases.
  - Configuración de design tokens (colores, tipografía responsiva, radius, shadows y animaciones).
  - Implementación de utilidades CSS en `globals.css`: gradientes, shadows de color, rarity borders, avatar aura tiers, `@keyframes shimmer`, scrollbar dark y safe area insets.
  - Implementación de sistema de tema: `ThemeProvider`, integración en root layout y estrategia dark mode class-based (`tailwind.config.ts`).
  - Configuración de tipografías con `next/font/google` (Inter, Space Grotesk, JetBrains Mono) y documentación de estrategia en `public/fonts/README.md`.
  - Primer preset Framer Motion en `src/lib/animations/constants.ts`: `pageTransition`.
- **Archivos principales impactados**:
  - `package.json`
  - `pnpm-lock.yaml`
  - `src/lib/utils.ts`
  - `src/app/globals.css`
  - `src/providers/ThemeProvider.tsx`
  - `src/app/layout.tsx`
  - `tailwind.config.ts`
  - `public/fonts/README.md`
  - `src/lib/animations/constants.ts`
  - `bitacora.md`
- **Ramas de trabajo**:
  - `config/M02-tailwind-tokens`
  - `feat/M02-theme-provider`
  - `config/M02-framer-presets`
- **Notas**:
  - Este bloque reemplaza el detalle individual de M02-001 a M02-024 para mantener `bitacora.md` ligero.

## [M02-025 | M02-026 | M02-027] — Presets buttonPress, cardHover y taskComplete
- **Fecha:** 2026-04-11
- **Módulo:** 02 — Design System & Componentes UI
- **Tipo:** CODE
- **Archivos:**
  - Creados: Ninguno
  - Modificados: src/lib/animations/constants.ts, bitacora.md
- **Score auditoría:** 100%
- **Ciclos de auditoría:** 1 (PRIMERA AUDITORÍA)
- **Commit:** `feat(M02-025,M02-026,M02-027): add buttonPress, cardHover, taskComplete animation presets`
- **Rama:** config/M02-framer-presets
- **Notas:** Ninguna

## [M02-028 | M02-029 | M02-030 | M02-031] — Presets btcGainFloat, heartLoss, avatarDeath e idleBreathing
- **Fecha:** 2026-04-11
- **Módulo:** 02 — Design System & Componentes UI
- **Tipo:** CODE
- **Archivos:**
  - Creados: Ninguno
  - Modificados: src/lib/animations/constants.ts, bitacora.md
- **Score auditoría:** 100%
- **Ciclos de auditoría:** 1 (PRIMERA AUDITORÍA)
- **Commit:** `feat(M02-028..031): add btcGainFloat, heartLoss, avatarDeath, idleBreathing animation presets`
- **Rama:** config/M02-framer-presets
- **Notas:** Ninguna

## [M02-032] — Actualizar src/lib/animations/index.ts con barrel exports
- **Fecha:** 2026-04-11
- **Módulo:** 02 — Design System & Componentes UI
- **Tipo:** CODE
- **Archivos:**
  - Creados: Ninguno
  - Modificados: src/lib/animations/index.ts, bitacora.md
- **Score auditoría:** 100%
- **Ciclos de auditoría:** 1 (REAUDITORÍA CICLO 1)
- **Commit:** `config(M02-032): add barrel exports for all 8 Framer Motion presets`
- **Rama:** config/M02-framer-presets
- **Notas:** Ninguna

## [M02-033] — Crear src/app/template.tsx con AnimatePresence
- **Fecha:** 2026-04-11
- **Módulo:** 02 — Design System & Componentes UI
- **Tipo:** CODE
- **Archivos:**
  - Creados: src/app/template.tsx
  - Modificados: bitacora.md
- **Score auditoría:** 100%
- **Ciclos de auditoría:** 1 (PRIMERA AUDITORÍA)
- **Commit:** `feat(M02-033): add template.tsx with AnimatePresence page transitions`
- **Rama:** config/M02-framer-presets
- **Notas:** Ninguna

## [M02-034] — Crear src/hooks/useMediaQuery.ts
- **Fecha:** 2026-04-11
- **Módulo:** 02 — Design System & Componentes UI
- **Tipo:** CODE
- **Archivos:**
  - Creados: src/hooks/useMediaQuery.ts
  - Modificados: bitacora.md
- **Score auditoría:** 100%
- **Ciclos de auditoría:** 1 (PRIMERA AUDITORÍA)
- **Commit:** `feat(M02-034,M02-035,M02-036,M02-037): add system hooks useMediaQuery, useHapticFeedback, useReducedMotion, useOnlineStatus`
- **Rama:** config/M02-framer-presets
- **Notas:** Ninguna

## [M02-035] — Crear src/hooks/useHapticFeedback.ts
- **Fecha:** 2026-04-11
- **Módulo:** 02 — Design System & Componentes UI
- **Tipo:** CODE
- **Archivos:**
  - Creados: src/hooks/useHapticFeedback.ts
  - Modificados: bitacora.md
- **Score auditoría:** 100%
- **Ciclos de auditoría:** 1 (PRIMERA AUDITORÍA)
- **Commit:** `feat(M02-034,M02-035,M02-036,M02-037): add system hooks useMediaQuery, useHapticFeedback, useReducedMotion, useOnlineStatus`
- **Rama:** config/M02-framer-presets
- **Notas:** Ninguna

## [M02-036] — Crear src/hooks/useReducedMotion.ts
- **Fecha:** 2026-04-11
- **Módulo:** 02 — Design System & Componentes UI
- **Tipo:** CODE
- **Archivos:**
  - Creados: src/hooks/useReducedMotion.ts
  - Modificados: bitacora.md
- **Score auditoría:** 100%
- **Ciclos de auditoría:** 1 (PRIMERA AUDITORÍA)
- **Commit:** `feat(M02-034,M02-035,M02-036,M02-037): add system hooks useMediaQuery, useHapticFeedback, useReducedMotion, useOnlineStatus`
- **Rama:** config/M02-framer-presets
- **Notas:** Ninguna

## [M02-037] — Crear src/hooks/useOnlineStatus.ts
- **Fecha:** 2026-04-11
- **Módulo:** 02 — Design System & Componentes UI
- **Tipo:** CODE
- **Archivos:**
  - Creados: src/hooks/useOnlineStatus.ts
  - Modificados: bitacora.md
- **Score auditoría:** 100%
- **Ciclos de auditoría:** 1 (PRIMERA AUDITORÍA)
- **Commit:** `feat(M02-034,M02-035,M02-036,M02-037): add system hooks useMediaQuery, useHapticFeedback, useReducedMotion, useOnlineStatus`
- **Rama:** config/M02-framer-presets
- **Notas:** Ninguna

## [M02-038] — Crear src/lib/navigation/constants.ts con navItems
- **Fecha:** 2026-04-11
- **Módulo:** 02 — Design System & Componentes UI
- **Tipo:** CODE
- **Archivos:**
  - Creados: src/lib/navigation/constants.ts
  - Modificados: bitacora.md
- **Score auditoría:** 100%
- **Ciclos de auditoría:** 1 (PRIMERA AUDITORÍA)
- **Commit:** `feat(M02-038): add navigation constants with navItems and NavItem type`
- **Rama:** config/M02-framer-presets
- **Notas:** Ninguna

## [M02-039] — Crear src/components/ui/Button.tsx
- **Fecha:** 2026-04-11
- **Módulo:** 02 — Design System & Componentes UI
- **Tipo:** CODE
- **Archivos:**
  - Creados: src/components/ui/Button.tsx
  - Modificados: bitacora.md
- **Score auditoría:** 100%
- **Ciclos de auditoría:** 1 (PRIMERA AUDITORÍA)
- **Commit:** `feat(M02-039): create Button component with CVA variants and Framer Motion`
- **Rama:** feat/M02-ui-atoms
- **Notas:** Ninguna
