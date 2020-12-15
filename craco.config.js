/* craco.config.js */
const path = require('path');
const CracoLessPlugin = require('craco-less');
module.exports = {
  plugins: [{
    plugin: CracoLessPlugin,
    options: {
      lessLoaderOptions: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  }, ],
  babel: {
    plugins: [
      ["@babel/plugin-proposal-decorators", {
        legacy: true
      }], //装饰器
      [
        "import",
        {
          "libraryName": "antd",
          "libraryDirectory": "es",
          "style": true //设置为true即是less
        }
      ]
    ]
  },
  webpack: {
    // 别名
    alias: {
      "@": path.resolve("src")
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://baidu.com",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
}