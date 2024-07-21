const staticCacheName = "portfolio-v1"
const assets = [
  "/",
  "/index.html",
  "/manifest.json",
  "/css/style.css",
  "/js/lira.js",
  "/images/app-icons/apple-icon-192x192.png",
  "/images/app-icons/icon-144x144.png",
  "/images/app-icons/icon-512x512.png",
  "/images/app-icons/icon-default-144x144.png",
  "/images/app-icons/icon-default-512x512.png",
  "/images/content-icons/backend.svg",
  "/images/content-icons/cli.svg",
  "/images/content-icons/mobile.svg",
  "/images/content-icons/web.svg",
  "/images/projects-background.svg",
  "/images/projects/bochabrasil.webp",
  "/images/projects/cadeu.webp",
  "/images/projects/cliconnect.webp",
  "/images/projects/etch.webp",
  "/images/projects/events.webp",
  "/images/projects/geld.webp",
  "/images/projects/intranet.webp",
  "/images/projects/mgeld.webp",
  "/images/projects/pdti.webp",
  "/images/projects/siconf.webp",
  "/images/projects/thaw.webp",
  "/images/projects/tsanalysis.webp",
  "/images/projects/worldswebuild.webp",
  "/images/favicon.png",
  "/images/icons.webp",
  "/images/logo.svg",
  "/images/photo.webp",
  
  "/src/config/config.js",
  "/src/config/routes.js",

  "/src/components/index.js",
  "/src/components/badge-item/index.js",
  "/src/components/badge-item/styles.css",
  "/src/components/circle-viewer/index.js",
  "/src/components/circle-viewer/styles.css",
  "/src/components/fadein-container/index.js",
  "/src/components/fadein-container/styles.css",
  "/src/components/floating-logo/index.js",
  "/src/components/floating-logo/styles.css",
  "/src/components/main-menu/index.js",
  "/src/components/main-menu/styles.css",
  "/src/components/paragraph-text/index.js",
  "/src/components/paragraph-text/styles.css",
  "/src/components/project-item/index.js",
  "/src/components/project-item/styles.css",
  "/src/components/project-list-item/index.js",
  "/src/components/project-list-item/styles.css",
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