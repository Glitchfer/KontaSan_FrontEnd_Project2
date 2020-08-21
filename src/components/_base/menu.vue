<template>
  <b-col cols="6" sm="6" md="6" lg="4" class="menu-one b1">
    <div v-on:click="selectMenu()" class="img1 a1">
      <div class="selected">
        <div class="ceklis"></div>
      </div>
      <p class="nama">Espresso</p>
      <p class="harga">Rp. 10.000</p>
    </div>
  </b-col>
</template>

<script>
export default {
  name: 'Menu',
  components: {}
}
</script>

<style scoped>
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

.menu {
  margin: 0;
  padding: 15px;
  display: flex;
  position: relative;
  row-gap: 18px;
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
  background-image: url(../../assets/gambar/img0.png);
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
  /* display: block; */
}

.dark {
  display: none;
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
  /* display: none; */
}
</style>
