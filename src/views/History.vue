<template>
  <b-container fluid class="bag">
    <b-row class="slot-one">
      <b-col cols="12" sm="12" md="12" lg="12" class="header-one">
        <b-col cols="1" sm="1" md="1" lg="1" class="bar">
          <div class="bar-img">
            <router-link to="/home" class="beranda"></router-link>
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
      <main class="mid col-12 col-sm-11 col-md-11 col-lg-11">
        <div class="card-label">
          <div class="extra-card">
            <div class="m">
              <div class="todays-income2">
                <div class="fractale1"></div>
                <div class="card-text">
                  <p>Today's Income</p>
                  <h3>Rp. 1.000.000</h3>
                  <p>+2% Yesterday</p>
                </div>
              </div>
            </div>
            <div class="n">
              <div class="orders2">
                <div class="fractale1"></div>
                <div class="card-text">
                  <p>Orders</p>
                  <h3>3.270</h3>
                  <p>+5% Last Week</p>
                </div>
              </div>
            </div>
            <div class="k">
              <div class="years-income2">
                <div class="fractale1"></div>
                <div class="card-text">
                  <p>This Year’s Income</p>
                  <h3>Rp. 100.000.000.000</h3>
                  <p>+10% Last Year</p>
                </div>
              </div>
            </div>
            <div class="l">
              <div class="extra">
                <div class="fractale1"></div>
                <div class="fractale2"></div>
                <div class="fractale3"></div>
                <div class="card-text">
                  <p>This Year’s Income</p>
                  <h3>Rp. 100.000.000.000</h3>
                  <p>+10% Last Year</p>
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
              <h3>Rp. 1.000.000</h3>
              <p>+2% Yesterday</p>
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
              <h3>3.270</h3>
              <p>+5% Last Week</p>
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
              <h3>Rp. 100.000.000.000</h3>
              <p>+10% Last Year</p>
            </div>
          </div>
        </div>
        <div class="revenue">
          <div class="revenue-graph">
            <div class="line-chart">
              <canvas id="myChart"></canvas>
            </div>
            <h3>Revenue</h3>
            <div class="legend">
              <div class="lgd1"></div>
              <div class="lgd2"></div>
              <p>This Year</p>
              <p>Last Year</p>
            </div>
            <div class="drp">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >Year</button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">2020</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="recent-order">
          <div class="order-table">
            <div class="tbl-up">
              <h3>Recent Order</h3>
              <div class="drp">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >Today</button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">09/8/2020</a>
                  </div>
                </div>
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
                  <tr class="btm">
                    <td>
                      <div>
                        <p>#10928</p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p>Cashier 1</p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p>08 August 2020</p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p>Chicken Katsu Dabu-Dabu</p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p>Rp. 60.000</p>
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

export default {
  data() {
    return {
      isHide: false,
      isTrue: null
    }
  },
  components: {
    Addmodal,
    Left
  },
  methods: {
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
</style>
<!--<style scoped src="../assets/css/home.css">
</style>-->
<style scoped src="../assets/css/homeselect.css">
</style>
<!--<style scoped src="../assets/css/checkout.css">
</style>-->
<style scoped src="../assets/css/adddata.css">
</style>
<style scoped src="../assets/css/history.css">
</style>
