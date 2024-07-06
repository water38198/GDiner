<script>
export default {
  props: {
    modelValue: Array,
  },
  data() {
    return {
      categories: ['主食', '沙拉', '湯品', '副食', '甜點', '飲料', '套餐'],
    }
  },
  computed: {
    selectedCount() {
      return this.modelValue.length;
    }
  },
  methods: {
    updateCategory(event) {
      let newValue = [...this.modelValue];
      if (event.target.checked) {
        newValue.push(event.target.value);
      } else {
        newValue = newValue.filter(value=> value !== event.target.value)
      }
      this.$emit('update:modelValue', newValue);
    },
    resetCategory() {
      this.$emit('update:modelValue', []);
    }
  },
}
</script>
<template>
  <div class="dropdown">
    <button type="button" data-bs-toggle="dropdown" aria-expanded="false">分類 <i class="bi bi-caret-down-fill"></i></button>
    <div class="dropdown-menu bg-secondary custom-border">
      <div class="dropdown-header d-flex justify-content-between px-5 py-2">
        <span>{{selectedCount}} 已選取</span>
        <button type="button" class="text-decoration-underline text-offset-4" @click="resetCategory">
          重置
        </button>
      </div>
      <hr class="dropdown-divider">
      <ul class="list-unstyled pt-4">
        <li v-for="category in categories" :key="category" class="px-4 mb-2">
          <div class="form-check fs-5">
            <input class="form-check-input fs-5 border-2 border-primary" type="checkbox" :id="category" :value="category" :checked="modelValue.includes(category)" @change="updateCategory">
            <label class="form-check-label" :for="category">
              {{ category }}
            </label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.text-offset-4{
  text-underline-offset: 4px;
}
.form-check:hover{
  cursor: pointer;
  & > *{
    cursor: pointer;
  }
}
</style>