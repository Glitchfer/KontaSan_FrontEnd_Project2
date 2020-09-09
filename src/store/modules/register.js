import axios from 'axios'
export default {
  state: {},
  mutations: {},
  actions: {
    regist(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .post('http://127.0.0.1:3001/users/register', payload)
          .then(response => {
            console.log(response)
            resolve(response)
          })
          .catch(error => {
            console.log(error.response)
          })
      })
    }
  },
  getters: {}
}
