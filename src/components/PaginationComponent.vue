<script setup>
const props = defineProps(["pages"]);
const emit = defineEmits(['changePage']);
function changePage(page) {
  emit('changePage', page);
}
</script>

<template>
  <div class="container mx-a py-6">
    <nav class="flex justify-center">
      <ul class="flex items-center text-primary">
        <li class="border-(solid #dee2e6 1)   border-collapse rd-tl rd-bl"
          :class="{ 'disabled': props.pages.current_page === 1 }">
          <a href="#" class="block p-2 text-primary hover:(bg-#e9ecef cursor-pointer)"
            @click.prevent="changePage(props.pages.current_page - 1)">
            <div class="i-mdi:arrow-left"></div>
          </a>
        </li>
        <li v-for="i in props.pages.total_pages" :key="i" class="border-(solid #dee2e6 1)  border-collapse "
          :class="{ 'active': i === props.pages.current_page }">
          <a href="#" class="font-size-4 decoration-none block text-primary px-3 py-2 hover:(bg-#e9ecef cursor-pointer)"
            @click.prevent="changePage(i)">{{ i
            }}</a>
        </li>
        <li class="border-(solid #dee2e6 1) border-collapse rd-tr rd-br"
          :class="{ 'disabled': props.pages.current_page === props.pages.total_pages }">
          <a href="#" class="block p-2 text-primary hover:(bg-#e9ecef cursor-pointer)"
            @click.prevent="changePage(props.pages.current_page + 1)">
            <div class="i-mdi:arrow-right "></div>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
li {
  &.disabled {
    a {
      @apply text-#6c757d pointer-events-none cursor-auto bg-transparent;
    }
  }

  &.active {
    @apply bg-primary border-primary;

    a {
      @apply text-white pointer-events-none cursor-auto
    }
  }
}
</style>