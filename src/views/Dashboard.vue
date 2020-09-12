<template>
  <div class="home">
    <b-container>
      <a class="logout" @click="onLogout">Logout</a>
      <h4 v-if="user.user_role === 1">Admin</h4>
      <h4 v-else>Cashier</h4>
      <b-card>
        <h1>HELLO {{ userName }}</h1>
      </b-card>
      <h5>Welcome To My</h5>
      <img alt="Vue logo" src="../assets/logo.png" />
      <br />
      <h3>
        KONTASAN PROJECT
        <h6>V.4</h6>
      </h3>
      <br />
      <router-link to="/home">Get Started</router-link>
      <br />
    </b-container>
    <br />
    <div class="userSetting">
      <h6 v-if="user.user_role === 1" @click="userSetting">user setting</h6>
      <br v-else />
    </div>
    <p>
      property in this project such as an image and the other things used for
      practice purpose
    </p>
    <br />
    <footer>
      <p>created by: Arif Rahman</p>
      <p>supported by: @Arkademy</p>
    </footer>
    <div v-if="onSetting === true" class="userPage">
      <div class="userModal">
        <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
          <input type="text" v-model="userId" placeholder="User id" />
          <br />
          <input type="password" v-model="form.user_password" placeholder="User password" />
          <br />
          <input type="text" v-model="form.user_status" placeholder="User status" />
          <br />
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Dashboar',
  data() {
    return {
      onSetting: false,
      userId: null,
      form: {
        user_password: '',
        user_status: null
      }
    }
  },
  components: {},
  computed: {
    ...mapGetters({
      userName: 'getUserName',
      user: 'getDataUser'
    })
  },
  methods: {
    ...mapActions({
      onLogout: 'logout',
      patchUser: 'patchUserData',
      throwUserId: 'throwUserId'
    }),
    userSetting() {
      if (this.onSetting === false) {
        this.onSetting = true
      } else {
        this.onSetting = false
      }
    },
    onSubmit() {
      this.throwUserId(this.userId)
      this.patchUser(this.form)
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    onReset() {
      this.userId = null
      this.form = {
        user_status: null,
        user_password: ''
      }
    }
  }
}
</script>

<style scoped>
.userPage {
  top: 0;
  left: 0;
  display: inline-block;
  position: fixed;
  background-color: rgba(236, 236, 236, 0.842);
  width: 100%;
  height: 100%;
  z-index: 3;
}
.userModal {
  box-sizing: border-box;
  width: 400px;
  height: 285px;
  position: relative;
  margin: 100px auto;
  padding-top: 3px;
  border-radius: 10px;
  box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.329);
  z-index: 2;
  top: 0;
}
.userModal form {
  height: 90%;
  position: relative;
  margin: 20px 20px;
  text-align: center;
}

.userModal input {
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid rgba(134, 134, 134, 0.596);
}
.userModal input:nth-of-type(1) {
  margin-bottom: 15px;
  font-size: 18px;
}
.userModal input:nth-of-type(2) {
  margin-bottom: 15px;
  font-size: 18px;
}
.userModal input:nth-of-type(3) {
  margin-bottom: 15px;
  font-size: 18px;
}
.userModal button:nth-of-type(1) {
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
.userModal button:nth-of-type(2) {
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

.userModal a {
  position: relative;
  top: 65px;
}

.userSetting {
  margin: 0 auto;
  position: relative;
  width: 80px;
  height: 32px;
  z-index: 4;
}
.userSetting h6 {
  position: relative;
  height: 21px;
  color: white;
  font-size: 14px;
  background-color: rgb(6, 170, 170);
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.329);
}
.userSetting h6:hover {
  background-color: rgb(0, 189, 189);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.329);
}
h1 {
  text-transform: uppercase;
}
h4 {
  position: absolute;
  right: 115px;
  z-index: 2;
  font-size: 12px;
  top: 10px;
  border-bottom: 1px solid black;
}
.logout {
  width: 80px;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
  top: 30px;
  position: absolute;
  right: 90px;
  z-index: 2;
  cursor: pointer;
}
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
