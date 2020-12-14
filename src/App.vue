<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions(['interceptorRequest', 'interceptorResponse'])
  },
  created() {
    this.interceptorRequest()
    this.interceptorResponse()
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,100;1,300;1,400;1,500;1,600;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&display=swap');
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  margin: 0;
  padding: 0;
}
</style>
