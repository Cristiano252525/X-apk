
self.addEventListener('install', (e) => {
  console.log('X-APK Service Worker Instalado');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
