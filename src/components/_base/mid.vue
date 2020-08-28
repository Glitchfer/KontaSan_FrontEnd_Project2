<template>
  <b-col cols="12" sm="12" md="8" lg="7" class="mid">
    <b-row cols="12" sm="12" md="12" lg="12" class="menu" v-on:click="selectMenu()">
      <!-- Menu item -->
      <Menu
        v-for="(item, index) in products"
        :key="index"
        v-bind:nama="item.product_name"
        v-bind:harga="'Rp. '+ item.product_price"
        v-bind:image="item.img"
      />
    </b-row>
  </b-col>
</template>

<script>
import axios from 'axios'
import Menu from '../_base/menu'
export default {
  name: 'Mid',
  data() {
    return {
      page: 1,
      limit: 9,
      products: []
    }
  },
  components: {
    Menu
  },
  created() {
    this.get_product()
  },
  methods: {
    // selectMenu() {
    // const pick = document.getElementsByClassName('a1')
    // const select = document.querySelectorAll('.selected')
    // const totalMenu = select.length
    // this.$emit('inc', 1)
    // for (let x = 0; x <= totalMenu - 1; x++) {
    //   pick[x].onclick = function () {
    //     select[x].classList.toggle('dark')
    //   }
    //   }
    // },
    get_product() {
      axios
        .get(
          `http://127.0.0.1:3001/product?page=${this.page}&limit=${this.limit}`
        )
        .then((response) => {
          this.products = response.data.data
          console.log(this.products)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.mid {
  /* klo udah jadi heightnya bisa di hapus */
  height: 630px;
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
