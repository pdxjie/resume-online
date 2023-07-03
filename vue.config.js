/**
 * @Author: 派同学
 * @Description: How
 */
module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#1930a1'// 修改全局主题色
          },
          javascriptEnabled: true
        }
      }
    },
    extract: true // 解决开发模式，打包时未提取CSS的问题
  }
}
