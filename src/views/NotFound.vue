<script setup>

import { useRouter } from 'vue-router'
const router = useRouter();

</script>

<template>
  <div class="bg-secondary h-100vh">
    <div class="container">
      <h1 class="mb-10 px-4 pt-20 font-size-6 md:font-size-10 ">
        <div class="text-center font-size-20">
          <div class="i-material-symbols:error-circle-rounded-outline-sharp inline-block"></div>
        </div>
        <p>很抱歉，您可能輸入了錯誤的網址或是網站出了些問題。</p>
        <p>如果狀況持續發生，請與我們聯絡：</p>
      </h1>
      <ul class="flex justify-center gap-6 py-4 sticky bottom-0">
        <li><a href="#" class="inline-block p-3 text-primary font-size-10">
            <div class="i-mdi:twitter hover:(transform-scale-120)"></div>
          </a></li>
        <li><a href="#" class="inline-block p-3 text-primary font-size-10">
            <div class="i-ant-design:facebook-filled hover:(transform-scale-120)"></div>
          </a></li>
        <li><a href="#" class="inline-block p-3 text-primary font-size-10">
            <div class="i-ph:instagram-logo-bold hover:(transform-scale-120)"></div>
          </a></li>
        <li><a href="#" class="inline-block p-3 text-primary font-size-10">
            <div class="i-ic:baseline-tiktok hover:(transform-scale-120)"></div>
          </a></li>
        <li><a href="mailto:GDiner@example.com" class="inline-block p-3 text-primary font-size-10">
            <div class="i-material-symbols:mail-outline-rounded hover:(transform-scale-120)">
            </div>
          </a></li>
      </ul>
      <ul class="flex gap-4 justify-center mt-15">
        <li>
          <a href="#" class="font-size-6 customBorder rd-4 px-4 py-2 hover:(text-secondary bg-primary)"
            @click.prevent="router.go(-1)">回上一頁</a>
        </li>
        <li>
          <RouterLink to="/" class="font-size-6 customBorder rd-4 px-4 py-2 hover:(text-secondary bg-primary)">首頁
          </RouterLink>
        </li>
      </ul>
    </div>

  </div>
</template>