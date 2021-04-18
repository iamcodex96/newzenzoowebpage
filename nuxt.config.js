import { resolve, join } from 'path';
import colors from 'vuetify/es5/util/colors';

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Zenzoo - %s',
    title: 'Zenzoo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/zenzoo-color.scss', // Zenzoo color scheme
    '~/assets/scss/nexcode.flex.scss' // Zenzoo color scheme
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    ['@nuxt/typescript-build', {}],
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/vuetify', {
      customVariables: [
        '~/assets/scss/variables.scss', // Default Variables
      ],
      theme: {
        dark: false,
        themes: {
          dark: {
            primary: colors.blue.darken2,
            accent: colors.grey.darken3,
            secondary: colors.amber.darken3,
            info: colors.teal.lighten1,
            warning: colors.amber.base,
            error: colors.deepOrange.accent4,
            success: colors.green.accent3
          }
        }
      }
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['nuxt-i18n', {
      locales: [
          {
              code: 'en',
              name: 'EN',
              iso: 'en-US',
          },
          {
              code: 'es',
              name: 'ES',
              iso: 'es-ES',
          },
      ],
      defaultLocale: 'en',
      vueI18n: {
          fallbackLocale: 'en',
          messages: {
              en: require( join( __dirname, './locales/en.json' ) ),
              es: require( join( __dirname, './locales/es.json' ) ),
          },
      },
      seo: true,
    }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
