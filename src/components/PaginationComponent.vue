<script>
export default {
  props: {
    pages: {
      type:Object,
    }
  },
  emits: ['changePage'],
  methods: {
    changePage(page) {
      this.$emit('changePage', page);
    }
  },
}
</script>
<template>
  <template v-if="pages.total_pages > 1">
    <div class="container mx-a py-6">
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ 'disabled':pages.current_page === 1 }">
            <a class="page-link" @click.prevent="changePage('-')">上一頁</a>
          </li>
          <li class="page-item" v-for="i in pages.total_pages" :key="i">
            <a class="page-link" href="#"  @click.prevent="changePage(i)" :class="{'active':pages.current_page === i}">{{ i }}</a>
          </li>
          <li class="page-item" :class="{ 'disabled': pages.current_page === pages.total_pages }">
            <a class="page-link" href="#" @click.prevent="changePage('+')">下一頁</a>
          </li>
        </ul>
      </nav>
    </div>
  </template>
</template>

<style scoped lang="scss">
.active{
  pointer-events: none;
}
</style>