const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.description,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { 'http-equiv': 'x-ua-compatible',  content: 'ie=edge' },
      { name: 'msapplication-TileColor',  content: '#ffffff' },
      { name: 'msapplication-TileImage',  content: '/ms-icon-144x144.png' },
      { name: 'theme-color',  content: '#ffffff' },
      
      // Facebook open graph
      { property: 'og:type',  content: 'website' },
      { property: 'og:url',  content: 'https://example.com/page.html' },
      { property: 'og:title',  content: 'SQOIN GALLERY' },
      { property: 'og:image',  content: 'https://example.com/image.jpg' },
      { property: 'og:description',  content: 'Votre galerie en LIGNE '},
      { property: 'og:site_name',  content: 'Gallery' },
      { property: 'og:locale',  content: 'en_US' },

      // Twitter card
      { property: 'twitter:card',  content: 'summary' },
      { property: 'twitter:site',  content: '@site_account' },
      { property: 'twitter:creator',  content: '@individual_account' },
      { property: 'twitter:url',  content: 'https://example.com/page.html' },
      { property: 'twitter:title',  content: 'Content Title' },
      { property: 'twitter:description',  content: 'Content description less than 200 characters' },
      { property: 'twitter:image',  content: 'https://example.com/image.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
      {
        rel: 'stylesheet',
        href:
       '//fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700,400italic|Material+Icons'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fab915' },

  /*
  ** Global CSS
  */
  css: ['@/assets/main.css',
    {
      src: 'bulma/bulma.sass',
      lang: 'sass'
    },
    { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' },
    { src: "@/assets/custom-bootstrap", lang: "scss" },
    { src: 'vue-material/dist/vue-material.min.css', lang: 'css' },
    { src: '@/assets/theme.scss', lang: 'scss' },
    'bootstrap-css-only/css/bootstrap.min.css'
 
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: "@/plugins/aos", ssr: false },
       "@/plugins/bootstrap",
       "@/plugins/vue-material",
       "@/plugins/element-ui"
      ],

  /*
  ** Nuxt.js modules
  */
	
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/font-awesome',
    
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  layoutTransition: {
    name: "layout",
    mode: ""
  },
  /* Page Transitions */
  pageTransition: {
    name: "default",
    mode: ""
  }
}
