<template>
    <div class="rankinglist">
        <div class="header">
            <span>排名</span>
        </div>
        <div class="boylist">
            <h3>男生</h3>
            <ul>
                <li class="boy-list-centen" v-for="(rank,index) in ranklist.male"v-if="index<7">
                    <router-link :to="'/rankinglist/'+rank._id">
                    <img :src="rank.cover">
                    <p>{{rank.title}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="girllist">
            <h3>女生</h3>
            <ul>
                <li class="boy-list-centen" v-for="(rank,index) in ranklist.male"v-if="index<7">
                    <router-link :to="'/rankinglist/'+rank._id">
                    <img :src="rank.cover">
                    <p>{{rank.title}}</p>
                    </router-link>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import api from '../../service/api'
    import util from  '../../util/util'
    export default {
        name: "RankingList",
        data(){
            return{
                ranklist:{}
            }
        },
        created(){
            api.getRankCategory().then(res=>{
                res.data.male.forEach(rank=>{
                    rank.cover = util.staticPath+rank.cover;
                })
                this.ranklist=res.data;
               // console.log(this.ranklist.male[0]._id)
        })
        },

    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .rankinglist {
        background: #f2f6fc;

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
        .boylist{
            margin-top: 20px;
            background: #f2f6fc;
            h3{
                padding: 10px;
                border-bottom: 1px solid #EBEEF5;
                font-size: 16px;
            }
            li{
                width: 100%;
                font-size: 16px;
                color: #555;
                padding: 5px 10px;
                text-align: center;
                border-right: 1px solid #EBEEF5;
                border-bottom: 1px solid #EBEEF5;
                overflow: hidden;
                margin: 10px 0 10px 0;
                img{
                    width:36px;
                    height: 36px;
                    float: left;
                }
                p{
                    float: left;
                    line-height: 36px;
                    margin-left: 10px;
                }
                a{
                    text-decoration: none;
                    color: #555;
                }
            }
        }
        .girllist{
            margin-bottom: 52px;
            margin-top: 20px;
            background: #f2f6fc;
            h3{
                padding: 10px;
                border-bottom: 1px solid #EBEEF5;
                font-size: 16px;
            }
            li{
                width: 100%;
                font-size: 16px;
                color: #555;
                padding: 5px 10px;
                text-align: center;
                border-right: 1px solid #EBEEF5;
                border-bottom: 1px solid #EBEEF5;
                overflow: hidden;
                margin: 10px 0 10px 0;
                img{
                    width:36px;
                    height: 36px;
                    float: left;
                }
                p{
                    float: left;
                    line-height: 36px;
                    margin-left: 10px;
                }
                a{
                    text-decoration: none;
                    color: #555;
                }
            }
        }
    }

</style>
