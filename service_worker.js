const staticCacheName = "portfolio-v1"
const assets = [
  "/",
  "/index.html",
  "/manifest.json",
  "/css/style.css",
  "/js/lira.js",
  "/images/icons/apple-icon-192x192.png",
  "/images/icons/icon-144x144.png",
  "/images/icons/icon-512x512.png",
  "/images/icons/icon-default-144x144.png",
  "/images/icons/icon-default-512x512.png",
  "/images/favicon.png",
  "/images/logo.svg",
  "/images/icons.webp",
  "/images/photo.webp",
  "/images/screens.webp",
  
  "/src/config/config.js",
  "/src/config/routes.js",

  "/src/components/index.js",
  "/src/components/circle-viewer/index.js",
  "/src/components/circle-viewer/styles.css",
  "/src/components/fadein-container/index.js",
  "/src/components/fadein-container/styles.css",
  "/src/components/floating-logo/index.js",
  "/src/components/floating-logo/styles.css",
  "/src/components/main-menu/index.js",
  "/src/components/main-menu/styles.css",
  "/src/components/project-item/index.js",
  "/src/components/project-item/styles.css",
  "/src/components/project-section/index.js",
  "/src/components/project-section/styles.css",
  "/src/components/social-link-icon/index.js",
  "/src/components/social-link-icon/styles.css",

  "/src/views/index.js",
  "/src/views/errors/not-found.js",
  "/src/views/errors/index.js",
  "/src/views/pages/about.js",
  "/src/views/pages/home.js",
  "/src/views/pages/projects.js",
  "/src/views/pages/index.js",

  "/src/contents/about.js",
  "/src/contents/projects.js"
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