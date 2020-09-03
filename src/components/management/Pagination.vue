<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: !pageInfo.has_pre }">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="pageShift(pageInfo.current_page - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="page in pageInfo.total_pages"
          :key="page"
          :class="{ active: pageInfo.current_page == page }"
        >
          <a class="page-link" href="#" @click.prevent="pageShift(page)">{{
            page
          }}</a>
        </li>

        <li class="page-item" :class="{ disabled: !pageInfo.has_next }">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="pageShift(pageInfo.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['pageInfo'], // 用props將pagination資料帶入
  methods: {
    pageShift (page) {
      this.$emit('pageChange', page)
      console.log(page)
    }
  }
}
</script>
