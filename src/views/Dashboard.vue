<template>
  <div class="home">
    <b-container>
      <b-card>
        <h1>WELCOME</h1>
      </b-card>
      <h5>To My</h5>
      <img alt="Vue logo" src="../assets/logo.png" />
      <br />
      <h3>
        KONTASAN PROJECT
        <h6>part 3</h6>
      </h3>
      <br />
      <router-link to="/home">Get Started</router-link>
    </b-container>
    <br />
    <p>property in this project such as an image and the other things used for practice purpose</p>
    <br />
    <footer>
      <p>created by: Arif Rahman</p>
      <p>supported by: @Arkademy</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Dashboar',
  data() {
    return {}
  },
  components: {},
  computed: {},
  methods: {}
}
</script>

<style scoped>
footer {
  background-color: rgba(32, 32, 32, 0.952);
  width: 100%;
  height: 90px;
  color: aliceblue;
  padding: 10px 0px 5px 0;
  box-sizing: border-box;
}
.home {
  margin: 0;
  text-align: center;
  position: relative;
  box-sizing: border-box;
}
footer p:nth-of-type(1) {
  font-size: 14px;
  position: relative;
  top: 20px;
}

footer p:nth-of-type(2) {
  position: absolute;
  font-size: 14px;
  bottom: 1px;
  right: 10px;
}
</style>
