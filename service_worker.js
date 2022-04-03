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
  "/src/components/index.js",

  "/src/view/index.js",
  "/src/view/errors/not-found.js",
  "/src/view/errors/index.js",
  "/src/view/pages/about.js",
  "/src/view/pages/home.js",
  "/src/view/pages/projects.js",
  "/src/view/pages/index.js",

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