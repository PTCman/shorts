const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3000 // 개발 서버 포트 번호를 3000으로 지정
  }
})
