var chkModal = document.getElementById('checkoutModal')
var chkBtn = document.getElementById('checkout')
var span = document.getElementsByClassName('exit')[0]
chkBtn.onclick = function() {
  chkModal.style.display = 'block'
}
span.onclick = function() {
  chkModal.style.display = 'none'
}
