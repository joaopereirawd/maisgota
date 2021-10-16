export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MaisGota',
    htmlAttrs: {
      lang: 'pt'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'google-site-verification',
        content: 'qQGs67QhM6hMiSpSor3jxIf_nrl_cymZe6PXGRTdb60'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Exigimos Mais Gota!'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'MaisGota',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/og-image.png',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Exigimos mais Gota!',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `https://maisgota.com`,
      },
      {
        hide: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hide: 'twitter:image',
        name: 'twitter:image',
        content: '/og-image-tw.png'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },

    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ff0000' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap",
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
  ],

  tailwindcss: {
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {}
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  publicRuntimeConfig: {
    googleAnalytics: {
      id: 'UA-129160199-4'
    }
  },
}
