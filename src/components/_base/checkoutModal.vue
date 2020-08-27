<template>
  <!-- Checkout Menu (MODAL) -->
  <div id="checkoutModal" class="checkout-menu chkModal">
    <div class="blocking">
      <span class="exit" v-on:click="checkoutModalOff()">&times;</span>
      <div class="form">
        <form action>
          <table>
            <tr>
              <td style="font-size: 20px;">Checkout</td>
              <td style="font-size: 15px;">Receipt no: #010410919</td>
            </tr>
            <tr>
              <td colspan="2" style="font-size: 12px;">
                Cashier : Pevita Pearce
              </td>
            </tr>
            <tr>
              <td colspan="2"></td>
            </tr>
            <tr style="font-size: 15px;">
              <td>Coffee Latte 1x</td>
              <td>Rp. 15.000</td>
            </tr>
            <tr style="font-size: 15px;">
              <td>Black Forest 1x</td>
              <td>Rp. 30.000</td>
            </tr>
            <tr style=" font-size: 15px;">
              <td>Salmon Truffle Teriyaki 1x</td>
              <td>Rp. 60.000</td>
            </tr>
            <tr style="font-size: 15px;">
              <td>Ppn 10%</td>
              <td>Rp. 10.500</td>
            </tr>
            <tr>
              <td colspan="2"></td>
            </tr>
            <tr style=" font-size: 15px;">
              <td>Total :</td>
              <td>Rp. 115.500</td>
            </tr>
            <tr style=" font-size: 15px;">
              <td>Payment: Cash</td>
              <td></td>
            </tr>
          </table>
        </form>
      </div>
      <div class="btn-gate2">
        <div class="print-button">
          <button class="button" @click="reset()">Print</button>
        </div>
        <p>Or</p>
        <div class="send-button">
          <button class="button" @click="reset()">Send Email</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkoutmodal',
  data() {
    return {
      checkoutData: {
        invoice_number: null,
        cashier_name: '',
        product_name: '',
        product_price: null,
        item_quantity: null,
        total_price: null,
        tax: null,
        sub_total: null,
        date: null
      }
    }
  },
  props: ['dataOrder'],
  components: {},
  methods: {
    checkoutModalOff() {
      this.$emit('checkoutModalOff', false)
    },
    reset() {
      this.$emit('reset', 0, [])
    }
  }
}
</script>

<style scoped>
/* default buttun for all start*/
.button {
  font-family: 'Airbnb Cereal App Medium';
  padding: 0;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}
/*default button end*/
/* ===== Checkout Menu ===== */
.checkout-menu {
  font-family: 'Airbnb Cereal App Medium';
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  display: block;
}

.checkout-menu .blocking {
  background-color: white;
  position: relative;
  border-radius: 5px;
  width: 476px;
  height: 478px;
  margin: 65px auto;
}

/* ===== Checkout Form ===== */
.checkout-menu .blocking .form {
  position: absolute;
  margin-top: 20px;
  width: 92%;
  height: 320px;
  left: 5%;
}

.checkout-menu form {
  font-family: 'Airbnb Cereal App Medium', Arial, sans-serif;
  position: relative;
  padding: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}

table,
tr,
td {
  position: relative;
}

.checkout-menu tr:nth-of-type(1) {
  top: -10px;
}

.checkout-menu tr:nth-of-type(2) {
  top: -10px;
}

.checkout-menu tr:nth-of-type(10) {
  top: -5px;
}

.checkout-menu tr:nth-of-type(9) td:nth-last-of-type(2) {
  text-align: right;
  left: 90px;
}

.checkout-menu td:nth-of-type(1) {
  text-align: left;
  width: 247.92px;
  height: 31.5px;
}

.checkout-menu td:nth-of-type(2) {
  text-align: right;
  width: 190px;
  height: 31.5px;
}

/* ===== Button ====== */
.btn-gate2 {
  position: absolute;
  width: 90%;
  height: 110px;
  left: 5%;
  bottom: 15px;
}

.send-button {
  position: absolute;
  height: 40px;
  width: 100%;
  bottom: 0;
}

.send-button .button {
  font-size: 20px;
  width: 100%;
  height: 40px;
  background-color: #57cad5;
  border-radius: 5px;
}

.print-button {
  position: absolute;
  height: 40px;
  width: 100%;
}

.print-button .button {
  font-size: 20px;
  width: 100%;
  height: 40px;
  background-color: #f24f8a;
  border-radius: 5px;
}

.btn-gate2 p {
  font-size: 15px;
  position: absolute;
  z-index: 2;
  top: 43.5px;
  left: 47.5%;
}

.exit {
  position: absolute;
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  z-index: 78;
  top: -15px;
  right: 0;
}

.exit:hover,
.exit:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
/* ===== REsponsive ====== */
@media (max-width: 768px) {
}

@media (max-width: 576px) {
  .checkout-menu .blocking {
    position: relative;
    width: 340px;
    height: 80%;
    overflow: auto;
  }

  .checkout-menu .blocking .form {
    margin-top: 20px;
    width: 95%;
    height: 330px;
    left: 2.3%;
  }

  /* ====== button ====== */
  .btn-gate2 {
    height: 95px;
    width: 75%;
    left: 12.5%;
    position: absolute;
    top: 370px;
  }

  .send-button {
    height: 35px;
  }

  .send-button .button {
    font-size: 15px;
    height: 35px;
  }

  .print-button {
    height: 35px;
  }

  .print-button .button {
    font-size: 15px;
    height: 35px;
  }

  .btn-gate2 p {
    font-size: 14px;
    top: 36.5px;
    left: 45%;
  }

  /* ===== form checkout- ====== */
  .checkout-menu td:nth-of-type(1) {
    font-size: 13px !important;
    width: 217.92px;
    height: 32px;
  }

  .checkout-menu td:nth-of-type(2) {
    font-size: 13px !important;
    width: 190px;
    height: 32px;
  }

  .checkout-menu tr:nth-of-type(9) td:nth-last-of-type(2) {
    left: 40px;
  }

  .checkout-menu tr:nth-of-type(1) td:nth-last-of-type(1) {
    font-size: 10px !important;
  }

  .checkout-menu tr:nth-of-type(1) td:nth-last-of-type(2) {
    top: 3px;
    font-size: 20px !important;
  }

  .checkout-menu tr:nth-of-type(2) td:nth-last-of-type(1) {
    font-size: 10px !important;
  }

  .checkout-menu tr:nth-of-type(10) {
    top: 10px;
  }
}
</style>
