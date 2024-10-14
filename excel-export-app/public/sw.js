/* eslint-disable no-restricted-globals */
const cacheName = "ondoor-store-billing-cache";
const resourcesToCache = [
  "/",
  "/dashboard",
  "/counter-sale",
  "/nointernet",
  "/index.html",
  "/static/js/bundle.js",
  "/sw.js",
  "/manifest.json",
  "/favicon.ico",
  "/logo192.png",
  `/assets/images/loginImg.svg`,
  "/assets/images/ondoorLogo.svg",
  "/assets/images/ondoorimg.svg",
  "/assets/images/noDataFound.svg",
  "/assets/images/dashboardlLeftCorner.svg",
  "/assets/images/rightCornImg2.svg",
  "/assets/images/rightCornImg1.svg",
  "/assets/images/rightCornImg3.svg",
  `/assets/images/storeSelectImage.svg`,
  `/assets/images/negativeStock.jpg`,
  `/assets/images/searchNoFound.svg`,

  "/static/js/main.6902902d.js",
  "/static/js/413.e7eb4c53.chunk.js",
  "/static/css/868.a8252914.chunk.css",
  "/static/js/124.d579cb95.chunk.js",
  "/static/js/376.8f7ffe4c.chunk.js",
  "/static/css/762.d6550740.chunk.css",
  "/static/js/141.312d3c01.chunk.js",
  "/static/js/554.eceada59.chunk.js",
  "/static/js/742.ab4be126.chunk.js",
  "/static/js/634.d93c4696.chunk.js",
  "/static/js/134.080b8f97.chunk.js",
  "/static/js/375.479c4d24.chunk.js",
  "/static/js/474.ef9ef69b.chunk.js",
  "/static/js/108.ff2bf6e0.chunk.js",
  "/static/js/903.8b76815d.chunk.js",
  "/static/js/484.528c6db8.chunk.js",
  "/static/js/398.2d390513.chunk.js",
  "/static/js/196.81ab4d97.chunk.js",
  "/static/js/983.7ab11967.chunk.js",
  "/static/css/main.aea1a9fa.css",
  "/static/js/443.e3391a3b.chunk.js",
  "/static/js/272.384c28ab.chunk.js",
  "/static/js/937.0952598c.chunk.js",
  "/static/js/652.6056dc0c.chunk.js",
  "/static/js/0.9fb2f81f.chunk.js",
  "/static/js/830.4dc3a352.chunk.js",
  "/static/js/131.4a10d7c1.chunk.js",
  "/static/js/67.b2479747.chunk.js",
  "/static/js/523.bf71d0dd.chunk.js",
  "/static/js/762.58c0f924.chunk.js",
  "/static/js/890.02c694f7.chunk.js",
  "/static/js/598.c3b37214.chunk.js",
  "/static/js/49.2462cd40.chunk.js",
  "/static/js/714.7286c0b8.chunk.js",
  "/static/js/2.7b764d75.chunk.js",
  "/static/js/617.1ec5b85c.chunk.js",
  "/static/js/603.5182b1f2.chunk.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then(async (cache) => {
      for (const url of resourcesToCache) {
        try {
          const response = await fetch(url);
          if (response.ok) {
            await cache.put(url, response);
          } else {
            console.error(`Failed to fetch ${url}: ${response.statusText}`);
          }
        } catch (error) {
          console.error(`Failed to fetch ${url}: ${error.message}`);
        }
      }
    })
  );
});

// Activate event: clean up old caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [cacheName];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((item) => {
          if (!cacheWhitelist.includes(item)) {
            return caches.delete(item);
          }
        })
      );
    })
  );
});

// Fetch event: respond with cached resources if available
self.addEventListener("fetch", (event) => {
  if (event.request.method === "GET") {
    event.respondWith(
      caches.match(event.request).then((response) => {
        // Cache hit - return the cached response
        if (response) {
          return response;
        }
        // Cache miss - fetch from network
        return fetch(event.request).then((networkResponse) => {
          // Cache the response if it's valid
          if (networkResponse && networkResponse.status === 200) {
            return caches.open(cacheName).then((cache) => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            });
          }
          return networkResponse;
        });
      })
    );
  } else {
    // For non-GET requests, fetch directly from the network
    event.respondWith(fetch(event.request));
  }
});
