<script>
import FrontNavbar from '@/components/front/FrontNavbar.vue';
import FrontFooter from '@/components/front/FrontFooter.vue';
export default {
  components:{FrontNavbar, FrontFooter}
}
</script>

<template>
  <div class="bg-secondary min-h-screen grid">
    <FrontNavbar />
    <RouterView />
    <FrontFooter />
  </div>
</template>