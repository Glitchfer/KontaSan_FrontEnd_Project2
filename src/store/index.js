import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Product from './modules/product'
import Register from './modules/register'
import User from './modules/user'
import Order from './modules/order'
import History from './modules/history'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, Product, Register, User, Order, History },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  plugins: [
    createPersistedState({
      paths: ['Auth.user', 'Auth.userName', 'Auth.userId', 'Auth.activityId'],
      storage: window.sessionStorage
    })
  ]
})
