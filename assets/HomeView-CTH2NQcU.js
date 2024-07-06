import{_ as l,o as i,c as r,b as s,d as t,w as n,e as m,r as o,p as f,i as g,F as x,j as S,t as w,h as E}from"./index-Cd9JHZzw.js";const I={},F=e=>(f("data-v-65b11967"),e=e(),g(),e),P={class:"pt-20 py-sm-13 mb-10"},L={class:"container-sm px-0"},R={class:"py-sm-15","data-aos":"flip-up"},z={class:"header-content bg-secondary px-9 py-10 custom-border custom-border-large rounded-sm-3 text-primary text-center"},D=F(()=>s("h2",{class:"fs-1 mb-3 mb-sm-8 fw-bold"},[s("span",{class:"d-sm-block font-serif"},"美好飯局，"),s("span",{class:"d-sm-block font-serif"},"盡在阿橘！")],-1)),V=F(()=>s("p",{class:"mb-5"},"每道料理都是由我們阿橘大廚精心挑選、用心製作而成，且食材皆採用符合時節與產地直送，請客人放心食用。",-1));function j(e,d){const a=o("RouterLink");return i(),r("header",P,[s("div",L,[s("div",R,[s("div",z,[D,V,s("div",null,[t(a,{to:"/recommend",class:"d-inline-block custom-border rounded-5 px-8 py-3 fs-6 tracking-widest btn btn-outline-primary"},{default:n(()=>[m(" 開始點菜 ")]),_:1})])])])])])}const H=l(I,[["render",j],["__scopeId","data-v-65b11967"]]);var U={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payzoom",BASE_URL:"/GDiner/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:T,VITE_PATH:G}=U,M={data(){return{products:[],isLoading:!1}},computed:{slicedProduct(){return this.products.slice(0,8)}},methods:{async getProducts(){this.isLoading=!0;try{const e=await this.$http.get(`${T}/v2/api/${G}/products/all`);this.products=e.data.products.reverse()}catch{this.$swal({title:"錯誤發生",icon:"error",text:"請嘗試重新整理，如果此狀況持續發生，請聯絡我們"})}finally{this.isLoading=!1}}},mounted(){this.getProducts()}},N=e=>(f("data-v-0b7afc1b"),e=e(),g(),e),Y={class:"position-relative mb-16"},A=N(()=>s("h2",{class:"fs-3 mb-7 d-flex"},[m("火熱商品 "),s("i",{class:"bi bi-fire"})],-1)),O={class:"list-unstyled row row-cols-2 row-cols-lg-4 gy-4"},X=["data-aos-delay"],W={class:"card"},q={class:"card-image"},Q=["src","alt"],J={class:"card-body"},Z={class:"card-title"},K={class:"card-text"};function C(e,d,a,$,p,v){const b=o("VLoading"),u=o("RouterLink");return i(),r(x,null,[t(b,{active:p.isLoading},null,8,["active"]),s("section",Y,[A,s("ul",O,[(i(!0),r(x,null,S(v.slicedProduct,(c,h)=>(i(),r("li",{key:c.id,"data-aos":"fade-up","data-aos-delay":50*h,"data-aos-once":"true"},[s("div",W,[t(u,{to:`product/${c.id}`,class:"d-block"},{default:n(()=>[s("div",q,[s("img",{src:c.imageUrl,alt:`${c.title}`,class:"card-img-top"},null,8,Q)]),s("div",J,[s("h5",Z,w(c.title),1),s("p",K,"NT$ "+w(c.price),1)])]),_:2},1032,["to"])])],8,X))),128))])])],64)}const ss=l(M,[["render",C],["__scopeId","data-v-0b7afc1b"]]),es={},_=e=>(f("data-v-07541078"),e=e(),g(),e),ts={class:"mb-16"},os=_(()=>s("h2",{class:"font-size-7 tracking-widest mb-8"},[m(" 尋找心中的美味"),s("div",{class:"i-fxemoji:potoffood inline-block"})],-1)),as={class:"row gy-4"},cs={class:"col-md-4"},ds={class:"row h-100"},is={class:"col-6 col-md-12","data-aos":"zoom-in"},rs={class:"card"},ns=_(()=>s("div",{class:"card-image"},[s("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711206743079.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=c6yUTZed7cSDED%2F%2BIJwocTGP1Kqc1BF9vYeZMeaIa6TSP4SC495wLe%2BRs4DYuCc9BBr%2FG2t0%2F8eLy8LBlyOoIoMH7v%2FpVa7Jk4LWgL0gtDcdxr4TtFN%2B3tujwdZrEDoSIcN2gUFdDGcV6B9OekGSuRmL4rMiNX8s9tYdJXBuFO2yb9BRSsidVvehETmli0FY0qB1bokkRQPZDryVOGR5yqgXsr6JyWPQ7wfP7eKaB3%2B%2BAaZW2R2Cqv9t%2Fjfq82OaCNvTmWapAsFbRFu1YjgPBdxc7po0k%2FllH0Q8PSuBX8jTraIuFajZTdffdUus64a3E1Jxbteck3uLB4oxt0z7dg%3D%3D",alt:"link to other good things",class:"h-200px sm:h-250px md:h-400px"})],-1)),ls=_(()=>s("div",{class:"card-body p-0"},[s("h4",{class:"card-title"},[m("其他好東西 "),s("i",{class:"bi bi-arrow-right"})])],-1)),ms={class:"col-6 col-md-12 mt-auto","data-aos":"zoom-in"},_s={class:"card"},ps=_(()=>s("div",{class:"card-image"},[s("img",{src:"https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"link to bundle meal",class:"h-200px sm:h-250px md:h-400px"})],-1)),bs=_(()=>s("div",{class:"card-body p-0"},[s("h4",{class:"cart-title"},[m("套餐"),s("i",{class:"bi bi-arrow-right"})])],-1)),us={class:"col-md-8","data-aos":"zoom-in"},hs={class:"card h-100"},vs=_(()=>s("div",{class:"card-image big-image flex-grow-1"},[s("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711206815709.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jL45KDGAo7g1MGnMeBKbEA8jDNP8xGJv5D5d4SIwMAOjaRyTmnfFaZhpPlNYuofyUs0ImxwehkOubmxBgrMu3LwgyIXUsmg%2FWT1Ju5nMTisSh5yYvWzjyQ5cWBgJyfisZXXmZ%2FTkM5DP%2FRQ0OrX7ccboe4jy01PPW3aenpl%2B9c0fSnRbgVixMIsX4W4ydFX2dPiQ9Vgwkav4dILH5YFJQ%2F%2B%2F25PmGLYEfzOEyte1t6Ov3kSUgSF55wcA4KYtHdtzvhVr5jg8NGKO%2F7UmfzzvLxdIbPMO%2B3ZuPbKDz5OSqjQYrwS6ANH0QmnP9gRQvnJbe1%2FLvcK5a8jS2g0D0GIjGg%3D%3D",alt:"link to new products",class:"h-100"})],-1)),fs=_(()=>s("div",{class:"card-body flex-grow-0 p-0"},[s("h4",{class:"card-title"},[m("新品上市"),s("i",{class:"bi bi-arrow-right"})])],-1));function gs(e,d){const a=o("RouterLink");return i(),r("section",ts,[os,s("div",as,[s("div",cs,[s("div",ds,[s("div",is,[s("div",rs,[t(a,{to:"/products",class:"block"},{default:n(()=>[ns,ls]),_:1})])]),s("div",ms,[s("div",_s,[t(a,{to:"/products?category=套餐",class:"block"},{default:n(()=>[ps,bs]),_:1})])])])]),s("div",us,[s("div",hs,[t(a,{to:"/products?sort=最新",class:"d-flex flex-column h-100"},{default:n(()=>[vs,fs]),_:1})])])])])}const xs=l(es,[["render",gs],["__scopeId","data-v-07541078"]]),ys={},y=e=>(f("data-v-a4a40362"),e=e(),g(),e),$s={class:"mb-16","data-aos":"flip-right"},ws={class:"row g-0 custom-border custom-border-large overflow-hidden bg-primary"},Fs=y(()=>s("div",{class:"col-md-6"},[s("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711208425781.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NWxF8O%2Fes5b9vlE%2BZLMUoLIM6pe7jbIYBdqtaiyGfiNRlG4MAbaD6Bxi%2B%2BkHT5ZeyXUdvdXa%2FdgIgkMYWVcQpV%2F5Iv1pV%2FzG1HYczU1AU9SalqaW2uX7U7yYQiS0XfjdOx1FJ%2By8pWHT6u0YJifDuKB7VRwzY230UumPJ%2FNlP3uzlW4RsQRSzp4P2JjPmSPb3snvXsBHDx7UUtra3tQ9DohSXSgHVcFujVl0owAke4DEnPJ%2BKUKJRy%2FpYXr5%2B63FFCRHxTjNG3EMeECFrqezTog8KWCgnSYqiHFmgSs3A69hBnNCpCkQr%2FEJuwyR%2F5dGqmJUCZrULtPe5j3xuSAk0g%3D%3D",alt:"some vegetables on the table",class:"block w-100 h-md-100"})],-1)),ks={class:"col-md-6 bg-secondary p-6 p-sm-10 p-lg-15 border-custom"},Bs=y(()=>s("h4",{class:"fs-1 mb-5"},"簡單 - 快速 - 享用美味! ",-1)),Ss=y(()=>s("p",{class:"mb-5"}," 當您踏入我們的餐廳時，即刻感受到一股迷人的香氣飄散在空氣中，迎接您的是一場充滿著美食與美好的饗宴。我們的料理風格融合了傳統與創新，每一道菜都是我們烹飪團隊用心打造的藝術品 ",-1)),Es={class:"text-center text-md-start"};function Is(e,d){const a=o("RouterLink");return i(),r("section",$s,[s("div",ws,[Fs,s("div",ks,[Bs,Ss,s("div",Es,[t(a,{to:"/recommend",class:"d-inline-block bg-info text-secondary px-8 py-3 rounded-5 btn-get-start"},{default:n(()=>[m(" 初次嘗鮮 ")]),_:1})])])])])}const Ps=l(ys,[["render",Is],["__scopeId","data-v-a4a40362"]]),Ls={data(){return{email:""}},methods:{subscribe(){this.email?this.$swal({icon:"success",title:"訂閱成功",text:"有任何獨家的優惠和菜單更新會馬上通知您！"}):this.$swal({icon:"error",title:"請輸入正確的 Email"}),this.email=""}}},Rs={class:"mb-16"},zs={class:"custom-border custom-border-large text-center pt-10 pb-12"},Ds=s("h2",{class:"mb-5 fs-1"}," 訂閱我們 ",-1),Vs=s("p",{class:"lh-normal px-4 mb-5"},"現在就訂閱，您將能享受到獨家的優惠和菜單更新，與我們一同開啟美味之旅吧！",-1),js={class:"form-floating w-80 w-md-50 w-lg-25 me-3"},Hs=s("label",{for:"email"},"Email",-1),Us=s("button",{type:"submit",class:"btn btn-primary px-md-5"},"訂閱",-1);function Ts(e,d,a,$,p,v){const b=o("VField"),u=o("ErrorMessage"),c=o("VForm");return i(),r("section",Rs,[s("div",zs,[Ds,Vs,t(c,{class:"d-flex justify-content-center",onSubmit:v.subscribe},{default:n(()=>[s("div",js,[t(b,{type:"email",name:"email",rules:"email",class:"form-control custom-border bg-secondary",id:"email",placeholder:"請輸入Email",autocomplete:"off",modelValue:p.email,"onUpdate:modelValue":d[0]||(d[0]=h=>p.email=h),modelModifiers:{trim:!0}},null,8,["modelValue"]),Hs,t(u,{name:"email",class:"position-absolute start-0 text-danger"})]),Us]),_:1},8,["onSubmit"])])])}const Gs=l(Ls,[["render",Ts]]),Ms={},Ns=E('<section class="mb-16" data-aos="flip-left" data-v-bcdb9ee5><div class="row custom-border custom-border-large overflow-hidden bg-primary" data-v-bcdb9ee5><div class="col-md-6 bg-secondary border-(b-3 solid primary) md:border-(b-0 r-3) p-6 p-md-10" data-v-bcdb9ee5><h4 class="fs-2 fs-sm-1 mb-5" data-v-bcdb9ee5>值得信任的阿橘 </h4><p class="lh-lg" data-v-bcdb9ee5> 親愛的食客們，阿橘大廚受過法國、日本、韓國等專業訓練，每道料理都是阿橘精心研發、悉心呈現的絕佳組合，帶給您難忘的美食體驗。阿橘專注於每一道菜品的製作，並結合了傳統烹飪技藝和創新的烹飪理念，讓每一道菜都充滿了驚喜和美味。 </p></div><div class="col-md-6 px-0 border-custom" data-v-bcdb9ee5><img src="https://storage.googleapis.com/vue-course-api.appspot.com/payzoom/1711208489661.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=U42Sp0kXD1CZIM43mtxmLmdIl4pKiF09D813iQelu6aJV5arvyxz59HdTYtXu9l8F4RWkMNXePZ4f5m%2BCw%2F928inztuEPI9t0jnXTo5whKWzbQnePBMRjt%2B8uWbnFr128KBrwgoeTmqCvE6nBcO0tEUG80MhVIjAoPezjBYdZbttRRnWNeY6y1oGkiwZEvkbW%2FX%2Bsxs8aew%2FuexnWtKihz9EEQ3x4ohn6cUCQnA%2B8YFrRUtnHoqX3Epz44PORpNdTUSZ5UUgvhvgE7IEOLELjklHFxgMUDdO5sLzHbq%2F%2FOYTxQUExhP9L616zEKUkNc8QR8Ro2JOStcjk01Un8x6Ig%3D%3D" alt="a picture of chef A-Gi" class="d-block w-100 h-100" data-v-bcdb9ee5></div></div></section><section class="mb-16" data-v-bcdb9ee5><div class="row gy-6" data-v-bcdb9ee5><div class="col-md-4" data-aos="fade-up" data-aos-delay="100" data-v-bcdb9ee5><div class="custom-border custom-border-large pt-6 text-center h-100" data-v-bcdb9ee5><h4 class="fs-1" data-v-bcdb9ee5><i class="bi bi-arrow-through-heart-fill text-info" data-v-bcdb9ee5></i></h4><h5 class="fs-4 text-info" data-v-bcdb9ee5>精心打造</h5><p class="p-6" data-v-bcdb9ee5>&quot;每一道菜都是精心打造的藝術品，不僅滿足您的味蕾，更是一場視覺和味覺的盛宴。&quot;</p></div></div><div class="col-md-4" data-aos="fade-up" data-aos-delay="300" data-v-bcdb9ee5><div class="custom-border custom-border-large pt-6 text-center h-100" data-v-bcdb9ee5><h4 class="fs-1" data-v-bcdb9ee5><i class="bi bi-car-front-fill text-info" data-v-bcdb9ee5></i></h4><h5 class="fs-4 text-info" data-v-bcdb9ee5>新鮮原料</h5><p class="p-6" data-v-bcdb9ee5>&quot;新鮮的材料，每日用最短的時間從產地直送到餐廳。&quot;</p></div></div><div class="col-md-4" data-aos="fade-up" data-aos-delay="500" data-v-bcdb9ee5><div class="custom-border custom-border-large pt-6 text-center" data-v-bcdb9ee5><h4 class="fs-1" data-v-bcdb9ee5><i class="bi bi-heart-fill text-info" data-v-bcdb9ee5></i></h4><h5 class="fs-4 text-info" data-v-bcdb9ee5>用心經營</h5><p class="p-6" data-v-bcdb9ee5>&quot;無論是享受個人美食之旅，還是與親朋好友共享用餐體驗，阿橘飯店都能帶給您意想不到的驚喜和愉悅。&quot;</p></div></div></div></section>',2);function Ys(e,d){return Ns}const As=l(Ms,[["render",Ys],["__scopeId","data-v-bcdb9ee5"]]),Os={components:{HomeHeader:H,NewProducts:ss,HomeNav:xs,GetStart:Ps,EmailSubscribe:Gs,HomeBanner:As}},Xs={class:"container py-6 py-md-10 px-4"};function Ws(e,d,a,$,p,v){const b=o("HomeHeader"),u=o("NewProducts"),c=o("HomeNav"),h=o("getStart"),k=o("EmailSubscribe"),B=o("HomeBanner");return i(),r(x,null,[t(b),s("main",Xs,[t(u),t(c),t(h),t(k),t(B)])],64)}const Qs=l(Os,[["render",Ws]]);export{Qs as default};
