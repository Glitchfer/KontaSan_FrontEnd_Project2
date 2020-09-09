import axios from 'axios'
export default {
  state: {
    sortBy: 'Home',
    page: 1,
    limit: 6,
    paginationInfo: {},
    products: [],
    selectedItem: []
  },
  mutations: {
    setProduct(state, payload) {
      state.products = payload.data
      state.paginationInfo = payload.data.pagination
    },
    setPage(state, payload) {
      state.page = payload
    },
    setItem(state, payload) {
      state.selectedItem = payload
    }
  },
  actions: {
    getProducts(context, payload) {
      if (context.state.sortBy === 'Home') {
        axios
          .get(
            `http://127.0.0.1:3001/product?page=${context.state.page}&limit=${context.state.limit}`
          )
          .then(response => {
            context.commit('setProduct', response.data)
            context.state.products = response.data.data
            context.state.paginationInfo = response.data.pagination
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        axios
          .get(
            `http://127.0.0.1:3001/product/sort?sort_by=${context.state.sortBy}`
          )
          .then(response => {
            context.state.products = response.data.data
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    addProduct(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://127.0.0.1:3001/product', payload)
          .then(response => {
            console.log(response)
            resolve(response)
          })
          .catch(error => {
            console.log(error.response)
          })
      })
    },
    updateProduct(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .post(
            `http://127.0.0.1:3001/product/${context.state.selectedItem.product_id}`,
            payload
          )
          .then(response => {
            console.log(response)
            resolve(response)
          })
          .catch(error => {
            console.log(error.response)
          })
      })
    }
    // ,
    // patchProduct(context, payload) {
    //   return new Promise((resolve, reject) => {
    //     axios
    //       .patch(
    //         `http://127.0.0.1:3001/product/${context.state.selectedItem.product_id}`,
    //         payload
    //       )
    //       .then(response => {
    //         // context.commit('setProduct', response.data)
    //         // context.state.products = response.data.data
    //         // context.state.paginationInfo = response.data.pagination
    //         resolve(response)
    //       })
    //       .catch(error => {
    //         console.log(error.response)
    //       })
    //   })
    // }
  },
  getters: {
    getLimit(state) {
      return state.limit
    },
    getPage(state) {
      return state.page
    },
    getPaginationInfo(state) {
      return state.paginationInfo
    },
    getProduct(state) {
      return state.products
    },
    getItem(state) {
      return state.selectedItem
    }
  }
}
