<template>
  <main class="container text-center">
    <h1 class="mb-10 px-4 pt-20">
        <i class="bi bi-cone-striped"></i>
    </h1>
    <p>很抱歉，您可能輸入了錯誤的網址或是網站出了些問題。</p>
    <p>如果狀況持續發生，請與我們聯絡：</p>
    <ul class="nav justify-content-center">
      <li><a href="#" class="inline-block p-3 text-primary fs-4" aria-label="Twitter">
          <i class="bi bi-twitter"></i>
        </a></li>
      <li><a href="#" class="inline-block p-3 text-primary fs-4" aria-label="Facebook">
          <i class="bi bi-facebook"></i>
        </a></li>
      <li><a href="#" class="inline-block p-3 text-primary fs-4" aria-label="Instagram">
          <i class="bi bi-instagram"></i>
        </a></li>
      <li><a href="#" class="inline-block p-3 text-primary fs-4" aria-label="TikTok">
          <i class="bi bi-tiktok"></i>
        </a></li>
      <li><a href="mailto:GDiner@example.com" class="inline-block p-3 text-primary fs-4" aria-label="Email">
          <i class="bi bi-envelope"></i>
        </a></li>
    </ul>
    <ul class="nav gap-4 justify-content-center mt-15">
      <li>
        <a href="#" class="custom-border px-4 py-2"
          @click.prevent="$router.go(-1)">回上一頁</a>
      </li>
      <li>
        <RouterLink to="/" class="custom-border px-4 py-2">首頁
        </RouterLink>
      </li>
    </ul>
  </main>
</template>

<style scoped lang="scss">
h1 i{
  font-size: 80px;
}
.custom-border:hover,.custom-border:focus-visible {
  background-color: var(--bs-primary);
  color:var(--bs-secondary);
  transition: background-color 0.3s, color 0.3s;
}
</style>