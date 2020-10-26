export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-prototype',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    //'~/plugins/axios'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [{
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
          },
          {set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
          },
      ]
    }]
  ],

  router: {
    middleware: ['auth']
  },

  axios: {
    baseURL: '/api',
    credentials: true,
    retry: false,
    requestInterceptor: (config, {stroe}) => {
      config.headers.common['Content-Type'] = 'application/json'
      return config
    }
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: false,
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login', method: 'post', headers: {'Content-Type': 'application/json'}, propertyName: 'token' },
          logout: false,
          user: false
        },
        tokenName: 'jwt-token',
        tokenType: false
      }
    },
    token: {
      prefix: 'token.'
    },
    localStorage: false,
    //cookie: false

    plugins: [ '~/plugins/axios' ]
  },

  proxy: {
    '/api': {
      target: 'http://192.168.1.235:8081',
      pathRewrite: {
        '^/api' : '/'
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
