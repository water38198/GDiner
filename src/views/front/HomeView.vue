<script>
import HomeHeader from '@/components/front/home/HomeHeader.vue';
import NewProducts from '@/components/front/home/NewProducts.vue';
import HomeNav from '@/components/front/home/HomeNav.vue';
import GetStart from '@/components/front/home/GetStart.vue';
import EmailSubscribe from '@/components/front/home/EmailSubscribe.vue';
import HomeBanner from '@/components/front/home/HomeBanner.vue';

export default {
  components: { HomeHeader, NewProducts, HomeNav, GetStart, EmailSubscribe, HomeBanner },
}
</script>

<template>
  <HomeHeader />
  <main class="py-6 md:py-10 px-4 md:(container px-12.5)">
    <NewProducts />
    <!-- 尋找心中的美味 -->
    <HomeNav />
    <!-- 初次嘗鮮 -->
    <getStart />
    <!-- Email -->
    <EmailSubscribe />
    <HomeBanner />
  </main>
</template>
