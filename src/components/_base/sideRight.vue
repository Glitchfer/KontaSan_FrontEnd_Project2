<template>
  <b-col cols="5" sm="5" md="3" lg="4" class="side-right">
    <!-- mascot if empty-->
    <Mascot v-bind:num="count" />
    <!-- wishlist  if filled-->
    <Wishlist v-bind:num="count" />
    <!-- checkout if filled-->
    <Checkoutbtn v-bind:num="count" @reset="reset" />
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
  props: ['count'],
  components: {
    Mascot,
    Wishlist,
    Checkoutbtn
  },
  computed: {},
  methods: {
    reset(data) {
      this.$emit('resetCount', data)
    }
  }
}
</script>

<style scoped>
.side-right {
  padding: 0;
  display: flex;
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
