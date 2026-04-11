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
| Última tarea completada | `M02-021b` — Safe area insets en `globals.css` |
| Próxima tarea           | `M02-022` — Theme Provider (pendiente de ejecución) |
| Bloqueadores            | Ninguno                                         |
| Fecha inicio proyecto   | 2026-02-21                                      |
| Branch                  | main                                            |

## DEUDA TÉCNICA PENDIENTE

| ID Deuda | Descripción                                                                                                                                                                                                  | Archivo afectado    | Asignada a  | Severidad                           |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- | ----------- | ----------------------------------- |
| DT-001   | `eslint.config.mjs` importa `eslint-config-next/core-web-vitals` sin extensión `.js`. ESLint 9 con módulos ESM estrictos falla al resolver el módulo. Fix: cambiar a `eslint-config-next/core-web-vitals.js` | `eslint.config.mjs` | **M01-085** | 🟡 IMPORTANTE — bloquea `pnpm lint` |

---

## MAPA DE PROGRESO (MODULOS CORE)

```text
M01: Infraestructura             [██████████] 110/110  ← COMPLETADO ✅
M02: Design System               [██░░░░░░░░] 22/108
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

### BLOQUE CONSOLIDADO M02-001 a M02-021b (MODULO 02 — PARCIAL)

- **Rango**: `M02-001` → `M02-021b`
- **Estado global**: ✅ COMPLETADO / APROBADO (bloque parcial)
- **Fecha de cierre del bloque**: 2026-04-11
- **Módulo**: 02 — Design System & Componentes UI
- **Aprobación auditoría**: 100% consolidado (incluye reauditorías)
- **Resumen ejecutivo de entregables**:
  - Instalación de utilidades UI base y creación de helper `cn()` para composición de clases.
  - Configuración de design tokens (colores, tipografía responsiva, radius, shadows y animaciones).
  - Implementación de utilidades CSS en `globals.css`: gradientes, shadows de color, rarity borders y avatar aura tiers.
  - Integración de `@keyframes shimmer`, scrollbar personalizado dark theme y utilidades de safe area insets.
- **Archivos principales impactados**:
  - `package.json`
  - `pnpm-lock.yaml`
  - `src/lib/utils.ts`
  - `tailwind.config.ts`
  - `src/app/globals.css`
- **Rama de trabajo**:
  - `config/M02-tailwind-tokens`
- **Notas**:
  - Este bloque reemplaza el detalle individual de M02-001 a M02-021b para mantener `bitacora.md` ligero.

## [M02-022] — Crear src/providers/ThemeProvider.tsx
- **Fecha:** 2026-04-11
- **Módulo:** 02 — Design System & Componentes UI
- **Tipo:** CODE
- **Archivos:**
  - Creados: src/providers/ThemeProvider.tsx
  - Modificados: bitacora.md
- **Score auditoría:** 100%
- **Ciclos de auditoría:** 1 (PRIMERA AUDITORÍA)
- **Commit:** `feat(M02-022): create ThemeProvider with dark/light mode toggle and localStorage persistence`
- **Rama:** feat/M02-theme-provider
- **Notas:** Ninguna

## [M02-023a | M02-023aa] — Configurar fuentes next/font en root layout | Documentar estrategia de fuentes
- **Fecha:** 2026-04-11
- **Módulo:** 02 — Design System & Componentes UI
- **Tipo:** CODE | SETUP
- **Archivos:**
  - Creados: public/fonts/README.md
  - Modificados: src/app/layout.tsx, bitacora.md
- **Score auditoría:** 100%
- **Ciclos de auditoría:** 1 (PRIMERA AUDITORÍA)
- **Commit:** `feat(M02-023a,M02-023aa): configure next/font google fonts and document strategy`
- **Rama:** feat/M02-theme-provider
- **Notas:** Ninguna

## [M02-023b | M02-023c] — Integrar ThemeProvider en root layout + Configurar darkMode class-based en tailwind.config.ts
- **Fecha:** 2026-04-11
- **Módulo:** 02 — Design System & Componentes UI
- **Tipo:** CODE | CONFIG
- **Archivos:**
  - Creados: Ninguno
  - Modificados: src/app/layout.tsx, tailwind.config.ts, bitacora.md
- **Score auditoría:** 100%
- **Ciclos de auditoría:** 1 (PRIMERA AUDITORÍA)
- **Commit:** `feat(M02-023b,M02-023c): integrate ThemeProvider in root layout and configure Tailwind darkMode class strategy`
- **Rama:** feat/M02-theme-provider
- **Notas:** Ninguna

## [M02-024] — Crear src/lib/animations/constants.ts — pageTransition
- **Fecha:** 2026-04-11
- **Módulo:** 02 — Design System & Componentes UI
- **Tipo:** CODE
- **Archivos:**
  - Creados: src/lib/animations/constants.ts
  - Modificados: bitacora.md
- **Score auditoría:** 100%
- **Ciclos de auditoría:** 1 (PRIMERA AUDITORÍA)
- **Commit:** `feat(M02-024): add pageTransition Framer Motion preset`
- **Rama:** config/M02-framer-presets
- **Notas:** Ninguna
