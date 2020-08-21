<template>
  <div class="axios">
    <h1>Axios Page</h1>
    <b-container>
      <b-alert v-bind:show="alert">{{isMsg}}</b-alert>
      <form v-on:submit.prevent="addProduct">
        <input type="text" v-model="form.product_name" placeholder="Product Name" />
        <br />
        <input type="text" v-model="form.product_price" placeholder="Price" />
        <br />
        <input type="text" v-model="form.product_status" placeholder="Status" />
        <br />
        <input type="text" v-model="form.category_id" placeholder="Category" />
        <br />
        <button type="submit" v-show="!isUpdate">Save</button>
        <button type="button" v-show="isUpdate" @click="patchProduct()">Update</button>
      </form>
    </b-container>
    <hr />
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="4" v-for="(item, index) in products" :key="index">
          <b-card
            v-bind:title="item.product_name"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>{{item.product_price}}</b-card-text>
            <b-button variant="primary" v-on:click="addCart(item)">Add Cart</b-button>
            <b-button variant="success" v-on:click="setProduct(item)">Update</b-button>
            <b-button variant="danger" v-on:click="deleteProduct(item)">Delete</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <Card nama="kopi" harga="2000" @increment="incrementCount" />
    <Card nama="susu" harga="4000" />
    <p>{{count}}</p>
  </div>
</template>

<script>
import axios from 'axios'
import Card from '../components/_base/card'

export default {
  name: 'Axios',
  components: {
    Card
  },
  data() {
    return {
      count: 0,
      cart: [],
      page: 1,
      limit: 15,
      products: [],
      form: {
        product_name: '',
        product_price: '',
        product_status: '',
        category_id: ''
      },
      alert: false,
      isMsg: '',
      isUpdate: false,
      product_id: ''
    }
  },
  created() {
    this.get_product()
  },
  methods: {
    incrementCount(data) {
      this.count += data
    },
    addCart(data) {
      const setCart = {
        product_id: data.product_id,
        qty: 1
      }
      this.cart = [...this.cart, setCart]
      console.log(this.cart)
    },
    get_product() {
      axios
        .get(
          `http://127.0.0.1:3001/product?page=${this.page}&limit=${this.limit}`
        )
        .then((response) => {
          this.products = response.data.data
          console.log(this.products)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    addProduct() {
      console.log(this.form)
      axios
        .post('http://127.0.0.1:3001/product', this.form)
        .then((response) => {
          console.log(response)
          this.alert = true
          this.isMsg = response.data.msg
        })
        .catch((error) => {
          console.log(error)
        })
    },
    setProduct(data) {
      this.form = {
        product_name: data.product_name,
        category_id: data.category_id,
        product_price: data.product_price,
        product_status: data.product_status
      }
      this.isUpdate = true
      this.product_id = data.product_id
    },
    patchProduct() {
      axios
        .patch(`http://127.0.0.1:3001/product/${this.product_id}`, this.form)
        .then((response) => {
          console.log(response)
          this.alert = true
          this.isMsg = response.data.msg
        })
        .catch((error) => {
          console.log(error)
        })
      console.log(this.product_id)
      console.log(this.form)
      this.isUpdate = false
    },
    deleteProduct(data) {
      axios
        .patch(`http://127.0.0.1:3001/product/${data.product_id}`)
        .then((response) => {
          this.alert = true
          this.isMsg = response.data.msg
          console.log(this.isMsg)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
