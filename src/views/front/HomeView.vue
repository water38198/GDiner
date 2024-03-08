<script setup>

</script>

<template>

  <header class="pt-80 sm:py-12.5 mb-10">
    <div class="container">
      <div class="flex sm:(px-12.5 py-15) ">
        <div
          class="bg-secondary px-9 py-10  border-(t-3 b-3 primary solid) sm:(max-w-550px customBorder-xl rd-3 text-start) text-primary text-center ">
          <h2 class="font-size-12  lh-150% font-serif text-center mb-3 sm:mb-8 fw-bold">
            <span class="inline-block sm:(translate-x--40% rotate-3)">
              美好飯局，
            </span>
            <span class="inline-block sm:(translate-x-40% rotate--3)">就在阿橘！</span>
          </h2>
          <p class="lh-normal mb-5">每道料理都是由我們阿橘大廚精心挑選、用心製作而成，且盡力維持每道料理在 30 分鐘內完成，請客人放心食用。</p>
          <div>
            <a href="#"
              class="inline-block font-size-4 tracking-widest text-primary px-7.5 py-3 border-(2 primary solid) rd-10 shadow-[0_2px_0_0_#3D081B] hover:(outline-(2 #3D081B solid))">開始購物</a>
          </div>
        </div>
      </div>
    </div>
  </header>
  <hr class="border-(gray-300 1px solid)">
  <main class=" py-16 px-4 md:(container px-12.5)">
    <!-- 火熱商品 -->
    <section class=" mb-16">
      <h2 class="text-primary font-size-7 tracking-widest mb-7.5 flex">火熱商品 <div class="i-twemoji:fire inline-block">
        </div>
      </h2>
      <ul class="grid grid-cols-2   lg:grid-cols-4 gap-4">
        <li v-for="i in 8" :key="i + 123">
          <div class="card">
            <a href="#" class="block">
              <div class="card-image">
                <img
                  src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="" class="block h-150px w-100% md:h-250px">
              </div>
              <h3 class="mb-4  tracking-wider">好吃蔥油餅</h3>
              <div class="pb-4">
                <span>NT$ 200</span>
              </div>
            </a>
          </div>
        </li>

      </ul>
    </section>
    <!-- 尋找心中的美味 -->
    <section class="mb-16">
      <h2 class="text-primary font-size-7 tracking-widest mb-7.5">
        尋找心中的美味<div class="i-fxemoji:potoffood inline-block"></div>
      </h2>
      <div class="grid gap-1.5 grid-cols-2 md:(grid-flow-col grid-cols-3 gap-3)">
        <div class="col-span-1 row-span-1">
          <div class="card">
            <a href="#" class="block">
              <div class="card-image">
                <img
                  src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="" class="h-250px md:h-400px">
              </div>
              <div class="pb-4">
                <h4 class="flex items-center font-size-5">其他好東西 <div
                    class="i-material-symbols:arrow-right-alt inline-block ms-1">
                  </div>
                </h4>
              </div>
            </a>
          </div>
        </div>
        <div class="col-span-1 row-span-1">
          <div class="card">
            <a href="#" class="block">
              <div class="card-image">
                <img
                  src="https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="" class="h-250px md:h-400px w-100%">
              </div>
              <div class="pb-4">
                <h4 class="flex items-center font-size-5">套餐<div
                    class="i-material-symbols:arrow-right-alt inline-block ms-1">
                  </div>
                </h4>
              </div>
            </a>
          </div>
        </div>
        <div class="col-span-2 row-span-2">
          <div class="card h-100%">
            <a href="#" class="flex flex-col h-100%">
              <div class="card-image flex-1">
                <img
                  src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="" class="h-100%">
              </div>
              <div class="pb-4">
                <h4 class="flex items-center font-size-5">新品上市<div
                    class="i-material-symbols:arrow-right-alt inline-block ms-1">
                  </div>
                </h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- 初次嘗鮮 -->
    <section class="mb-16">
      <div class="flex flex-wrap customBorder-xl rd-3 overflow-hidden bg-primary">
        <div class="w-100% md:w-50% ">
          <img
            src="https://plus.unsplash.com/premium_photo-1681826678826-e2e2d8455174?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="" class="block h-100%">
        </div>
        <div class="w-100% md:w-50%  bg-secondary border-(t-3 solid primary) md:border-(t-0 l-3) p-15">
          <h4 class="font-size-12 font-italic flex items-center gap-2 lh-120% mb-5">簡單 - 快速 - 享用美味!
          </h4>
          <p class="lh-loose tracking-wider mb-5">
            當您踏入我們的餐廳時，即刻感受到一股迷人的香氣飄散在空氣中，迎接您的是一場充滿著美食與美好的饗宴。我們的料理風格融合了傳統與創新，每一道菜都是我們烹飪團隊用心打造的藝術品。我們都竭誠歡迎您來品嚐我們獨特而精緻的料理，為您帶來一場難忘的饗宴。
          </p>
          <div>
            <a href="#"
              class="inline-block bg-info text-secondary px-7.5 py-3 lh-120% tracking-widest rd-10 shadow-[0_2px_0_0_#3D081B] hover:(shadow-[0_0px_1px_1px_#3D081B])">初次嘗鮮</a>
          </div>
        </div>
      </div>
    </section>
    <!-- 訂閱我們 -->
    <section class="mb-16">
      <div class="customBorder-xl rd-3 text-center pt-10 pb-12">
        <h2 class="mb-5 font-size-12 lh-tight tracking-widest">
          訂閱我們
        </h2>
        <p class="lh-normal mb-5">現在就訂閱，您將能享受到獨家的優惠和菜單更新，與我們一同開啟美味之旅吧！</p>
        <div class="flex justify-center">
          <div class="custom-input-group">
            <input type=" text" id="search" placeholder="搜尋">
            <label for="search">Email</label>
            <button
              class="bg-transparent border-0 outline-0 font-size-6 text-primary hover:(cursor-pointer) absolute right-2  top-1/2 translate-y--1/2">
              <div class="i-material-symbols:arrow-right-alt "></div>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="mb-16">
      <div class="flex flex-wrap customBorder-xl rd-3 overflow-hidden bg-primary">
        <div
          class="w-100% md:w-50%  bg-secondary border-(b-3 solid primary) md:border-(b-0 r-3) p-15 flex flex-col justify-center">
          <h4 class="font-size-12 font-italic tracking-widest lh-120% mb-5 ">值得信任的阿橘
          </h4>
          <p class="lh-loose tracking-wider">
            親愛的食客們，阿橘大廚受過法國、日本、韓國等專業訓練，每道料理都是阿橘精心研發、悉心呈現的絕佳組合，帶給您難忘的美食體驗。阿橘專注於每一道菜品的製作，並結合了傳統烹飪技藝和創新的烹飪理念，讓每一道菜都充滿了驚喜和美味。
          </p>

        </div>
        <div class="w-100% md:w-50% ">
          <img src="@/assets/home/chef.jpg" alt="" class="block h-100%">
        </div>

      </div>
    </section>
    <section class="mb-16">
      <!-- 試著用Swiper -->
      <div class="grid md:grid-cols-3 gap-3">
        <div class="customBorder-xl rd-3 pt-6 text-center">
          <h4 class="font-size-12 font-kai text-info">時尚</h4>
          <p class="p-6 lh-normal">"每一道菜都是精心打造的藝術品，不僅滿足您的味蕾，更是一場視覺和味覺的盛宴。"</p>
        </div>
        <div class="customBorder-xl rd-3 pt-6 text-center">
          <h4>
            <span class="inline-block p-3 font-size-6 text-white bg-info rd-50%">原</span>
          </h4>
          <p class="p-6 lh-normal">"新鮮的材料，每日用最短的時間從產地直送到餐廳"</p>
        </div>
        <div class="customBorder-xl rd-3 pt-6 text-center">
          <h4 class="font-size-12 font-serif text-info">用心</h4>
          <p class="p-6 lh-normal">"無論是享受個人美食之旅，還是與親朋好友共享用餐體驗，阿橘飯店都能帶給您意想不到的驚喜和愉悅。"</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="postcss">
