<template>
  <div class="home">
    <div v-if="alertOn === true" class="msgAlert">
      <p>{{ this.msg }}</p>
    </div>
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
      <h6
        v-if="user.user_role === 1 && onCategory === false"
        @click="userSetting"
      >
        User setting
      </h6>
      <br v-else />
    </div>
    <p>
      property in this project such as an image and the other things used for
      practice purpose
    </p>
    <br />
    <footer>
      <p>created by: Arif Rahman</p>
      <p>supported by: Arkademy</p>
      <div class="categorySetting">
        <h6
          v-if="user.user_role === 1 && onSetting === false"
          @click="categorySetting"
        >
          Category setting
        </h6>
      </div>
    </footer>
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
          <div v-if="isAdd === true && btnSetting === 'add'" class="tambahData">
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
    <div class="sass"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Dashboar',
  data() {
    return {
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
  margin: 0 auto;
  position: relative;
  width: 80px;
  height: 32px;
  text-align: center;
  top: 20px;
  z-index: 4;
}
.categorySetting h6 {
  position: relative;
  color: rgb(255, 255, 255);
  font-size: 14px;
  background-color: #f24f8a;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.329);
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
  text-align: right;
  position: relative;
}
.home {
  margin: 0;
  text-align: center;
  position: relative;
  box-sizing: border-box;
}
footer p:nth-of-type(1) {
  width: 100%;
  margin: 0 auto;
  font-size: 14px;
  position: absolute;
  top: 30px;
  right: 5px;
}

footer p:nth-of-type(2) {
  position: absolute;
  font-size: 14px;
  bottom: 1px;
  right: 5px;
}
</style>
<style scoped src="../assets/css/sass.css"></style>
