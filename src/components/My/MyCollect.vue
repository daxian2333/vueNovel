<template>
    <div class="mycollect">
        <div class="searchbox">
            <input  :val="bookname" @input="booknames"/>
            <button @click="runclick">搜索</button>
        </div>
        <div>
            <div class="searchlist">
                <ul>
                    <li v-for="(item,index) in search" :key="index" v-if="index>20">
                        <router-link :to="'/lookdetail/'+item._id" >
                            <div class="boylistimg">
                                <img :src="item.cover" width="100%" height="100%">
                            </div>
                            <strong class="boylistcent">{{item.title}}</strong>
                            <p class="boylistcenp">{{item.author}}</p>
                            <p class="boylistcenp">{{item.shortIntro}}</p>
                            <span class="leixing">{{item.majorCate}}</span>
                            <span class="leixings">{{item.minorCate}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import util from  '../../util/util'
    import api from  '../../service/api'
    export default {
        name: "MyCollect",
        data(){
            return{
                search:{},
                bookname:"",
                num:true,
            }
        },
        methods:{
            booknames(el){
                if(el.target.value==""){
                    this.num = true
                }
                this.bookname = el.target.value
            },
            runclick(){
                if(this.bookname != ""){
                    console.log(this.bookname)
                    api.getSearchResult(this.bookname).then(res=>{
                        res.data.books.forEach(rank=>{
                            rank.cover = util.staticPath+rank.cover;
                        })
                        console.log(res)
                        this.search = res.data.books
                       console.log(this.search)
                    })
                }
            },
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .mycollect{
        height: 1000px;
        position: relative;
        background: #f2f3f4;
        .searchbox {
            display: flex;
            width: 100%;
            height: 45px;
            line-height: 45px;
            background-color: #409eff;
            input{
                margin-top: 2%;
                margin-left: 10%;
                width: 60%;
                height: 30px;
                border-radius: 10px;
                border: 0;
                background: #65b1ff;
                color: #fff;
                font-size: 16px;
                padding-left: 10px;
            }
            button{
                width: 19%;
                margin-top: 2%;
                border: none;
                height: 35px;
                border-radius: 10px;
                background: #65b1ff;

            }

        }
        .searchlist{
            margin-top: 20px;
            background: #f2f6fc;
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
