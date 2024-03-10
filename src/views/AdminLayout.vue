<script setup>
import AdminNavbar from '@/components/admin/AdminNavbar.vue';

import { RouterView } from 'vue-router'
</script>


<template>
    <AdminNavbar />
    <div>
        後台
    </div>
    <RouterView></RouterView>
</template>