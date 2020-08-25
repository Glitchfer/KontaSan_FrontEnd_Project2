<template>
  <!-- Header -->
  <b-row class="slot-one">
    <b-col cols="12" sm="12" md="9" lg="8" class="header-one">
      <b-col cols="12" sm="12" md="12" lg="12" class="pocket1">
        <b-col cols="1" sm="1" md="1" lg="1" class="bar">
          <div class="bar-img">
            <router-link to="/home" class="beranda">Home</router-link>
          </div>
        </b-col>
        <b-col cols="10" sm="10" md="10" lg="10" class="title">
          <h1 class="judul">Food Items</h1>
        </b-col>
        <b-col cols="1" sm="1" md="1" lg="1" class="search">
          <div type="submit" class="search-img" @click.prevent="search"></div>
          <input class="srcInput" type="search" placeholder="Search.." v-model="srcInput" />
        </b-col>
      </b-col>
    </b-col>
    <b-col cols="0" sm="0" md="3" lg="4" class="header-cart">
      <b-col cols="12" sm="12" md="12" lg="12" class="pocket1">
        <b-col cols="12" sm="12" md="12" lg="12" class="cart">
          <h3 class="cart">
            Cart
            <b-badge pill variant="info">{{count}}</b-badge>
          </h3>
        </b-col>
      </b-col>
    </b-col>
  </b-row>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'Header',
  data() {
    return {
      srcInput: '',
      isSrcClicked: true,
      page: 1,
      limit: 2
    }
  },
  props: ['count', 'nextPage'],
  computed: {},

  methods: {
    search() {
      this.$emit('srcValue', this.srcInput)
      this.$emit('searchBy', this.srcInput)
      this.$emit('isSrcClicked', this.isSrcClicked)
    }
  }
}
</script>

<style scoped>
.beranda {
  width: 30px;
  height: 30px;
  background-color: #f24f8b00;
  display: inline-block;
  text-indent: -9999px;
  position: relative;
  z-index: 5;
  top: -3px;
  left: -2.5px;
}
.header-one {
  padding: 0;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pocket1 {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-cart {
  padding: 0;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -1px 4px 3px rgba(0, 0, 0, 0.3);
}

/* Title */

.judul {
  font-family: 'Airbnb Cereal App Medium';
  font-size: 25px;
  font-weight: bold;
}

.bar {
  height: 25px;
  left: 20px;
}

.search {
  height: 25px;
  right: 20px;
}

.cart {
  font-family: 'Airbnb Cereal App Medium';
  font-size: 20px;
}

.badge-pill {
  font-size: 15px;
  padding: 0px 3px;
  position: relative;
  top: -1.5px;
}

div.bar,
div.search {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bar-img {
  width: 25px;
  height: 25px;
  background-image: url(../../assets/gambar/3bar.png);
  background-size: cover;
}

.search-img {
  width: 25px;
  height: 25px;
  background-image: url(../../assets/gambar/search.png);
  background-size: cover;
  cursor: pointer;
}
.bar-img:hover,
.search-img:hover {
  width: 20px;
  height: 20px;
}
.beranda:hover {
  width: 25px;
  height: 25px;
}
.srcInput {
  position: absolute;
  width: 210%;
  right: 50px;
  border: 1px solid #ddd;
}
form {
  border: 1px solid black;
  width: 100px;
  height: 30px;
}
@media (max-width: 768px) {
  /* ===== Header ===== */

  .header-one {
    height: 45px;
  }

  .header-cart {
    height: 45px;
  }

  /* title */

  .judul {
    position: relative;
    top: 3px;
  }

  .beranda {
    width: 25px;
    height: 25px;
    left: -3.5px;
    top: -3px;
  }
  .beranda:hover {
    width: 22px;
    height: 22px;
    left: -3px;
  }
  .bar-img:hover,
  .search-img:hover {
    width: 17px;
    height: 17px;
  }
  .bar {
    left: 20px;
    top: 1px;
    height: 20px;
  }

  .search {
    right: 20px;
    top: 1px;
    height: 20px;
  }

  .cart {
    font-size: 20px;
  }

  .cart {
    position: absolute;
    height: 20px;
    width: 100%;
    left: 0px;
    bottom: -4px;
  }

  .pocket1 h3 {
    width: 90%;
    text-align: left;
    font-size: 18px;
    position: relative;
    left: 3%;
    top: 2px;
  }
  .bar-img {
    width: 20px;
    height: 20px;
  }

  .search-img {
    width: 20px;
    height: 20px;
  }
}
@media (max-width: 576px) {
}
</style>
