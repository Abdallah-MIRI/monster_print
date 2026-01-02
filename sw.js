const BASE = "/monster_print";
const CACHE_NAME = "monster-cache-v1";

const FILES_TO_CACHE = [
  `${BASE}/`,
  `${BASE}/index.html`,
  `${BASE}/assets/css/hamburgers.min.css`,
  `${BASE}/assets/css/out.css`,
  `${BASE}/assets/js/main.js`,
  `${BASE}/assets/img/MP_Logo.svg`,
  `${BASE}/assets/img/MP.svg`,
  `${BASE}/assets/img/whatsapp-svgrepo-com.svg`,
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => resp || fetch(event.request))
  );
});
