/*
 * @Descripttion: 
 * @version: 
 * @Author: 
 * @Date: 2020-03-23 09:16:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-11 09:20:49
 */
const path = require('path');
const Timestamp = new Date().getTime();
module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: "static",
    lintOnSave: true,
    devServer: {
        host: '0.0.0.0',
        port: 3001,
        proxy: {
            '/api': {
                target: "http://test.imydao.cn:14019",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    },
    chainWebpack: (config) => {
        // const svgRule = config.module.rule('svg');
        // svgRule.uses.clear();
        // svgRule.use('svg-sprite-loader').loader('svg-sprite-loader').options({ symbolId: 'icon-[name]' })
    },
    productionSourceMap: false,
    // css config
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    configureWebpack: {
        devtool: 'source-map',
        output: {
            // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
            filename: `static/[name].${Timestamp}.js`,
            chunkFilename: `static/[name].${Timestamp}.js`
        },
    }
}