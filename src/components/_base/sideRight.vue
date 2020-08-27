<template>
  <b-col cols="5" sm="5" md="3" lg="4" class="side-right">
    <!-- mascot if empty-->
    <Mascot v-bind:num="count" />
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
    />
    <!-- checkout if filled-->
    <Checkoutbtn v-bind:num="count" @reset="reset" @checkoutModalOn="modalOn" />
  </b-col>
</template>
<script>
import Mascot from '../_base/mascot'
import Wishlist from '../_base/wishList'
import Checkoutbtn from '../_base/checkoutBtn'

export default {
  name: 'Right',
  data() {
    return {}
  },
  props: ['count', 'cartItem', 'cartItemMap', 'invoiceId', 'ordersId'],
  components: {
    Mascot,
    Wishlist,
    Checkoutbtn
  },
  computed: {},
  methods: {
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
    }
  }
}
</script>

<style scoped>
.side-right {
  padding: 0;
  display: inline-block;
  justify-content: center;
  position: relative;
  box-shadow: -1px 0px 1px rgba(0, 0, 0, 0.1);
}
@media (max-width: 768px) {
  .side-right {
    display: none;
  }
}
</style>
