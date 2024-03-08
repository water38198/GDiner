<script setup>
import { RouterView } from 'vue-router'
import NavBarComp from '@/components/front/NavBarComp.vue';

</script>


<template>
    <div class="bg-secondary">
        <NavBarComp></NavBarComp>
        <RouterView />
    </div>
</template>