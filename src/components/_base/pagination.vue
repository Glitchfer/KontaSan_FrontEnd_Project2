<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      @change="handlePageChange"
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
      perPage: 1,
      currentPage: 1
    }
  },
  props: ['productInfo', 'paginationInfo'],
  // turnOn the comment to active pagination
  updated() {
    this.$emit('crntPage', this.currentPage)
  },
  computed: {
    rows() {
      return this.paginationInfo.totalPage
    }
  },
  methods: {
    handlePageChange() {
      this.$emit('nextPage', this.currentPage)
      // this.$emit('crntPage', this.currentPage)
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
  font-size: 13px;
  top: 0px;
  right: 0;
  border: 1px solid black;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.363);
}

.mt-3 {
  position: absolute;
  width: 150px;
  height: 25px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: antiquewhite;
  top: -25%;
  left: 0;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.363);
}
</style>
