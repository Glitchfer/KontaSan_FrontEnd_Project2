<template>
  <b-container fluid class="bag">
    <!-- Header -->
    <b-row class="slot-one">
      <b-col cols="12" sm="12" md="9" lg="8" class="header-one">
        <b-col cols="12" sm="12" md="12" lg="12" class="pocket1">
          <b-col cols="1" sm="1" md="1" lg="1" class="bar">
            <div class="bar-img">
              <router-link to="/home" class="beranda">Home</router-link>
            </div>
          </b-col>
          <b-col cols="10" sm="10" md="10" lg="10" class="title">
            <h1 class="judul">Food Items</h1>
          </b-col>
          <b-col cols="1" sm="1" md="1" lg="1" class="search">
            <div class="search-img"></div>
          </b-col>
        </b-col>
      </b-col>
      <b-col cols="0" sm="0" md="3" lg="4" class="header-cart">
        <b-col cols="12" sm="12" md="12" lg="12" class="pocket1">
          <b-col cols="12" sm="12" md="12" lg="12" class="cart">
            <h3 class="cart">
              Cart
              <b-badge pill variant="info">0</b-badge>
            </h3>
          </b-col>
        </b-col>
      </b-col>
    </b-row>
    <b-row class="slot-two">
      <!-- aside-left -->
      <b-col cols="0" sm="0" md="1" lg="1" class="side-left">
        <div class="navi-img">
          <div class="fork-img">
            <a href="checkout.html" class="menuhome" target="_self"></a>
          </div>
          <div class="history-img">
            <router-link to="/history" class="histo"></router-link>
          </div>
          <div id="addclk" class="add-img" v-on:click="addOn()"></div>
        </div>
      </b-col>
      <!-- Main -->
      <b-col cols="12" sm="12" md="8" lg="7" class="mid">
        <b-row cols="12" sm="12" md="12" lg="12" class="menu">
          <b-col cols="6" sm="6" md="6" lg="4" class="menu-one b1">
            <div v-on:click="selectMenu()" class="img1 a1">
              <div class="selected">
                <div class="ceklis"></div>
              </div>
              <p class="nama">Espresso</p>
              <p class="harga">Rp. 10.000</p>
            </div>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="4" class="menu-two b1">
            <div class="img2 a1">
              <div class="selected">
                <div class="ceklis"></div>
              </div>
              <p class="nama">Cofee Latte</p>
              <p class="harga">Rp. 15.000</p>
            </div>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="4" class="menu-three b1">
            <div class="img3 a1">
              <div class="selected">
                <div class="ceklis"></div>
              </div>
              <p class="nama">Cappucino</p>
              <p class="harga">Rp. 6.000</p>
            </div>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="4" class="menu-four b1">
            <div class="img4 a1">
              <div class="selected">
                <div class="ceklis"></div>
              </div>
              <p class="nama">Red Velvet Latte</p>
              <p class="harga">Rp. 33.000</p>
            </div>
          </b-col>
        </b-row>
      </b-col>
      <!-- aside-right -->
      <b-col cols="5" sm="5" md="3" lg="4" class="side-right">
        <!-- if empty -->
        <b-col cols="12" sm="12" md="12" lg="12" class="mascot">
          <div class="mascot-img"></div>
          <h1 class="empty">Your cart is empty</h1>
          <h6>Please add some item from the menu</h6>
        </b-col>
        <!-- if filled -->
        <div class="wishlist">
          <div class="list">
            <div class="no_1">
              <img src="../assets/gambar/img2.png" alt />
              <p>Coffee Latte</p>
              <p>Rp. 15.000</p>
              <div class="count">
                <button class="button minus">
                  <div class="minus">
                    <p>-</p>
                  </div>
                </button>
                <div class="count-numb">
                  <p>1</p>
                </div>
                <button class="button plus">
                  <div class="plus">
                    <p>+</p>
                  </div>
                </button>
              </div>
            </div>
            <div class="no_1">
              <img src="../assets/gambar/img6.png" alt />
              <p>Black Forest</p>
              <p>Rp. 30.000</p>
              <div class="count">
                <button class="button minus">
                  <div class="minus">
                    <p>-</p>
                  </div>
                </button>
                <div class="count-numb">
                  <p>1</p>
                </div>
                <button class="button plus">
                  <div class="plus">
                    <p>+</p>
                  </div>
                </button>
              </div>
            </div>
            <div class="no_1">
              <img src="../assets/gambar/img8.png" alt />
              <p>Salmon Truffle Teriyaki</p>
              <p>Rp. 60.000</p>
              <div class="count">
                <button class="button minus">
                  <div class="minus">
                    <p>-</p>
                  </div>
                </button>
                <div class="count-numb">
                  <p>1</p>
                </div>
                <button class="button plus">
                  <div class="plus">
                    <p>+</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- Checkout Button -->
        <div class="checkout">
          <div class="text-total">
            <h5 class="total">Total :</h5>
            <h5 class="harga">Rp. 105.000*</h5>
            <p>*Belum termasuk ppn</p>
          </div>
          <div class="btn-gate">
            <div class="check-button">
              <button id="checkout" class="button" v-on:click="checkoutModal()">Checkout</button>
            </div>
            <div class="cancel-button cancelBtn">
              <button v-on:click="cancel()" class="button">Cancel</button>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <!-- Checkout Menu (MODAL) -->
    <div id="checkoutModal" class="checkout-menu chkModal">
      <div class="blocking">
        <span class="exit">&times;</span>
        <div class="form">
          <form action>
            <table>
              <tr>
                <td style="font-size: 20px;">Checkout</td>
                <td style="font-size: 15px;">Receipt no: #010410919</td>
              </tr>
              <tr>
                <td colspan="2" style="font-size: 12px;">Cashier : Pevita Pearce</td>
              </tr>
              <tr>
                <td colspan="2"></td>
              </tr>
              <tr style="font-size: 15px;">
                <td>Coffee Latte 1x</td>
                <td>Rp. 15.000</td>
              </tr>
              <tr style="font-size: 15px;">
                <td>Black Forest 1x</td>
                <td>Rp. 30.000</td>
              </tr>
              <tr style=" font-size: 15px;">
                <td>Salmon Truffle Teriyaki 1x</td>
                <td>Rp. 60.000</td>
              </tr>
              <tr style="font-size: 15px;">
                <td>Ppn 10%</td>
                <td>Rp. 10.500</td>
              </tr>
              <tr>
                <td colspan="2"></td>
              </tr>
              <tr style=" font-size: 15px;">
                <td>Total :</td>
                <td>Rp. 115.500</td>
              </tr>
              <tr style=" font-size: 15px;">
                <td>Payment: Cash</td>
                <td></td>
              </tr>
            </table>
          </form>
        </div>
        <div class="btn-gate2">
          <div class="print-button">
            <button class="button">Print</button>
          </div>
          <p>Or</p>
          <div class="send-button">
            <button class="button">Send Email</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Responsive -->
    <div class="kontainer-kosong">
      <div class="dummy1">
        <div class="garpu-img">
          <a href="checkout.html" class="menuhome" target="_self"></a>
        </div>
        <div class="histori-img">
          <router-link to="/history" class="histo"></router-link>
        </div>
        <div id="addClick" class="plus-img" v-on:click="addOn()"></div>
      </div>
    </div>
    <!-- cart menu pindah nyelip di header (bisa di ganti karena kurang bagus) -->
    <div class="kontainer-extra">
      <div class="dummy2">
        <img src="../assets/gambar/img2.png" alt />
        <p class="nama">Cofee Latte 1x</p>
        <p class="harga">Rp. 15.000</p>
      </div>
      <div class="dummy3">
        <img src="../assets/gambar/img6.png" alt />
        <p class="nama">Black Forest 1x</p>
        <p class="harga">Rp. 30.000</p>
      </div>
      <div class="dummy4">
        <img src="../assets/gambar/img8.png" alt />
        <p class="nama">Salmon Truffle Teriyaki 1x</p>
        <p class="harga">Rp. 60.000</p>
      </div>
      <p class="total">
        Total:
        <br />Rp. 105.000*
      </p>
    </div>
    <div class="button-extra">
      <div v-on:click="checkoutModal()" class="ex1"></div>
      <div class="ex2"></div>
    </div>
    <!-- Add Menu (MODAL) -->
    <div id="addModal" class="add-menu modal">
      <div class="blocking">
        <div class="form">
          <form action>
            <table border="0">
              <tr>
                <td colspan="2">Add Item</td>
              </tr>
              <tr>
                <td>
                  <label for="name-list">Name</label>
                </td>
                <td>
                  <div class="input-name">
                    <input type="text" name id="name-list" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label for>Image</label>
                </td>
                <td>
                  <div class="input-img">
                    <input type="text" name id />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="input-price">Price</label>
                </td>
                <td>
                  <div class="input-price">
                    <input type="text" name id="input-price" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="input-ctgr">Category</label>
                </td>
                <td>
                  <div class="input-category">
                    <select name id>
                      <option value>Category</option>
                    </select>
                  </div>
                </td>
              </tr>
            </table>
          </form>
        </div>
        <div class="btn-gate3">
          <div class="add-button">
            <button class="button">Add</button>
          </div>
          <div class="cancel2-button">
            <button class="button canc">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {},
  computed: {},
  methods: {
    addOn() {
      const modall = document.getElementById('addModal')
      const btnn = document.getElementById('addClick')
      const btnnn = document.getElementById('addclk')
      const cancell = document.getElementsByClassName('canc')[0]

      btnn.onclick = function () {
        modall.style.display = 'block'
      }
      btnnn.onclick = function () {
        modall.style.display = 'block'
      }

      cancell.onclick = function () {
        modall.style.display = 'none'
      }
    },
    checkoutModal() {
      const chkModal = document.getElementById('checkoutModal')
      const chkBtn = document.getElementById('checkout')
      const span = document.getElementsByClassName('exit')[0]
      const btnEx1 = document.getElementsByClassName('ex1')[0]
      chkBtn.onclick = function () {
        chkModal.style.display = 'block'
      }
      btnEx1.onclick = function () {
        chkModal.style.display = 'block'
      }
      span.onclick = function () {
        chkModal.style.display = 'none'
      }
    },
    selectMenu() {
      const selected = document.getElementsByClassName('selected')
      const cartCount = selected.length
      const badge = document.getElementsByClassName('badge-info')[0]
      const code = cartCount
      badge.innerHTML = code
      selected[0].style.display = 'block'
    },
    cancel() {
      const selected = document.getElementsByClassName('selected')
      const cartCount = selected.length
      const msct = document.getElementsByClassName('mascot')[0]
      const wish = document.getElementsByClassName('wishlist')[0]
      const chkot = document.getElementsByClassName('checkout')[0]
      const badge = document.getElementsByClassName('badge-info')[0]
      const cancel = document.getElementsByClassName('cancelBtn')[0]
      cancel.onclick = function () {
        msct.style.display = 'block'

        wish.style.display = 'none'

        chkot.style.display = 'none'
        for (let i = 0; i <= cartCount - 1; i++) {
          selected[i].style.display = 'none'
        }
        badge.innerHTML = 0
      }
    }
  }
}
</script>

<style scoped src="../assets/css/home.css">
</style>
<style scoped src="../assets/css/homeselect.css">
</style>
<style scoped src="../assets/css/checkout.css">
</style>
<style scoped src="../assets/css/adddata.css">
</style>
