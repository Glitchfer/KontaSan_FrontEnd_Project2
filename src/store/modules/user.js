import axios from 'axios'
export default {
  state: {
    user: {},
    userId: null
  },
  mutations: {
    setUserId(state, payload) {
      state.userId = payload
    }
  },
  actions: {
    patchUserData(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .patch(`http://127.0.0.1:3001/users/${context.state.userId}`, payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    throwUserId(context, payload) {
      context.commit('setUserId', payload)
    }
  },
  getters: {}
}
