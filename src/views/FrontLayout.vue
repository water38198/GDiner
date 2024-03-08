<script setup>
import { RouterView } from 'vue-router'
import NavBarComp from '@/components/front/NavBarComp.vue';
import FooterComp from '@/components/front/FooterComp.vue';
</script>


<template>
    <div class="bg-secondary">
        <NavBarComp />
        <RouterView />
        <FooterComp />
    </div>
</template>