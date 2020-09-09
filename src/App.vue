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
    ...mapActions(['interceptorRequest'])
  },
  created() {
    this.interceptorRequest()
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>
