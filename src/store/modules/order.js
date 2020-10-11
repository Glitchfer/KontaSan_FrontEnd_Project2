import axios from 'axios'
export default {
  state: {
    urlAPI: process.env.VUE_APP_URL,
    invoiceId: null
  },
  mutations: {
    setTrigger(state, payload) {
      state.invoiceId = payload
    },
    delId(state, payload) {
      state.invoiceId = null
    }
  },
  actions: {
    triggerInvoice(context, payload) {
      context.commit('setTrigger', payload)
    },
    cancelOrder(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`http://127.0.0.1:3001/trigger/invoice/${payload}`, payload)
          .then(response => {
            resolve(response)
            console.log(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    cancelInvoice(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`http://127.0.0.1:3001/trigger/orders/${payload}`, payload)
          .then(response => {
            resolve(response)
            console.log(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    delTrigger(context, payload) {
      context.commit('delId')
    }
  },
  getters: {
    getInvoiceId(state) {
      return state.invoiceId
    }
  }
}
