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
  <div class="dropdown">
    <button type="button" data-bs-toggle="dropdown" aria-expanded="false">價格<i class="bi bi-caret-down-fill"></i></button>
  <div class="dropdown-menu dropdown-menu-start bg-secondary border-custom">
    <div class="dropdown-header d-flex justify-content-between px-5 py-2">
      <span class="fs-5">價格範圍</span>
      <button type="button" class="text-decoration-underline text-offset-4" @click="resetPriceRange">
        重置
      </button>
    </div>
    <hr class="dropdown-divider">
    <form action="" class="d-flex align-items-center p-4">
      <span class="fs-md-4 fs-lg-3 me-1">$</span>
      <div class="form-floating me-4">
        <input type="number" id="lowPrice" @change="changeLow" :value="low" class="form-control border-custom bg-secondary fs-7 fs-md-6" placeholder="最低價" min="0" />
        <label for="lowPrice">最低價</label>
      </div>
      <span class="fs-md-4 fs-lg-3 me-1">$</span>
      <div class="form-floating">
        <input type="number" id="highPrice" @change="changeHigh" :value="high" class="form-control border-custom bg-secondary fs-7 fs-md-6" placeholder="最高價" min="0" />
        <label for="highPrice">最高價</label>
      </div>
    </form>
  </div>
</div>

</template>

<style scoped lang="scss">
.dropdown-menu{
  width: min(55vw,500px);
}

[type="number"]::-webkit-outer-spin-button,[type="number"]::-webkit-inner-spin-button{
  -webkit-appearance: none;
  appearance: none;
}
</style>