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
| Última tarea completada | `M01-020` — Crear página placeholder de recuperación de contraseña |
| Próxima tarea           | `M01-021` — (pendiente de definición)                           |
| Bloqueadores            | Ninguno                                                  |
| Fecha inicio proyecto   | 2026-02-21                                               |
| Branch                  | tooling/M01-quality-ci                                   |

## DEUDA TÉCNICA PENDIENTE

| ID Deuda | Descripción | Archivo afectado | Asignada a | Severidad |
| -------- | ----------- | ---------------- | ---------- | --------- |
| DT-001 | `eslint.config.mjs` importa `eslint-config-next/core-web-vitals` sin extensión `.js`. ESLint 9 con módulos ESM estrictos falla al resolver el módulo. Fix: cambiar a `eslint-config-next/core-web-vitals.js` | `eslint.config.mjs` | **M01-085** | 🟡 IMPORTANTE — bloquea `pnpm lint` |

---

## MAPA DE PROGRESO (MODULOS CORE)

```text
M01: Infraestructura             [█░░░░░░░░░] 10/110  ← EN CURSO
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

* **Total actual**: 20 tareas completadas.

### BLOQUE M01-001 a M01-020 (RESUMEN CONSOLIDADO)
* **Rango**: `M01-001` → `M01-020`
* **Estado global**: ✅ COMPLETADO / APROBADO
* **Corte**: 2026-04-06
* **Módulo**: 01 — Infraestructura & Fundación del Proyecto
* **Aprobación auditoría**: 100% en todas las tareas del bloque
* **Resumen de entregables**:
  - Base del repositorio y setup de Next.js 15 + pnpm estricto (`M01-001` a `M01-005`).
  - Dependencias productivas/dev y calidad inicial del workspace (`M01-006` a `M01-010`).
  - Configuración TypeScript strict (`M01-011`).
  - Estructura raíz App Router (layout/not-found/error/loading) (`M01-012`, `M01-014`, `M01-015`, `M01-016`).
  - Route group de autenticación `(auth)` y placeholders finales de auth:
    - `src/app/(auth)/layout.tsx` (`M01-017`)
    - `src/app/(auth)/login/page.tsx` (`M01-018`)
    - `src/app/(auth)/register/page.tsx` (`M01-019`)
    - `src/app/(auth)/forgot-password/page.tsx` (`M01-020`)
* **Rama principal usada en tareas de routing/auth**: `feat/M01-routing-pages`
* **Notas**:
  - Se consolidó el historial `M01-001` a `M01-020` en un solo bloque para mantener `bitacora.md` ligero.
  - Se mantiene deuda técnica abierta `DT-001` para `eslint.config.mjs` (asignada a `M01-085`).

