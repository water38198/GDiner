<script>
export default {
  data() {
    return {
      links: [
        {text: '推薦', to: '/recommend'},
        { text: '料理', to: '/products' },
        { text: '關於', to: '/about' },
        { text: '聯絡我們', to: '/contact' }
      ],
      socialIcons: [
        { href: '#', class: 'bi-twitter' },
        { href: '#', class: 'bi-facebook' },
        { href: '#', class: 'bi-instagram' },
        { href: '#', class: 'bi-tiktok' },
        { href: 'mailto:GDiner@example.com', class: 'bi-envelope' }
      ]
    }
  }
}
</script>

<template>
  <footer class="bg-info pt-6 pt-md-10 pb-4">
    <div class="container">
      <div class="row row-cols-md-3 gap-6 gap-md-0 mb-4 mb-md-10">
        <div class="text-center">
          <img src="@/assets/img/footer-logo.png" alt="阿橘飯店" />
        </div>
        <div >
          <h4 class="fs-4 fs-md-2 mb-5 text-secondary">快速連結</h4>
          <ul class="nav flex-column gap-3">
            <li v-for="link in links" :key="link.text">
              <RouterLink :to="link.to" class="d-block py-2 text-secondary opacity-75">
                {{ link.text }}
              </RouterLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="fs-4 fs-md-2 mb-5 text-secondary">我們的使命</h4>
          <p class="text-secondary opacity-75">
            我們的使命是創造美好的回憶，並為顧客帶來最佳的用餐體驗。我們期待著與您相遇，為您提供一場無與倫比的美食之旅，讓您流連忘返，愉快滿足。
          </p>
        </div>
      </div>
      <div class="mb-5">
        <ul class="nav justify-content-center">
          <li v-for="icon in socialIcons" :key="icon.class">
            <a :href="icon.href" class="d-inline-block p-3 text-secondary">
              <i class="bi text-secondary fs-4" :class="icon.class"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="text-center">
        <p class="text-secondary mb-2">本網站僅供練習用，無商業用途。</p>
        <p>
          由<a href="https://www.designevo.com/tw/" title="免費的線上標誌製做器">DesignEvo</a>製作的Logo
        </p>
      </div>
    </div>
  </footer>
</template>