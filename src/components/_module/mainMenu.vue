<template>
  <b-col cols="12" sm="12" md="8" lg="7" class="mid">
    <b-row cols="12" sm="12" md="12" lg="12" class="menu">
      <b-col
        cols="6"
        sm="6"
        md="6"
        lg="4"
        class="menu-one b1"
        v-for="(item, index) in mainOrSrc"
        :key="index"
      >
        <!-- :disabled="product_qty === 1" -->
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
    <form cols="12" sm="12" md="12" lg="12" class="sortMenu" v-on:submit.prevent="dummy">
      <label for="input-ctgr">Sort By</label>
      <select v-model="sortBy" @change="sorting">
        <option value="Home"></option>
        <option value="name">Menu Name</option>
        <option value="food">Konta Meal</option>
        <option value="drink">Konta Drink</option>
        <option value="cake">Konta Sweet</option>
        <option value="cheap">Friendly Pocket</option>
        <option value="expensive">Special Menu</option>
        <option value="recent">Newcomer</option>
      </select>
      <h4>{{ sortBy }}</h4>
      <input type="text" placeholder="Cashier.." v-on:keyup.enter="cashierName" v-model="cashier" />
      <button type="button" class="getInvoice" @click="getData">Get</button>
      <h6>{{ invoice_id }}</h6>
    </form>
  </b-col>
</template>

<script>
import axios from 'axios'
import Pagination from '../_base/pagination'
export default {
  name: 'Main',
  data() {
    return {
      cashier: '',
      invoice_id: '',
      invoiceData: [],
      invoiceMsg: [],
      sortBy: 'Home',
      page: 1,
      limit: 6,
      products: [],
      isActive: null,
      displayOnn: {
        display: 'block'
      },
      displayOff: {
        display: 'none'
      },
      paginationInfo: {}
    }
  },
  props: ['count', 'srcData', 'srcPage', 'srcIsClick', 'valSrc'],
  components: {
    Pagination
  },
  created() {
    this.get_product()
  },
  computed: {
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
    dummy() {},
    cashierName() {
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
    get_product() {
      if (this.sortBy === 'Home') {
        axios
          .get(
            `http://127.0.0.1:3001/product?page=${this.page}&limit=${this.limit}`
          )
          .then((response) => {
            this.products = response.data.data
            this.paginationInfo = response.data.pagination
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        axios
          .get(`http://127.0.0.1:3001/product/sort?sort_by=${this.sortBy}`)
          .then((response) => {
            this.products = response.data.data
            // this.paginationInfo = response.data.pagination
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
    // turnOff the comment to active pagination
    currenPage(value) {
      if (this.srcIsClick === false) {
        this.page = value
        this.get_product(this.page)
      }
    },
    sorting() {
      this.get_product(this.sortBy)
      this.$router.push(`?sort_by=${this.sortBy}`)
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
  max-height: 630px;
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
  position: relative;
  bottom: 0;
  margin-top: 10px;
}
/* ===== Sorting MEnu ====== */
.sortMenu {
  width: 93%;
  height: 30px;
  padding: 0;
  margin: 0 auto;
  position: relative;
  bottom: 0;
}
.sortMenu label {
  padding: 0;
  margin: 0;
  width: 70px;
  border: 1px solid rgba(0, 0, 0, 0.534);
  border-radius: 5px;
  background-color: rgb(250, 250, 250);
  position: absolute;
  right: 160px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.363);
}
.sortMenu select {
  padding: 0;
  margin: 0;
  border: 1px solid rgba(0, 0, 0, 0.61);
  position: absolute;
  right: 15px;
  border-radius: 5px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.363);
}
.sortMenu h4 {
  position: absolute;
  left: 0;
  font-size: 17px;
  color: rgb(70, 70, 70);
  width: 100px;
  height: 25px;
  left: 15px;
  border-radius: 20px;
  background-color: antiquewhite;
  border: 1px solid rgba(0, 0, 0, 0.555);
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.363);
}
/* .sortMenu input button h6 {
} */

.sortMenu input {
  position: absolute;
  width: 80px;
  left: 130px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.363);
  border-radius: 5px;
  border: 1px solid rgb(134, 134, 134);
}
.sortMenu button {
  position: absolute;
  width: 40px;
  left: 215px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.363);
  border: 1px solid rgb(134, 134, 134);
  border-radius: 5px;
}
.sortMenu h6 {
  font-size: 14px;
  position: absolute;
  width: 40px;
  height: 20px;
  left: 260px;
  top: 5px;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.363);
  border: 1px solid rgb(134, 134, 134);
}

@media (max-width: 768px) {
  .sortMenu {
    width: 93%;
  }
}
@media (max-width: 576px) {
  .sortMenu {
    width: 90%;
  }
  .sortMenu label {
    font-size: 12px;
    width: 50px;
    top: 5px;
    right: 80px;
  }
  .sortMenu select {
    width: 60px;
    right: 15px;
    top: 3px;
  }
}
</style>
