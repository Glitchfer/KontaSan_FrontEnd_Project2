<template>
  <b-container fluid class="bag">
    <b-row class="slot-one">
      <b-col cols="12" sm="12" md="12" lg="12" class="header-one">
        <b-col cols="1" sm="1" md="1" lg="1" class="bar">
          <div class="bar-img">
            <router-link to="/" class="beranda"></router-link>
          </div>
        </b-col>
        <b-col cols="11" sm="11" md="11" lg="11" class="title">
          <h1 class="judul">History</h1>
        </b-col>
      </b-col>
    </b-row>
    <!-- ---//////////////////////////////////////-----left sidebar------------/////////////////////////////////////////////////////////////////////////////---------------------------------------------------------------- -->
    <div class="slot-two row">
      <Left @addShow="addOn" />
      <!-- ----//////////////////////////////------Graph menu-------////////////////////////////////////////////////////////////---------------- -->
      <main class="mid col-12 col-sm-12 col-md-11 col-lg-11">
        <div class="card-label">
          <div class="extra-card">
            <div class="m" @click="cardFunc(1)">
              <div class="todays-income2">
                <div class="fractale1"></div>
                <div class="card-text">
                  <p>Today's Income</p>
                  <h3>{{ 'Rp. ' + this.todayIncome }}</h3>
                  <p>{{ this.yesterdayIncome }}% Yesterday</p>
                </div>
              </div>
            </div>
            <div class="n" @click="cardFunc(2)">
              <div class="orders2">
                <div class="fractale1"></div>
                <div class="card-text">
                  <p>Orders</p>
                  <h3>{{ this.totalOrder }}</h3>
                  <p>{{ this.lastweekOrder }}% Last Week</p>
                </div>
              </div>
            </div>
            <div class="k" @click="cardFunc(3)">
              <div class="years-income2">
                <div class="fractale1"></div>
                <div class="card-text">
                  <p>This Year’s Income</p>
                  <h3>{{ 'Rp. ' + this.yearIncome }}</h3>
                  <p>{{ this.lastyearIncome }}% Last Year</p>
                </div>
              </div>
            </div>
            <div v-if="yearsBtn === true" class="l">
              <div class="extra">
                <div class="fractale1"></div>
                <div class="fractale2"></div>
                <div class="fractale3"></div>
                <div class="card-text">
                  <p>This Year’s Income</p>
                  <h3>{{ 'Rp. ' + this.yearIncome }}</h3>
                  <p>{{ this.lastyearIncome }}% Last Year</p>
                </div>
              </div>
            </div>
            <div v-if="ordersBtn === true" class="l">
              <div class="extra3">
                <div class="fractale1"></div>
                <div class="fractale2"></div>
                <div class="fractale3"></div>
                <div class="card-text">
                  <p>Orders</p>
                  <h3>{{ this.totalOrder }}</h3>
                  <p>{{ this.lastweekOrder }}% Last Week</p>
                </div>
              </div>
            </div>
            <div v-if="todaysBtn === true" class="l">
              <div class="extra2">
                <div class="fractale1"></div>
                <div class="fractale2"></div>
                <div class="fractale3"></div>
                <div class="card-text">
                  <p>Today's Income</p>
                  <h3>{{ 'Rp. ' + this.todayIncome }}</h3>
                  <p>{{ this.yesterdayIncome }}% Yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-satu">
          <div class="todays-income">
            <div class="fractale1"></div>
            <div class="fractale2"></div>
            <div class="fractale3"></div>
            <div class="card-text">
              <p>Today's Income</p>
              <h3>{{ 'Rp. ' + this.todayIncome }}</h3>
              <p>{{ this.yesterdayIncome }}% Yesterday</p>
            </div>
          </div>
        </div>
        <div class="card-dua">
          <div class="orders">
            <div class="fractale1"></div>
            <div class="fractale2"></div>
            <div class="fractale3"></div>
            <div class="card-text">
              <p>Orders</p>
              <h3>{{ this.totalOrder }}</h3>
              <p>{{ this.lastweekOrder }}% Last Week</p>
            </div>
          </div>
        </div>
        <div class="card-tiga">
          <div class="years-income">
            <div class="fractale1"></div>
            <div class="fractale2"></div>
            <div class="fractale3"></div>
            <div class="card-text">
              <p>This Year’s Income</p>
              <h3>{{ 'Rp. ' + this.yearIncome }}</h3>
              <p>{{ this.lastyearIncome }}% Last Year</p>
            </div>
          </div>
        </div>
        <div class="revenue">
          <div class="revenue-graph">
            <div class="line-chart">
              <!-- <line-chart :data="{'2017-01-01': 11, '2017-01-02': 6}"></line-chart> -->
              <line-chart
                :colors="['#00f1ff']"
                :data="cashFlowIn"
                class="line"
              ></line-chart>
            </div>
            <h3>Revenue</h3>
            <div class="legend">
              <div class="lgd1"></div>
              <div class="lgd2"></div>
              <p>This Year</p>
              <p>Last Year</p>
            </div>
            <div class="drp">
              <select v-model="chartRevenue" @change="cashFlow">
                <option value="hours">Hours</option>
                <option value="year">This Year</option>
                <option value="lastYears">Last Year</option>
              </select>
            </div>
          </div>
        </div>
        <div class="recent-order">
          <div class="order-table">
            <div class="tbl-up">
              <h3>Recent Order</h3>
              <div class="drp">
                <select v-model="calendar" @change="ordersGrouping">
                  <option value="day">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                </select>
              </div>
            </div>
            <div class="tbl-down">
              <form action>
                <table border="1">
                  <tr class="hd">
                    <td>
                      <div class="invoice">
                        <h6>INVOICES</h6>
                      </div>
                    </td>
                    <td>
                      <div class="cashier">
                        <h6>CASHIER</h6>
                      </div>
                    </td>
                    <td>
                      <div class="date">
                        <h6>DATE</h6>
                      </div>
                    </td>
                    <td>
                      <div class="ordr">
                        <h6>ORDERS</h6>
                      </div>
                    </td>
                    <td>
                      <div class="amount">
                        <h6>AMOUNT</h6>
                      </div>
                    </td>
                  </tr>
                  <tr v-for="(item, index) in history" :key="index" class="btm">
                    <td>
                      <div>
                        <p>{{ '#' + item.invoice_number }}</p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p>{{ item.cashier_name }}</p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p>{{ item.updated_at }}</p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p>{{ item.orders }}</p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p>{{ item.total_price }}</p>
                      </div>
                    </td>
                  </tr>
                </table>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
    <div class="kontainer-kosong">
      <div class="dummy1">
        <div class="garpu-img">
          <router-link to="/home" class="beranda"></router-link>
        </div>
        <div class="histori-img">
          <router-link to="/history" class="histo"></router-link>
        </div>
        <div id="addClick" class="plus-img" v-on:click="addOn(true)"></div>
      </div>
    </div>
    <!-- -----///////////////////////////////------Add Data menu-----//////////////////////////////////////////////////////////////////----------- -->
    <Addmodal v-if="isHide === true" @addOff="addHide" />
  </b-container>
