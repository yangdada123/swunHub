// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI)
Vue.use(Vuex)

Vue.prototype.$axios = axios
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:8888/api'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
