if (typeof importScripts === 'function') {
  // eslint-disable-next-line no-undef
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  )
  /* global workbox */
  if (workbox) {
    workbox.core.skipWaiting()
    workbox.core.clientsClaim()

    /* injection point for manifest files.  */
    const WB_MANIFEST = self.__WB_MANIFEST

    // precache fallback route
    WB_MANIFEST.push({ url: '/offline', revision: '12345678' })
    workbox.precaching.precacheAndRoute(WB_MANIFEST)

    workbox.precaching.cleanupOutdatedCaches()

    // Start URL
    workbox.routing.registerRoute(
      '/',
      new workbox.strategies.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          new workbox.expiration.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
          }),
        ],
      })
    )

    // Google Fonts
    workbox.routing.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new workbox.cacheableResponse.CacheableResponsePlugin({
            statuses: [0, 200],
          }),
          new workbox.expiration.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 365 * 24 * 60 * 60, // 365 days
          }),
        ],
      }),
      'GET'
    )

    //For images
    workbox.routing.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'image-caches',
        plugins: [
          new workbox.cacheableResponse.CacheableResponsePlugin({
            statuses: [0, 200],
          }),
          new workbox.expiration.ExpirationPlugin({
            maxEntries: 20,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
          }),
        ],
      }),
      'GET'
    )

    // JS Files
    workbox.routing.registerRoute(
      /\.(?:js)$/i,
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'js-caches',
        plugins: [
          new workbox.cacheableResponse.CacheableResponsePlugin({
            statuses: [0, 200],
          }),
          new workbox.expiration.ExpirationPlugin({
            maxEntries: 20,
            maxAgeSeconds: 12 * 60 * 60, // 12 hours
          }),
        ],
      })
    )

    // CSS Files
    workbox.routing.registerRoute(
      /\.(?:css)$/i,
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'style-caches',
        plugins: [
          new workbox.cacheableResponse.CacheableResponsePlugin({
            statuses: [0, 200],
          }),
          new workbox.expiration.ExpirationPlugin({
            maxEntries: 20,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
          }),
        ],
      })
    )

    // JSON, XML, CSV FILES
    workbox.routing.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new workbox.strategies.NetworkFirst({
        cacheName: 'data-caches',
        plugins: [
          new workbox.cacheableResponse.CacheableResponsePlugin({
            statuses: [0, 200],
          }),
          new workbox.expiration.ExpirationPlugin({
            maxEntries: 20,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
          }),
        ],
      })
    )

    // API Routes
    workbox.routing.registerRoute(
      /\/api\/.*$/i,
      new workbox.strategies.NetworkFirst({
        cacheName: 'api-caches',
        plugins: [
          new workbox.cacheableResponse.CacheableResponsePlugin({
            statuses: [0, 200],
          }),
          new workbox.expiration.ExpirationPlugin({
            maxEntries: 10,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
          }),
        ],
      })
    )

    // Others
    workbox.routing.registerRoute(
      /.*/i,
      new workbox.strategies.NetworkFirst({
        cacheName: 'others',
        plugins: [
          new workbox.cacheableResponse.CacheableResponsePlugin({
            statuses: [0, 200],
          }),
          new workbox.expiration.ExpirationPlugin({
            maxEntries: 20,
            maxAgeSeconds: 24 * 60 * 60, // 24 hours
          }),
        ],
      }),
      'GET'
    )

    // Use a stale-while-revalidate strategy for all other requests.
    workbox.routing.setDefaultHandler(
      new workbox.strategies.StaleWhileRevalidate()
    )

    // Fallback page
    workbox.routing.setCatchHandler(async ({ event }) => {
      if (event.request.destination === 'document') {
        return workbox.precaching.matchPrecache('/offline')
      }
      return Response.error()
    })
  } else {
    // console.log('Workbox could not be loaded. No Offline support');
  }
}
