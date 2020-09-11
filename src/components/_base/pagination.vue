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
import { mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      perPage: 1,
      currentPage: 1
    }
  },
  props: ['productInfo', 'paginationInfo'],
  computed: {
    rows() {
      return this.paginationInfo.totalPage
    }
  },
  methods: {
    ...mapActions(['getProducts']),
    ...mapMutations(['setPage']),
    handlePageChange(val) {
      this.setPage(val)
      this.getProducts()
      // this.$emit('nextPage', this.currentPage)
    }
  }
}
</script>

<style scoped>
.overflow-auto {
  height: 45px;
  width: 100%;
  border-radius: 5px;
  position: absolute;
  display: flex;
  height: 100%;
  left: 0;
  bottom: -10px;
}
.pagination {
  position: absolute;
  font-size: 12px;
  top: 0px;
  right: 25px;
  border: 1px solid black;
  box-shadow: 2px 3px 10px rgba(43, 43, 43, 0.363);
}

.mt-3 {
  position: absolute;
  width: 150px;
  height: 25px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: antiquewhite;
  top: -25%;
  left: 25px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.363);
}

@media (max-width: 768px) {
  .overflow-auto {
    height: 45px;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0px;
  }
  .pagination {
    font-size: 13px;
    height: 32px;
    position: absolute;
    top: 7px;
    right: 0;
    font-size: 10px;
  }

  .mt-3 {
    width: 150px;
    height: 25px;
    top: -3px;
    left: 0;
  }
}
</style>
