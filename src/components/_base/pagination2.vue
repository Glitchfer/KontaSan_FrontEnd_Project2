<template>
  <div class="pagination">
    <a href="#">&laquo;</a>
    <a
      href="#"
      v-for="(total_page) in paginationInfo.totalPage"
      :key="total_page"
      @click="pageNum()"
    >{{total_page}}</a>
    <a href="#">&raquo;</a>
  </div>
</template>

<script>
export default {
  name: 'Pagination2',
  data() {
    return {}
  },
  props: ['productInfo', 'paginationInfo', 'limit', 'page'],
  methods: {
    pageNum() {
      console.log(this.total_page)
    }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  font-size: 12px;
  position: absolute;
  top: 1.65px;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.274);
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
}

.pagination a:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.pagination a:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
