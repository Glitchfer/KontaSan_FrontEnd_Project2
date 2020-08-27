<template>
  <!-- Checkout Button -->
  <div class="checkout" v-bind:style="num > 0 ? isTrue : isFalse">
    <div class="btn-gate">
      <div class="check-button">
        <button id="checkout" class="button" v-on:click="checkoutModalOn()">
          Checkout
        </button>
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
      this.$emit('reset', 0, [], '', null)
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
  padding: 0;
  font-size: 20px;
  font-family: 'Airbnb Cereal App Medium', Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  position: relative;
  bottom: 0;
  overflow: auto;
}

.btn-gate {
  position: relative;
  margin: 0 auto;
  width: 90%;
  height: 130px;
  bottom: 0px;
}

.cancel-button {
  position: absolute;
  padding: 0;
  height: 60px;
  margin: 0 auto;
  width: 100%;
  bottom: 0px;
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
</style>
