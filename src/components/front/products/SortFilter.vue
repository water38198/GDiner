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
      class="bg-transparent border-0" ref="sortRef">
      <option v-for="sort in sorts" :key="sort" :value="sort" :selected="sort === '最新'">{{ sort }}</option>
    </select>
  </div>
</template>

<style scoped> 
  select:hover{
    cursor: pointer;
  }
</style>