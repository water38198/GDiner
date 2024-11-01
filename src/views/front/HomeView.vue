<script setup>
import HomeHeader from '@/components/front/home/HomeHeader.vue';
import NewProducts from '@/components/front/home/NewProducts.vue';
import HomeNav from '@/components/front/home/HomeNav.vue';
import GetStart from '@/components/front/home/GetStart.vue';
import SubscribeUs from '@/components/front/home/SubscribeUs.vue';
import HomeBanner from '@/components/front/home/HomeBanner.vue';
import ThreeIntroduce from '@/components/front/home/ThreeIntroduce.vue';
</script>

<template>
  <HomeHeader />
  <main class="container">
    <GetStart />
    <NewProducts />
    <HomeNav />
    <HomeBanner />
    <ThreeIntroduce />
    <SubscribeUs />
  </main>
</template>
