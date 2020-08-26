<template>
  <b-container fluid class="bag">
    <Header
      v-bind:count="num"
      v-bind:srcNextPage="nextPage"
      @isSrcClicked="isSrcClicked"
      @srcValue="srcValue"
      @srcResponse="srcResponse"
    />
    <!-- @searchBy="searchBy" -->
    <b-row class="slot-two">
      <!-- aside-left -->
      <Left @addShow="addOn" />
      <!-- Main -->
      <!-- <Mid /> -->
      <Main
        v-bind:count="num"
        v-bind:srcData="srcResData"
        v-bind:srcPage="srcResPage"
        v-bind:srcIsClick="isSrc"
        v-bind:valSrc="srcVal"
        @increment="cartCount"
        @selectedItem="selectedItem"
        @srcCrnPage="srcCrnPage"
      />
      <!-- aside-right -->
      <Right
        v-bind:count="num"
        @resetCount="reset"
        @checkoutModalOn="checkoutModalOn"
        @increase="inc"
        @decrease="dec"
        v-bind:cartItemMap="cartItemMap"
        v-bind:cartItem="cartItem"
      />
    </b-row>
    <!-- Responsive Navbar-->
    <Fixednav @addShow="addOn" />
    <!-- Add Modal -->
    <Addmodal v-if="isHide === true" @addOff="addHide" />
    <!-- Checkout Modal -->
    <Checkoutmodal
      v-if="checkoutHide === true"
      @reset="reset"
      @checkoutModalOff="checkoutModalOff"
    />
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
// import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      isHide: false,
      checkoutHide: false,
      num: 0,
      isSrc: false,
      srcVal: '',
      srcResData: [],
      srcResPage: [],
      nextPage: 1,
      cartItem: [],
      cartItemMap: []
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
  methods: {
    addOn(dat) {
      this.isHide = dat
    },
    addHide(dat) {
      this.isHide = dat
    },
    checkoutModalOff(val) {
      this.checkoutHide = val
    },
    checkoutModalOn(val) {
      this.checkoutHide = val
    },
    cartCount(inc, index, item) {},
    selectedItem(itemDetail) {
      const setCart = {
        itemDetail,
        qty: 1
      }
      this.cartItem = [...this.cartItem, setCart]
      // this.cartItemMap = this.cartItem.map(function (e) {
      //   return e.itemDetail
      // })
      const data = this.cartItem.find(
        (item) => item.itemDetail.product_id === itemDetail.product_id
      )
      if (this.cartItemMap.length < 1) {
        this.cartItemMap = [...this.cartItemMap, data]
        this.num += 1
      } else if (
        this.cartItemMap.find(
          (item) => item.itemDetail.product_id === data.itemDetail.product_id
        )
      ) {
        return null
      } else {
        this.cartItemMap = [...this.cartItemMap, data]
        this.num += 1
      }
    },
    inc(val) {
      this.num += val
    },
    dec(val) {
      this.num -= val
    },
    reset(zeroCount, zeroCart) {
      this.num = zeroCount
      this.cartItem = zeroCart
      this.cartItemMap = zeroCart
    },
    isSrcClicked(bool) {
      this.isSrc = bool
    },
    srcValue(value) {
      this.srcVal = value
    },
    srcResponse(valA, valB) {
      this.srcResData = valA
      this.srcResPage = valB
    },
    srcCrnPage(nxtPage) {
      this.nextPage = nxtPage
    }
  }
}
</script>

<style scoped>
.bag {
  text-align: center;
}
</style>
