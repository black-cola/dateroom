import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'  //@符指src文件夹
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
import Article_list from '@/pages//article_list/Article_list'
import Article_detail from '@/pages/article_detail/Article_detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/article_list',
      name: 'Article_list',
      component: Article_list
    },
    {
      path: '/article_detail',
      name: 'Article_detail',
      component: Article_detail
    }
  ]
})
