const staticCacheName = "portfolio-v2"
const assets = [
  "/",
  "/index.html",
  "/manifest.json",

  "/css/styles.css",
  "/css/animations.css",

  "/fonts/ElmsSans-italic.ttf",
  "/fonts/ElmsSans.ttf",

  "/js/lira.js",

  "/images/app-icons/apple-icon-192x192.png",
  "/images/app-icons/icon-144x144.png",
  "/images/app-icons/icon-512x512.png",
  "/images/app-icons/icon-default-144x144.png",
  "/images/app-icons/icon-default-512x512.png",

  "/images/favicon.png",
  "/images/logo.png",
  "/images/logo.svg",
  "/images/photo.webp",
  "/images/projects-icon.svg",
  
  "/images/content-icons/backend.svg",
  "/images/content-icons/cli.svg",
  "/images/content-icons/mobile.svg",
  "/images/content-icons/web.svg",

  "/images/icons/email.svg",
  "/images/icons/github.svg",
  "/images/icons/instagram.svg",
  "/images/icons/linkedin.svg",
  "/images/icons/medium.svg",
  "/images/icons/medium-new.svg",
  "/images/icons/youtube.svg",

  "/images/media-content/youtube-profiles/o-dev-salmao-logo.png",
  "/images/media-content/youtube-profiles/the-salmon-dev-logo.png",

  "/images/projects/ai-travel-planner.webp",
  "/images/projects/cadeu.webp",
  "/images/projects/thaw.webp",

  "/src/config/config.js",
  "/src/config/routes.js",

  "/src/contents/about.js",
  "/src/contents/home.js",
  "/src/contents/media.js",
  "/src/contents/nav.js",
  "/src/contents/projects.js",

  "/src/layout/index.js",
  "/src/layout/responsive-container/index.js",
  "/src/layout/responsive-container/styles.js",

  "/src/views/index.js",
  "/src/views/errors/index.js",
  "/src/views/errors/not-found.js",
  "/src/views/pages/index.js",
  "/src/views/pages/about/index.js",
  "/src/views/pages/about/styles.css",
  "/src/views/pages/home/index.js",
  "/src/views/pages/home/styles.css",
  "/src/views/pages/media/index.js",
  "/src/views/pages/media/styles.css",
  "/src/views/pages/projects/index.js",
  "/src/views/pages/projects/styles.css",


  "/src/components/index.js",
  "/src/components/badge-item/index.js",
  "/src/components/badge-item/styles.css",
  "/src/components/fadein-container/index.js",
  "/src/components/fadein-container/styles.css",
  "/src/components/floating-bubbles/index.js",
  "/src/components/floating-bubbles/styles.css",
  "/src/components/floating-bubbles/bubble/index.js",
  "/src/components/floating-bubbles/bubble/styles.css",
  "/src/components/floating-logo/index.js",
  "/src/components/floating-logo/styles.css",
  "/src/components/main-navbar/index.js",
  "/src/components/main-navbar/styles.css",
  "/src/components/paragraph-text/index.js",
  "/src/components/project-details-item/index.js",
  "/src/components/project-details-item/styles.css",
  "/src/components/project-list/index.js",
  "/src/components/project-list/styles.css",
  "/src/components/project-list-item/index.js",
  "/src/components/project-list-item/styles.css",
  "/src/components/project-section/index.js",
  "/src/components/project-section/styles.css",
  "/src/components/social-link/index.js",
  "/src/components/social-link/styles.css",
  "/src/components/word-carousel/index.js",
  "/src/components/word-carousel/styles.css",
  "/src/components/word-carousel-item/index.js",

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