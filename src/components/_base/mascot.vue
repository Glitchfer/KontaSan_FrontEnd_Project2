<template>
  <!-- if empty -->
  <b-col cols="12" sm="12" md="12" lg="12" class="mascot" v-bind:style="num > 0 ? isTrue : isFalse">
    <div class="mascot-img"></div>
    <h1 class="empty">Your cart is empty</h1>
    <h6>Please add some item from the menu</h6>
  </b-col>
</template>

<script>
export default {
  name: 'Mascot',
  data() {
    return {
      isTrue: {
        display: 'none'
      },
      isFalse: {
        display: 'block'
      }
    }
  },
  props: ['num']
}
</script>

<style scoped>
/*===== Empty Cart Mascot  ======*/
.mascot {
  margin: 40px auto;
  width: 100%;
  height: 250px;
  position: absolute;
  overflow: auto;
  background-color: #fff;
}

.mascot-img {
  margin: 0 auto;
  width: 200px;
  height: 150px;
  background-image: url(../../assets/gambar/img1.png);
  background-size: cover;
  position: relative;
  bottom: -20px;
}

h1.empty {
  font-size: 30px;
  font-family: 'Airbnb Cereal App Medium', Arial, Helvetica, sans-serif;
  position: relative;
  top: 35px;
}

h6 {
  color: #cecece;
  font-size: 15px;
  font-family: 'Airbnb Cereal App Medium', arial;
  word-spacing: 1px;
  letter-spacing: 2px;
  position: relative;
  top: 30px;
}
</style>

<style scoped>
@media (max-width: 768px) {
  .mascot {
    margin: 0px auto;
    width: 100%;
    height: 300px;
    position: absolute;
    top: -49px;
    left: -2px;
    background-color: #fff;
    border-radius: 0 10px 10px 0;
    box-shadow: inset 0 0 4px 4px rgba(51, 51, 51, 0.473);
  }
}
</style>
