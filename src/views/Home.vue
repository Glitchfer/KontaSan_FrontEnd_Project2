<template>
  <b-container fluid class="bag">
    <Header v-bind:count="num" />
    <b-row class="slot-two">
      <!-- aside-left -->
      <Left />
      <!-- Main -->
      <!-- <Mid /> -->
      <Main v-bind:count="num" @increment="cartCount" />
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
// import Mid from '../components/_base/mid'
import Right from '../components/_base/sideRight'
import Fixednav from '../components/_base/fixedNavbar'
import Addmodal from '../components/_base/addModal'
import Checkoutmodal from '../components/_base/checkoutModal'
import Main from '../components/_module/mainMenu'

export default {
  name: 'Home',
  data() {
    return {
      num: 0
    }
  },
  components: {
    Header,
    Left,
    // Mid,
    Main,
    Right,
    Fixednav,
    Addmodal,
    Checkoutmodal
  },
  computed: {},
  methods: {
    cartCount(inc) {
      this.num += inc
    },
    reset(value) {
      this.num = value
    }
  }
}
</script>

<style scoped>
.bag {
  text-align: center;
}
</style>
