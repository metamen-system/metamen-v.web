// METAMEN100 — Service Worker (Placeholder)
//
// TODO M18: Implementar cache strategies:
//   - Cache-First: sprites Capa 2 (/public/sprites/), fuentes, Lottie JSON
//   - Network-First + IndexedDB fallback: API responses
//   - Stale-While-Revalidate: imágenes (fondos generados)
//
// TODO M16: Implementar push event handler para Web Push notifications
//
// TODO M18: Implementar offline fallback page

self.addEventListener('install', (event) => {
  // Activar inmediatamente sin esperar a que se cierre la pestaña anterior
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Tomar control de todos los clientes inmediatamente
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass-through: sin cache, solo reenviar la petición a la red
  event.respondWith(fetch(event.request));
});
