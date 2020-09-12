<template>
  <b-container>
    <div v-if="alertOn === true" class="msgAlert">
      <p>{{this.msg}}</p>
    </div>
    <div class="loginPage">
      <div class="loginForm">
        <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
          <input type="email" v-model="form.user_email" placeholder="Email" />
          <br />
          <input type="password" v-model="form.user_password" placeholder="Password" />
          <br />
          <button type="submit">Login</button>
          <button type="reset">Reset</button>
          <a href="#" @click="lupa">Lupa password?</a>
          <div class="register">
            <div @click="onRegBtn" class="regBtn">
              <h6>Register New Account</h6>
            </div>
          </div>
        </b-form>
      </div>
      <div class="appTitle">
        <h1>Kontainer Santai</h1>
        <p>
          KontaSan adalah aplikasi berbasis website yang mempermudah pekerjaan
          anda untuk mengelola data orderan.
        </p>
      </div>
    </div>
    <div v-if="onRegis === true" class="registerPage">
      <Register @onClose="clickClose" />
    </div>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Register from '../auth/register'
export default {
  name: 'Login',
  data() {
    return {
      msg: '',
      alertOn: false,
      form: {
        user_email: '',
        user_password: ''
      },
      onRegis: false
    }
  },
  components: {
    Register
  },
  computed: {
    //   cara ke-1 untuk menggunakan data dari store
    // dataName() {
    //   return this.$store.state.name
    // }
    // cara ke-2
    // ...mapState({ dataName: 'name' })
    // cara ke-3
    ...mapState(['name'])
  },
  methods: {
    ...mapActions(['login']),
    lupa() {
      this.msg = 'Please contact an admin'
      this.alertOn = true
      setTimeout(() => {
        this.alertOn = false
      }, 2000)
    },
    onSubmit() {
      //   console.log(this.form)
      this.login(this.form)
        .then((result) => {
          this.$router.push('/')
        })
        .catch((error) => {
          this.alertOn = true
          setTimeout(() => {
            this.alertOn = false
          }, 2000)
          this.msg = error.data.msg
        })
    },
    onReset() {
      this.form = {
        user_email: '',
        user_password: ''
      }
    },
    clickClose(value) {
      this.onRegis = value
    },
    onRegBtn() {
      this.onRegis = true
    }
  }
}
</script>

<style scoped>
.msgAlert {
  text-align: center;
  padding-top: 25px;
  background-color: rgba(255, 8, 90, 0.616);
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
  margin: 3px auto;
  width: 150px;
}
.registerPage {
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(236, 236, 236, 0.842);
  width: 100%;
  height: 100%;
  z-index: 3;
}
.registerPage h6 {
  position: absolute;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  z-index: 4;
}
.loginPage {
  height: 600px;
  display: flex;
  padding: 0;
  margin: 0;
  position: relative;
}
.loginForm {
  width: 400px;
  height: 350px;
  position: relative;
  margin: auto auto;
  border-radius: 10px;
  box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.329);
  z-index: 2;
}
.appTitle {
  z-index: 1;
  text-align: center;
  margin: auto auto;
  position: absolute;
  width: 100%;
  height: 100%;
}

.loginForm form {
  height: 90%;
  position: relative;
  margin: 20px 20px;
  text-align: center;
}
.loginForm input {
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid rgba(134, 134, 134, 0.596);
}
.loginForm input:nth-of-type(1) {
  margin-bottom: 15px;
  font-size: 18px;
}
.loginForm input:nth-of-type(2) {
  margin-bottom: 15px;
  font-size: 18px;
}
.loginForm button:nth-of-type(1) {
  width: 170px;
  height: 50px;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  border: 1px solid rgba(82, 82, 82, 0.541);
  background-color: #57cad5;
  position: absolute;
  left: 0px;
}
.loginForm button:nth-of-type(2) {
  width: 170px;
  height: 50px;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  border: 1px solid rgba(82, 82, 82, 0.541);
  background-color: #f24f8a;
  position: absolute;
  right: 0px;
}

.loginForm a {
  position: relative;
  top: 65px;
}
.register {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 85px;
  border: 1px solid rgba(82, 82, 82, 0.274);
  border-bottom: none;
  border-left: none;
  border-right: none;
}
.regBtn {
  cursor: pointer;
  color: white;
  background-color: rgb(253, 164, 113);
  padding-top: 18px;
  width: 100%;
  height: 60px;
  border: 1px solid rgba(82, 82, 82, 0.274);
  border-radius: 10px;
  position: relative;
  margin: 0 auto;
  top: 20px;
}
.regBtn:hover {
  background-color: rgb(253, 176, 131);
}
.appTitle h1 {
  top: 10px;
  width: 100%;
  position: absolute;
  color: rgb(253, 176, 131);
  font-size: 50px;
  font-family: 'Airbnb Cereal App Medium', Arial, Helvetica, sans-serif;
}
.appTitle p {
  position: absolute;
  bottom: 0px;
  width: 100%;
  font-size: 20px;
  font-family: 'Airbnb Cereal App Medium', Arial, Helvetica, sans-serif;
}

@media (max-width: 768px) {
}
</style>
