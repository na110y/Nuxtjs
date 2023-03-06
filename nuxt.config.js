export default {
  head: {
    title: 'ducthinh',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // build swiper
  plugins: [
    { src: '~/plugins/vue-carousel.js', ssr: false }
  ],

  components: true,

  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts'
  ],
  styleResources: {
    scss: [
      '~assets/scss/_reset.scss',
      '~assets/scss/_variables.scss',
      '~assets/scss/main.scss'
    ]
  },
  // build library
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt'
  ],

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  build: {
    transpile: ['swiper']
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http:localhost:3000',
    baseApiUrl: process.env.BASE_API_URL || 'https://api-map-life.grooo.com.vn',
    baseApiServer: process.env.BASE_API_SERVER || 'https://api-map-life.grooo.com.vn/files/media/base'
  }
}
