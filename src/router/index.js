import Vue from 'vue'
import Router from 'vue-router'

import AppIndex from "@/components/home/AppIndex"
import home from '@/components/home'
import repository from '@/components/repositories/repository'
import login from '@/components/login'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      name:'index',
      component:AppIndex
    },
    {
      path:'/home',
      name:'home',
      component:home,
      redirect:'/index',
      children:[
        {
          path: '/index',
          component: AppIndex,
          name: 'index',
        },
        {
          path:'/home/repository',
          name:'repository',
          component:repository
        }

      ]
    },
    {
      path:'/login',
      name:'login',
      component: login
    }

  ]
})
