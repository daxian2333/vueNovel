<template>
    <div class="classifylist">
        <div class="header">
            <span>书城</span>
        </div>
        <div class="boylist">
            <h3>男生分类</h3>
            <ul>
               <li v-for="(lsit,index) in boyList" :key="index">
                   <router-link :to="'/classlistc/'+lsit">
                   {{lsit}}
                  </router-link>
               </li>
            </ul>
        </div>
        <div class="grillist">
            <h3>女生分类</h3>
            <ul>
                <li v-for="(lsit,index) in grilList" :key="index">
                    <router-link :to="'/classlistc/'+lsit">
                        {{lsit}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ClassifyList",
        data(){
            return{
                Categorylist:{},
                boyList: ['玄幻','奇幻','武侠','仙侠',
                    '都市','职场','历史','军事','游戏',
                    '竞技','科技','灵异','同人','轻小说'],
                grilList: ['古代言情','现代言情','青春校园','纯爱',
                    '古代奇幻','武侠仙侠','科幻','游戏竞技','悬疑灵异',
                    '同人','女尊','莉莉'],
            }
        },
        // created(){
        //     api.getCategoryInfo('奇幻').then(res=>{
        //         console.log(res)
        //         res.data.books.forEach((book)=>{
        //             book.cover=util.staticPath+book.cover;
        //         })
        //         this.Categorylist=res.data.books;
        //        // this.title=this.$store.state.CategoryList.name;
        //     })
        // }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .classifylist{
        background: #f2f6fc;
        .header {
        display: flex;
        width: 100%;
        height: 45px;
        line-height: 45px;
        background-color: #409eff;
        span{
           margin: 0 auto;
            letter-spacing: 3px;
            color: #fff;
        }

         }
        .boylist{
            margin-top: 20px;
            background: #f2f6fc;
            h3{
                padding: 10px;
                border-bottom: 1px solid #EBEEF5;
                font-size: 16px;
            }
            li{
                width: 28%;
                display: inline-block;
                font-size: 16px;
                color: #555;
                padding: 5px 10px;
                text-align: center;
                border-right: 1px solid #EBEEF5;
                border-bottom: 1px solid #EBEEF5;
                overflow: hidden;
                margin: 10px 0 10px 0;
                a{
                    text-decoration: none;
                    color: #555;
                }
            }
        }
        .grillist{
            margin-top: 40px;
            background: #f2f6fc;
            h3{
                padding: 10px;
                border-bottom: 1px solid #EBEEF5;
                font-size: 16px;
            }
            li{
                width: 28%;
                display: inline-block;
                font-size: 16px;
                color: #555;
                padding: 5px 10px;
                text-align: center;
                border-right: 1px solid #EBEEF5;
                border-bottom: 1px solid #EBEEF5;
                overflow: hidden;
                margin: 10px 0 10px 0;
                a{
                    text-decoration: none;
                    color: #555;
                }
            }
        }
    }
</style>
