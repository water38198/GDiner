<script>
export default {
  props: {
    pages: {
      type: Object,
      required:true,
    }
  },
  emits: {
    changePage:null,
  },
  methods: {
    changePage(method) {
      this.$emit('changePage',method)
    }
  }
}
</script>
<template>
  <div class="mb-12" v-if="pages.total > 1">
    <nav role="navigation" aria-label="Pagination">
      <ul class="flex justify-center font-size-5 fw-bold">
        <li v-if="pages.current !== 1">
          <a href="#" class="block px-2 fw-400" @click.prevent="changePage('-')">
            <div class="i-ic:round-keyboard-arrow-left"></div>
          </a>
        </li>
        <li v-for="i in pages.total" :key="`${i}+123`" :class="{'underline underline-offset-6 decoration-2 pointer-events-none': i == pages.current}">
          <a href="#" class="block px-4" @click.prevent="changePage(i)">
            {{ i }}
          </a>
        </li>
        <li v-if="pages.current !== pages.total">
          <a href="#" class="block px-2 fw-400" @click.prevent="changePage('+')">
            <div class="i-ic:round-keyboard-arrow-right"></div>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>