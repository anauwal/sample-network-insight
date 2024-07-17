const { defineConfig } = require("@vue/cli-service");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const adc2ProxyPattern = [
  "^/portal",
  "/static",
  "/adc-web",
  "/adc-file",
  "/adc-ui",
  "/adc-app",
  "/adc-asset",
  "/adc-model",
  "/adc-service",
  "/adc-static",
  "/adc-system",
  "/adc-studio-ui",
  "/adc-studio-web",
  "/adc-studio-misc",
  "/adc-studio-model",
  "/adc-studio-service",
  "/adc-studio-app",
  "/adc-studio-project-mgt"
].join("|^");


module.exports = defineConfig({
  outputDir: "dist",
  assetsDir: "static",
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  productionSourceMap: false,
  pages: {
    home: {
      entry: "./src/app/index.js",
      filename: "index.html",
      template: "./src/app/index.html",
    },
  },
  configureWebpack: {
    module: {
      rules: [
        {
          resourceQuery: /blockType=i18n/,
          type: "javascript/auto",
          loader: "@intlify/vue-i18n-loader"
        },
        {
          test: /\.(PNG|bmp)(\?.*)?$/,
          loader: "url-loader",
          options: {
            limit: 999999,
            name: "static/img/[name].[hash:8].[ext]"
          }
        }
      ]
    },
    resolve: {
      alias: Object.assign(
        {
          "@": resolve("/"),
          "jquery-ui": "jquery-ui/ui",
          "@assets": resolve("./src/assets/"),
          "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
          src: resolve("src/"),
          views: resolve("src/views/"),
          common: resolve("src/common/"),
          mixins: resolve("src/mixins/"),
          filters: resolve("src/filters/"),
          jquery: "jquery/dist/jquery.min.js",
          components: resolve("src/components/"),
          directives: resolve("src/directives/"),
          vue$: "vue/dist/vue.runtime.esm-bundler.js",
          handlebars: "handlebars/dist/handlebars.js"
        },
      ),
      fallback: {
        asserts: false,
        os: false,
        stream: false,
        crypto: false,
        fs: false,
        constants: false,
        querystring: false
      }
    },
    node: {
      global: false,
      __filename: false,
      __dirname: false,
    },
    optimization: {
      minimize: false,
    }
  },
  transpileDependencies: ["vanilla-picker"],
  devServer: {
    hot: true,
    open: true,
    host: "localhost",
    port: 9000,
    proxy: {
      [adc2ProxyPattern]: {
        target: "https://1057-sg-studio.teleows.com",
        secure: false
      }
    }
  }
});
