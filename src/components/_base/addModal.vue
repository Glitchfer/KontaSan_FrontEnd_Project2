<template>
  <!-- Add Menu (MODAL) -->
  <div id="addModal" class="add-menu modal">
    <div class="blocking">
      <div class="form">
        <form action v-on:submit.prevent="addBtn">
          <table border="0">
            <tr>
              <td colspan="2">{{btnName1 + ' Item'}}</td>
            </tr>
            <tr>
              <td>
                <label for="name-list">{{inputName}}</label>
              </td>
              <td>
                <div v-if="btnName1 === 'Add'" class="input-name">
                  <input
                    type="text"
                    placeholder="type name.."
                    name
                    id="name-list"
                    v-model="form.product_name"
                  />
                </div>
                <div v-else class="input-name">
                  <select v-model="selectedItem">
                    <option
                      v-for="(item, index) in productData"
                      :key="index"
                      :value="item"
                    >{{item.product_name}}</option>
                  </select>
                  <input
                    :disabled="btnName1 === 'Delete'"
                    class="exinput"
                    type="text"
                    name
                    :placeholder="this.selectedItem.product_name"
                    v-model="form.product_name"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label for>Image</label>
              </td>
              <td>
                <div class="input-img">
                  <input
                    v-if="btnName1 === 'Add'"
                    type="file"
                    :disabled="btnName1 === 'Delete'"
                    @change="fileUpload"
                  />
                  <input
                    v-else
                    :placeholder="this.selectedItem.img"
                    type="file"
                    :disabled="btnName1 === 'Delete'"
                    @change="fileUpload"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label for="input-price">Price</label>
              </td>
              <td>
                <div v-if="btnName1 === 'Add'" class="input-price">
                  <input
                    type="text"
                    name
                    id="input-price"
                    placeholder
                    v-model="form.product_price"
                    :disabled="btnName1 === 'Delete'"
                  />
                </div>
                <div v-else class="input-price">
                  <input
                    type="text"
                    name
                    id="input-price"
                    :placeholder="this.selectedItem.product_price"
                    v-model="form.product_price"
                    :disabled="btnName1 === 'Delete'"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <label for="input-ctgr">Category</label>
              </td>
              <td>
                <div class="input-category">
                  <select v-model="form.category_id" :disabled="btnName1 === 'Delete'">
                    <option value="1">Food</option>
                    <option value="2">Beverage</option>
                    <option value="5">Dessert</option>
                  </select>
                </div>
              </td>
            </tr>
          </table>
          <div class="input-status">
            <p>Status</p>
            <select v-model="form.product_status" :disabled="btnName1 === 'Delete'">
              <option value="0">Inactive</option>
              <option value="1">Active</option>
            </select>
          </div>
          <div class="btn-gate3">
            <div class="add-button">
              <button type="submit" class="button" @click="btnFunc(btnName1)">{{btnName1}}</button>
            </div>
            <div class="cancel2-button">
              <button class="button canc" @click="addOff()">Cancel</button>
            </div>
          </div>
          <div v-if="isSuccess === true ? isSuccess : isError" class="addMsg">
            <p>{{msg}}</p>
          </div>
          <div class="ex-button1">
            <button type="button" class="button" @click="btnFunc(btnName2)">{{btnName2}}</button>
          </div>
          <div class="ex-button2">
            <button type="button" class="button" @click="btnFunc(btnName3)">{{btnName3}}</button>
          </div>
          <div v-if="btnName1 !== 'Add'" class="input-id">
            <h5>Product id</h5>
            <input type="text" name v-model="this.selectedItem.product_id" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  name: 'Addmodal',
  data() {
    return {
      productId: null,
      productData: [],
      selectedItem: [],
      form: {
        product_name: '',
        product_price: null,
        product_status: null,
        category_id: null,
        img: ''
      },
      isSuccess: false,
      isError: false,
      msg: '',
      isUpdate: false,
      btnName1: 'Add',
      btnName2: 'Update',
      btnName3: 'Delete',
      inputName: 'Name'
    }
  },
  updated() {
    if (this.btnName1 === 'Update') {
      return (this.inputName = 'Change')
    } else if (this.btnName1 === 'Delete') {
      return (this.inputName = 'Name')
    } else {
      return (this.inputName = 'Name')
    }
  },
  components: {},
  computed: {},
  methods: {
    ...mapActions([
      'addProduct',
      'updateProduct',
      'deleteProduct',
      'throwSelectedItem'
    ]),
    btnFunc(btn) {
      if (btn === 'Delete') {
        this.btnName1 = 'Delete'
        this.btnName2 = 'Update'
        this.btnName3 = 'Add'
        axios
          .get('http://127.0.0.1:3001/product?page=1&limit=100')
          .then((response) => {
            this.productData = response.data.data
          })
          .catch((error) => {
            console.log(error)
          })
      } else if (btn === 'Update') {
        this.btnName1 = 'Update'
        this.btnName2 = 'Add'
        this.btnName3 = 'Delete'
        axios
          .get('http://127.0.0.1:3001/product?page=1&limit=100')
          .then((response) => {
            this.productData = response.data.data
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        this.btnName1 = 'Add'
        this.btnName2 = 'Update'
        this.btnName3 = 'Delete'
      }
    },
    addOff() {
      this.$emit('addOff', false)
    },
    addBtn() {
      this.throwSelectedItem(this.selectedItem)
      if (this.btnName1 === 'Update') {
        const data = new FormData()
        data.append('product_name', this.form.product_name)
        data.append('product_price', this.form.product_price)
        data.append('product_status', this.form.product_status)
        data.append('category_id', this.form.category_id)
        data.append('img', this.form.img)
        this.updateProduct(data)
          .then((response) => {
            this.isSuccess = true
            this.msg = response.data.msg
          })
          .catch((error) => {
            this.msg = error.data.msg
            this.isError = true
          })
      } else if (this.btnName1 === 'Delete') {
        this.deleteProduct()
          .then((response) => {
            this.isSuccess = true
            this.msg = response.data.msg
          })
          .catch((error) => {
            this.msg = error.data.msg
            this.isError = true
          })
      } else {
        const data = new FormData()
        data.append('product_name', this.form.product_name)
        data.append('product_price', this.form.product_price)
        data.append('product_status', this.form.product_status)
        data.append('category_id', this.form.category_id)
        data.append('img', this.form.img)
        this.addProduct(data)
          .then((response) => {
            this.isSuccess = true
            this.msg = response.data.msg
          })
          .catch((error) => {
            this.msg = error.data.msg
            this.isError = true
          })
      }
    },
    fileUpload(event) {
      this.form.img = event.target.files[0]
      console.log(event.target.files)
    }
  }
}
</script>

<style scoped>
/* default buttun for all start*/
.button {
  font-family: 'Airbnb Cereal App Medium';
  padding: 0;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}
/*default button end*/
/* ===== Add Modal ===== */
.input-id {
  position: absolute;
  width: 140px;
  height: 25px;
  right: 8px;
  top: 40px;
  text-align: center;
}
.input-id h5 {
  font-family: 'Airbnb Cereal App Medium', Arial, sans-serif;
  position: absolute;
  font-size: 14px;
  font-weight: bolder;
  top: 3px;
  width: 80px;
  left: 0;
  border-radius: 5px;
}
.input-id input {
  font-family: 'Airbnb Cereal App Medium', Arial, sans-serif;
  text-align: center;
  position: absolute;
  font-size: 14px;
  right: 0;
  top: 0;
  height: 24px;
  width: 50px;
  border-radius: 10px;
  border: 1px solid rgb(0, 0, 0);
  box-shadow: inset 0px 2px 5px 1px rgba(0, 0, 0, 0.3);
}
.add-menu {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 15;
  display: block;
}
.add-menu .blocking {
  margin: 100px auto 0;
  width: 550px;
  height: 430px;
  background-color: white;
  position: relative;
  border-radius: 8px;
}

/* ===== Add item Form ===== */
.add-menu .blocking .form {
  position: absolute;
  margin-top: 10px;
  width: 92%;
  height: 98%;
  left: 5%;
}

.add-menu form {
  font-family: 'Airbnb Cereal App Medium', Arial, sans-serif;
  position: relative;
  padding: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  text-align: left;
}

.add-menu table {
  margin-left: -10px;
  font-size: 20px;
}

.add-menu td:nth-of-type(1) {
  width: 125px;
  height: 60px;
}

.add-menu td:nth-of-type(2) {
  width: 385px;
  height: 60px;
}

.add-menu tr:nth-of-type(1) {
  position: relative;
  font-weight: bolder;
  font-size: 25px;
  top: -20px;
}

.input-name input {
  width: 100%;
  height: 40px;
  font-size: 15px;
  border-radius: 5px;
  border: 1px solid rgba(77, 76, 76, 0.3);
  box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.3);
}
.input-name select {
  position: absolute;
  font-size: 14px;
  color: #535353a4;
  width: 165px;
  height: 40px;
  right: 5px;
  top: 70px;
  border-radius: 5px;
  border: 1px solid rgba(77, 76, 76, 0.3);
  box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.3);
}
.input-name .exinput {
  font-size: 15px;
  width: 205px;
  height: 40px;
}

