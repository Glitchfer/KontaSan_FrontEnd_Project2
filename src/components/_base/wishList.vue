<template>
  <!-- if filled -->
  <div class="wishlist" v-bind:style="num > 0 ? isTrue : isFalse">
    <div class="list">
      <!-- selected item -->
      <Cartitem />
    </div>
  </div>
</template>
<script>
import Cartitem from '../_base/cartItem'
export default {
  name: 'Wishlist',
  data() {
    return {
      isTrue: {
        display: 'block'
      },
      isFalse: {
        display: 'none'
      }
    }
  },
  props: ['num'],
  components: {
    Cartitem
  }
}
</script>

<style scoped>
/* ===== Wishlist ====== */
.wishlist {
  padding: 0;
  width: 100%;
  height: 410px;
  position: absolute;
  box-sizing: border-box;
  overflow: auto;
}

.wishlist .list {
  width: 385px;
  margin: 0 auto;
  padding: 17px 0 0 0;
  position: relative;
  left: 5px;
  display: flex;
  flex-wrap: wrap;
}
</style>
