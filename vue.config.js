
module.exports = {
    configureWebpack: {
        devServer: {
            proxy:{
                "/api":{
                    target:"http://api.zhuishushenqi.com",
                    pathRewrite:{
                        '^/api':'http://api.zhuishushenqi.com'
                    },
                    changeOrigin: true
                },
                "/content":{
                    target:'http://chapterup.zhuishushenqi.com',
                    pathRewrite:{
                        '^/content':'http://chapterup.zhuishushenqi.com'
                    },
                    changeOrigin:true,
                }
            }
        }
    }
}
