<template>
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
</template>

<script>
export default {
  name: 'Addmodal',
  components: {}
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
.add-menu {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 15;
  /* display: block; */
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
  height: 320px;
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
  border-radius: 5px;
  border: 1px solid rgba(77, 76, 76, 0.3);
  box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.3);
}

.input-img input {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid rgba(77, 76, 76, 0.3);
  box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.3);
}

.input-price input {
  width: 65%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid rgba(77, 76, 76, 0.3);
  box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.3);
}

.input-category select {
  position: relative;
  width: 35%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid rgba(155, 117, 117, 0.3);
  box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.3);
  color: rgba(0, 0, 0, 0.3);
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

/* ===== Responsive ===== */
@media (max-width: 768px) {
}
@media (max-width: 576px) {
  .add-menu .blocking {
    width: 85%;
    height: 350px;
  }

  /* ===== button ====== */
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
    height: 270px;
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
    width: 70%;
  }

  .input-category select {
    font-size: 14px;
    width: 45%;
  }
}
</style>
