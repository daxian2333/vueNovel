<template>
    <div class="classlist">
        <div class="header">
            <span class="search" @click="routerGo">退出</span>
        </div>
        <div class="alllist">
            <div class="boylist">
                <ul>
                    <li v-for="(p,i) in malelist" :key="i" >
                        <router-link :to="'/lookdetail/'+p._id" >
                            <div class="boylistimg">
                                <img :src="p.cover" width="100%" height="100%">
                            </div>
                            <strong class="boylistcent">{{p.title}}</strong>
                            <p class="boylistcenp">{{p.author}}</p>
                            <p class="boylistcenp">{{p.shortIntro}}</p>
                            <span class="leixing">{{p.majorCate}}</span>
                            <span class="leixings">{{p.minorCate}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
    </div>
    </div>
</template>

<script>
    import util from  '../../util/util'
    import api from '../../service/api'
    export default {
        name: "ClassList",
        data() {
            return {
                malelist: {},
                mychapter:{}
            }
        },
        created() {
            this.getclassbook();
        },
        methods: {
            getclassbook() {
                api.getCategoryInfo(this.$route.params.list).then(res => {
                    console.log(res)
                    res.data.books.forEach((book) => {
                        book.cover = util.staticPath + book.cover;
                    })
                    this.malelist = res.data.books;
                    console.log(this.malelist)
                })
            },
            routerGo() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .classlist {
        .header {
            display: flex;
            width: 100%;
            height: 45px;
            line-height: 45px;
            background-color: #409eff;
                span {
                    margin-left: 10px;
                    letter-spacing: 3px;
                    color: #fff;
                }

        }
        .alllist{
            ul{
                background-color: #F2F6FC;
                border-bottom: 1px solid #DCDFE6;
                padding-bottom: 20px;
            }
            li{
                width: 100%;
                height: 113px;
                padding: 10px 14px;
                line-height: 24px;
            }
            a{
                text-decoration: none;
            }
            .boylistimg{
                width: 86px;
                height: 113px;
                background-color: #606266;
                border-radius: 4px;
                float: left;
                margin-right: 10px;
            }
            .boylistcent{
                font-weight: 700;
                font-size: 16px;
                color: #555;
                margin-bottom: 5px;
                text-decoration: none;
            }
            .boylistcenp{
                font-size: 14px;
                margin-bottom: 2px;
                color: rgba(0, 0, 0, 0.4);
                overflow: hidden;
                white-space: nowrap;
                margin-bottom: 5px;
                text-overflow: ellipsis;
                text-decoration: none;
            }
            .leixing{
                float: left;
                padding: 2px 8px;
                background-color: #67C23A;
                border-radius: 4px;
                color: #F2F6FC;
                line-height: 1.3;
            }
            .leixings{
                float: left;
                padding: 2px 8px;
                background-color: #E6A23C;
                border-radius: 4px;
                color: #F2F6FC;
                line-height: 1.3;
                margin-left: 10px;
            }
        }
    }
</style>