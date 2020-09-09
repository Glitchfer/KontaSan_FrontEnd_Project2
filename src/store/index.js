import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Product from './modules/product'
import Register from './modules/register'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, Product, Register },
  state: {
    name: ''
  },
  mutations: {},
  actions: {},
  getters: {}
})
