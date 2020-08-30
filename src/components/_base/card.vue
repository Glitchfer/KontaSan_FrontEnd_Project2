<template>
  <div class="c-container">
    <h4>{{nama}}</h4>
    <p>{{harga}}</p>
    <button type="button" v-on:click="increment()">Add To Cart</button>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['nama', 'harga'],
  methods: {
    increment() {
      this.$emit('increment', 1)
    }
  }
  // =====================Method klik btn tampil modal & select menu========================================================
  // addOn() {
  //   const modall = document.getElementById('addModal')
  //   const btnn = document.getElementById('addClick')
  //   const btnnn = document.getElementById('addclk')
  //   const cancell = document.getElementsByClassName('canc')[0]
  //   btnn.onclick = function () {
  //     modall.style.display = 'block'
  //   }
  //   btnnn.onclick = function () {
  //     modall.style.display = 'block'
  //   }
  //   cancell.onclick = function () {
  //     modall.style.display = 'none'
  //   }
  // },
  // checkoutModal() {
  //   const chkModal = document.getElementById('checkoutModal')
  //   const chkBtn = document.getElementById('checkout')
  //   const span = document.getElementsByClassName('exit')[0]
  //   const btnEx1 = document.getElementsByClassName('ex1')[0]
  //   chkBtn.onclick = function () {
  //     chkModal.style.display = 'block'
  //   }
  //   btnEx1.onclick = function () {
  //     chkModal.style.display = 'block'
  //   }
  //   span.onclick = function () {
  //     chkModal.style.display = 'none'
  //   }
  // },
  // selectMenu1() {
  //   const selected = document.getElementsByClassName('selected')
  //   const cartCount = selected.length
  // const badge = document.getElementsByClassName('badge-info')[0]
  //   const code = cartCount
  //   badge.innerHTML = code
  //   selected[0].style.display = 'block'
  // },
  // selectMenu2() {
  // const pick = document.getElementsByClassName('a1')
  // const select = document.querySelectorAll('.selected')
  // const totalMenu = select.length
  // this.$emit('inc', 1)
  // for (let x = 0; x <= totalMenu - 1; x++) {
  //   pick[x].onclick = function () {
  //     select[x].classList.toggle('dark')
  //   }
  //   }
  // },
  // cancel() {
  //   const selected = document.getElementsByClassName('selected')
  //   const cartCount = selected.length
  //   const msct = document.getElementsByClassName('mascot')[0]
  //   const wish = document.getElementsByClassName('wishlist')[0]
  //   const chkot = document.getElementsByClassName('checkout')[0]
  //   const badge = document.getElementsByClassName('badge-info')[0]
  //   const cancel = document.getElementsByClassName('cancelBtn')[0]
  //   cancel.onclick = function () {
  //     msct.style.display = 'block'
  //     wish.style.display = 'none'
  //     chkot.style.display = 'none'
  //     for (let i = 0; i <= cartCount - 1; i++) {
  //       selected[i].style.display = 'none'
  //     }
  //     badge.innerHTML = 0
  //   }
  // }
}
</script>

<style scoped>
.c-container {
  width: 150px;
  height: 200px;
  border-radius: 5px;
  border: 1px solid black;
}
</style>
<style scoped src="../../assets/css/home.css">
</style>
<style scoped src="../../assets/css/homeselect.css">
</style>
<style scoped src="../../assets/css/checkout.css">
</style>
<style scoped src="../../assets/css/adddata.css">
</style>
