self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('your-app-cache-name').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                'https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png',
                'https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
