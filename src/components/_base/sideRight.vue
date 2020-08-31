<template>
  <b-col cols="12" sm="10" md="3" lg="4" class="side-right">
    <div class="cartBtn" @click="cartOn()"></div>
    <!-- mascot if empty-->
    <Mascot v-bind:num="count" v-if="displayON === true" />
    <!-- wishlist  if filled-->
    <Wishlist
      v-bind:num="count"
      v-bind:cartItemMap="cartItemMap"
      v-bind:cartItem="cartItem"
      v-bind:invoice="invoiceId"
      v-bind:orders="ordersId"
      @increase="inc"
      @decrease="dec"
      @ordersData="ordersData"
      @invoiceData="checkoutData"
      v-if="displayON === true"
    />
    <!-- checkout if filled-->
    <Checkoutbtn
      v-bind:num="count"
      @reset="reset"
      @checkoutModalOn="modalOn"
      v-if="displayON === true"
    />
  </b-col>
</template>
<script>
import Mascot from '../_base/mascot'
import Wishlist from '../_base/wishList'
import Checkoutbtn from '../_base/checkoutBtn'

export default {
  name: 'Right',
  data() {
    return {
      displayON: false
    }
  },
  props: [
    'cartOpen',
    'count',
    'cartItem',
    'cartItemMap',
    'invoiceId',
    'ordersId'
  ],
  components: {
    Mascot,
    Wishlist,
    Checkoutbtn
  },
  computed: {},
  methods: {
    cartOn() {
      this.displayOn = false
      switch (this.displayON) {
        case false:
          this.displayON = true
          break
        case true:
          this.displayON = false
          break
      }
    },
    reset(zeroCount, zeroCart, string, nully) {
      this.$emit('resetCount', zeroCount, zeroCart, string, nully)
      this.countReset = zeroCount
    },
    modalOn(val) {
      this.$emit('checkoutModalOn', val)
    },
    inc(val) {
      this.$emit('increase', val)
    },
    dec(val) {
      this.$emit('decrease', val)
    },
    ordersData(data) {
      this.$emit('dataOrders', data)
    },
    checkoutData(data, totalPrice, tax, subTotal, date) {
      this.$emit('invoiceData', data, totalPrice, tax, subTotal, date)
    }
  }
}
</script>

<style scoped>
.cartBtn {
  position: absolute;
  display: inline-block;
  text-align: center;
  top: -59px;
  left: 40%;
  width: 20%;
  height: 35px;
  border: 1px solid rgb(54, 85, 75);
  border-radius: 10px;
  cursor: pointer;
  box-shadow: -1px 2px 1px rgba(0, 0, 0, 0.3);
}
.cartBtn:hover {
  background-color: rgba(127, 255, 212, 0.089);
  border: 1px solid rgba(36, 82, 66, 0.712);
  border-radius: 5px 5px 25px 25px;
}
.side-right {
  display: inline-block;
  padding: 0;
  justify-content: center;
  position: relative;
  box-shadow: -1px 0px 1px rgba(0, 0, 0, 0.1);
}
@media (max-width: 992px) {
  .cartBtn {
    width: 35%;
    left: 33%;
  }
}
@media (max-width: 768px) {
  .cartBtn {
    display: block;
    position: absolute;
    z-index: 5;
    width: 83px;
    height: 35px;
    top: -91px;
    left: 8px;
    border-radius: 5px 5px 20px 20px;
    background-color: rgba(127, 255, 212, 0);
    cursor: pointer;
    border: none;
    box-shadow: none;
  }
  .cartBtn:hover {
    background-color: rgba(255, 255, 255, 0);
    border: none;
    border-radius: none;
  }
  .side-right {
    display: block;
    background-color: rgb(255, 255, 255);
    position: absolute;
    z-index: 3;
    left: 16px;
    top: 140px;
    width: 330px;
    border-radius: 0 0 10px 10px;
    border: 2px solid rgba(104, 103, 103, 0.644);
    box-shadow: -1px 0px 1px rgba(0, 0, 0, 0.1);
  }
}
</style>
