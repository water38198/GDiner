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
  <details class="relative">
    <summary class="flex list-none text-primary-light cursor-pointer hover:(underline underline-offset-4)">
      <span class="text-primary-light hover:text-primary">分類</span>
      <div class="i-material-symbols:keyboard-arrow-down"></div>
    </summary>
    <div class="absolute top-10 left-[-40px] sm:left-[-1.2rem] z-2 w-80 rd-4 customBorder rd-2 bg-secondary">
      <div class="flex justify-between px-5 py-4 border-(b-1 solid primary-200)">
        <span>{{selectedCount}} 已選取</span>
        <button type="button"
          class="bg-transparent border-0 underline underline-offset-4 tracking-widest hover:(cursor-pointer decoration-2)"
          @click="resetCategory">
          重置
        </button>
      </div>
      <ul class="px-5 py-1">
        <li v-for="category in categories" :key="category">
          <label :for="category" class="relative flex gap-3 py-2.5 lh-tight cursor-pointer">
            <input type="checkbox" :id="category" :value="category" :checked="modelValue.includes(category)" @change="updateCategory"
              class="appearance-none m-0 size-5 rd-1 cursor-pointer" />
            {{ category }}
          </label>
        </li>
      </ul>
    </div>
  </details>
</template>

<style lang="scss">
details[open]>summary::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 2;
  background-color: transparent;
  display: block;
}

[type='checkbox']::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  outline: 1px solid rgba(61, 8, 27, 0.2);
}

[type='checkbox']:checked::after {
  content: '';
  position: absolute;
  width: 5px;
  height: 10px;
  border-right: 2px solid #3d081b;
  border-bottom: 2px solid #3d081b;
  transform: rotate(45deg);
  top: 12px;
  left: 7px;
}</style>