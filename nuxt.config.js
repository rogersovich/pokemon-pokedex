// import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - pokemon-pokedex',
    title: 'pokemon-pokedex',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/axios'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  loading: {
    height: '3px',
    color: '#0abde3',
  },
  tailwindcss: {
    config: {
      prefix: 'tw-',
      important: true,
      purge: ['./public/**/*.html', './src/**/*.vue'],
      theme: {
        extend: {
          textColor: {
            normal: '#a4acaf',
            fighting: '#c21919',
            flying: '#c2a3ff',
            poison: '#9C6DFC',
            ground: '#e9bb3f',
            rock: '#cfaa44',
            bug: '#8fc219',
            ghost: '#a590d0',
            steel: '#d7d5dd',
            fire: '#fb722d',
            water: '#79abf6',
            grass: '#6adc6e',
            electric: '#f5f05b',
            psychic: '#fd96e5',
            ice: '#99d9f4',
            dragon: '#6b6efa',
            dark: '#534f3c',
            fairy: '#fcbbe9',
            unknown: '#212121',
            shadow: '#4a1561',
          },
          backgroundColor: {
            normal: '#a4acaf',
            fighting: '#c21919',
            flying: '#c2a3ff',
            poison: '#9C6DFC',
            ground: '#e9bb3f',
            rock: '#cfaa44',
            bug: '#8fc219',
            ghost: '#a590d0',
            steel: '#d7d5dd',
            fire: '#fb722d',
            water: '#79abf6',
            grass: '#6adc6e',
            electric: '#f5f05b',
            psychic: '#fd96e5',
            ice: '#99d9f4',
            dragon: '#6b6efa',
            dark: '#534f3c',
            fairy: '#fcbbe9',
            unknown: '#212121',
            shadow: '#4a1561',
          },
        },
      },
    },
  },
}
