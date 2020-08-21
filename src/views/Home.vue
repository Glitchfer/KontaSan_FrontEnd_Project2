<template>
  <b-container fluid class="bag">
    <Header />
    <b-row class="slot-two">
      <!-- aside-left -->
      <Left />
      <!-- Main -->
      <Mid />
      <!-- aside-right -->
      <Right />
    </b-row>
    <!-- Responsive Navbar-->
    <Fixednav />
    <!-- Add Modal -->
    <Addmodal />
    <!-- Checkout Modal -->
    <Checkoutmodal />
  </b-container>
</template>

<script>
import Header from '../components/_base/Header'
import Left from '../components/_base/sideLeft'
import Mid from '../components/_base/mid'
import Right from '../components/_base/sideRight'
import Fixednav from '../components/_base/fixedNavbar'
import Addmodal from '../components/_base/addModal'
import Checkoutmodal from '../components/_base/checkoutModal'
export default {
  name: 'Home',
  data() {
    return {}
  },
  components: {
    Header,
    Left,
    Mid,
    Right,
    Fixednav,
    Addmodal,
    Checkoutmodal
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>
.bag {
  text-align: center;
}
</style>