.input-img input {
  font-size: 14px;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid rgba(77, 76, 76, 0.3);
  box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.3);
}

.input-price input {
  font-size: 15px;
  width: 65%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid rgba(77, 76, 76, 0.3);
  box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.3);
}

.input-category select {
  font-size: 16px;
  position: relative;
  width: 35%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid rgba(155, 117, 117, 0.3);
  box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.3);
  color: rgba(0, 0, 0, 0.596);
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url(../../assets/gambar/arrowdown.png);
  background-repeat: no-repeat;
  background-size: 15px auto, 100%;
  background-position: right 10px top 50%, 0 0;
}
/* ===== Button ===== */
.btn-gate3 {
  position: absolute;
  width: 250px;
  height: 40px;
  display: flex;
  right: 25px;
  bottom: 20px;
}

.add-button {
  position: relative;
  width: 120px;
  bottom: 0;
  order: 2;
}

.add-button .button {
  font-size: 20px;
  width: 100%;
  height: 40px;
  background-color: #57cad5;
  border-radius: 5px;
}

.cancel2-button {
  margin-right: 15px;
  position: relative;
  width: 120px;
  bottom: 0;
  order: 1;
}

.cancel2-button .button {
  font-size: 20px;
  width: 100%;
  height: 40px;
  background-color: #f24f8a;
  border-radius: 5px;
}

