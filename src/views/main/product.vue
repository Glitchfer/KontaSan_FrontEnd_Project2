<template>
  <div>
    <h1>Page Product</h1>
    <form>
      <input type="text" v-model="form.product_name" placeholder="Product name" />
      <br />
      <input type="file" placeholder="Image" @change="fileUpload" />
      <br />
      <input type="text" v-model="form.product_price" placeholder="Product price" />
      <br />
      <!-- <input type="text" v-model="form.category_id" placeholder="Category" /> -->
      <select v-model="form.category_id">
        <option value="1">Food</option>
        <option value="2">Beverage</option>
        <option value="5">Dessert</option>
      </select>
      <br />
      <input type="text" v-model="form.product_status" placeholder="Status" />
      <br />
      <br />
      <button @click.prevent="postProduct">submit</button>
      <button @click.prevent="patchProduct">update</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Product',
  data() {
    return {
      form: {
        product_name: '',
        product_price: null,
        product_status: null,
        category_id: null,
        img: {}
      }
    }
  },
  methods: {
    ...mapActions(['addProduct']),
    postProduct() {
      const data = new FormData()
      data.append('product_name', this.form.product_name)
      data.append('product_price', this.form.product_price)
      data.append('product_status', this.form.product_status)
      data.append('category_id', this.form.category_id)
      data.append('img', this.form.img)
      // this.addProduct(this.form)
      this.addProduct(data)
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    patchProduct() {
      console.log('update')
    },
    fileUpload(event) {
      this.form.img = event.target.files[0]
      console.log(event.target.files)
    }
  }
}
</script>
