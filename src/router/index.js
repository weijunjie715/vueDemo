import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import ErrorPage from '@/components/ErrorPage'
import LoginPage from '@/components/LoginPage'
import elementPage from '@/components/element/elementPage'



Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },{
      path: '/loginPage',
      name: 'LoginPage',
      component: LoginPage
    },{
      //设置全路径404  路由中没有配置的路径都走404路由
      path: '*',
      name: 'ErrorPage',
      component: ErrorPage
    },{
      //设置全路径404  路由中没有配置的路径都走404路由
      path: '/elementPage',
      name: 'elementPage',
      component: elementPage
    }
  ],
  mode:'history'
});

export default router;
