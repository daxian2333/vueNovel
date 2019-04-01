<template>
    <div class="myindex">
        <div class="header">
            <span>书城</span>
        </div>
        <div class="alllist">
            <div class="boylist">
                <h3>男生最爱</h3>
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
            <div class="girllist">
                <h3>女生最爱</h3>
                <ul>
                    <li v-for="(p,i) in femalelist" :key="i">
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
        <!--<LookBook :isranking="isranking" :mybooks="mybooks" :mychapter="mychapter"  @btnmusics="btnmusic"></LookBook>-->
    </div>
</template>

<script>
    // import LookBook from '../LookDetail/LookBook'
    import util from '../../util/util'
    import api from '../../service/api'
    export default {
        name: "MyIndex",
        data() {
            return {
                malelist:[],
                femalelist:[],
                mybooks:{},
                mychapter:{}
            }

        },
        // components:{
        //     LookBook
        // },
        created(){
            api.getRankCategory().then(res=>{
                let maleid = res.data.male[this.randomnum(res.data.male)]._id;
                let femaleid = res.data.female[this.randomnum(res.data.female)]._id;   //let 10个ID
                this.getbooklist(maleid,this.malelist);        //传 ID 和空数据
                this.getbooklist(femaleid,this.femalelist);
            })
        },
        methods: {
            randomnum(arr) {
                return parseInt((Math.random() * (arr.length - 1)));
            },
            getbooklist(id, list) {
                api.getRank(id).then(res => {
                    let books = res.data.ranking.books.slice(0, 10);
                    books.forEach((book) => {
                        book.cover = util.staticPath + book.cover;
                        list.push(book);
                    })
                }).catch(err => {
                    alert(err)
                })
            },
            bookitem(p){
              //  console.log(p)
                this.p = p
                this.pigorranklist(p._id)
                // this.mychapter =api.getBookSources(p._id).then(res => {res.data[0]._id})
               // console.log(p._id)
            },
            pigorranklist(id) {
                api.getBookInfo(id).then(res => {
                  //  console.log(res)
                    let detail = res.data
                 //   console.log(detail)
                    this.mybooks =detail

                    })
            },
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .myindex {
        width: 100%;
        height: 100%;
        .header {
            display: flex;
            width: 100%;
            height: 45px;
            line-height: 45px;
            background-color: #409eff;

            span {
                margin: 0 auto;
                letter-spacing: 3px;
                color: #fff;
            }

        }
        .alllist{
            h3{
                width: 100%;
                height: 45px;
                line-height: 45px;
                background-color: #f2f6fc;
                font-weight: 700;
                border-bottom: 1px solid #ddd;
            }
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
            .girllist{
                padding-bottom: 45px;
            }
        }
    }

</style>
