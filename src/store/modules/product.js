import axios from 'axios'
export default {
  state: {
    sortBy: 'Home',
    srcClicked: false,
    srcInput: '',
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
    },
    setSorting(state, payload) {
      state.sortBy = payload
    },
    setSearch(state, payload) {
      console.log(payload)
      state.srcClicked = payload[1]
      state.srcInput = payload[0]
    }
  },
  actions: {
    getProducts(context, payload) {
      if (context.state.srcClicked === false) {
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
      } else {
        console.log('search function')
        axios
          .get(
            `http://127.0.0.1:3001/product/search?name=${context.state.srcInput}&page=${context.state.page}&limit=${context.state.limit}`
          )
          .then(response => {
            console.log(response)
            context.commit('setProduct', response.data)
            context.state.products = response.data.data
            context.state.paginationInfo = response.data.pagination
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
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    throwSelectedItem(context, payload) {
      context.commit('setItem', payload)
    },
    throwSorting(context, payload) {
      context.commit('setSorting', payload)
    },
    throwSearch(context, payload) {
      context.commit('setSearch', payload)
    },
    updateProduct(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `http://127.0.0.1:3001/product/${context.state.selectedItem.product_id}`,
            payload
          )
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    deleteProduct(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(
            `http://127.0.0.1:3001/product/${context.state.selectedItem.product_id}`
          )
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
    }
  }
}
