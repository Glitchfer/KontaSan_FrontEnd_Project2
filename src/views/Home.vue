<template>
  <b-container fluid class="bag">
    <Header
      v-bind:count="num"
      @isSrcClicked="isSrcClicked"
      @srcValue="srcValue"
      @searchBy="searchBy"
    />

    <b-row class="slot-two">
      <!-- aside-left -->
      <Left />
      <!-- Main -->
      <!-- <Mid /> -->
      <Main
        v-bind:count="num"
        v-bind:srcData="srcResData"
        v-bind:srcPage="srcResPage"
        v-bind:srcIsClick="isSrc"
        v-bind:valSrc="srcVal"
        @srcCrnPage="srcCrnPage"
        @increment="cartCount"
      />
      <!-- aside-right -->
      <Right v-bind:count="num" @resetCount="reset" />
    </b-row>
    <!-- Responsive Navbar-->
    <Fixednav />
    <!-- Add Modal -->
    <Addmodal />
    <!-- Checkout Modal -->
    <Checkoutmodal @reset="reset" />
  </b-container>
</template>

<script>
import Header from '../components/_base/Header'
import Left from '../components/_base/sideLeft'
import Right from '../components/_base/sideRight'
import Fixednav from '../components/_base/fixedNavbar'
import Addmodal from '../components/_base/addModal'
import Checkoutmodal from '../components/_base/checkoutModal'
import Main from '../components/_module/mainMenu'
import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      num: 0,
      isSrc: false,
      srcVal: '',
      srcResData: [],
      srcResPage: [],
      page: 1,
      limit: 9
    }
  },
  components: {
    Header,
    Left,
    Main,
    Right,
    Fixednav,
    Addmodal,
    Checkoutmodal
  },
  computed: {},
  created() {
    this.searchBy()
  },
  methods: {
    cartCount(inc, index) {
      // this.num = this.num === 1 ? 1 : this.num + inc
      this.num += inc
      // console.log(inc)
      // console.log(index)
    },
    reset(value) {
      this.num = value
    },
    isSrcClicked(bool) {
      this.isSrc = bool
    },
    srcValue(value) {
      this.srcVal = value
    },
    searchBy(a) {
      axios
        .get(
          `http://127.0.0.1:3001/product/search?name=${a}&page=${this.page}&limit=${this.limit}`
        )
        .then((response) => {
          this.srcResData = response.data.data
          this.srcResPage = response.data.pagination
        })
        .catch((error) => {
          console.log(
            `"error in search function (home component)!!!": ${error}`
          )
        })
    },
    srcCrnPage(nextPage) {
      this.page = nextPage
      // this.searchBy(this.page)
      // console.log(nextPage)
    }
  }
}
</script>

<style scoped>
.bag {
  text-align: center;
}
</style>
