<template>
  <section class="mb-16" data-aos="flip-right">
    <div class="row g-0 border-custom border-custom-large overflow-hidden bg-primary">
      <div class="col-md-6">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711208425781.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NWxF8O%2Fes5b9vlE%2BZLMUoLIM6pe7jbIYBdqtaiyGfiNRlG4MAbaD6Bxi%2B%2BkHT5ZeyXUdvdXa%2FdgIgkMYWVcQpV%2F5Iv1pV%2FzG1HYczU1AU9SalqaW2uX7U7yYQiS0XfjdOx1FJ%2By8pWHT6u0YJifDuKB7VRwzY230UumPJ%2FNlP3uzlW4RsQRSzp4P2JjPmSPb3snvXsBHDx7UUtra3tQ9DohSXSgHVcFujVl0owAke4DEnPJ%2BKUKJRy%2FpYXr5%2B63FFCRHxTjNG3EMeECFrqezTog8KWCgnSYqiHFmgSs3A69hBnNCpCkQr%2FEJuwyR%2F5dGqmJUCZrULtPe5j3xuSAk0g%3D%3D"
          alt="some vegetables on the table" class="w-100 h-md-100">
      </div>
      <div class="col-md-6 bg-secondary p-6 p-sm-10 p-lg-15 border-between">
        <h4 class="fs-1 mb-5">簡單 - 快速 - 享用美味!
        </h4>
        <p class="mb-5">
          當您踏入我們的餐廳時，即刻感受到一股迷人的香氣飄散在空氣中，迎接您的是一場充滿著美食與美好的饗宴。我們的料理風格融合了傳統與創新，每一道菜都是我們烹飪團隊用心打造的藝術品
        </p>
        <div class="text-center text-md-start">
          <RouterLink to="/recommend" class="d-inline-block bg-info text-secondary px-8 py-3 rounded-5 btn-get-start">
            初次嘗鮮
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .border-between {
    border-top: 3px solid var(--bs-primary);
    @media (min-width: 768px) {
      border-top: 0;
      border-left: 3px solid var(--bs-primary);
    }
  }

  .btn-get-start{
    box-shadow: 0 2px 0 0 var(--bs-primary);
    &:hover{
      box-shadow: 0 0px 1px 1px var(--bs-primary);
    }
  }
</style>