/* Wemakoshi Service Worker — cache-first shell, network-first fonts */
const CACHE = 'wemakoshi-v14';
const SHELL = ['./', './logo.png', './icon.png', './icon.svg'];
const FONT_HOST = 'fonts.googleapis.com';
const FONT_STATIC = 'fonts.gstatic.com';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Skip non-GET and cross-origin non-font requests
  if (e.request.method !== 'GET') return;

  // Google Fonts: network-first, fallback to cache
  if (url.host === FONT_HOST || url.host === FONT_STATIC) {
    e.respondWith(
      fetch(e.request)
        .then(r => {
          const clone = r.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return r;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Same-origin: cache-first (shell + assets)
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(r => {
          const clone = r.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return r;
        });
      })
    );
  }
  // All other requests (CDN for WebLLM, etc.) — pass through without caching
});
