<script>
export default {
  props: ['modelValue'],
  emits:['update:modelValue'],
  data(){
    return {
      sorts: ['最高價格', '最低價格', '最新', '最舊'],
    }
  },
  methods: {
    changeSort(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<template>
  <div>
    <select name="sortBy" id="sortBy" @change="changeSort"
      class="bg-transparent border-0 cursor-pointer font-size-4" ref="sortRef">
      <option v-for="sort in sorts" :key="sort" :value="sort" :selected="sort === '最新'">{{ sort }}</option>
      <!-- <option value="最高價格">最高價格</option>
      <option value="最低價格">最低價格</option>
      <option value="最新" selected>最新</option>
      <option value="最舊">最舊</option> -->
    </select>
  </div>
</template>