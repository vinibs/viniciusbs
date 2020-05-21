const staticCacheName = "portfolio-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/lira.js",
  "/manifest.json",
  "/images/icons/apple-icon-192x192.png",
  "/images/icons/icon-144x144.png",
  "/images/icons/icon-512x512.png",
  "/images/icons/icon-default-144x144.png",
  "/images/icons/icon-default-512x512.png",
  "/images/favicon.png",
  "/images/logo.svg",
  "/images/icons.png",
  "/images/photo.png",
  "/images/screens.png",
  
  "/src/config/config.js",
  "/src/config/routes.js",
  "/src/components/circle-chart.js",
  "/src/components/main-menu.js",
  "/src/view/index.js",
  "/src/view/errors/not-found.js",
  "/src/view/pages/about.js",
  "/src/view/pages/projects.js"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCacheName).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
})