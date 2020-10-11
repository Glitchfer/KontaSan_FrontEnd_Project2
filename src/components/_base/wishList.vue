<template>
  <!-- if filled -->
  <div class="wishlist" v-bind:style="num > 0 ? isTrue : isFalse">
    <div class="list">
      <!-- selected item -->
      <div class="no_1" v-for="(item, index) in cartItemMap" :key="index">
        <img :src="`${urlAPI}${item.itemDetail.img}`" alt="#" />
        <p>{{ item.itemDetail.product_name }}</p>
        <p>{{ 'Rp. ' + item.itemDetail.product_price * item.qty }}</p>
        <div class="count">
          <button
            :disabled="item.qty === 1"
            @click="decrease(item, item.itemDetail.product_price * item.qty)"
            class="button minus"
          >
            <div class="minus">
              <p>-</p>
            </div>
          </button>
          <div class="count-numb">
            <p>{{ item.qty }}</p>
          </div>
          <button
            @click="increase(item, item.itemDetail.product_price * item.qty)"
            class="button plus"
          >
            <div class="plus">
              <p>+</p>
            </div>
          </button>
        </div>
      </div>
      <div class="text-total">
        <h5 class="total">Total :</h5>
        <h5 class="harga">{{ 'Rp. ' + this.invoiceData.total_price + ' *' }}</h5>
        <p>*Belum termasuk ppn</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Wishlist',
  data() {
    return {
      urlAPI: process.env.VUE_APP_URL,
      isSame: 1,
      itemInfo: [],
      isTrue: {
        display: 'block'
      },
      isFalse: {
        display: 'none'
      },
      total: 0,
      form: {
        product_id: null,
        item_quantity: null,
        invoice_id: null
      },
      orders_id: null,
      invoiceData: {
        invoice_num: null,
        total_price: null,
        tax: null,
        sub_total: null,
        updated_at: null
      }
    }
  },
  props: ['num', 'cartItem', 'cartItemMap', 'invoice', 'orders'],
  components: {},
  computed: {},
  methods: {
    increase(val, sum) {
      const inc = this.cartItemMap.find(
        (item) => item.itemDetail.product_id === val.itemDetail.product_id
      )
      inc.qty += 1
      this.$emit('increase', 1)
      // ===== Data untuk total harga (blm kelar) ===================
      const total = val.itemDetail.product_price * inc.qty
      this.total += total
      console.log(inc.qty)

      // ===== Update Orders ====
      this.form.item_quantity = inc.qty
      this.form.invoice_id = this.invoice
      this.form.product_id = val.itemDetail.product_id
      this.orders_id = this.orders

      setTimeout(() => {
        axios
          .patch(
            // `http://127.0.0.1:3001/trigger/orders/${this.orders_id}`,
            `${this.urlAPI}trigger/orders/${this.orders_id}`,
            this.form
          )
          .then((response) => {})
          .catch((error) => {
            console.log(error.response.data.msg)
          })
      }, 500)

      // ===== Get Orders By Invoice Id====
      setTimeout(() => {
        axios
          // .get(`http://127.0.0.1:3001/trigger/orders/${this.form.invoice_id}`)
          .get(`${this.urlAPI}trigger/orders/${this.form.invoice_id}`)
          .then((response) => {
            this.$emit('ordersData', response.data.data)
          })
          .catch((error) => {
            console.log('get order by invoice id gagal')
            console.log(error.response.data.msg)
          })
      }, 1200)

      // ===== Update Invoice ====
      setTimeout(() => {
        axios
          .patch(
            // `http://127.0.0.1:3001/trigger/invoice/${this.form.invoice_id}`
            `${this.urlAPI}trigger/invoice/${this.form.invoice_id}`
          )
          .then((response) => {
            this.invoiceData.total_price = response.data.data.total_price
            this.invoiceData.tax = response.data.data.tax
            this.invoiceData.sub_total = response.data.data.sub_total
            this.invoiceData.update_at = response.data.data.updated_at
            this.$emit(
              'invoiceData',
              response.data.data,
              response.data.data.total_price,
              response.data.data.tax,
              response.data.data.sub_total,
              response.data.data.updated_at
            )
          })
          .catch((error) => {
            console.log(error)
          })
      }, 1000)
    },
    decrease(val, sum) {
      const dec = this.cartItemMap.find(
        (item) => item.itemDetail.product_id === val.itemDetail.product_id
      )
      dec.qty = dec.qty === 1 ? 1 : (dec.qty -= 1)
      if (this.num === this.cartItemMap.length) {
        this.$emit('decrease', 0)
      } else {
        this.$emit('decrease', 1)
      }
      this.total = this.total === 0 ? 0 : (this.total = this.total - sum)
      console.log(dec.qty)
      this.form.item_quantity = dec.qty
      this.form.invoice_id = this.invoice
      this.form.product_id = val.itemDetail.product_id
      this.orders_id = this.orders

      setTimeout(() => {
        axios
          .patch(
            // `http://127.0.0.1:3001/trigger/orders/${this.orders}`,
            `${this.urlAPI}trigger/orders/${this.orders}`,
            this.form
          )
          .then((response) => {})
          .catch((error) => {
            console.log(error)
          })
      }, 500)

      setTimeout(() => {
        axios
          .patch(
            // `http://127.0.0.1:3001/trigger/invoice/${this.form.invoice_id}`
            `${this.urlAPI}trigger/invoice/${this.form.invoice_id}`
          )
          .then((response) => {
            console.log('patch invoice')
            this.invoiceData.total_price = response.data.data.total_price
            this.invoiceData.tax = response.data.data.tax
            this.invoiceData.sub_total = response.data.data.sub_total
            this.invoiceData.update_at = response.data.data.updated_at
            this.$emit(
              'invoiceData',
              response.data.data,
              response.data.data.total_price,
              response.data.data.tax,
              response.data.data.sub_total,
              response.data.data.updated_at
            )
          })
          .catch((error) => {
            console.log(error.response.data.msg)
          })
      }, 1000)

      // ===== Get Orders By Invoice Id====
      setTimeout(() => {
        axios
          // .get(`http://127.0.0.1:3001/trigger/orders/${this.form.invoice_id}`)
          .get(`${this.urlAPI}trigger/orders/${this.form.invoice_id}`)
          .then((response) => {
            this.$emit('ordersData', response.data.data)
          })
          .catch((error) => {
            console.log(error.response.data.msg)
          })
      }, 1200)
    }
  }
}
</script>

<style scoped>
/* ===== Wishlist ====== */
.wishlist {
  padding: 0;
  width: 100%;
  max-height: 390px;
  position: relative;
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
/* ========== */
.text-total {
  font-family: 'Airbnb Cereal App Medium';
  height: 60px;
  width: 90%;
  margin: 0 auto 0;
  margin-top: 20px;
  position: relative;
}

.text-total p {
  width: 100%;
  font-size: 12px;
  text-align: left;
  position: absolute;
  bottom: -10px;
}

h5.total {
  font-size: 18px;
  text-align: left;
  width: 100%;
  position: absolute;
  bottom: 20px;
}

h5.harga {
  text-align: right;
  font-size: 18px;
  width: 100%;
  position: absolute;
  bottom: 20px;
}

@media (max-width: 768px) {
  .wishlist {
    padding: 0;
    width: 100%;
    max-height: 280px;
    position: relative;
    box-sizing: border-box;
    overflow: auto;
  }
}
</style>
