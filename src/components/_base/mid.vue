<template>
  <b-col cols="12" sm="12" md="8" lg="7" class="mid">
    <b-row cols="12" sm="12" md="12" lg="12" class="menu">
      <!-- Menu item -->
      <Menu />
    </b-row>
  </b-col>
</template>

<script>
import Menu from '../_base/menu'
export default {
  name: 'Mid',
  components: {
    Menu
  }
}
</script>

<style scoped>
.mid {
  /* klo udah jadi heightnya bisa di hapus */
  height: 610px;
  padding: 0;
  background-color: rgba(190, 195, 202, 0.3);
  box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.2);
}

.menu {
  margin: 0;
  padding: 15px;
  display: flex;
  position: relative;
  row-gap: 18px;
}
</style>
