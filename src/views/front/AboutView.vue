<template>
  <main class="container py-8">
    <div class="mb-8 row border-custom overflow-hidden">
      <div class="col-12 col-md-5 px-0 border-between">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711216053420.jpg" alt="一堆蔬菜在桌上" class="w-100 h-100">
      </div>
      <div class="col-12 col-md-7">
        <div class="h-100 content-center p-4">
          <h2 class="mb-4 fw-bold">我們的願景</h2>
          <p>
            為客人提供獨一無二的用餐體驗，融合創新的菜品與傳統的烹飪技藝，我們堅持以新鮮、健康、美味的食材為基礎，將料理呈現出最極致的美味，讓每一道菜都成為味蕾的享受。阿橘飯店始終致力於為客人營造溫馨、舒適的用餐環境，讓每一次用餐都成為難忘的回憶。
          </p>
        </div>
      </div>
    </div>
    <div class="mb-8 row flex-column-reverse flex-md-row border-custom overflow-hidden">
      <div class="col-12 col-md-7 border-between">
        <div class="h-100 content-center p-4">
          <h2 class="mb-4 fw-bold">為何選擇阿橘飯店？</h2>
          <p>如果你正在尋找一個結合中、西式料理的用餐地點，阿橘飯店絕對是您的理想之選。以下是為什麼您應該選擇阿橘飯店的幾個理由：</p>
          <ul class="list-style-circle d-flex flex-column gap-4">
            <li>阿橘飯店融合了中西風味，提供多元化的菜單。</li>
            <li>我們致力選用最優質的食材，保證每道菜品的新鮮和美味。</li>
            <li>阿橘飯店的用餐環境舒適，為您提供一個放鬆身心、與親友共聚的理想場所。</li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-md-5 px-0 overflow-hidden">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711216606972.jpg" alt="很多蔬菜在櫃子裡" class="w-100 h-100">
      </div>
    </div>
    <div class="mb-8 row border-custom overflow-hidden">
      <div class="col-12 col-md-5 px-0 border-between">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711216695611.jpg" alt="阿橘師的照片" class="chef-picture w-100 h-100">
      </div>
      <div class="col-12 col-md-7">
        <div class="h-100 content-center p-4">
          <h2 class="mb-4 fw-bold">誰是阿橘師</h2>
          <p>
            阿橘飯店的阿橘師是我們餐廳的靈魂人物，同時也是我們的創辦人兼任主廚。他是一位極具才華和熱情的廚師，致力於將創新和傳統融合於菜品之中，為客人帶來獨特的用餐體驗。
          </p>
          <p>
            阿橘師具有豐富的烹飪經驗和廚藝技巧，他對料理的熱愛源於對美食的熱情和對飲食文化的深刻理解。他不僅擅長中式料理的精湛技藝，還善於創造出新鮮、創意十足的西式菜餚，讓客人在阿橘飯店品嚐到來自不同文化的美味。
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss"> 
.border-between{
  border-bottom: 3px solid var(--bs-primary);

  @media (min-width: 768px) {
    border-right: 3px solid var(--bs-primary);
    border-bottom: 0;
  }
}

.chef-picture{
  max-height: 300px;
  object-position: top;
  @media (min-width: 768px) {
    max-height: 400px;
  }
}
</style>