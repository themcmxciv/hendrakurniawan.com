var CACHE_NAME = 'hk.com-cache-v1';
var urlsToCache = [
  '/',
  '/logo.svg',
  '/font/fontello.eot',
  '/font/fontello.svg',
  '/font/fontello.ttf',
  '/font/fontello.woff',
  '/font/fontello.woff2',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});