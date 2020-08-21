<template>
  <!-- if empty -->
  <b-col cols="12" sm="12" md="12" lg="12" class="mascot">
    <div class="mascot-img"></div>
    <h1 class="empty">Your cart is empty</h1>
    <h6>Please add some item from the menu</h6>
  </b-col>
</template>

<script>
export default {
  name: 'Mascot'
}
</script>

<style scoped>
/*===== Empty Cart Mascot  ======*/
.mascot {
  margin: 40px auto;
  width: 95%;
  height: 250px;
  position: absolute;
  overflow: auto;
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
