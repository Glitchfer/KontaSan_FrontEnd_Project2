<template>
  <div class="home">
    <b-container>
      <img alt="Vue logo" src="../assets/logo.png" />
      <Navbar />
      <b-card>
        <h4>Hello {{ name }}</h4>
      </b-card>
      <b-card>
        <h5>Computed</h5>
        <p>Original Message : {{ message }}</p>
        <p>Reverse Message : {{ reverseMessage }}</p>
        <input type="text" v-model="greeting" />
        <p>Computed Setter : {{ greeting }}</p>
      </b-card>
      <b-card>
        <h5>Directive</h5>
        <v-if></v-if>
        <div v-if="isFulled === true">{{ name }}</div>
        <div v-else-if="isFulled === 'tampil'">Saprol</div>
        <div v-else>Prol</div>
        <div v-show="isFUlled === true">V show: {{ name }}</div>
        <!-- <v-for></v-for> -->
        <ul>
          <li v-for="(value, index) in product" :key="index">{{ value.name }} : {{ value.price }}</li>
        </ul>
        <!-- <v-on></v-on> -->
        <button v-on:click="boom()">Click Meh !</button>
        <input type="text" v-on:keyup.enter="search" />
        <button @click="boom()">Awas meledak !</button>
        <br />
        <!-- <v-bind></v-bind> -->
        <a
          v-bind:href="url_google"
          target="blink"
          v-bind:style="url_google === 'http://google.com' ? isTrue : isFalse"
        >Link here</a>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
export default {
  name: 'Tutor',
  data() {
    return {
      name: 'Arif RAhman',
      message: 'Woi',
      a: 'Hai',
      b: 'Gaki',
      isFulled: true,
      product: [
        { name: 'kipas', price: 10000 },
        { name: 'mouse', price: 20000 }
      ],
      url_google: 'http://google.com',
      isTrue: {
        color: 'blue'
      },
      isFalse: {
        color: 'red'
      }
    }
  },
  components: {
    Navbar
  },
  computed: {
    reverseMessage() {
      return this.message.split('').reverse().join('')
    },
    greeting: {
      get() {
        return this.a + ' ' + this.b
      },
      set(newValue) {
        const value = newValue.split(' ')
        this.a = value[0]
        this.b = value[1]
      }
    }
  },
  methods: {
    boom() {
      console.log('Boom !')
      alert('Boom !')
    },
    search() {
      console.log('Search !')
      alert('Search !')
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
}
</style>
