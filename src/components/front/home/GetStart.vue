<template>
  <section class="mb-10 border-custom overflow-hidden" data-aos="zoom-in">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="h-100 border-primary border-between">
            <img src="https://images.unsplash.com/photo-1580191947416-62d35a55e71d?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="w-100 h-100">
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="h-100 d-flex flex-column justify-content-center gap-4 p-4 p-md-8">
          <h3 class="fs-3 fs-md-1 fw-bold">簡單 - 快速 - 享用美味!</h3>
          <p>
            當您踏入我們的餐廳時，即刻感受到一股迷人的香氣飄散在空氣中，迎接您的是一場充滿著美食與美好的饗宴。我們的料理風格融合了傳統與創新，每一道菜都是我們烹飪團隊用心打造的藝術品。
          </p>
          <div class="row row-cols-2">
            <div>
              <h4 class="fw-bold">到店取餐</h4>
              <ol>
                <li>選擇料理</li>
                <li>勾選外帶</li>
                <li>選擇取餐時間</li>
                <li>送出訂單</li>
                <li>到店取餐並結帳</li>
                <li>回家享用美食</li>
              </ol>
            </div>
            <div>
              <h4 class="fw-bold">預約訂位</h4>
              <ol>
                <li>選擇料理</li>
                <li>勾選預約訂位</li>
                <li>填寫人數</li>
                <li>選擇日期與時段</li>
                <li>送出訂單</li>
                <li>到店用餐並結帳</li>
              </ol>
            </div>
          </div>
          <div class="alert alert-danger" role="alert">
            <strong>現場用餐</strong> 與 <strong>現場外帶</strong> 的顧客請直接到櫃台，我們將會為您服務。
          </div>
          <hr>
          <p>在您下單之後，我們會盡快處理訂單，讓您享用美味又實惠的料理。</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
a{
  box-shadow: 0 2px 0 0 var(--bs-primary);
  &:hover{
    box-shadow: 0 0px 1px 1px var(--bs-primary);
  }
}
.border-between{
  border-bottom: 3px solid var(--bs-primary);
  @media (min-width: 768px){
    border-bottom: none;
    border-right: 3px solid var(--bs-primary);
    
  }
}
ol{
  padding-inline-start:0 ;
  list-style-position: inside;
}
</style>