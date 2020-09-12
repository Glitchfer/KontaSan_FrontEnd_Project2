import axios from 'axios'
export default {
  state: {
    todayIncome: 0,
    thisYearIncome: 0,
    weaklyOrder: 0,
    orderData: [],
    cashFlowIn: null,
    lastYearIncome: 0,
    yesterdayIncome: 0,
    lastWeekOrder: 0
  },
  mutations: {
    setIncomeToday(state, payload) {
      state.todayIncome = payload
    },
    setRecentOrder(state, payload) {
      state.orderData = payload
    },
    setWeaklyOrder(state, payload) {
      state.weaklyOrder = payload
    },
    setThisYearIncome(state, payload) {
      state.thisYearIncome = payload
    },
    setRevenueChart(state, payload) {
      state.cashFlowIn = payload
    },
    setLastYearIncome(state, payload) {
      state.lastYearIncome = payload
    },
    setYesterdayIncome(state, payload) {
      state.yesterdayIncome = payload
    },
    setLastWeekOrder(state, payload) {
      state.lastWeekOrder = payload
    }
  },
  actions: {
    recentOrder(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://127.0.0.1:3001/trigger/invoice?calendar=${payload}`)
          .then(response => {
            resolve(response)
            context.commit('setRecentOrder', response.data.data)
          })
          .catch(error => {
            reject(error.response)
            console.log(error.response.data.data)
          })
      })
    },
    incomeToday(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get('http://127.0.0.1:3001/history')
          .then(response => {
            resolve(response)
            context.commit(
              'setIncomeToday',
              response.data.data[0].todays_income
            )
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    weaklyOrder(context, payload) {
      axios
        .get('http://127.0.0.1:3001/history/orders')
        .then(response => {
          context.commit('setWeaklyOrder', response.data.data[0].Total_Orders)
        })
        .catch(error => {
          console.log(error)
        })
    },
    incomeYear(context, payload) {
      axios
        .post('http://127.0.0.1:3001/history')
        .then(response => {
          context.commit(
            'setThisYearIncome',
            response.data.data[0].ThisYears_Income
          )
        })
        .catch(error => {
          console.log(error)
        })
    },
    revenueChart(context, payload) {
      axios
        .post(`http://127.0.0.1:3001/history/revenue?select=${payload}`)
        .then(response => {
          const dateData = response.data.data.map(function(e) {
            return e.Date
          })
          const totalData = response.data.data.map(function(e) {
            return e.Total
          })
          var arr2 = []
          for (var i = 0; i < dateData.length; i++) {
            arr2.push([`${dateData[i]}`])
          }
          for (var x = 0; x < dateData.length; x++) {
            arr2[x].push(totalData[x])
          }
          context.commit('setRevenueChart', arr2)
        })
        .catch(error => {
          console.log(error)
        })
    },
    incomeLastYear(context, payload) {
      axios
        .post('http://127.0.0.1:3001/income/income')
        .then(response => {
          if (response.data.data[0].sub_total === null) {
            const nilai = 0
            const hasil = (context.state.thisYearIncome - nilai) * 100
            context.commit('setLastYearIncome', hasil)
          } else {
            const nilai2 = response.data.data[0].sub_total
            const hasil2 =
              ((context.state.thisYearIncome - nilai2) / nilai2) * 100
            context.commit('setLastYearIncome', hasil2.toFixed(2))
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    incomeYesterday(context, payload) {
      axios
        .get('http://127.0.0.1:3001/income')
        .then(response => {
          if (response.data.data[0].sub_total === null) {
            const nilai = 0
            const hasil = (context.state.todayIncome - nilai) * 100
            context.commit('setYesterdayIncome', hasil)
          } else {
            const nilai2 = response.data.data[0].sub_total
            const hasil2 = ((context.state.todayIncome - nilai2) / nilai2) * 100
            context.commit('setYesterdayIncome', hasil2.toFixed(2))
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    orderLastWeek(context, payload) {
      axios
        .get('http://127.0.0.1:3001/income/orders')
        .then(response => {
          if (response.data.data[0].total_order === 0) {
            const nilai = response.data.data[0].total_order
            const hasil = (context.state.weaklyOrder - nilai) * 100
            context.commit('setLastWeekOrder', hasil)
          } else {
            const nilai2 = response.data.data[0].total_order
            const hasil2 = ((context.state.weaklyOrder - nilai2) / nilai2) * 100
            context.commit('setLastWeekOrder', hasil2.toFixed(2))
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  getters: {
    getRecentOrder(state) {
      return state.orderData
    },
    getWeaklyOrder(state) {
      return state.weaklyOrder
    },
    getThisYearIncome(state) {
      return state.thisYearIncome
    },
    getRevenueChart(state) {
      return state.cashFlowIn
    },
    getLastYearIncome(state) {
      return state.lastYearIncome
    },
    getYesterdayIncome(state) {
      return state.yesterdayIncome
    },
    getLastWeekOrder(state) {
      return state.lastWeekOrder
    }
  }
}
