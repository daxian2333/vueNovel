<template>
    <div class="lookbook" >
        <div >
            <div class="header">
                <span class="search" @click="routerGo">退出</span>
                <span>书籍详细</span>
            </div>
            <div>
                <div class="book-detail" >
                    <div class="book-detail-img">
                        <img :src="img+mybooks.cover"  width="100%" height="100%">
                    </div>
                    <div class="book-detail-text">
                        <h3 class="book-title">{{mybooks.title}}</h3>
                        <p>作者：{{mybooks.author}}</p>
                        <p>字数：{{mybooks.wordCount}}</p>
                        <p>收藏人数：{{mybooks.latelyFollower}}</p>
                    </div>
                </div>
                <div class="go-book">
                    <div>
                    <router-link :to="'/novelindetail/'+mychapter" >开始阅读</router-link>
                    </div>
                    <p class="gocollect">加入收藏</p>
                </div>
                <div class="book-text">
                    <p>{{mybooks.longIntro}}</p>
                </div>
                <div class="book-new">
                    <p>最近更新</p>
                    <i>{{mybooks.lastChapter}}</i>
                </div>
                <div class="book-tags">
                    <span v-for="(p,i) in mybooks.tags" :key="i" v-if="i<5">{{p}}</span>
                </div>
                <!--<div class="my-chapter">-->
                    <!--<ul>-->
                        <!--<li v-for="(item,index) in mychapter" :key="index">{{item.title}}</li>-->
                    <!--</ul>-->
                <!--</div>-->
            </div>
        </div>
    </div>
</template>

<script>
    import ListDetails from '../NovelInDetail/ListDetails'
    import util from '../../util/util'
    import api from '../../service/api'
    export default {
        name: "LookBook",
        data(){
          return{
              mybooks:[],
              img:"http://statics.zhuishushenqi.com",
              gotodetails:{},
              bookcentent:{},
              mychapter:{}
          }
        },
        created(){
            this.getlookbook();
        },
        watch:{
            '$route.params':'getlookbook'
        },
        methods:{
            getlookbook() {
                api.getBookInfo(this.$route.params.id).then(res => {
                    console.log(res)
                    this.mybooks = res.data;
                }), err => {
                    console.log(err)
                }
                api.getBookSources(this.$route.params.id).then(res => {
                     // console.log(res.data[0]._id)
                    let chapter = res.data
                    this.mychapter = chapter[0]._id
                    console.log(this.mychapter)  //该小说的小说源
                })
            },
            routerGo() {
                this.$router.go(-1)
            }
        },

    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .lookbook {
        width: 100%;
        height: 100%;
        background: #555;
        .header {
            width: 100%;
            height: 45px;
            line-height: 45px;
            background-color: #409eff;

            span {
                letter-spacing: 3px;
                color: #fff;
                margin-right: 20px;
            }
        }
        .book-detail{
            background-color: #F2F6FC;
            padding: 30px 0 30px 0;
            display: table;
            width: 100%;
            .book-detail-img{
                width: 93px;
                height: 124px;
                margin-right: 18px;
                float: left;
                border: 1px solid #f0f0f0;
                box-shadow: 0 5px 10px #555;
                border-radius: 4px;
            }
            .book-detail-text{
                font-size: 14px;
                line-height: 30px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                .book-title{
                    font-weight: normal;
                    font-size: 18px;
                    margin-bottom: 5px;
                }
                p{
                    font-size: 16px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
        .go-book{
            background-color: #F2F6FC;
            width: 100%;
            height: 51px;
            a{
                width: 48%;
                height: 40px;
                line-height: 40px;
                margin-right: 2%;
                text-align: center;
                background-color: #409EFF;
                color: #efefef;
                float: left;
                margin-top: 5px;
                text-decoration: none;
            }
            .gocollect{
                width: 48%;
                height: 40px;
                line-height: 40px;
                margin-right: 2%;
                text-align: center;
                background-color: #fff;
                color: black;
                float: right;
                margin-top: 5px;
            }
        }
        .book-text{
            background-color: #F2F6FC;
            border-bottom: 1px solid #DDD;
            p{
                padding: 10px 14px;
                line-height: 2em;
            }
        }
        .book-new{
            background-color: #F2F6FC;
            padding: 10px 14px;
            line-height: 28px;
            i{
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                color: #42b983;
                margin-top: 10px;
                margin-left: 30px;
            }
        }
        .book-tags{
            padding: 10px 14px;
            overflow: hidden;
            background-color: #F2F6FC;
            white-space: nowrap;
            span{
                font-size: 14px;
                padding: 5px 10px;
                border-radius: 4px;
                border: 1px solid #ddd;
                background-color: #E6A23C;
                color: #F2F6FC;
                margin-right: 15px;
            }
        }
        /*.my-chapter{*/
            /*display: inline-block;*/
            /*width: 100%;*/
            /*height: 100%;*/
            /*padding-top: 2%;*/
            /*padding-left: 4%;*/
            /*background:#f0f0f0;*/
            /*li{*/
                /*width: 47%;*/
                /*height: 30px;*/
                /*line-height: 30px;*/
                /*float: left;*/
                /*margin-bottom: 5px;*/
                /*overflow: hidden;*/
                /*text-overflow: ellipsis;*/
                /*white-space: nowrap;*/
            /*}*/
        /*}*/
    }
</style>
