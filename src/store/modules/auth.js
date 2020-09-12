import axios from 'axios'
import router from '../../router/index'
export default {
  state: {
    userName: '',
    userId: null,
    activityId: null,
    user: {},
    token: localStorage.getItem('token') || null
  },
  mutations: {
    setActivity(state, payload) {
      state.userName = payload.name
      state.userId = payload.user_id
      state.activityId = payload.id
    },
    setUser(state, payload) {
      state.user = payload
      state.token = payload.token
    },
    delUser(state) {
      state.user = {}
      state.token = null
      state.userId = null
      state.activityId = null
    }
  },
  actions: {
    login(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://127.0.0.1:3001/users/login', payload)
          .then(response => {
            console.log(response.data)
            context.commit('setUser', response.data.data)
            context.commit('setActivity', response.data.pagination)
            localStorage.setItem('token', response.data.data.token)
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    logout(context) {
      if (context.state.userId === null && context.state.activityId === null) {
        return null
      } else {
        axios
          .patch(
            `http://127.0.0.1:3001/users/?activity_id=${context.state.activityId}&user_id=${context.state.userId}`
          )
          .then(response => {
            console.log(response.data)
            localStorage.removeItem('token')
            context.commit('delUser')
            router.push('/login')
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    interceptorRequest(context) {
      axios.interceptors.request.use(
        function(config) {
          config.headers.Authorization = `Bearer ${context.state.token}`
          return config
        },
        function(error) {
          return Promise.reject(error)
        }
      )
    },
    interceptorResponse(context) {
      axios.interceptors.response.use(
        function(response) {
          return response
        },
        function(error) {
          if (error.response.status === 400) {
            if (
              error.response.data.msg === 'invalid token' ||
              error.response.data.msg === 'invalid signature'
            ) {
              axios
                .patch(
                  `http://127.0.0.1:3001/users/?activity_id=${context.state.activityId}&user_id=${context.state.userId}`
                )
                .then(response => {
                  localStorage.removeItem('token')
                  context.commit('delUser')
                  router.push('/login')
                  alert('Invalid Token, Relogin required')
                })
                .catch(error => {
                  console.log(error)
                })
            } else if (error.response.data.msg === 'jwt expired') {
              localStorage.removeItem('token')
              context.commit('delUser')
              router.push('/login')
              alert('Token Expired, Relogin required')
              // axios
              //   .patch(
              //     `http://127.0.0.1:3001/users/?activity_id=${context.state.activityId}&user_id=${context.state.userId}`
              //   )
              //   .then(response => {
              //     console.log(response.data)
              //   })
              //   .catch(error => {
              //     console.log(error)
              //   })
            }
          }
          return Promise.reject(error)
        }
      )
    }
  },
  getters: {
    isLogin(state) {
      return state.token !== null
    },
    getUserName(state) {
      return state.userName
    },
    getDataUser(state) {
      return state.user
    }
  }
}
