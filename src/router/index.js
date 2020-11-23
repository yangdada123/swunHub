import Vue from 'vue'
import Router from 'vue-router'

import AppIndex from "@/components/home/AppIndex"
import home from '@/components/home'
import repository from '@/components/repositories/repository'
import login from '@/components/login'
import repositories from '@/components/repositories/repositories'
import regist from "../components/regist";
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
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
          component:repository,
          meta:{
            requireAuth: true
          }
        },
        {
          path:'/home/repositories',
          name:'repositories',
          component:repositories
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component: login,
      meta:{
        requireAuth: false
      }
    },
    {
      path:'/regist',
      name:'regist',
      component: regist
    }

  ]
})
