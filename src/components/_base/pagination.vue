<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    <p class="mt-3">Current Page: {{ currentPage }}</p>
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
  updated() {
    this.$emit('crntPage', this.currentPage)
  },
  computed: {
    rows() {
      return this.paginationInfo.totalPage
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
.mt-3 {
  position: absolute;
  /* border: 1px solid black; */
  top: -25%;
  left: 75px;
}
</style>
