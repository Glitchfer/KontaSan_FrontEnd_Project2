<template>
  <b-col cols="5" sm="5" md="3" lg="4" class="side-right">
    <!-- mascot if empty-->
    <Mascot />
    <!-- wishlist  if filled-->
    <Wishlist />
    <!-- checkout if filled-->
    <Checkoutbtn />
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
  components: {
    Mascot,
    Wishlist,
    Checkoutbtn
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
