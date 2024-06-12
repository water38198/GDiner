<script>
export default {
  props: {
    high: {
      type: [Number, String],
    },
    low: {
      type: [Number, String],
    }
  },
  emits:['update:high','update:low'],
  methods: {
    resetPriceRange() {
      this.$emit('update:high', null);
      this.$emit('update:low', null);
    },
    changeLow(event) {
      this.$emit('update:low', event.target.value);
    },
    changeHigh(event) {
      this.$emit('update:high', event.target.value);
    }
  }
}
</script>
<template>
  <details class="relative">
    <summary class="flex list-none text-primary-light hover:(cursor-pointer underline underline-offset-4)">
      <span class="text-primary-light hover:text-primary">價格</span>
      <div class="i-material-symbols:keyboard-arrow-down"></div>
    </summary>
    <div class="absolute top-10 left-[-120px] sm:left-[-1.2rem] z-2 w-80 rd-4 customBorder rd-2 bg-secondary">
      <div class="flex justify-between px-5 py-4 border-(b-1 solid primary-200)">
        <span>價格範圍</span>
        <button type="button"
          class="bg-transparent border-0 underline underline-offset-4 tracking-widest hover:(cursor-pointer decoration-2)"
          @click="resetPriceRange">
          重置
        </button>
      </div>
      <div class="flex items-center p-5">
        <span class="me-1">$</span>
        <div class="price-group">
          <input type="number" id="lowPrice" @change="changeLow" :value="low" class="w-100%" placeholder="最低價" min="0" />
          <label for="lowPrice">最低價</label>
        </div>
        <span class="ms-5 me-1">$</span>
        <div class="price-group">
          <input type="number" id="highPrice" @change="changeHigh" :value="high" class="w-100%" placeholder="最高價" min="0" />
          <label for="highPrice">最高價</label>
        </div>
      </div>
    </div>
  </details>
</template>

<style scoped lang="scss">
.price-group {
  display: flex;
  flex: 1;
  position: relative;

  input {
    @apply customBorder;
    border-width: 2px;
    background: transparent;
    border-radius: 12px;
    outline: 0;
    padding: 0.75rem;

    &::placeholder {
      color: transparent;
    }

    &:hover {
      outline: 1px solid #3d081b;
    }
  }

  label {
    transition: transform 0.1s ease-in-out;
    user-select: none;
    position: absolute;
    top: 50%;
    left: 0.75rem;
    transform: translateY(-50%);
  }

  input:not(:placeholder-shown),
  input:focus {
    padding-top: 18px;
    padding-bottom: 6px;
  }

  input:focus~label,
  input:not(:placeholder-shown)~label {
    color: rgba(61, 8, 27, 0.6);
    transform: scale(0.75) translateY(-25px) translateX(-4px);
  }
}
</style>