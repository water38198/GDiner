import{_ as m,o as e,c as i,a as s,b as a,w as u,d as c,u as f,R as p,r as v,e as H,f as h,F as y,g as k,t as $,h as D,S as V,n as B,i as E}from"./index-ckO0Meki.js";const M={class:"mb-10"},I={class:"container pt-15 min-vh-100 content-center"},S={class:"header-content border-custom px-9 py-10 text-primary","data-aos":"flip-left"},T={__name:"HomeHeader",setup(d){return(t,o)=>(e(),i("header",M,[s("div",I,[s("div",S,[o[1]||(o[1]=s("h2",{class:"fs-1 fw-bold"},"美好飯局，盡在阿橘！",-1)),o[2]||(o[2]=s("h3",{class:"fs-4 fw-bold"},"歡度聚餐時刻，享受精緻料理！",-1)),o[3]||(o[3]=s("p",{class:"mb-5"},"每道料理都是由我們阿橘大廚精心挑選、用心製作而成，且食材皆採用符合時節與產地直送，請顧客放心食用！",-1)),s("div",null,[a(f(p),{to:"/products",class:"d-inline-block px-8 py-3 fs-6 btn btn-outline-primary border-custom link-hover"},{default:u(()=>o[0]||(o[0]=[c("開始點菜")])),_:1})])])])]))}},N=m(T,[["__scopeId","data-v-41121da3"]]),j={BASE_URL:"/GDiner/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_PATH:"payzoom",VITE_URL:"https://vue3-course-api.hexschool.io"},q={class:"list-unstyled row row-cols-2 row-cols-lg-4 gy-4"},A={class:"card"},L={class:"card-image border-custom bg-primary overflow-hidden"},z=["src","alt"],G={class:"card-body"},R={class:"card-title"},F={class:"card-text"},P={__name:"NewProducts",setup(d){const{VITE_URL:t,VITE_PATH:o}=j,_=v(!1),l=v([]),g=v({}),w=async()=>{_.value=!0;try{const n=await D.get(`${t}/v2/api/${o}/products`);l.value=n.data.products,g.value=n.data.pagination}catch(n){V.fire({icon:"error",title:"抱歉，發生錯誤",text:n.response.data.message})}finally{_.value=!1}};return H(()=>{w()}),(n,b)=>{const x=h("VLoading");return e(),i(y,null,[a(x,{active:_.value},null,8,["active"]),s("section",null,[b[0]||(b[0]=s("h2",{class:"mb-8 h2 fw-bold"},[c("火熱商品"),s("i",{class:"bi bi-fire"})],-1)),s("ul",q,[(e(!0),i(y,null,k(l.value.slice(0,8),r=>(e(),i("li",{key:r.id,"data-aos":"fade-up"},[a(f(p),{to:`product/${r.id}`,class:"d-block"},{default:u(()=>[s("div",A,[s("div",L,[s("img",{src:r.imageUrl,alt:`${r.title}`,class:"card-img-top"},null,8,z)]),s("div",G,[s("h5",R,$(r.title),1),s("p",F,"NT$ "+$(r.price),1)])])]),_:2},1032,["to"])]))),128))])])],64)}}},U=m(P,[["__scopeId","data-v-a83fa8e1"]]),C={class:"mb-10"},O={class:"row row-gap-4"},W={class:"col-12 col-md-4"},Y={class:"row align-content-between row-gap-4 h-100"},J={class:"col-6 col-md-12"},K={class:"col-6 col-md-12"},Q={class:"col-12 col-md-8"},X={__name:"HomeNav",setup(d){return(t,o)=>(e(),i("section",C,[o[3]||(o[3]=s("h2",{class:"mb-4 fs-2 fw-bold"},[c(" 尋找心中的美味"),s("div",{class:"i-fxemoji:potoffood inline-block"})],-1)),s("div",O,[s("div",W,[s("div",Y,[s("div",J,[a(f(p),{to:"/products",class:"d-block","data-aos":"fade-up"},{default:u(()=>o[0]||(o[0]=[s("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711206743079.jpg",alt:"link to other good things",class:"mb-4 w-100 border-custom bg-primary"},null,-1),s("div",null,[s("h4",{class:"card-title"},[c("其他好東西 "),s("i",{class:"bi bi-arrow-right"})])],-1)])),_:1})]),s("div",K,[a(f(p),{to:"/products?category=套餐",class:"d-block","data-aos":"fade-up"},{default:u(()=>o[1]||(o[1]=[s("img",{src:"https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"link to bundle meal",class:"mb-4 w-100 border-custom bg-primary"},null,-1),s("div",null,[s("h4",{class:"cart-title"},[c("套餐"),s("i",{class:"bi bi-arrow-right"})])],-1)])),_:1})])])]),s("div",Q,[a(f(p),{to:"/products?category=主食",class:"h-100 d-flex flex-column","data-aos":"fade-up"},{default:u(()=>o[2]||(o[2]=[s("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711206815709.jpg",alt:"link to new products",class:"flex-fill mb-4 w-100 border-custom bg-primary"},null,-1),s("div",null,[s("h4",null,[c("主食"),s("i",{class:"bi bi-arrow-right"})])],-1)])),_:1})])])]))}},Z=m(X,[["__scopeId","data-v-effc519a"]]),ss={},os={class:"mb-10 border-custom overflow-hidden","data-aos":"zoom-in"};function ts(d,t){return e(),i("section",os,t[0]||(t[0]=[s("div",{class:"row"},[s("div",{class:"col-12 col-md-6"},[s("div",{class:"h-100 border-primary border-between"},[s("img",{src:"https://images.unsplash.com/photo-1580191947416-62d35a55e71d?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"",class:"w-100 h-100"})])]),s("div",{class:"col-12 col-md-6"},[s("div",{class:"h-100 d-flex flex-column justify-content-center gap-4 p-4 p-md-8"},[s("h3",{class:"fs-3 fs-md-1 fw-bold"},"簡單 - 快速 - 享用美味!"),s("p",null," 當您踏入我們的餐廳時，即刻感受到一股迷人的香氣飄散在空氣中，迎接您的是一場充滿著美食與美好的饗宴。我們的料理風格融合了傳統與創新，每一道菜都是我們烹飪團隊用心打造的藝術品。 "),s("div",{class:"row row-cols-2"},[s("div",null,[s("h4",{class:"fw-bold"},"到店取餐"),s("ol",null,[s("li",null,"選擇料理"),s("li",null,"勾選外帶"),s("li",null,"選擇取餐時間"),s("li",null,"送出訂單"),s("li",null,"到店取餐並結帳"),s("li",null,"回家享用美食")])]),s("div",null,[s("h4",{class:"fw-bold"},"預約訂位"),s("ol",null,[s("li",null,"選擇料理"),s("li",null,"勾選預約訂位"),s("li",null,"填寫人數"),s("li",null,"選擇日期與時段"),s("li",null,"送出訂單"),s("li",null,"到店用餐並結帳")])])]),s("div",{class:"alert alert-danger",role:"alert"},[s("strong",null,"現場用餐"),c(" 與 "),s("strong",null,"現場外帶"),c(" 的顧客請直接到櫃台，我們將會為您服務。 ")]),s("hr"),s("p",null,"在您下單之後，我們會盡快處理訂單，讓您享用美味又實惠的料理。")])])],-1)]))}const as=m(ss,[["render",ts],["__scopeId","data-v-005ef5c6"]]),ls={class:"mb-10 border-custom text-center px-4 py-10","data-aos":"zoom-in"},es={class:"row row-gap-8"},is={class:"col-12 col-md-9"},cs={class:"form-floating"},ds={class:"col-12 col-md-3"},ns=["disabled"],rs={__name:"SubscribeUs",setup(d){const t=v(""),o=()=>{V.fire({title:"訂閱成功",text:"感謝您的訂閱",icon:"success",confirmButtonText:"確認",confirmButtonColor:"#3D081B"}),t.value=""};return(_,l)=>{const g=h("VField"),w=h("ErrorMessage"),n=h("VForm");return e(),i("section",ls,[l[2]||(l[2]=s("h2",{class:"mb-4 fs-1 fw-bold"},"訂閱我們",-1)),l[3]||(l[3]=s("p",null,"現在就訂閱，您將能享受到獨家的優惠和菜單更新，與我們一同開啟美味之旅吧！",-1)),a(n,{onSubmit:o,class:"mx-auto w-md-75 w-lg-50"},{default:u(({errors:b})=>[s("div",es,[s("div",is,[s("div",cs,[a(g,{type:"email",id:"Email",name:"Email",class:B(["form-control border-custom",{"is-invalid":b.Email}]),autocomplete:"off",placeholder:"請輸入您的Email",modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=x=>t.value=x),modelModifiers:{trim:!0},rules:"email"},null,8,["class","modelValue"]),l[1]||(l[1]=s("label",{for:"email"},"Email",-1)),a(w,{name:"Email",class:"invalid-feedback position-absolute text-start ps-2"})])]),s("div",ds,[s("button",{type:"submit",class:"d-inline-block w-100 h-100 btn btn-primary py-3",disabled:!t.value},"訂閱",8,ns)])])]),_:1})])}}},us={},ms={class:"mb-10 border-custom overflow-hidden","data-aos":"fade-up"};function fs(d,t){return e(),i("section",ms,t[0]||(t[0]=[E('<div class="row" data-v-9a8cf827><div class="col-12 col-md-6" data-v-9a8cf827><div class="d-flex flex-column justify-content-center h-100 p-8" data-v-9a8cf827><h4 class="mb-4 fs-2 fs-sm-1 fw-bold" data-v-9a8cf827>值得信任的阿橘<i class="bi bi-hand-thumbs-up-fill" data-v-9a8cf827></i></h4><p data-v-9a8cf827> 親愛的食客們，阿橘大廚受到台灣、法國、日本、韓國等各國料理啟發，每道料理都是阿橘大廚精心研發、悉心呈現的絕佳組合，帶給您難忘的美食體驗。阿橘專注於每一道菜品的製作，並結合了傳統烹飪技藝和創新的烹飪理念，讓每一道菜都充滿了驚喜和美味。 </p></div></div><div class="col-12 col-md-6" data-v-9a8cf827><img src="https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711208489661.jpg" alt="a picture of chef A-Gi" class="w-100 h-100 border-between" data-v-9a8cf827></div></div>',1)]))}const ps=m(us,[["render",fs],["__scopeId","data-v-9a8cf827"]]),_s={},bs={class:"mb-10"};function vs(d,t){return e(),i("section",bs,t[0]||(t[0]=[E('<div class="row gy-6"><div class="col-12 col-md-4"><div class="border-custom text-center p-6 h-100" data-aos="fade-up"><h4 class="fs-1"><i class="bi bi-arrow-through-heart-fill text-info"></i></h4><h5 class="fs-4 text-info fw-bold">精心打造</h5><p>&quot;每一道菜都是精心打造的藝術品，不僅滿足您的味蕾，更是一場視覺和味覺的盛宴。&quot;</p></div></div><div class="col-12 col-md-4"><div class="border-custom text-center p-6 h-100" data-aos="fade-up" data-aos-delay="100"><h4 class="fs-1"><i class="bi bi-car-front-fill text-info"></i></h4><h5 class="fs-4 text-info fw-bold">新鮮原料</h5><p>&quot;新鮮的材料，每日用最短的時間從產地直送到餐廳。&quot;</p></div></div><div class="col-12 col-md-4"><div class="border-custom text-center p-6 h-100" data-aos="fade-up" data-aos-delay="200"><h4 class="fs-1"><i class="bi bi-heart-fill text-info"></i></h4><h5 class="fs-4 text-info fw-bold">用心經營</h5><p>&quot;無論是享受個人美食之旅，還是與親朋好友共享用餐體驗，阿橘飯店都能帶給您意想不到的驚喜和愉悅。&quot;</p></div></div></div>',1)]))}const hs=m(_s,[["render",vs]]),gs={class:"container"},xs={__name:"HomeView",setup(d){return(t,o)=>(e(),i(y,null,[a(N),s("main",gs,[a(as),a(U),a(Z),a(ps),a(hs),a(rs)])],64))}};export{xs as default};
