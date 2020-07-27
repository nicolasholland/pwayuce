self.addEventListener('install', event => event.waitUntil(
    caches.open('pwa1').then(cache => cache.addAll(
        [
            '/',
            '/index.html',
            '/css/style.css',
            '/js/app.js'
        ]
    ))
));

self.addEventListener('fetch', event => event.respondWith(
    caches.open('pwa1')
        .then(cache => cache.match(event.request))
        .then(response => response || fetch(event.request))
));
