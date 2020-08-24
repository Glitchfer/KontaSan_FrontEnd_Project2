<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    <button class="trg" @click="numPage(currentPage)">Trigger</button>
    <p class="mt-3">Current Page: {{ currentPage }}</p>
    <!-- per-page di set limit -->
    <!-- <b-table id="my-table" :items="productInfo" :per-page="limit" :current-page="currentPage" small></b-table>
    <br />-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // perPage = 1
      perPage: 1,
      currentPage: 1
      // limitMenu: 2
    }
  },
  props: ['productInfo', 'paginationInfo', 'limit', 'page'],
  computed: {
    rows() {
      return this.paginationInfo.totalPage
    }
    // rows: {
    //   get() {
    //     // set yg paginationInfo
    //     return this.paginationInfo.totalPage
    //     // return this.productInfo.length
    //   },
    //   set() {
    //     return this.$emit('crntPage', this.currentPage)
    //   }
    // }
  },
  methods: {
    numPage(a) {
      this.$emit('crntPage', a)
    }
  }
}
</script>

<style scoped>
.overflow-auto {
  border-radius: 5px;
  position: relative;
  display: flex;
  height: 100%;
}
.pagination {
  position: absolute;
  right: 0;
  border: 1px solid black;
}
.trg {
  position: relative;
  height: 30px;
  top: 10%;
}
.mt-3 {
  position: absolute;
  /* border: 1px solid black; */
  top: -25%;
  left: 75px;
}
</style>
