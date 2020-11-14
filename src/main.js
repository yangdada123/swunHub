// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI)
Vue.use(Vuex)

var axios = require('axios')
Vue.prototype.$axios = axios
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:8888'
/* eslint-disable no-new */
router.beforeEach((to ,from,next ) => {
    if (to.meta.requireAuth) {
      if (store.state.user.username) {
        next();
      } else {
        next({
          path: '/login'
        })
      }
    } else {
      next()
    }
  }
)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
