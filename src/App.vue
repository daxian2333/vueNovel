<template>
  <div id="app">
    <div class="tab">
      <div class="tab-item">
        <router-link to="/" exact>首页</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/classify">分类</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ranking">排名</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/my">搜索</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
//const url = "http://chapterup.zhuishushenqi.com/chapter/http://vip.zhuishushenqi.com/chapter/5817f1161bb2ca566b0a5973?cv=1481275033588"

  // http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F1228859%2F1228859_d14f18e849b34420904ead54936e440a.jpg%2F

export default {
  mame:'app',
  data() {
    return {
      boybook:[],
      cover:{}
    }

  },
  created(){
      // this.axios(url).then(response=> {
      //   console.log(res)
        // let res = response
        // this.boybook = res.data
        // console.log(this.boybook)
       // console.log(this.cover)
      // },err=>{
      //   alert(err)
      // })

  },

}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  #app {
    margin: auto;
    width: 100%;
    height: 100%;
  }
      .tab {
      display: flex;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50px;
      border-top: 1px solid #ccc;
      background: #fff;
        z-index: 5;
        .tab-item {
          flex: 1;
          height: 100%;
          text-align: center;
          line-height: 50px;
           a{
             color: #409EFF;
             text-decoration: none;
           }
        }
    }





</style>
