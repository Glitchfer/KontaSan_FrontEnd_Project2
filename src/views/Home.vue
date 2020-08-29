<template>
  <b-container fluid class="bag">
    <Header
      v-bind:count="num"
      v-bind:srcNextPage="nextPage"
      @addShow="addOn"
      @isSrcClicked="isSrcClicked"
      @srcValue="srcValue"
      @srcResponse="srcResponse"
    />
    <Fixednav @addShow="addOn" />
    <!-- @searchBy="searchBy" -->
    <b-row class="slot-two">
      <!-- aside-left -->
      <Left @addShow="addOn" />
      <!-- Main -->
      <!-- <Mid /> -->
      <Main
        v-bind:count="num"
        v-bind:srcData="srcResData"
        v-bind:srcPage="srcResPage"
        v-bind:srcIsClick="isSrc"
        v-bind:valSrc="srcVal"
        @increment="cartCount"
        @selectedItem="selectedItem"
        @srcCrnPage="srcCrnPage"
        @cashierName="cashierName"
        @invoiceData="invoiceData"
      />
      <!-- aside-right -->
      <Right
        v-bind:count="num"
        @resetCount="reset"
        @checkoutModalOn="checkoutModalOn"
        @increase="inc"
        @decrease="dec"
        @dataOrders="dataOrders"
        @invoiceData="checkoutData"
        v-bind:cartItemMap="cartItemMap"
        v-bind:cartItem="cartItem"
        v-bind:invoiceId="form.invoice_id"
        v-bind:ordersId="orders_id"
      />
    </b-row>
    <!-- Responsive Navbar-->
    <!-- <Fixednav @addShow="addOn" /> -->
    <!-- Add Modal -->
    <Addmodal v-if="isHide === true" @addOff="addHide" />
    <!-- Checkout Modal -->
    <Checkoutmodal
      v-if="checkoutHide === true"
      @reset="reset"
      @checkoutModalOff="checkoutModalOff"
      v-bind:dataOrder="ordersData"
      v-bind:allData="invoicePatchData.allData"
      v-bind:invoiceNo="invoicePatchData.invoice_number"
      v-bind:totalPrice="invoicePatchData.total_price"
      v-bind:totalTax="invoicePatchData.tax"
      v-bind:subTotal="invoicePatchData.sub_total"
      v-bind:updatedDate="invoicePatchData.date"
    />
  </b-container>
</template>

<script>
import Header from '../components/_base/Header'
import Left from '../components/_base/sideLeft'
import Right from '../components/_base/sideRight'
import Fixednav from '../components/_base/fixedNavbar'
import Addmodal from '../components/_base/addModal'
import Checkoutmodal from '../components/_base/checkoutModal'
import Main from '../components/_module/mainMenu'
import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      num: 0,
      isHide: false,
      checkoutHide: false,
      isSrc: false,
      srcVal: '',
      srcResData: [],
      srcResPage: [],
      nextPage: 1,
      cartItem: [],
      cartItemMap: [],
      form: {
        cashier_name: '',
        product_id: null,
        item_quantity: null,
        invoice_id: null
      },
      orders_id: null,
      ordersData: [],
      invoicePatchData: {
        allData: [],
        invoice_number: null,
        total_price: null,
        tax: null,
        sub_total: null,
        date: null
      }
    }
  },
  components: {
    Header,
    Left,
    Main,
    Right,
    Fixednav,
    Addmodal,
    Checkoutmodal
  },
  computed: {},
  methods: {
    showCart(val) {},
    checkoutData(data, totalPrice, tax, subTotal, date) {
      this.invoicePatchData.allData = data
      this.invoicePatchData.total_price = totalPrice
      this.invoicePatchData.tax = tax
      this.invoicePatchData.sub_total = subTotal
      this.invoicePatchData.date = date
    },
    dataOrders(data) {
      this.ordersData = data
      // console.log(this.ordersData)
    },
    cashierName(name) {
      this.form.cashier_name = name
      console.log(this.form.cashier_name)
    },
    invoiceData(fullData, id, number) {
      this.form.invoice_id = id
      this.invoicePatchData.invoice_number = number
    },
    addOn(dat) {
      this.isHide = dat
    },
    addHide(dat) {
      this.isHide = dat
    },
    checkoutModalOff(val) {
      this.checkoutHide = val
    },
    checkoutModalOn(val) {
      this.checkoutHide = val
    },
    cartCount(inc, index, item) {},
    selectedItem(itemDetail) {
      const setCart = {
        itemDetail,
        qty: 1
      }
      this.cartItem = [...this.cartItem, setCart]
      const data = this.cartItem.find(
        (item) => item.itemDetail.product_id === itemDetail.product_id
      )

      this.form.product_id = data.itemDetail.product_id
      this.form.item_quantity = data.qty

      if (this.cartItemMap.length < 1) {
        this.cartItemMap = [...this.cartItemMap, data]
        this.num += 1
      } else if (
        this.cartItemMap.find(
          (item) => item.itemDetail.product_id === data.itemDetail.product_id
        )
      ) {
        return null
      } else {
        this.cartItemMap = [...this.cartItemMap, data]
        this.num += 1
      }

      // ====== POST INVOICE ======
      axios
        .post('http://127.0.0.1:3001/trigger/orders', this.form)
        .then((response) => {
          console.log(response.data)
          this.orders_id = response.data.data.orders_id
          console.log(response.data.msg)
        })
        .catch((error) => {
          this.num = 0
          this.cartItem = []
          this.cartItemMap = []
          console.log('error in home.vue (line 180)')
          console.log(error.response.data.msg)
          alert(
            'Cashier name & invoice id must be filled before process the orders'
          )
        })
    },
    inc(val) {
      this.num += val
    },
    dec(val) {
      this.num -= val
    },
    reset(zeroCount, zeroCart, string, nully) {
      this.num = zeroCount
      this.cartItem = zeroCart
      this.cartItemMap = zeroCart
      this.form.cashier_name = string
      this.form.invoice_id = nully
    },
    isSrcClicked(bool) {
      this.isSrc = bool
    },
    srcValue(value) {
      this.srcVal = value
    },
    srcResponse(valA, valB) {
      this.srcResData = valA
      this.srcResPage = valB
    },
    srcCrnPage(nxtPage) {
      this.nextPage = nxtPage
    }
  }
}
</script>

<style scoped>
.bag {
  text-align: center;
}
</style>
