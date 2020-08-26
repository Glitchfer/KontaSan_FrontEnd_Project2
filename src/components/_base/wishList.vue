<template>
  <!-- if filled -->
  <div class="wishlist" v-bind:style="num > 0 ? isTrue : isFalse">
    <div class="list">
      <!-- selected item -->
      <!-- <Cartitem/> -->
      <div class="no_1" v-for="(item, index) in cartItemMap" :key="index">
        <img :src="item.itemDetail.img" alt="#" />
        <p>{{item.itemDetail.product_name}}</p>
        <p>{{'Rp. ' + (item.itemDetail.product_price * item.qty)}}</p>
        <div class="count">
          <button @click="decrease(item) " class="button minus">
            <div class="minus">
              <p>-</p>
            </div>
          </button>
          <div class="count-numb">
            <p>{{item.qty}}</p>
          </div>
          <button @click="increase(item)" class="button plus">
            <div class="plus">
              <p>+</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Cartitem from '../_base/cartItem'
export default {
  name: 'Wishlist',
  data() {
    return {
      isSame: 1,
      itemInfo: [],
      isTrue: {
        display: 'block'
      },
      isFalse: {
        display: 'none'
      },
      total: []
    }
  },
  props: ['num', 'cartItem', 'cartItemMap'],
  components: {
    // Cartitem
  },
  computed: {},
  methods: {
    increase(val) {
      const inc = this.cartItemMap.find(
        (item) => item.itemDetail.product_id === val.itemDetail.product_id
      )
      inc.qty += 1
      this.$emit('increase', 1)
      // ===== Data untuk total harga (blm kelar) ===================
      const total = val.itemDetail.product_price * inc.qty
      this.total = [...this.total, total]
      console.log(this.total)
    },
    decrease(val) {
      // ====== cart count masih ada bug saat decrementnya ==========
      const dec = this.cartItemMap.find(
        (item) => item.itemDetail.product_id === val.itemDetail.product_id
      )
      dec.qty = dec.qty === 1 ? 1 : (dec.qty -= 1)
      if (this.num === this.cartItemMap.length) {
        this.$emit('decrease', 0)
      } else {
        this.$emit('decrease', 1)
      }
      // const total = val.itemDetail.product_price * dec.qty
      // this.total = [...this.total, total]
      // console.log(this.total)
    }
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
/* ====================== */
/* Button */
/* default buttun for all start*/
.button {
  padding: 0;
  /* background-color: rgba(130, 222, 58, 0.2); */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}

/*default buttun end*/

.count {
  padding: 0;
  width: 115px;
  height: 35px;
  position: relative;
  left: 92px;
  top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.count .button {
  width: 35px;
  height: 30px;
  color: #82de3a;
}

.count-numb {
  position: relative;
  padding: 0;
  width: 35px;
  height: 30px;
  background-color: #fff;
  border: 2px solid #82de3a;
  border-left: none;
  border-right: none;
}

.count-numb p {
  font-size: 16px !important;
  position: relative;
  left: 14px !important;
  top: 2px !important;
}

.plus div,
.minus div {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(130, 222, 58, 0.2);
  border: 2px solid #82de3a;
  left: 0;
  top: 0;
}

.plus p {
  position: absolute;
  font-family: 'Airbnb Cereal App Medium' !important;
  font-size: 30px !important;
  left: 6px !important;
  top: -12px !important;
}

.minus p {
  position: absolute;
  font-family: 'Airbnb Cereal App Medium' !important;
  font-size: 30px !important;
  left: 9px !important;
  top: -12px !important;
}
/* Button-end */

.no_1 {
  margin: 0 auto 20px;
  width: 99%;
  height: 75px;
  position: relative;
}

.no_1 img {
  width: 75px;
  height: 100%;
  position: absolute;
  left: 0;
}

.no_1 p:nth-of-type(1) {
  font-family: 'Airbnb Cereal App Medium';
  font-size: 20px;
  position: absolute;
  left: 90px;
}

.no_1 p:nth-of-type(2) {
  font-family: 'Airbnb Cereal App Medium';
  font-size: 15px;
  position: absolute;
  right: 3px;
  bottom: -10px;
}
</style>
