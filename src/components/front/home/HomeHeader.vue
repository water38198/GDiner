<template>
  <header class="pt-80 sm:py-12.5 mb-10">
    <div class="container">
      <div class="flex sm:(px-12.5 py-15)" data-aos="flip-up">
        <div
          class="bg-secondary px-9 py-10  border-(t-3 b-3 primary solid) sm:(max-w-550px customBorder-xl rd-3 text-start) text-primary text-center ">
          <h2 class="font-size-12 text-center mb-3 sm:mb-8 fw-bold">
            <span class="inline-block sm:(translate-x-[-40%])">美好飯局，</span>
            <span class="inline-block sm:(translate-x-40%)">盡在阿橘！</span>
          </h2>
          <p class="mb-5">每道料理都是由我們阿橘大廚精心挑選、用心製作而成，且食材皆採用符合時節與產地直送，請客人放心食用。</p>
          <div>
            <RouterLink to="/recommend"
              class="inline-block customBorder rd-10 px-7.5 py-3 font-size-4 tracking-widest text-primary hover:(text-secondary bg-primary)">
              開始點菜</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  header {
    background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711206531765.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pgnZTmwOymp3mYzu8ht8Eo6cnKBY5zHjTi6Md22%2F%2FYE2J3e0ojerFRE25Ik0CHX328%2BMsDtfKUGRPHGL97I8i%2FIdm%2FszuAMO3W2JNQTia6HYK2qGmAJLJvvpDapce0xXip%2Bsh4MqPa4PTnpBrpep1BQIZP1k0IVFRZ8RkvGtpS9STfJRhNRk6pbNNblNB8BQ0imy4etYjTJYWTeKibPN%2FtfZQ%2Bp42ZwtjL6kzNkZXB8azC71u%2BDmdFIqFl%2FfwfGBzrMHqeztO8jDAM9XrmUpcAqOXAewCAWr3l8qnhU8Rne%2BYeMEbwROCIP4kcURVvNPCaNmEXN4fLi6MCnXOnZfnA%3D%3D');
    background-size: cover;
  }
</style>