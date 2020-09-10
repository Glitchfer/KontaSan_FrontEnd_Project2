<template>
  <b-col cols="12" sm="12" md="8" lg="7" class="mid">
    <b-row cols="12" sm="12" md="12" lg="12" class="menu">
      <form cols="12" sm="12" md="12" lg="12" class="sortMenu" v-on:submit.prevent="dummy">
        <label for="input-ctgr">Sort By</label>
        <select v-model="sortBy" @change="sorting">
          <option value="Home"></option>
          <option value="name">A - Z</option>
          <option value="food">Meal</option>
          <option value="drink">Drink</option>
          <option value="cake">Sweet</option>
          <option value="cheap">Friendly</option>
          <option value="expensive">Special</option>
          <option value="recent">Newcomer</option>
        </select>
        <h4>{{ sortBy }}</h4>
        <input type="text" placeholder="Cashier.." v-on:keyup.enter="cashierName" v-model="cashier" />
        <button type="button" class="getInvoice" @click="getData">Get id</button>
        <h6>{{ invoice_id }}</h6>
      </form>
      <b-col
        cols="6"
        sm="6"
        md="6"
        lg="4"
        class="menu-one b1"
        v-for="(item, index) in mainOrSrc"
        :key="index"
      >
        <div
          class="img1 a1"
          v-bind:style="{ backgroundImage: `url('${item.img}')` }"
          v-on:click="selectMenu(index, item)"
        >
          <div v-if="count < 1" class="selected">
            <!-- :class="{dark: index === isActive}" -->
            <!-- v-bind:style="isActive === index ? isTrue : isFalse" -->
            <div class="ceklis"></div>
          </div>
          <div v-else class="selected" v-bind:style="isActive === index ? displayOnn : displayOff">
            <div class="ceklis"></div>
          </div>
          <p class="nama">{{ item.product_name }}</p>
          <p class="harga">{{ 'Rp. ' + item.product_price }}</p>
        </div>
      </b-col>
    </b-row>
    <div cols="12" sm="12" md="12" lg="12" class="paginationBorder">
      <Pagination
        v-bind:productInfo="menuData"
        v-bind:paginationInfo="btnPage"
        @crntPage="currenPage"
        @nextPage="nxtPage"
      />
    </div>
  </b-col>
</template>

