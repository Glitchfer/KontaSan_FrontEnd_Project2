import axios from 'axios'
export default {
  state: {
    urlAPI: process.env.VUE_APP_URL
  },
  mutations: {},
  actions: {
    regist(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          // .post('http://127.0.0.1:3001/users/register', payload)
          .post(`${context.state.urlAPI}users/register`, payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  },
  getters: {}
}
