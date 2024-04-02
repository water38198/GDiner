<template>
  <footer class="bg-info pt-16 pb-12.5">
    <div class="container px-10 md:px-12.5">
      <div class="grid gap-10 sm:(grid-cols-3 gap-0) mb-4">
        <div class="text-center sm:text-left">
          <img src="@/assets/img/footer-logo.png" alt="阿橘飯店" />
        </div>
        <div>
          <h4 class="font-size-6 md:font-size-7 mb-5 text-secondary">快速連結</h4>
          <ul>
            <li>
              <RouterLink to="/recommend"
                class="inline-block py-2 text-secondary opacity-75 hover:(opacity-100 underline underline-offset-6)">
                推薦</RouterLink>
            </li>
            <li>
              <RouterLink to="/products"
                class="inline-block py-2 text-secondary opacity-75 hover:(opacity-100 underline underline-offset-6)">
                料理</RouterLink>
            </li>
            <li>
              <RouterLink to="/about"
                class="inline-block py-2 text-secondary opacity-75 hover:(opacity-100 underline underline-offset-6)">
                關於</RouterLink>
            </li>
            <li>
              <RouterLink to="/contact"
                class="inline-block py-2 text-secondary opacity-75 hover:(opacity-100 underline underline-offset-6)">
                聯絡我們</RouterLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-secondary font-size-7 mb-5">我們的使命</h4>
          <p class="text-secondary lh-normal tracking-wider opacity-75">
            我們的使命是創造美好的回憶，並為顧客帶來最佳的用餐體驗。我們期待著與您相遇，為您提供一場無與倫比的美食之旅，讓您流連忘返，愉快滿足。
          </p>
        </div>
      </div>
      <div class="mb-10">
        <ul class="flex justify-center">
          <li>
            <a href="#" class="inline-block p-3 text-secondary font-size-6">
              <div class="i-mdi:twitter hover:(transform-scale-120)"></div>
            </a>
          </li>
          <li>
            <a href="#" class="inline-block p-3 text-secondary font-size-6">
              <div class="i-ant-design:facebook-filled hover:(transform-scale-120)"></div>
            </a>
          </li>
          <li>
            <a href="#" class="inline-block p-3 text-secondary font-size-6">
              <div class="i-ph:instagram-logo-bold hover:(transform-scale-120)"></div>
            </a>
          </li>
          <li>
            <a href="#" class="inline-block p-3 text-secondary font-size-6">
              <div class="i-ic:baseline-tiktok hover:(transform-scale-120)"></div>
            </a>
          </li>
          <li>
            <a href="mailto:GDiner@example.com" class="inline-block p-3 text-secondary font-size-6">
              <div class="i-material-symbols:mail-outline-rounded hover:(transform-scale-120)"></div>
            </a>
          </li>
        </ul>
      </div>
      <div class="text-center">
        <p class="text-secondary mb-2">本網站僅供練習用，無商業用途。</p>
        <div>
          由<a href="https://www.designevo.com/tw/" title="免費的線上標誌製做器">DesignEvo</a>製作的Logo
        </div>
      </div>
    </div>
  </footer>
</template>
