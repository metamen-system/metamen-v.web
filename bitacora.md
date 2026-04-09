# METAMEN100 — BITACORA DE PROYECTO

# ══════════════════════════════════════════════════════════════

# Este documento es el ESTADO VIVO del proyecto.

# Todo agente DEBE leerlo al inicio de cada sesión.

# Todo agente DEBE actualizarlo después de cada tarea completada.

# ══════════════════════════════════════════════════════════════

## ESTADO GENERAL

| Campo                   | Valor                                             |
| ----------------------- | ------------------------------------------------- |
| Fase actual             | Infraestructura inicial                           |
| Módulo en curso         | **M01: Infraestructura & Fundación del Proyecto** |
| Última tarea completada | `M01-093` — Crear workflow production release     |
| Próxima tarea           | `M01-094` — Configuración manual de Vercel        |
| Bloqueadores            | Ninguno                                           |
| Fecha inicio proyecto   | 2026-02-21                                        |
| Branch                  | tooling/M01-quality-ci                            |

## DEUDA TÉCNICA PENDIENTE

| ID Deuda | Descripción                                                                                                                                                                                                  | Archivo afectado    | Asignada a  | Severidad                           |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- | ----------- | ----------------------------------- |
| DT-001   | `eslint.config.mjs` importa `eslint-config-next/core-web-vitals` sin extensión `.js`. ESLint 9 con módulos ESM estrictos falla al resolver el módulo. Fix: cambiar a `eslint-config-next/core-web-vitals.js` | `eslint.config.mjs` | **M01-085** | 🟡 IMPORTANTE — bloquea `pnpm lint` |

---

## MAPA DE PROGRESO (MODULOS CORE)

```text
M01: Infraestructura             [████████░░] 93/110  ← EN CURSO
M02: Design System               [░░░░░░░░░░] 0/??
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

- **Total actual**: 93 tareas completadas.

### BLOQUE M01-001 a M01-090 (RESUMEN CONSOLIDADO)

- **Rango**: `M01-001` → `M01-090`
- **Estado global**: ✅ COMPLETADO / APROBADO
- **Corte**: 2026-04-08
- **Módulo**: 01 — Infraestructura & Fundación del Proyecto
- **Aprobación auditoría**: 100% consolidado (incluye ciclos de reauditoría documentados)
- **Resumen de entregables**:
  - Base del repositorio y bootstrap de Next.js 15 + TypeScript estricto + pnpm + setup inicial de calidad (`M01-001` a `M01-011`).
  - Arquitectura inicial App Router, rutas auth/dashboard/onboarding y handlers API placeholder (`M01-012` a `M01-038`).
  - Estructura de carpetas `src/lib`, `src/components`, `src/actions`, `src/hooks`, `src/providers` y `public` (`M01-041` a `M01-067`).
  - Configuración de seguridad y PWA (robots, sitemap, postcss, tailwind, env, metadata, service worker, middleware base) (`M01-068` a `M01-084`).
  - Tooling de calidad para flujo local/CI: Prettier, `.editorconfig`, Husky pre-commit, `lint-staged` y scripts npm estándar (`M01-086` a `M01-090`).
- **Ramas usadas en el bloque**:
  - `setup/M01-base-infrastructure`
  - `feat/M01-routing-pages`
  - `setup/M01-architecture-folders`
  - `config/M01-security-pwa`
  - `tooling/M01-quality-ci`
- **Notas**:
  - Se consolida el historial `M01-001` a `M01-090` en un solo bloque para mantener `bitacora.md` ligero.
  - Para auditorías de permisos en hooks, usar `git ls-files -s` como verificación principal y `test -x` solo como verificación secundaria en entornos POSIX.
  - Se mantiene deuda técnica abierta `DT-001` para `eslint.config.mjs` (trazabilidad histórica).

## [M01-091] — Crear .github/workflows/ci.yml para checks en PR

- **Fecha:** 2026-04-08
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** CONFIG
- **Archivos:**
  - Creados: `.github/workflows/ci.yml`
  - Modificados: Ninguno
- **Score auditoría:** 100%
- **Ciclos de auditoría:** 1 (PRIMERA AUDITORÍA)
- **Commit:** `ci(M01-091/092/093): add CI checks, preview deploy, and production release workflows`
- **Rama:** tooling/M01-quality-ci
- **Notas:** Ninguna

## [M01-092] — Crear .github/workflows/preview.yml para deploy preview

- **Fecha:** 2026-04-08
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** CONFIG
- **Archivos:**
  - Creados: `.github/workflows/preview.yml`
  - Modificados: Ninguno
- **Score auditoría:** 100%
- **Ciclos de auditoría:** 1 (PRIMERA AUDITORÍA)
- **Commit:** `ci(M01-091/092/093): add CI checks, preview deploy, and production release workflows`
- **Rama:** tooling/M01-quality-ci
- **Notas:** Ninguna

## [M01-093] — Crear .github/workflows/production.yml para release

- **Fecha:** 2026-04-08
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** CONFIG
- **Archivos:**
  - Creados: `.github/workflows/production.yml`
  - Modificados: Ninguno
- **Score auditoría:** 100%
- **Ciclos de auditoría:** 1 (PRIMERA AUDITORÍA)
- **Commit:** `ci(M01-091/092/093): add CI checks, preview deploy, and production release workflows`
- **Rama:** tooling/M01-quality-ci
- **Notas:** Ninguna

## [M01-097 | M01-098] — Crear vitest.config.ts y playwright.config.ts con configuración base

- **Fecha:** 2026-04-08
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** CONFIG
- **Archivos:**
  - Creados: `vitest.config.ts`, `tests/setup.ts`, `playwright.config.ts`, `tests/e2e/.gitkeep`, `tests/e2e/placeholder.spec.ts`
  - Modificados: `package.json`, `pnpm-lock.yaml`
- **Score auditoría:** 100%
- **Ciclos de auditoría:** 4 (REAUDITORÍA CICLO 4)
- **Commit:** `config(M01-097,M01-098): add vitest and playwright base configurations`
- **Rama:** tooling/M01-quality-ci
- **Notas:** `workers` usa spread condicional por incompatibilidad entre `exactOptionalPropertyTypes` y la sintaxis literal de la acción original.