header {
  background-image: url('https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
}

.card {
  .card-image {
    @apply rd-3 customBorder-xl bg-primary overflow-hidden mb-4;

  }

  img {
    transition: all .5s ease-in-out;
    display: block;
  }
}

.card:hover {
  img {
    transform: scale(1.1);
    transition: all .5s ease-in-out;
  }

  h3 {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
}

.custom-input-group {
  position: relative;
  width: max(50%, 300px);

  &::before {
    content: "";
    inset: 0;
    position: absolute;
    border: #3D081B 1px solid;
    border-radius: .75rem;
    box-shadow: 0px 2px 0px #3D081B;
    pointer-events: none;
  }

  input {
    background-color: #F2EFDD;
    border-radius: .75rem;
    color: #3D081B;
    width: 100%;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 16px;
    outline: 0;

    &:focus {
      padding-top: 18px;
      padding-bottom: 10px;
      outline: #3D081B 1.5px solid;
    }

    &:hover {
      outline: #3D081B 1.5px solid;
    }
  }

  input::placeholder {
    color: transparent
  }

  label {
    position: absolute;
    transition: transform .1s ease-in-out;
    color: #3D081B;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  input:focus~label,
  input:not(:placeholder-shown)~label {
    color: #3D081B;
    transform: scale(0.8) translateY(-1.75rem) translateX(-0.25rem);
  }
}
</style>