<script>
export default {
  props: {
    pages: {
      type: Object,
      required: true,
      validator(value) {
        return 'total' in value && 'current' in value;
      }
    }
  },
  emits: ['changePage'],
  methods: {
    changePage(method) {
      this.$emit('changePage',method)
    }
  }
}
</script>
<template>
  <template v-if="pages.total > 1">
    <nav aria-label="Page navigation" role="navigation" class="mb-10">
      <ul class="pagination pagination-lg justify-content-center">
        <li class="page-item" v-if="pages.current !== 1">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="changePage('-')">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="i in pages.total" :key="i" :class="{'active':pages.current_page === i}">
          <a class="page-link" href="#"  @click.prevent="changePage(i)">{{ i }}</a>
        </li>
        <li class="page-item" v-if="pages.current !== pages.total">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="changePage('+')">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </template>
</template>

<style scoped lang="scss">
.active{
  pointer-events: none;
}
</style>