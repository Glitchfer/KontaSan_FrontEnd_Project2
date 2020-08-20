var modall = document.getElementById('addModal')
var btnn = document.getElementById('addClick')
var btnnn = document.getElementById('addclk')
var cancell = document.getElementsByClassName('canc')[0]

btnn.onclick = function() {
  modall.style.display = 'block'
}
btnnn.onclick = function() {
  modall.style.display = 'block'
}

cancell.onclick = function() {
  modall.style.display = 'none'
}
