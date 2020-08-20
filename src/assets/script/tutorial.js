import Navbar from '../components/_base/Navbar'
export default {
  name: 'Home',
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
        color: 'green'
      }
    }
  },
  components: {
    Navbar
  },
  computed: {
    reverseMessage() {
      return this.message
        .split('')
        .reverse()
        .join('')
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
