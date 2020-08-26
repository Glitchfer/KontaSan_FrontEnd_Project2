<template>
  <div class="no_1">
    <img src="../../assets/gambar/img8.png" alt="#" />
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
</template>

<script>
export default {
  name: 'Cartitem'
}
</script>

<style scoped>
/* Button */
/* default buttun for all start*/
.button {
  padding: 0;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}

/*default buttun end*/

.count {
  padding: 0;
  width: 115px;
  height: 35px;
  position: relative;
  left: 92px;
  top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.count .button {
  width: 35px;
  height: 30px;
  color: #82de3a;
}

.count-numb {
  position: relative;
  padding: 0;
  width: 35px;
  height: 30px;
  background-color: #fff;
  border: 2px solid #82de3a;
  border-left: none;
  border-right: none;
}

.count-numb p {
  font-size: 16px !important;
  position: relative;
  left: 14px !important;
  top: 2px !important;
}

.plus div,
.minus div {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(130, 222, 58, 0.2);
  border: 2px solid #82de3a;
  left: 0;
  top: 0;
}

.plus p {
  position: absolute;
  font-family: 'Airbnb Cereal App Medium' !important;
  font-size: 30px !important;
  left: 6px !important;
  top: -12px !important;
}

.minus p {
  position: absolute;
  font-family: 'Airbnb Cereal App Medium' !important;
  font-size: 30px !important;
  left: 9px !important;
  top: -12px !important;
}
/* Button-end */

.no_1 {
  margin: 0 auto 20px;
  width: 99%;
  height: 75px;
  position: relative;
}

.no_1 img {
  width: 75px;
  height: 100%;
  position: absolute;
  left: 0;
}

.no_1 p:nth-of-type(1) {
  font-family: 'Airbnb Cereal App Medium';
  font-size: 20px;
  position: absolute;
  left: 90px;
}

.no_1 p:nth-of-type(2) {
  font-family: 'Airbnb Cereal App Medium';
  font-size: 15px;
  position: absolute;
  right: 3px;
  bottom: -10px;
}
</style>
