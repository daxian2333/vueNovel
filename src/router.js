import Vue from 'vue'
import Router from 'vue-router'
import MyIndex from  './components/Index/MyIndex'
import LookBook from './components/LookDetail/LookBook'
import ClassifyList from  './components/Classify/ClassifyList'
import RankingList from './components/Ranking/RankingList'
import MyCollect from  './components/My/MyCollect'
import  ListDetails from  './components/NovelInDetail/ListDetails'
import  Reader from  './components/NovelInDetail/Reader'
import ClassList from './components/ClassListc/ClassList'
import  RankList from  './components/RankingList/RankList'

Vue.use(Router)

export default new Router({
  linkExactActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'myindex',
      component: MyIndex
    },
    {
      path: '/classify',
      name: 'classifylist',
      component: ClassifyList

    },
    {
      path: '/classlistc/:list',
      name: 'classlist',
      component: ClassList

    },
    {
      path: '/rankinglist/:id',
      name: 'ranklist',
      component: RankList

    },
    {
      path: '/ranking',
      name: 'rankinglist',
      component: RankingList

    },
    {
      path: '/lookdetail/:id',
      name: 'lookbook',
      component: LookBook

    },
    {
      path: '/novelindetail/:id',
      name: 'reader',
      component: Reader

    },
    {
      path: '/novelindetail',
      name: 'listdetails',
      component: ListDetails

    },
    {
      path: '/my',
      name: 'mycollect',
      component: MyCollect

    }
  ]
})
