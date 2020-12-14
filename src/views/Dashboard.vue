<template>
  <div class="home">
    <div class="background">
      <img class="vectr" src="../assets/gambar/cocktailVector4.png" alt="" />
      <div class="vectr2">
        <img src="../assets/gambar/cocktailVectorImg1.png" alt="" />
      </div>
    </div>
    <main>
      <div class="kontaLogo">
        <a href="/">
          <div>
            <img src="../assets/gambar/img1.png" alt="" />
          </div>
          <h5>Kontasan</h5>
        </a>
      </div>
      <!-- <b-card class="helloCard" style="background: none;">
        <h1>HELLO {{ userName }}</h1>
      </b-card> -->
      <div v-if="alertOn === true" class="msgAlert">
        <p>{{ this.msg }}</p>
      </div>
      <b-container fluid class="bContainer">
        <div class="leftMain">
          <h2>
            Kontainer <br />
            Santai
          </h2>
          <p>
            Kontasan adalah sebuah aplikasi point of sale berbasis website yang
            digunakan untuk membantu kasir dalam mengelola orderan. Lalu-lintas
            data yang terjadi pada aplikasi ini menggunakan database MySql.
          </p>
          <router-link to="/home">Get Started</router-link>
        </div>
      </b-container>
    </main>
    <button class="btnAdminSetting" @click="adminSetting()">
      <img src="../assets/gambar/setting.png" alt="" />
    </button>
    <nav class="adminSetting">
      <div class="account">
        <h4 v-if="user.user_role === 1">Admin</h4>
        <h4 v-else>Public</h4>
        <a v-if="user.user_role" class="logout" @click="onLogout">Logout</a>
      </div>
      <div class="userSetting">
        <h6
          v-if="user.user_role === 1 && onCategory === false"
          @click="userSetting"
        >
          User setting
        </h6>
        <br v-else />
      </div>
      <div class="categorySetting">
        <h6
          v-if="user.user_role === 1 && onSetting === false"
          @click="categorySetting"
        >
          Category setting
        </h6>
      </div>
    </nav>
    <footer>
      <p>
        Created by
        <a href="https://www.instagram.com/ar.if.rh/" target="_blank">Arrah</a>,
        2020.
      </p>
      <p>
        property in this project such as an image and the other things used for
        practice purpose
      </p>
      <p>
        <a href="https://www.freepik.com/psd/template"
          >Template psd created by freepik - www.freepik.com</a
        >
      </p>
    </footer>
    <div class="userManage">
      <div v-if="onSetting === true" class="userPage">
        <div class="userModal">
          <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
            <input type="text" v-model="userId" placeholder="User id" />
            <br />
            <input
              type="password"
              v-model="form.user_password"
              placeholder="User password"
            />
            <br />
            <input
              type="text"
              v-model="form.user_status"
              placeholder="User status"
            />
            <br />
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </b-form>
        </div>
      </div>
      <div v-if="onCategory === true" class="categoryPage">
        <div class="categoryModal">
          <b-form>
            <div class="categoryJudul">
              <label>Id</label>
              <label>Category</label>
              <label>Status</label>
            </div>
            <div
              v-for="(item, index) in categoryData"
              :key="index"
              class="categoryData"
            >
              <input disabled type="text" :placeholder="item.category_id" />
              <input
                :disabled="btnChange === true"
                type="text"
                :placeholder="item.category_name"
                v-model="nameUpdate"
              />
              <input
                :disabled="isStatus === true"
                type="text"
                :placeholder="'Active'"
              />
              <select :disabled="btnChange === true">
                <option value="1">Active</option>
                <option value="0">Inactive</option>
              </select>
              <button
                v-if="btnSetting !== 'add'"
                :disabled="btnSetting !== 'update'"
                type="button"
                @click="onUpdate(item.category_id)"
              >
                u
              </button>
              <button
                v-if="btnSetting !== 'add'"
                :disabled="btnSetting !== 'delete'"
                type="button"
                @click="onDelete(item.category_id)"
              >
                d
              </button>
            </div>
            <div
              v-if="isAdd === true && btnSetting === 'add'"
              class="tambahData"
            >
              <input
                type="text"
                :placeholder="'Category..'"
                v-model="add.category_name"
              />
              <button type="button" @click="onCreate">Add</button>
            </div>
            <div
              v-if="isUpdate === true && btnSetting === 'update'"
              class="tambahData"
            >
              <input
                type="text"
                :placeholder="'Type..'"
                v-model="add.category_name"
              />
              <button
                style="background-color: red;"
                type="button"
                @click="resetName"
              >
                Reset
              </button>
            </div>
          </b-form>
          <button
            v-if="btnSetting === 'add'"
            class="addData"
            type="button"
            @click="onAdd"
          >
            Create category
          </button>
          <button
            v-if="btnSetting === 'update'"
            class="addData"
            type="button"
            @click="btnUpdate"
          >
            Update
          </button>
          <button
            v-if="btnSetting === 'delete'"
            class="addData"
            type="button"
            @click="btnDelete"
          >
            Delete
          </button>
          <select class="btnSetting" v-model="btnSetting">
            <option value="add">Add</option>
            <option value="update">Update</option>
            <option value="delete">Delete</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Dashboar',
  data() {
    return {
      urlAPI: process.env.VUE_APP_URL,
      btnSetting: 'add',
      btnChange: true,
      isStatus: true,
      isUpdate: false,
      isDelete: false,
      nameUpdate: '',
      category_id: null,
      add: {
        category_name: ''
      },
      isAdd: false,
      msg: '',
      alertOn: false,
      onCategory: false,
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
      user: 'getDataUser',
      categoryData: 'getCategoryData'
    })
  },
  created() {
    this.getCategory()
    if (this.userId !== null) {
      axios
        .get(`${this.urlAPI}product?page=1&limit=10`)
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  methods: {
    ...mapActions({
      onLogout: 'logout',
      patchUser: 'patchUserData',
      throwUserId: 'throwUserId',
      getCategoryData: 'getCategory',
      categoryAdd: 'categoryAdd',
      updateCategory: 'updateCategory',
      deleteCategory: 'deleteCategory'
    }),
    adminSetting() {
      var style = document.querySelector('.adminSetting').style.transform
      if (style === '' || style === 'translateX(100%)') {
        document.querySelector('.adminSetting').style.transform =
          'translateX(0)'
      } else {
        document.querySelector('.adminSetting').style.transform =
          'translateX(100%)'
      }
    },
    getCategory() {
      this.getCategoryData()
        .then(response => {})
        .catch(error => {
          console.log(error)
        })
    },
    onAdd() {
      console.log(this.categoryData)
      if (this.isAdd === false) {
        this.isAdd = true
      } else {
        this.isAdd = false
      }
    },
    onCreate() {
      if (this.add.category_name.length < 1) {
        this.alertOn = true
        setTimeout(() => {
          this.alertOn = false
        }, 2000)
        this.msg = 'Form must be filled'
      } else {
        this.categoryAdd(this.add)
          .then(response => {
            this.getCategoryData()
          })
          .catch(error => {
            console.log(error.data.msg)
          })
      }
    },
    onUpdate(val) {
      if (this.isUpdate === false) {
        this.isUpdate = true
        this.category_id = val
      } else {
        this.isUpdate = false
        this.category_id = null
      }
    },
    onDelete(val) {
      this.deleteCategory(val)
        .then(response => {
          console.log('Delete success')
          this.getCategoryData()
        })
        .catch(error => {
          console.log(error.data.msg)
        })
    },
    btnUpdate() {
      if (this.add.category_name.length < 1) {
        this.alertOn = true
        setTimeout(() => {
          this.alertOn = false
        }, 2000)
        this.msg = 'Form must be filled'
      } else {
        const arr = [this.category_id, this.add]
        this.updateCategory(arr)
          .then(response => {
            console.log('Update success')
            this.getCategoryData()
          })
          .catch(error => {
            console.log(error.data)
          })
      }
    },
    resetName() {
      this.add.category_name = ''
    },
    btnDelete() {},
    userSetting() {
      if (this.onSetting === false) {
        this.onSetting = true
      } else {
        this.onSetting = false
      }
    },
    categorySetting() {
      if (this.onCategory === false) {
        this.onCategory = true
      } else {
        this.onCategory = false
      }
    },
    onSubmit() {
      this.throwUserId(this.userId)
      this.patchUser(this.form)
        .then(response => {
          console.log('Update success')
        })
        .catch(error => {
          this.alertOn = true
          setTimeout(() => {
            this.alertOn = false
          }, 2000)
          this.msg = error.data.msg
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
.adminSetting {
  width: 150px;
  height: 200px;
  background: #eeeeee;
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 4;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 10px;
  border-radius: 10% 0 0 10%;
  transform: translateX(100%);
}
.account {
  position: relative;
  top: -30px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* text-align: end; */
  /* padding: 5px 70px 5px 15px; */
  width: 100%;
  height: 70px;
  border-bottom: 1px solid rgba(126, 126, 126, 0.267);
}

.account h4 {
  font-size: 16px;
  width: 70px;
  border-bottom: 1px solid black;
  margin: 1px 0;
}
.logout {
  margin-top: 1px;
  border: 1px solid black;
  font-size: 18px;
  width: 60px;
  border-radius: 5px;
  color: #ff00b3;
  cursor: pointer;
}
.btnAdminSetting {
  border: 1px solid rgba(0, 0, 0, 0);
  position: absolute;
  top: 10px;
  right: 20px;
  width: 35px;
  height: 30px;
  background: none;
  outline: none;
  z-index: 5;
}
.btnAdminSetting img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(1.5);
}
.btnAdminSetting img:hover {
  transform: scale(1.3);
}

.kontaLogo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 150px;
}
.kontaLogo a {
  position: relative;
  width: 100px;
  z-index: 1;
  text-decoration: none;
  height: 96px;
}
.kontaLogo h5 {
  position: relative;
  top: -15px;
  left: 0;
  font-family: 'Lobster Two', cursive;
  font-style: italic;
  font-size: 22px;
  color: #fdd682;
  border-top: 1px solid white;
  filter: drop-shadow(5px 5px 2px #0000009d);
}
.kontaLogo div {
  position: relative;
  width: 100%;
  height: 80px;
  padding: 0 5px;
}
.kontaLogo div img {
  position: relative;
  top: -5px;
  width: 80px;
  height: 85px;
  animation: icon 2s infinite alternate ease-in-out forwards;
  filter: drop-shadow(5px 5px 2px #0000009d);
}
@keyframes icon {
  0% {
    width: 80px;
    height: 85px;
  }
  100% {
    width: 60px;
    height: 65px;
  }
}

.helloCard {
  position: absolute;
  top: 25%;
  right: 5px;
  border: none;
}
.bContainer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}
.bContainer .leftMain {
  width: 50%;
  text-align: left;
  padding: 190px 20px 20px 130px;
}
.bContainer .leftMain h2 {
  font-family: 'Lobster', cursive;
  /* font-family: 'Lobster Two', cursive; */
  font-size: 68px;
  font-weight: 500;
  line-height: 60px;
  height: 140px;
  color: #f24f8a;
}
.bContainer .leftMain p {
  font-family: 'Josefin Sans', sans-serif;
  color: #2a565a;
  height: 120px;
}
.bContainer .leftMain p {
  font-family: 'Josefin Sans', sans-serif;
  color: #2a565a;
  height: 120px;
}
.bContainer .leftMain a {
  font-family: 'Josefin Sans', sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  color: #252525c9;
  background: #ff77a9;
  padding: 15px 20px;
  text-decoration: none;
  transition: 0.3s;
}
.bContainer .leftMain a:hover {
  color: #ffffffc9;
  background: #fda471;
  border-radius: 10px;
}
.rightMain {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  /* text-align: end; */
  padding: 5px 70px 5px 15px;
  width: 50%;
  height: 50px;
}

.rightMain h4 {
  font-size: 12px;
  width: 60px;
  border-bottom: 1px solid black;
  margin: 1px 0;
}
.logout {
  margin-top: 1px;
  border: 1px solid black;
  font-size: 14px;
  width: 60px;
  border-radius: 5px;
  color: #ff00b3;
  cursor: pointer;
}
.vectr {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
}
.vectr2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  /* background-image: url(../assets/gambar/cocktailVectorImg.png); */
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  z-index: 0;
}
.vectr2 img:nth-child(1) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}
.vectr2 img:nth-child(2) {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 700px;
  height: 550px;
}
.btnSetting {
  position: relative;
  top: 2px;
  margin-left: 5px;
  width: 20px;
}
.tambahData {
  width: 100%;
  height: 50px;
  background-color: rgba(151, 148, 144, 0.712);
  position: sticky;
  border-radius: 5px;
  bottom: 0;
  margin-top: 20px;
  text-align: left;
  padding-left: 5px;
  padding-top: 5px;
  font-family: 'Airbnb Cereal App Medium', sans-serif;
}
.tambahData input {
  margin-right: 30px;
  height: 40px;
  width: 220px;
  position: relative;
  border: 1px solid black;
  border-radius: 5px;
}
.tambahData button {
  background-color: rgb(2, 211, 211);
  border: 1px solid rgb(0, 0, 0);
  width: 80px;
  height: 40px;
  color: white;
  border-radius: 10px;
}
.tambahData button:hover {
  background-color: rgb(7, 231, 231);
}
.addData {
  position: relative;
  color: rgb(255, 255, 255);
  font-size: 14px;
  background-color: #fcb347;
  height: 30px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.329);
  border: 1px solid rgb(255, 255, 255);
}
.addData:hover {
  background-color: #ffbf5f;
}
.categoryData {
  position: relative;
  text-align: left;
  display: inline-block;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid rgb(94, 94, 94);
  font-family: 'Airbnb Cereal App Medium', sans-serif;
}
.categoryData input:nth-of-type(1) {
  text-align: center;
  position: relative;
  width: 50px;
  font-size: 12px;
  color: rgba(102, 101, 101, 0.801);
}
.categoryData input:nth-of-type(2) {
  text-align: center;
  position: relative;
  width: 130px;
  font-size: 12px;
  color: rgba(102, 101, 101, 0.801);
}
.categoryData input:nth-of-type(3) {
  text-align: center;
  position: relative;
  width: 90px;
  font-size: 12px;
  color: rgba(102, 101, 101, 0.801);
}
.categoryData select {
  text-align: center;
  position: relative;
  width: 20px;
  height: 23.5px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.801);
}
.categoryData button:nth-of-type(1) {
  text-align: center;
  position: relative;
  width: 20px;
  font-size: 8px;
  border: 1px solid black;
  border-radius: 25px;
  margin-left: 10px;
  bottom: 1px;
  background-color: rgb(0, 255, 0);
  color: rgb(0, 0, 0);
}
.categoryData button:nth-of-type(2) {
  text-align: center;
  position: relative;
  width: 20px;
  font-size: 8px;
  border: 1px solid black;
  border-radius: 25px;
  margin-left: 5px;
  bottom: 1px;
  background-color: red;
  color: white;
}
.categoryData button:nth-of-type(1):hover {
  background-color: rgb(61, 248, 61);
}
.categoryData button:nth-of-type(2):hover {
  background-color: rgb(253, 68, 68);
}
.categoryJudul {
  position: relative;
  text-align: left;
  display: inline-block;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid rgb(94, 94, 94);
  font-family: 'Airbnb Cereal App Medium', sans-serif;
}
.categoryJudul label:nth-of-type(1) {
  text-align: center;
  position: relative;
  width: 50px;
  font-size: 14px;
}
.categoryJudul label:nth-of-type(2) {
  text-align: center;
  position: relative;
  width: 130px;
  font-size: 14px;
}
.categoryJudul label:nth-of-type(3) {
  text-align: center;
  position: relative;
  width: 90px;
  font-size: 14px;
}
.categorySetting {
  position: relative;
  width: 90px;
  text-align: center;
  z-index: 4;
}
.categorySetting h6 {
  margin: 0;
  position: relative;
  color: rgb(255, 255, 255);
  font-size: 14px;
  background-color: #f24f8a;
  padding: 5px 5px;
  cursor: pointer;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.329);
  border-radius: 5px;
}
.categorySetting h6:hover {
  background-color: #f75e96;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.664);
}
.categoryPage {
  top: 0;
  left: 0;
  display: inline-block;
  position: fixed;
  background-color: rgba(214, 214, 214, 0.842);
  width: 100%;
  height: 100%;
  z-index: 2;
}
.categoryModal {
  box-sizing: border-box;
  width: 400px;
  height: 285px;
  position: relative;
  margin: 100px auto;
  padding-top: 3px;
  border-radius: 10px;
  background-color: rgba(255, 253, 253, 0.842);
  box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.329);
  z-index: 2;
  top: 0;
}
.categoryModal form {
  border: 1px solid black;
  height: 70%;
  position: relative;
  margin: 20px 10px;
  text-align: center;
  overflow: auto;
  border-radius: 5px;
  box-shadow: inset 1px 1px 12px rgba(0, 0, 0, 0.329);
}
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
  width: 90px;
  position: relative;
  z-index: 4;
}
.userSetting h6 {
  border-radius: 5px;
  position: relative;
  padding: 5px;
  color: white;
  font-size: 14px;
  background-color: rgb(6, 170, 170);
  padding: 5px 5px;
  cursor: pointer;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.329);
}
.userSetting h6:hover {
  background-color: rgb(0, 189, 189);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.329);
}
.home {
  overflow: hidden;
  font-family: 'Josefin Sans', sans-serif;
  background: #f3f3dc;
  /* background: #1f1d32; */
  text-align: center;
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
footer {
  background-color: rgba(32, 32, 32, 0.952);
  width: 100%;
  height: 90px;
  color: aliceblue;
  padding: 10px 20px 0px 20px;
  box-sizing: border-box;
  text-align: left;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
footer p:nth-of-type(1) {
  width: 100%;
  font-size: 14px;
  margin: 0;
  margin-bottom: 5px;
}
footer p:nth-of-type(2) {
  width: 100%;
  font-size: 14px;
  margin: 0;
  border-top: 1px solid white;
}

footer p:nth-of-type(3) {
  width: 100%;
  font-size: 14px;
  margin: 0;
}
</style>
<style scoped src="../assets/css/sass.css"></style>
