# METAMEN100 — BITACORA DE PROYECTO

# ══════════════════════════════════════════════════════════════
# Este documento es el ESTADO VIVO del proyecto.
# Todo agente DEBE leerlo al inicio de cada sesión.
# Todo agente DEBE actualizarlo después de cada tarea completada.
# ══════════════════════════════════════════════════════════════

## ESTADO GENERAL

| Campo                   | Valor                                                    |
| ----------------------- | -------------------------------------------------------- |
| Fase actual             | Infraestructura inicial                                  |
| Módulo en curso         | **M01: Infraestructura & Fundación del Proyecto**        |
| Última tarea completada | `M01-035` — Crear API health check route                |
| Próxima tarea           | `M01-036` — (pendiente de definición)                   |
| Bloqueadores            | Ninguno                                                  |
| Fecha inicio proyecto   | 2026-02-21                                               |
| Branch                  | feat/M01-routing-pages                                   |

## DEUDA TÉCNICA PENDIENTE

| ID Deuda | Descripción | Archivo afectado | Asignada a | Severidad |
| -------- | ----------- | ---------------- | ---------- | --------- |
| DT-001 | `eslint.config.mjs` importa `eslint-config-next/core-web-vitals` sin extensión `.js`. ESLint 9 con módulos ESM estrictos falla al resolver el módulo. Fix: cambiar a `eslint-config-next/core-web-vitals.js` | `eslint.config.mjs` | **M01-085** | 🟡 IMPORTANTE — bloquea `pnpm lint` |

---

## MAPA DE PROGRESO (MODULOS CORE)

```text
M01: Infraestructura             [███░░░░░░░] 35/110  ← EN CURSO
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

* **Total actual**: 35 tareas completadas.

### BLOQUE M01-001 a M01-035 (RESUMEN CONSOLIDADO)
* **Rango**: `M01-001` → `M01-035`
* **Estado global**: ✅ COMPLETADO / APROBADO
* **Corte**: 2026-04-06
* **Módulo**: 01 — Infraestructura & Fundación del Proyecto
* **Aprobación auditoría**: 100% en todas las tareas del bloque (incluye reauditoría en `M01-029` y `M01-030`)
* **Resumen de entregables**:
  - Base del repositorio, setup de Next.js 15 + pnpm estricto y configuración de calidad inicial (`M01-001` a `M01-011`).
  - Estructura App Router base (root layout, not-found, error, loading) y flujo auth placeholder (`M01-012` a `M01-021`).
  - Scaffolding de rutas dashboard con placeholders (`M01-022` a `M01-027`):
    - `src/app/dashboard/layout.tsx`
    - `src/app/dashboard/page.tsx`
    - `src/app/dashboard/tasks/page.tsx`
    - `src/app/dashboard/tools/page.tsx`
    - `src/app/dashboard/store/page.tsx`
    - `src/app/dashboard/profile/page.tsx`
  - Scaffolding de onboarding pasos 1-6 con layout fullscreen (`M01-028` a `M01-034`):
    - `src/app/onboarding/layout.tsx`
    - `src/app/onboarding/character/page.tsx`
    - `src/app/onboarding/timezone/page.tsx`
    - `src/app/onboarding/vectors/page.tsx`
    - `src/app/onboarding/penalty/page.tsx`
    - `src/app/onboarding/oath/page.tsx`
    - `src/app/onboarding/start/page.tsx`
  - Primer API Route Handler del proyecto (`M01-035`):
    - `src/app/api/health/route.ts`
* **Rama principal usada**: `feat/M01-routing-pages`
* **Notas**:
  - Se consolida el historial `M01-001` a `M01-035` en un solo bloque para mantener `bitacora.md` ligero.
  - Se mantiene deuda técnica abierta `DT-001` para `eslint.config.mjs` (asignada a `M01-085`).

## [M01-036, M01-037, M01-038] — API Route Handlers Placeholder
- **Fecha:** 2026-04-06
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** SETUP
- **Tareas:** M01-036, M01-037, M01-038
- **Títulos:** Crear directorio API webhooks/stripe con placeholder | Crear directorio API inngest con placeholder | Crear directorio API push con placeholder
- **Score auditoría:** 100% (post-corrección ciclo 1)
- **Tipo de aprobación:** REAUDITORÍA CICLO 1
- **Archivos:**
  - Creados: src/app/api/webhooks/stripe/route.ts, src/app/api/inngest/route.ts, src/app/api/push/register/route.ts
  - Modificados: Ninguno
- **Rama:** feat/M01-routing-pages

