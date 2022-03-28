/*
 * @Author: your name
 * @Date: 2022-03-16 19:19:30
 * @LastEditTime: 2022-03-20 10:46:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \dribbble\vue.config.js
 */
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {//解决跨域
    "proxy": {
      "/api": {
        target: "http://localhost:3000",
        angeOringin: true,
        pathRewrite: {
          "/api": ""
        },
        client: {
          webSocketURL: "WS: / /0.0.0.0: 6103 / ws"
        },

      }
    }
  }
});