</template>

<script>
import Left from '../components/_base/sideLeft'
import Addmodal from '../components/_base/addModal'
import axios from 'axios'

export default {
  data() {
    return {
      yearsBtn: false,
      ordersBtn: false,
      todaysBtn: true,
      todayIncome: 0,
      totalOrder: 0,
      yearIncome: 0,
      cashFlowIn: null,
      isHide: false,
      isTrue: null,
      calendar: 'day',
      history: [],
      chartRevenue: 'hours',
      yesterdayIncome: 0,
      lastweekOrder: 0,
      lastyearIncome: 0
    }
  },
  components: {
    Addmodal,
    Left
  },
  created() {
    this.ordersGrouping()
    this.todaysIncome()
    this.totalOrders()
    this.yearsIncome()
    this.cashFlow()
    this.lastYearIncome()
    this.lastDayIncome()
    this.lastWeekOrders()
  },
  methods: {
    lastWeekOrders() {
      axios
        .get('http://127.0.0.1:3001/income/orders')
        .then(response => {
          console.log(response.data.data[0])
          if (response.data.data[0].total_order === 0) {
            const nilai = response.data.data[0].total_order
            const hasil = (this.totalOrder - nilai) * 100
            this.lastweekOrder = hasil
          } else {
            const nilai2 = response.data.data[0].total_order
            const hasil2 = ((this.totalOrder - nilai2) / nilai2) * 100
            this.lastweekOrder = hasil2.toFixed(2)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    lastDayIncome() {
      axios
        .get('http://127.0.0.1:3001/income')
        .then(response => {
          if (response.data.data[0].sub_total === null) {
            const nilai = 0
            const hasil = (this.todayIncome - nilai) * 100
            this.yesterdayIncome = hasil
          } else {
            const nilai2 = response.data.data[0].sub_total
            const hasil2 = ((this.todayIncome - nilai2) / nilai2) * 100
            this.yesterdayIncome = hasil2.toFixed(2)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    lastYearIncome() {
      axios
        .post('http://127.0.0.1:3001/income/income')
        .then(response => {
          if (response.data.data[0].sub_total === null) {
            const nilai = 0
            const hasil = (this.yearIncome - nilai) * 100
            this.lastyearIncome = hasil
          } else {
            const nilai2 = response.data.data[0].sub_total
            const hasil2 = ((this.yearIncome - nilai2) / nilai2) * 100
            this.lastyearIncome = hasil2.toFixed(2)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    cardFunc(val) {
      if (val === 3) {
        this.yearsBtn = true
        this.ordersBtn = false
        this.todaysBtn = false
      } else if (val === 2) {
        this.yearsBtn = false
        this.ordersBtn = true
        this.todaysBtn = false
      } else {
        this.yearsBtn = false
        this.ordersBtn = false
        this.todaysBtn = true
      }
    },
    cashFlow() {
      axios
        .post(
          `http://127.0.0.1:3001/history/revenue?select=${this.chartRevenue}`
        )
        .then(response => {
          // this.cashFlowIn = response.data.data
          const dateData = response.data.data.map(function(e) {
            return e.Date
          })
          const totalData = response.data.data.map(function(e) {
            return e.Total
          })
          // console.log(dateData)
          // console.log(totalData)
          // this.cashFlowIn.data.labels = dateData
          // this.cashFlowIn.data.datasets.data = totalData
          // console.log(this.cashFlowIn.data)

          var arr2 = []
          for (var i = 0; i < dateData.length; i++) {
            arr2.push([`${dateData[i]}`])
          }
          for (var x = 0; x < dateData.length; x++) {
            arr2[x].push(totalData[x])
          }
          this.cashFlowIn = arr2
        })
        .catch(error => {
          console.log(error)
        })
    },
    yearsIncome() {
      axios
        .post('http://127.0.0.1:3001/history')
        .then(response => {
          this.yearIncome = response.data.data[0].ThisYears_Income
        })
        .catch(error => {
          console.log(error)
        })
    },
    totalOrders() {
      axios
        .get('http://127.0.0.1:3001/history/orders')
        .then(response => {
          this.totalOrder = response.data.data[0].Total_Orders
        })
        .catch(error => {
          console.log(error)
        })
    },
    todaysIncome() {
      axios
        .get('http://127.0.0.1:3001/history')
        .then(response => {
          if (response.data.data.length === undefined) {
            this.todayIncome = 0
          } else {
            this.todayIncome = response.data.data[0].todays_income
          }
        })
        .catch(error => {
          console.log('ini error')
          console.log(error)
        })
    },
    ordersGrouping() {
      axios
        .get(`http://127.0.0.1:3001/trigger/invoice?calendar=${this.calendar}`)
        .then(response => {
          this.history = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    addOn(dat) {
      this.isHide = dat
    },
    addHide(dat) {
      this.isHide = dat
    },
    addClick() {
      this.isTrue = true
    },
    cancelClick() {
      this.isTrue = false
    },
    sendClick() {}
  }
}
</script>
<style scoped>
.beranda {
  width: 30px;
  height: 30px;
  background-color: #f24f8b00;
  display: inline-block;
  position: relative;
  z-index: 5;
  top: 0px;
  left: 0px;
}

.menuHome {
  width: 30px;
  height: 30px;
  background-color: #f24f8b00;
  display: inline-block;
  text-indent: -9999px;
  position: relative;
  z-index: 5;
  top: -3px;
  left: -2.5px;
}
.revenue-graph {
  width: 96.78%;
  height: 94%;
  position: absolute;
  top: 4%;
  left: 1.65%;
  border-radius: 7px;
  box-shadow: 7px 7px 20px rgba(43, 43, 43, 0.199);
  border: 1px solid rgba(27, 27, 27, 0.356);
  /* overflow: auto; */
}
.line-chart .line {
  position: relative;
  width: 95% !important;
  height: 250px !important;
  top: 65px;
  left: 15px;
}
.order-table {
  width: 96.78%;
  height: 100%;
  position: absolute;
  display: inline-block;
  top: 6%;
  left: 1.65%;
  border-radius: 7px 7px 0 0;
  box-shadow: 7px 7px 20px rgba(43, 43, 43, 0.199);
  border: 1px solid rgba(136, 136, 136, 0.829);
  overflow: auto;
}
.tbl-up {
  position: relative;
  width: 100%;
  height: 50px;
  position: relative !important;
  display: flex;
}
.tbl-up h3 {
  position: relative;
  font-size: 20px;
  font-family: 'Airbnb Cereal App Medium', sans-serif;
  top: 10px;
  padding-left: 10px;
  width: 200px;
}

.tbl-up .drp {
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  padding-right: 50px;
  height: 100%;
}

.drp select {
  font-size: 10px;
  width: 80px;
  height: 25px;
  background-color: rgb(216, 212, 212);
  border-radius: 6px;
  position: absolute !important;
  right: 30px;
  top: 10px;
  box-shadow: 1px 2px 3px rgba(8, 8, 8, 0.651);
}
.drp select:active {
  background-color: rgb(61, 60, 60);
  color: white;
  box-shadow: 0px 0px 2px 5px rgba(102, 101, 101, 0.582);
}

.tbl-down {
  position: relative;
  width: 100%;
  font-size: 15px;
  font-family: 'Airbnb Cereal App Medium', sans-serif;
  top: 10px;
}

.tbl-down .hd {
  height: 25px;
}
.tbl-down .btm {
  position: relative;
}

.tbl-down .btm p {
  position: relative;
  text-align: center;
  font-size: 10px;
  color: #808080e5;
  top: 0px;
}

.tbl-down td:nth-of-type(1),
.tbl-down td:nth-of-type(2) {
  width: 15%;
}
.tbl-down td:nth-of-type(3) {
  width: 20%;
}
.tbl-down td:nth-of-type(4) {
  width: 30%;
}
.tbl-down td:nth-of-type(5) {
  width: 20%;
}

.hd h6 {
  position: relative;
  text-align: center;
  font-size: 10px;
  margin: auto 0;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.534);
}

.tbl-down table {
  width: 100%;
  position: relative;
  border: 1px solid black;
  border-color: #b1b1b1;
  border-right: none;
  border-left: none;
  border-top: none;
}

@media (max-width: 768px) {
  .line-chart {
    height: 100% !important;
  }
  .line-chart .line {
    position: absolute;
    left: 0 !important;
    text-align: left !important;
  }
  .order-table {
    height: 90% !important;
    position: absolute;
    top: 6%;
  }
  .revenue-graph {
    height: 94%;
    top: 4%;
    left: 1.65%;
  }
  .line-chart .line {
    height: 190px !important;
    top: 45px;
    left: 15px;
  }
  .recent-order {
    position: relative;
    padding: 95px 0;
    top: -60px;
  }
  .drp select {
    font-size: 9px;
    width: 70px;
    height: 20px;
    right: 20px;
    top: 7px;
  }

  .tbl-down {
    top: 5px;
  }
  .tbl-down tr {
    height: 8px;
    width: 100%;
  }

  .btm div p {
    font-size: 9px;
    top: 5px;
  }
  .tbl-up {
    width: 100%;
    height: 35px;
  }

  .tbl-up h3 {
    font-size: 14px;
    top: 8px;
  }

  .hd h6 {
    font-size: 8px;
    margin: auto;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.658);
  }
  .extra2 {
    width: 95%;
    height: 95%;
    position: absolute;
    top: 3.5px;
    left: 6px;
    background: linear-gradient(
      278.29deg,
      #fbb2b4 30.05%,
      rgba(255, 143, 178, 0) 133.19%
    );
    filter: drop-shadow(10px 15px 10px rgba(255, 143, 179, 0.7));
    border-radius: 10px;
  }
  .extra2:hover {
    width: 96%;
    height: 98%;
    border: 1px solid rgba(202, 121, 147, 0.9);
  }
  .extra3 {
    width: 95%;
    height: 95%;
    position: absolute;
    top: 3.5px;
    left: 6px;
    background: linear-gradient(
      278.29deg,
      #29dfff 30.05%,
      rgba(41, 223, 255, 0) 133.19%
    );
    filter: drop-shadow(10px 15px 10px rgba(41, 223, 255, 0.7));
    border-radius: 10px;
  }
  .extra3:hover {
    width: 96%;
    height: 98%;
    border: 1px solid rgba(5, 141, 165, 0.9);
  }
}
</style>
<style scoped src="../assets/css/history.css"></style>
