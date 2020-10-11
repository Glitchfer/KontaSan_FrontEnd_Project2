import axios from 'axios'
export default {
  state: {
    urlAPI: process.env.VUE_APP_URL,
    categoryData: {}
  },
  mutations: {
    seCategoryData(state, payload) {
      state.categoryData = payload
    }
  },
  actions: {
    getCategory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.urlApi}category`)
          .then(response => {
            resolve(response.data.data)
            context.commit('seCategoryData', response.data.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    categoryAdd(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.urlApi}category`, payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    updateCategory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${context.state.urlAPI}category/${payload[0]}`, payload[1])
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    deleteCategory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          // .delete(`http://127.0.0.1:3001/category/${payload}`)
          .delete(`${context.state.urlAPI}category/${payload}`)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  },
  getters: {
    getCategoryData(state) {
      return state.categoryData
    }
  }
}
