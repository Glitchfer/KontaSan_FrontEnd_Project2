<template>
  <div class="blok1">
    <div v-if="alertOn === true" class="msgAlert">
      <p>{{ this.msg }}</p>
    </div>
    <div class="formRegis">
      <h4>Create new account</h4>
      <p>* (important)</p>
      <h6 @click="close">X</h6>
      <form @submit.prevent="onSubmit">
        <input type="email" v-model="form.user_email" placeholder="Email *" />
        <br />
        <input
          type="password"
          v-model="form.user_password"
          placeholder="Password *"
        />
        <br />
        <input type="text" v-model="form.user_role" placeholder="Role" />
        <br />
        <input type="text" v-model="form.user_name" placeholder="Name *" />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  data() {
    return {
      msg: '',
      alertOn: false,
      form: {
        user_email: '',
        user_password: '',
        user_role: '',
        user_name: ''
      }
    }
  },
  methods: {
    ...mapActions(['regist']),
    onSubmit() {
      this.regist(this.form)
        .then(response => {
          this.$bvToast.toast('Register Success', {
            title: 'Success',
            variant: 'success',
            solid: true
          })
        })
        .catch(error => {
          this.alertOn = true
          setTimeout(() => {
            this.alertOn = false
          }, 2000)
          this.msg = error.data.msg
        })
    },
    close() {
      this.$emit('onClose', false)
    }
  }
}
</script>

<style scoped>
.msgAlert {
  text-align: center;
  padding-top: 0px;
  background-color: rgba(255, 8, 90, 0.568);
  left: 10px;
  top: 10px;
  margin: 0 auto;
  position: absolute;
  width: 200px;
  height: 100px;
  z-index: 5;
  color: white;
  border-radius: 10px;
  box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.329);
}
.msgAlert p {
  margin: 0px auto;
  width: 150px;
}
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
