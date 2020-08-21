<template>
  <!-- Responsive -->
  <div class="kontainer-kosong">
    <div class="dummy1">
      <div class="garpu-img">
        <a href="checkout.html" class="menuhome" target="_self"></a>
      </div>
      <div class="histori-img">
        <router-link to="/history" class="histo"></router-link>
      </div>
      <div id="addClick" class="plus-img" v-on:click="addOn()"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fixednav'
}
</script>

<style scoped>
/* Responsive 768px */
@media (max-width: 768px) {
  /* Navigation bottom */
  .kontainer-kosong {
    position: fixed;
    width: 99%;
    height: 50px;
    border-radius: 5px;
    border: 1px solid rgba(77, 76, 76, 0.3);
    background-color: rgba(255, 255, 255, 0.644);
    box-shadow: -1px -2px 15px rgba(0, 0, 0, 0.2);
    z-index: 3;
    left: 2.5px;
    bottom: 0px;
  }

  .garpu-img {
    width: 30px;
    height: 30px;
    background-image: url(../../assets/gambar/fork2.png);
    background-size: cover;
    position: absolute;
    left: 45px;
    top: 15%;
    opacity: 0.8;
    cursor: pointer;
  }

  .histori-img {
    width: 30px;
    height: 30px;
    margin: 0 auto;
    background-image: url(../../assets/gambar/clip.png);
    background-size: cover;
    position: relative;
    top: 8px;
    left: -3px;
    opacity: 0.8;
    cursor: pointer;
  }
  .histo {
    width: 30px;
    height: 35px;
    background-color: #01ff5600;
    display: inline-block;
    text-indent: -9999px;
    position: absolute;
    z-index: 5;
    top: -2px;
    left: 0.5px;
  }
  .histo:hover {
    width: 25px;
    height: 30px;
    left: 0px;
  }

  .plus-img {
    width: 30px;
    height: 30px;
    background-image: url(../../assets/gambar/add2.png);
    background-size: cover;
    position: absolute;
    right: 46px;
    top: 15%;
    opacity: 0.8;
    cursor: pointer;
  }

  .garpu-img:hover {
    top: 10px;
    width: 25px;
    height: 25px;
  }

  .histori-img:hover {
    top: 11px;
    width: 25px;
    height: 25px;
  }

  .plus-img:hover {
    top: 10px;
    width: 25px;
    height: 25px;
  }
}
</style>
