/* =========================================
   El Camino de la Salvación — instalación como aplicación (PWA)
   Registra el service worker para que el juego funcione sin internet
   y se pueda instalar en celulares y computadores.
   Solo funciona cuando el juego se abre desde un sitio web (https),
   por ejemplo GitHub Pages. Al abrir index.html con doble clic no hace nada.
   ========================================= */

"use strict";

if ("serviceWorker" in navigator && location.protocol === "https:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {
      // Si no se puede registrar, el juego funciona igual en línea.
    });
  });
}
