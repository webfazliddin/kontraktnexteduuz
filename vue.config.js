const path = require('path');
module.exports = {
  // productionSourceMap: process.env.NODE_ENV != 'production',
  pwa: {
		name:"edumyadm.webase.uz",
		themeColor: "#42b983",
		msTileColor: "#42b983",
		appleMobileWebAppCache: "yes",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'dev/sw.js',
      // ...other Workbox options...
    },
		manifestOptions: {
			start_url: '.',
			display: 'standalone',
			background_color: "#42b983"
		}
	},
    devServer: {
      https: true,
      host:"mymvb.edu.uz",
      port : 8082,
      inline: false,
    },
    pwa: {
        workboxOptions: {
            skipWaiting: true
        }
    },
    configureWebpack: {
      mode: process.env.VUE_APP_MODE !== 'development' ? 'production' : 'development',
      resolve: {
        symlinks: false
      },
      optimization: {
        splitChunks: {
          minSize: 10000,
          maxSize: 250000,
        }
      }
    }
  }
