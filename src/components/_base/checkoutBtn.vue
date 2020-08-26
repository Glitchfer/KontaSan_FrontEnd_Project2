<template>
  <!-- Checkout Button -->
  <div class="checkout" v-bind:style="num > 0 ? isTrue : isFalse">
    <div class="text-total">
      <h5 class="total">Total :</h5>
      <h5 class="harga">Rp. 105.000*</h5>
      <p>*Belum termasuk ppn</p>
    </div>
    <div class="btn-gate">
      <div class="check-button">
        <button id="checkout" class="button" v-on:click="checkoutModalOn()">Checkout</button>
      </div>
      <div class="cancel-button cancelBtn">
        <button v-on:click="cancel()" class="button">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkoutbtn',
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
  computed: {},
  methods: {
    checkoutModalOn() {
      this.$emit('checkoutModalOn', true)
    },
    cancel() {
      this.$emit('reset', 0, [])
    }
  }
}
</script>

<style scoped>
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

/* ===== Checkout ====== */
.checkout {
  width: 100%;
  height: 200px;
  padding: 0;
  font-size: 20px;
  font-family: 'Airbnb Cereal App Medium', Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  position: relative;
  top: 410px;
  overflow: auto;
}

.btn-gate {
  position: relative;
  margin: 0 auto;
  width: 90%;
  height: 133px;
  bottom: 5px;
}

.cancel-button {
  position: absolute;
  padding: 0;
  height: 60px;
  margin: 0 auto;
  width: 100%;
  bottom: 3px;
}

.cancel-button .button {
  width: 100%;
  height: 55px;
  background-color: #f24f8a;
}

.check-button {
  position: absolute;
  padding: 0;
  height: 60px;
  margin: 0 auto;
  width: 100%;
  top: 0;
}

.check-button .button {
  width: 100%;
  height: 55px;
  background-color: #57cad5;
}

.text-total {
  height: 60px;
  width: 90%;
  margin: 0 auto 0;
  position: relative;
}

.checkout p {
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
</style>
