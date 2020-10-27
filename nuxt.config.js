export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Joaquín Mayer | Desarrollador Web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    bodyAttrs: {
      class: 'dark'
    },
    link: [
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Poppins:400,400i,500,500i,600,600i,700,700i,800,800i,900,900i' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/font-awesome.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/jquery.animatedheadline.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/materialize.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/style.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/skins/blue.css' },
    ],
    script: [
      {
        src: "/js/modernizr.custom.js",
      },
      {
        src: "/js/jquery-2.2.4.min.js",
        body: true,
      },
      {
        src: "/js/jquery.animatedheadline.js",
        body: true,
      },
      {
        src: "/js/boxlayout.js",
        body: true,
      },
      {
        src: "/js/materialize.min.js",
        body: true,
      },
      {
        src: "/js/jquery.hoverdir.js",
        body: true,
      },
      {
        src: "/js/custom.js",
        body: true,
      },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
