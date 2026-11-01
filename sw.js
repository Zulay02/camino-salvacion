/* =========================================
   El Camino de la Salvación — service worker
   Guarda los archivos del juego para que funcione sin internet.
   Cuando publiques una versión nueva, cambia el número de VERSION
   para que los jugadores reciban los archivos actualizados.
   ========================================= */

const VERSION = "camino-salvacion-v1.6.2";

const ARCHIVOS = [
  "./",
  "./index.html",
  "./css/estilos.css?v=1.6.2",
  "./js/niveles.js?v=1.6.2",
  "./js/game.js?v=1.6.2",
  "./js/pwa.js?v=1.6.2",
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
  // Los archivos del propio juego se piden siempre frescos al servidor
  // (sin la memoria del navegador), para que las actualizaciones lleguen de inmediato.
  const propio = new URL(evento.request.url).origin === location.origin;
  const peticion = propio ? fetch(evento.request.url, { cache: "no-cache" }) : fetch(evento.request);
  evento.respondWith(
    peticion
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
