var etask_cache = 'v1:static';

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(etask_cache).then(function(cache) {
            return cache.addAll([
                './manifest.json',
                './style/style.css',
                './script/script.js',
				'./script/app.js',
                './images/icon.png',
                './images/404.png',
                './offline.html'
            ]).then(function() {
                self.skipWaiting();
            });
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});