
module.exports = {
  mode: 'spa',
  server: {
    port: process.env.PORT
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Airtimeflip sign in page' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/airtime-flip-min.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    height: '3px',
    color: '#FB5604',
    continuous: true
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/utils' },
    { src: '~/plugins/axios' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt-community/fontawesome-module
    ['@nuxtjs/fontawesome', {
      icons: {
        solid: [
          'faBars',
          'faPencilAlt',
          'faTachometerAlt',
          'faEnvelope',
          'faUser',
          'faEye',
          'faAt',
          'faLock',
          'faPhoneAlt',
          'faPowerOff',
          'faPlusSquare',
          'faUniversity'
        ]
      }
    }]
  ],
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.scss',
    purgeCSSInDev: false,
    exposeConfig: false
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/proxy-module
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://auth.nuxtjs.org/guide/setup.html
    '@nuxtjs/auth'
  ],
  /*
   ** Configure google fonts
   */
  webfontloader: {
    google: {
      families: ['Roboto:300,400', 'Roboto Condense:300,400'] // Loads Lato font with weights 400 and 700
    }
  },
  /*
   * Module to handle user authentication
   * See https://auth.nuxtjs.org
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'payload.access_token' },
          logout: false,
          user: false
        },
        autoFetchUser: false
      }
    }
  },
  env: {
    baseURL: process.env.API_URL,
    port: process.env.PORT
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.API_URL
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: false
          }
        })
      }
    }
  }
}