.cancel2-button .button:hover,
.cancel2-button .button:focus {
  width: 98%;
  height: 38px;
}

.add-button .button:hover,
.add-button .button:focus {
  width: 98%;
  height: 38px;
}
.addMsg {
  color: rgba(107, 112, 107, 0.781);
  position: absolute;
  text-align: center;
  border-radius: 5px;
  font-size: 14px;
  height: 25px;
  display: block;
  top: 5px;
  left: 30%;
  background-color: #a9aaa94b;
}
.ex-button1 {
  margin-right: 10px;
  position: absolute;
  width: 50px;
  bottom: 25px;
  order: 2;
}

.ex-button1 .button {
  font-size: 12px;
  width: 100%;
  height: 30px;
  background-color: #3c3d3d;
  border-radius: 10px;
}
.ex-button1 .button:hover,
.ex-button2 .button:hover {
  background-color: #626363;
}
.ex-button2 {
  margin-right: 10px;
  position: absolute;
  width: 50px;
  bottom: 25px;
  left: 60px;
  order: 2;
}

.ex-button2 .button {
  font-size: 12px;
  width: 100%;
  height: 30px;
  background-color: #3c3d3d;
  border-radius: 10px;
}
.input-status {
  font-size: 20px;
  position: absolute;
  width: 220px;
  height: 30px;
  display: flex;
  left: -10px;
  bottom: 85px;
}
.input-status p {
  position: absolute;
  top: 0px;
  margin: 0;
}
.input-status select {
  box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.3);
  font-size: 15px;
  border: 1px solid rgba(128, 127, 127, 0.527);
  position: absolute;
  top: 0;
  height: 30px;
  width: 93px;
  right: 0;
  border-radius: 5px;
  color: rgb(107, 103, 103);
}
/* ===== Responsive ===== */
@media (max-width: 768px) {
  .input-name select {
    font-size: 14px;
    width: 168px;
    top: 70px;
  }
  .input-name .exinput {
    width: 200px;
  }
}
@media (max-width: 576px) {
  .input-id {
    position: absolute;
    width: 120px;
    height: 25px;
    right: 8px;
    top: 30px;
    text-align: center;
  }
  .input-id h5 {
    font-family: 'Airbnb Cereal App Medium', Arial, sans-serif;
    position: absolute;
    font-size: 12px;
    font-weight: bolder;
    top: 3px;
    width: 80px;
    left: 0;
    border-radius: 5px;
  }
  .input-id input {
    font-family: 'Airbnb Cereal App Medium', Arial, sans-serif;
    text-align: center;
    position: absolute;
    font-size: 12px;
    right: 0;
    top: 0;
    height: 20px;
    width: 45px;
    border-radius: 10px;
    border: 1px solid rgb(0, 0, 0);
    box-shadow: inset 0px 2px 5px 1px rgba(0, 0, 0, 0.3);
  }
  .input-name .exinput {
    font-size: 12px;
    width: 52%;
  }
  .input-name select {
    font-size: 12px;
    width: 120px;
    top: 60px;
  }
  .add-menu .blocking {
    width: 85%;
    height: 350px;
  }

  /* ===== button ====== */
  .ex-button1 {
    width: 40px;
    bottom: 18px;
  }

  .ex-button1 .button {
    font-size: 8px;
    height: 25px;
  }
  .ex-button2 {
    width: 40px;
    bottom: 18px;
    left: 50px;
  }

  .ex-button2 .button {
    font-size: 8px;
    height: 25px;
  }
  .btn-gate3 {
    width: 190px;
    height: 31.5px;
    right: 15px;
    bottom: 15px;
  }

  .add-button {
    height: 30px;
    width: 90px;
  }

  .add-button .button {
    font-size: 13px;
    height: 30px;
  }

  .cancel2-button {
    width: 90px;
    margin-right: 10px;
    height: 30px;
  }

  .cancel2-button .button {
    font-size: 13px;
    height: 30px;
  }

  /* ===== Add menu ====== */
  .add-menu .blocking .form {
    width: 93%;
    height: 97%;
    left: 3%;
  }

  .add-menu table {
    width: 100%;
    margin-left: 0px;
    font-size: 15px;
  }

  .add-menu td:nth-of-type(1) {
    width: 100px;
    height: 53.5px;
  }

  .add-menu td:nth-of-type(2) {
    width: 241.5px;
    height: 53.5px;
  }

  .add-menu tr:nth-of-type(1) {
    position: relative;
    font-weight: bolder;
    font-size: 20px;
    top: -15px;
  }

  .input-price input {
    font-size: 12px;
    width: 70%;
  }
  .input-img input {
    font-size: 12px;
  }

  .input-category select {
    font-size: 14px;
    width: 45%;
  }
  .input-status {
    font-size: 12px;
    width: 120px;
    height: 30px;
    display: flex;
    left: 250px;
    bottom: 80px;
  }
  .input-status p {
    top: 5px;
    margin-right: 5px;
  }
  .input-status select {
    font-size: 12px;
    top: 15%;
    height: 20px;
    width: 70px;
    border-radius: 05px;
  }
}
</style>
