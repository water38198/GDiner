<template>
  <header class="pt-20 py-sm-13 mb-10">
    <div class="container-sm px-0">
      <div class="py-sm-15" data-aos="flip-up">
        <div
          class="header-content bg-secondary px-9 py-10 border-custom border-custom-large rounded-sm-3 text-primary text-center">
          <h2 class="fs-1 mb-3 mb-sm-8 fw-bold">
            <span class="d-sm-block font-serif">美好飯局，</span>
            <span class="d-sm-block font-serif">盡在阿橘！</span>
          </h2>
          <p class="mb-5">每道料理都是由我們阿橘大廚精心挑選、用心製作而成，且食材皆採用符合時節與產地直送，請客人放心食用。</p>
          <div>
            <RouterLink to="/recommend"
              class="d-inline-block border-custom rounded-5 px-8 py-3 fs-6 btn btn-outline-primary">
              開始點菜
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  header {
    @media (width < 576px) {
      padding-top: 250px !important;
    }
    background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711206531765.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pgnZTmwOymp3mYzu8ht8Eo6cnKBY5zHjTi6Md22%2F%2FYE2J3e0ojerFRE25Ik0CHX328%2BMsDtfKUGRPHGL97I8i%2FIdm%2FszuAMO3W2JNQTia6HYK2qGmAJLJvvpDapce0xXip%2Bsh4MqPa4PTnpBrpep1BQIZP1k0IVFRZ8RkvGtpS9STfJRhNRk6pbNNblNB8BQ0imy4etYjTJYWTeKibPN%2FtfZQ%2Bp42ZwtjL6kzNkZXB8azC71u%2BDmdFIqFl%2FfwfGBzrMHqeztO8jDAM9XrmUpcAqOXAewCAWr3l8qnhU8Rne%2BYeMEbwROCIP4kcURVvNPCaNmEXN4fLi6MCnXOnZfnA%3D%3D');
    background-size: cover;
  }
  .header-content{
    @media (width < 576px) {
      border-left:0;
      border-right: 0;
      border-radius: 0;
    }
    @media (width > 576px) {
      max-width: 550px;
    }
    h2{
      span:first-child{
        transform: translateX(-10%);
      }
      span:last-child{
        transform: translateX(10%);
      }
    }
  }

</style>