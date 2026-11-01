/* =========================================
   El Camino de la Salvación — service worker
   Guarda los archivos del juego para que funcione sin internet.
   Cuando publiques una versión nueva, cambia el número de VERSION
   para que los jugadores reciban los archivos actualizados.
   ========================================= */

const VERSION = "camino-salvacion-v1.6.1";

const ARCHIVOS = [
  "./",
  "./index.html",
  "./css/estilos.css",
  "./js/niveles.js",
  "./js/game.js",
  "./js/pwa.js",
  "./manifest.webmanifest",
  "./assets/iconos/icono-192.png",
  "./assets/iconos/icono-512.png"
];

self.addEventListener("install", (evento) => {
  evento.waitUntil(
    caches.open(VERSION).then((cache) => cache.addAll(ARCHIVOS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (evento) => {
  evento.waitUntil(
    caches.keys().then((claves) =>
      Promise.all(claves.filter((c) => c !== VERSION).map((c) => caches.delete(c)))
    )
  );
  self.clients.claim();
});

// Primero intenta la red (para tener siempre la última versión);
// si no hay internet, usa la copia guardada.
self.addEventListener("fetch", (evento) => {
  if (evento.request.method !== "GET") return;
  evento.respondWith(
    fetch(evento.request)
      .then((respuesta) => {
        const copia = respuesta.clone();
        if (respuesta.ok && new URL(evento.request.url).origin === location.origin) {
          caches.open(VERSION).then((cache) => cache.put(evento.request, copia));
        }
        return respuesta;
      })
      .catch(() => caches.match(evento.request))
  );
});
