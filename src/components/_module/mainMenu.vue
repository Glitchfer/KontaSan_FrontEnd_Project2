<template>
  <b-col cols="12" sm="12" md="8" lg="7" class="mid">
    <b-row cols="12" sm="12" md="12" lg="12" class="menu">
      <b-col
        cols="6"
        sm="6"
        md="6"
        lg="4"
        class="menu-one b1"
        v-for="(item, index) in products"
        :key="index"
      >
        <div
          class="img1 a1"
          v-bind:style="{backgroundImage: `url('${item.img}')`}"
          v-on:click="selectMenu(index)"
          @click="selectedDisplay(count)"
        >
          <div v-if="count < 1" class="selected">
            <!-- :class="{dark: index === isActive}" -->
            <!-- v-bind:class="{dark: isActive}" -->
            <!-- v-bind:style="isActive === index ? isTrue : isFalse" -->
            <!-- v-bind:style="isActive !== false ? isTrue : isFalse" -->
            <div class="ceklis"></div>
          </div>
          <div v-else class="selected" v-bind:style="isActive === index ? displayOnn : displayOff">
            <div class="ceklis"></div>
          </div>
          <p class="nama">{{item.product_name}}</p>
          <p class="harga">{{'Rp. ' + item.product_price}}</p>
        </div>
      </b-col>
    </b-row>
    <div cols="12" sm="12" md="12" lg="12" class="paginationBorder">
      <Pagination
        v-bind:productInfo="products"
        v-bind:paginationInfo="paginationInfo"
        v-bind:limit="limit"
        v-bind:page="page"
        @crntPage="currenPage"
      />
      <!-- <Pagination2
        v-bind:productInfo="products"
        v-bind:paginationInfo="paginationInfo"
        v-bind:limit="limit"
        v-bind:page="page"
        @crntPage="currenPage"
      />-->
    </div>
  </b-col>
</template>

<script>
import axios from 'axios'
import Pagination from '../_base/pagination'
// import Pagination2 from '../_base/pagination2'
export default {
  name: 'Main',
  data() {
    return {
      page: 1,
      limit: 9,
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
  props: ['count'],
  components: {
    Pagination
    // Pagination2
  },
  created() {
    this.get_product()
  },
  methods: {
    selectMenu(a) {
      this.$emit('increment', 1)
      console.log(a)
      this.isActive = a
    },
    selectedDisplay(c) {
      //   const pick = document.getElementsByClassName('a1')
      //   const select = document.querySelectorAll('.selected')
      //   const totalMenu = select.length
      //   for (let x = 0; x <= totalMenu - 1; x++) {
      //     pick[x].onclick = function () {
      //       select[x].classList.toggle('dark')
      //     }
      //   }
    },
    get_product() {
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
    },
    currenPage(value) {
      this.page = value
      this.get_product(this.page)
      // console.log(value)
    }
  }
}
</script>

<style scoped>
.mid {
  /* klo udah jadi heightnya bisa di hapus */
  /* height: 630px; */
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
  /* background-image: url(../../assets/gambar/img0.png); */
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
  /* display: block; */
}
/* ===== Pagination Border====== */
.paginationBorder {
  height: 40px;
  padding: 0px 25px;
  text-align: center;
  position: relative;
  margin-top: 10px;
}
</style>
