<template>
  <b-col cols="0" sm="0" md="1" lg="1" class="side-left">
    <div class="navi-img">
      <div class="fork-img">
        <router-link to="/home" class="beranda">Home</router-link>
        <!-- <router-link to="/home" class="menuhome">Home</router-link> -->
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
  name: 'Left',
  data() {
    return {}
  },
  components: {},
  computed: {},
  methods: {
    addOn() {
      this.$emit('addShow', true)
      // document.querySelector('#addModal').style.display = 'block'
    }
  }
}
</script>

<style scoped>
.beranda {
  width: 30px;
  height: 30px;
  background-color: #f24f8b00;
  display: inline-block;
  text-indent: -9999px;
  position: relative;
  z-index: 5;
  top: -3px;
  left: -2.5px;
}
.side-left {
  position: relative;
  display: flex;
  justify-content: center;
}
/*===== Side-Left =====*/
.navi-img {
  width: 50px;
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
  width: 45px;
  height: 45px;
  background-image: url(../../assets/gambar/setting.png);
  background-size: cover;
  cursor: pointer;
  position: relative;
  bottom: 20px;
}
.fork-img:hover,
.history-img:hover {
  width: 30px;
  height: 30px;
}
.add-img:hover {
  width: 40px;
  height: 40px;
}

@media (max-width: 768px) {
  .side-left {
    display: none;
  }
}
</style>