<script>
import axios from 'axios'
import Pagination from '../_base/pagination'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Main',
  data() {
    return {
      cashier: '',
      invoice_id: '',
      invoiceData: [],
      invoiceMsg: [],
      sortBy: 'Home',
      // page: 1,
      // limit: 6,
      // products: [],
      isActive: null,
      displayOnn: {
        display: 'block'
      },
      displayOff: {
        display: 'none'
      }
      // ,
      // paginationInfo: {}
    }
  },
  props: ['count', 'srcData', 'srcPage', 'srcIsClick', 'valSrc'],
  components: {
    Pagination
  },
  created() {
    this.get_product()
    // this.getProduct()
  },
  computed: {
    ...mapGetters({
      limit: 'getLimit',
      page: 'getPage',
      paginationInfo: 'getPaginationInfo',
      products: 'getProduct'
    }),
    mainOrSrc() {
      if (this.srcIsClick === true) {
        return this.srcData
      } else {
        return this.products
      }
    },
    menuData() {
      if (this.srcIsClick === true) {
        return this.srcData
      } else {
        return this.products
      }
    },
    btnPage() {
      if (this.srcIsClick === true) {
        return this.srcPage
      } else {
        return this.paginationInfo
      }
    }
  },
  methods: {
    ...mapActions({ get_product: 'getProducts', throwSorting: 'throwSorting' }),
    ...mapMutations(['setPage']),
    dummy() {},
    cashierName() {
      alert('Request Id by:' + this.cashier)
      this.$emit('cashierName', this.cashier)
    },
    selectMenu(index, item) {
      this.$emit('increment', 1, index, item)
      this.isActive = index
      this.$emit('selectedItem', item)
    },
    checkMenu(data) {
      this.products.some((item) => item.product_id === data.product_id)
    },
    getData() {
      // this.invoice_id = (2)
      axios
        .post('http://127.0.0.1:3001/trigger/invoice')
        .then((response) => {
          alert('Get id success')
          this.invoiceData = response.data
          this.invoiceMsg = response.msg
          this.invoice_id = response.data.data.invoice_id
          this.$emit(
            'invoiceData',
            response.data,
            response.data.data.invoice_id,
            response.data.data.invoice_number
          )
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // get_product() {
    //   if (this.sortBy === 'Home') {
    //     axios
    //       .get(
    //         `http://127.0.0.1:3001/product?page=${this.page}&limit=${this.limit}`
    //       )
    //       .then((response) => {
    //         this.products = response.data.data
    //         this.paginationInfo = response.data.pagination
    //       })
    //       .catch((error) => {
    //         console.log(error)
    //       })
    //   } else {
    //     axios
    //       .get(`http://127.0.0.1:3001/product/sort?sort_by=${this.sortBy}`)
    //       .then((response) => {
    //         this.products = response.data.data
    //         // this.paginationInfo = response.data.pagination
    //       })
    //       .catch((error) => {
    //         console.log(error)
    //       })
    //   }
    // },
    // turnOff the comment to active pagination
    currenPage(value) {
      // this.page = value
      this.setPage(value)
      if (this.srcIsClick === false) {
        this.get_product()
        if (this.sortBy === 'Home') {
          this.$router.push(`?page=${value}`)
        }
        // this.$router.push(`?page=${this.page}`)
      }
    },
    sorting() {
      this.throwSorting(this.sortBy)
      this.get_product()
      if (this.srcIsClick === false) {
        this.$router.push(`?sort_by=${this.sortBy}`)
      }
    },
    nxtPage(value) {
      this.$emit('srcCrnPage', value)
    }
  }
}
</script>

<style scoped>
.mid {
  padding: 0;
  background-color: rgba(190, 195, 202, 0.3);
  box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  display: inline-block;
}

.menu {
  overflow: auto;
  margin: 0;
  max-height: 470px;
  padding: 15px;
  /* display: flex; */
  position: relative;
  row-gap: 18px;
}

.a1 {
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.363);
}

.a1 p {
  border: 2px solid rgba(170, 160, 187, 0.171);
  margin-top: 5px;
  background-color: rgba(247, 225, 255, 0.123);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

p.nama {
  text-align: left;
  width: 100%;
  font-family: 'Airbnb Cereal App Book';
  font-size: 15px;
  line-height: 15px;
  position: relative;
  top: 140px;
}

p.harga {
  text-align: left;
  width: 80%;
  font-family: 'Airbnb Cereal App Medium';
  font-size: 15px;
  font-weight: bold;
  line-height: 15px;
  position: relative;
  top: 125px;
}
.menu-one {
  position: relative;
  padding: 0;
  height: 190px;
  display: flex;
  justify-content: center;
}

.img1 {
  width: 90%;
  height: 74.3%;
  background-size: cover;
  background-repeat: round;
  background-position: 0px 0;
  border-radius: 5px 5px 0 0;
  position: relative;
}

/* ===== Menu selected ====== */
.selected {
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 5px 5px 0 0;
  z-index: 1;
  display: none;
}

.dark {
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 5px 5px 0 0;
  z-index: 1;
  display: block;
}

.ceklis {
  margin: 45px auto;
  width: 50px;
  height: 50px;
  background-image: url(../../assets/gambar/ceklist.png);
  background-size: cover;
  background-repeat: round;
  position: relative;
  z-index: 2;
}
/* ===== Pagination Border====== */
.paginationBorder {
  height: 40px;
  padding: 0px 25px;
  text-align: center;
  position: sticky;
  bottom: 30px;
  margin-top: 10px;
}
/* ===== Sorting MEnu ====== */
.sortMenu {
  width: 97%;
  height: 30px;
  padding: 0;
  margin: 0 auto;
  position: sticky;
  top: 0;
  border-radius: 5px;
  z-index: 3;
  /* bottom: 0; */
}
.sortMenu label {
  padding: 0;
  margin: 0;
  width: 51px;
  height: 22px;
  font-size: 12px;
  border: 1px solid rgba(0, 0, 0, 0.534);
  border-radius: 5px;
  background-color: rgb(250, 250, 250);
  position: absolute;
  right: 80px;
  top: 2px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.363);
}
.sortMenu select {
  padding: 0;
  margin: 0;
  border: 1px solid rgba(0, 0, 0, 0.61);
  position: absolute;
  right: 0px;
  font-size: 14px;
  width: 75px;
  height: 25px;
  border-radius: 5px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.363);
}
.sortMenu h4 {
  position: absolute;
  left: 0;
  font-size: 15px;
  color: rgb(70, 70, 70);
  width: 85px;
  height: 23px;
  left: 0px;
  top: 2px;
  border-radius: 20px;
  background-color: antiquewhite;
  border: 1px solid rgba(0, 0, 0, 0.555);
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.363);
}
.sortMenu input {
  position: absolute;
  width: 70px;
  left: 95px;
  top: 1.5px;
  height: 25px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.363);
  border-radius: 5px;
  border: 1px solid rgb(134, 134, 134);
}
.sortMenu button {
  position: absolute;
  width: 50px;
  height: 25px;
  font-size: 13px;
  top: 1.5px;
  left: 170px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.363);
  border: 1px solid rgb(134, 134, 134);
  border-radius: 5px;
}
.sortMenu h6 {
  font-size: 18px;
  position: absolute;
  width: 40px;
  height: 25px;
  left: 225px;
  top: 1.5px;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.363);
  border: 1px solid rgb(134, 134, 134);
}

@media (max-width: 768px) {
  .sortMenu {
    width: 95%;
  }
  .menu {
    max-height: 412px;
  }
  .sortMenu label {
    right: 80px;
    font-size: 12px;
    width: 60px;
    top: 3px;
  }
  .sortMenu select {
    top: 1.5px;
    width: 70px;
    height: 26px;
    font-size: 12px;
  }
  .sortMenu h4 {
    width: 80px;
    top: 3px;
    height: 22px;
    font-size: 14px;
  }
  .sortMenu input {
    left: 85px;
    height: 25px;
    top: 2px;
  }
  .sortMenu button {
    left: 160px;
    width: 50px;
    height: 25px;
    font-size: 13px;
    top: 2px;
  }
  .sortMenu h6 {
    left: 215px;
    height: 25px;
    font-size: 18px;
    top: 2px;
  }
}
@media (max-width: 576px) {
  .sortMenu {
    width: 95%;
  }
  .sortMenu label {
    font-size: 10px;
    width: 40px;
    right: 65px;
    top: 3px;
  }
  .sortMenu select {
    font-size: 10px;
    width: 60px;
  }
}
</style>
