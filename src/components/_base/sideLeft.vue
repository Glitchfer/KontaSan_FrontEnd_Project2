<template>
  <b-col cols="0" sm="0" md="1" lg="1" class="side-left">
    <div class="navi-img">
      <div class="fork-img">
        <a href="checkout.html" class="menuhome" target="_self"></a>
      </div>
      <div class="history-img">
        <router-link to="/history" class="histo">history</router-link>
      </div>
      <div id="addclk" class="add-img" v-on:click="addOn()"></div>
    </div>
  </b-col>
</template>

<script>
export default {
  name: 'Left'
}
</script>

<style scoped>
.side-left {
  position: relative;
  display: flex;
  justify-content: center;
}
/*===== Side-Left =====*/
.navi-img {
  width: 40px;
  height: 200px;
  position: relative;
  top: 20px;
}

.fork-img {
  margin: 0 auto;
  width: 35px;
  height: 35px;
  background-image: url(../../assets/gambar/fork2.png);
  background-size: cover;
  cursor: pointer;
  position: relative;
  top: 10px;
}

.history-img {
  margin: 50px auto;
  width: 35px;
  height: 35px;
  background-image: url(../../assets/gambar/clip.png);
  background-size: cover;
  cursor: pointer;
  position: relative;
}
.histo {
  width: 30px;
  height: 35px;
  background-color: #01ff5600;
  display: inline-block;
  text-indent: -9999px;
  position: absolute;
  z-index: 5;
  top: 0px;
  left: 2px;
}

.add-img {
  margin: 0 auto;
  width: 35px;
  height: 35px;
  background-image: url(../../assets/gambar/add2.png);
  background-size: cover;
  cursor: pointer;
  position: relative;
  bottom: 10px;
}
.fork-img:hover,
.history-img:hover,
.add-img:hover {
  width: 30px;
  height: 30px;
}
@media (max-width: 768px) {
  .side-left {
    display: none;
  }
}
</style>
