<template>
  <div class="blok1">
    <div class="formRegis">
      <h4>Create new account</h4>
      <p>* (important)</p>
      <h6 @click="close">X</h6>
      <form @submit.prevent="onSubmit">
        <input type="email" placeholder="Email *" /><br />
        <input type="password" placeholder="Password *" /><br />
        <input type="text" placeholder="Role" /><br />
        <input type="text" placeholder="Name *" /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  methods: {
    onSubmit() {
      console.log('register')
    },
    close() {
      this.$emit('onClose', false)
    }
  }
}
</script>

<style scoped>
.blok1 {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
}
.formRegis {
  background-color: white;
  padding: 5px 10px;
  position: relative;
  margin: auto auto;
  width: 450px;
  height: 500px;
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.329);
}
.formRegis h6 {
  color: white;
  padding-top: 3px;
  text-align: center;
  position: absolute;
  top: 2px;
  right: 2px;
  width: 30px;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.459);
  background-color: rgba(70, 70, 70, 0.342);
  box-shadow: inset 1px 2px 10px rgba(70, 69, 69, 0.562);
  border-radius: 25px;
}
.formRegis h6:hover {
  cursor: pointer;
}
.formRegis form {
  position: relative;
  height: 400px;
  text-align: center;
}
.formRegis form input {
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid rgba(134, 134, 134, 0.596);
}
.formRegis form input:nth-of-type(1) {
  margin-bottom: 20px;
  font-size: 18px;
}
.formRegis form input:nth-of-type(2) {
  margin-bottom: 20px;
  font-size: 18px;
}
.formRegis form input:nth-of-type(3) {
  margin-bottom: 20px;
  font-size: 18px;
}
.formRegis form input:nth-of-type(4) {
  margin-bottom: 20px;
  font-size: 18px;
}
.formRegis button:nth-of-type(1) {
  width: 90%;
  height: 70px;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  border: 1px solid rgba(82, 82, 82, 0.541);
  background-color: #06da77;
  position: relative;
  top: 30px;
}
</style>
