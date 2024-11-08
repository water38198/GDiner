<script setup>
import { ref, provide } from 'vue';
import { RouterView } from 'vue-router';
import AdminNavbar from '@/components/admin/AdminNavbar.vue';

const isDemo = ref(true);

const toggleDemo = () => {
  isDemo.value = !isDemo.value;
};

provide('demo', {
  isDemo,
  toggleDemo,
});
</script>

<template>
  <AdminNavbar />
  <RouterView />
</template>