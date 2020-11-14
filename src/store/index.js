import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
    user: {
      username:'yang'//window.localStorage.getItem("user") == null ? '' : JSON.parse(window.localStorage.getItem("user")).username,
    },
     isLogin: false
   },
  mutations: {
    login(state,user){
      state.user = user
      localStorage.setItem("user",JSON.stringify(user))
      this.state.isLogin = true
    },

  }
})
