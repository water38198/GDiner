<template>
  <section class="mb-16" data-aos="flip-right">
    <div class="flex flex-wrap customBorder-xl rd-3 overflow-hidden bg-primary">
      <div class="w-100% md:w-50%">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711208425781.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NWxF8O%2Fes5b9vlE%2BZLMUoLIM6pe7jbIYBdqtaiyGfiNRlG4MAbaD6Bxi%2B%2BkHT5ZeyXUdvdXa%2FdgIgkMYWVcQpV%2F5Iv1pV%2FzG1HYczU1AU9SalqaW2uX7U7yYQiS0XfjdOx1FJ%2By8pWHT6u0YJifDuKB7VRwzY230UumPJ%2FNlP3uzlW4RsQRSzp4P2JjPmSPb3snvXsBHDx7UUtra3tQ9DohSXSgHVcFujVl0owAke4DEnPJ%2BKUKJRy%2FpYXr5%2B63FFCRHxTjNG3EMeECFrqezTog8KWCgnSYqiHFmgSs3A69hBnNCpCkQr%2FEJuwyR%2F5dGqmJUCZrULtPe5j3xuSAk0g%3D%3D"
          alt="some vegetables on the table" class="block md:h-100%">
      </div>
      <div class="w-100% md:w-50%  bg-secondary border-(t-3 solid primary) md:border-(t-0 l-3) p-6 sm:p-10 md:p-15">
        <h4 class="font-size-10 sm:font-size-12 flex items-center gap-2 mb-5">簡單 - 快速 - 享用美味!
        </h4>
        <p class="lh-loose tracking-wider mb-5">
          當您踏入我們的餐廳時，即刻感受到一股迷人的香氣飄散在空氣中，迎接您的是一場充滿著美食與美好的饗宴。我們的料理風格融合了傳統與創新，每一道菜都是我們烹飪團隊用心打造的藝術品
        </p>
        <div class="text-center sm:text-start">
          <RouterLink to="/recommend"
            class="inline-block bg-info text-secondary px-7.5 py-3 lh-120% tracking-widest rd-10 shadow-[0_2px_0_0_#3D081B] hover:(shadow-[0_0px_1px_1px_#3D081B])">
            初次嘗鮮</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>