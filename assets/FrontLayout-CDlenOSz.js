import{_ as L,u as V,s as j,a as A,b as B,r as u,c as E,o as G,d as M,w as q,e as $,f as h,g as y,h as e,i as K,n as b,j as t,k as s,l as a,m as O,v as U,p as Y,q as D,t as H,x as J,F as P,y as N,z as Q,A as W,R as X}from"./index-BwSUGqHk.js";const Z="/GDiner/assets/logo-Bmi6JDT_.png",_=r=>(Q("data-v-ba20b910"),r=r(),W(),r),ee=_(()=>e("div",{class:"bg-info py-2.5 flex justify-center"},[e("span",{class:"tracking-widest text-white"}," 訂單滿千免運 "),e("div",{class:"i-fluent-emoji-flat:rocket inline-block ms-2"})],-1)),te={class:"md:container py-5 px-4 md:px-12.5 flex sm-gap-8"},se={class:"flex md:hidden items-center w-80px"},ae={class:"font-size-6 text-primary"},oe={class:"absolute left-0 top-87px w-100vw h-100vh z-2","data-type":"layer"},le={class:"mb-auto"},ie=N('<ul class="flex justify-center bg-primary-veryLight py-4 sticky bottom-0" data-v-ba20b910><li data-v-ba20b910><a href="#" class="inline-block p-3 text-primary font-size-5" data-v-ba20b910><div class="i-mdi:twitter hover:transform-scale-120" data-v-ba20b910></div></a></li><li data-v-ba20b910><a href="#" class="inline-block p-3 text-primary font-size-5" data-v-ba20b910><div class="i-ant-design:facebook-filled hover:transform-scale-120" data-v-ba20b910></div></a></li><li data-v-ba20b910><a href="#" class="inline-block p-3 text-primary font-size-5" data-v-ba20b910><div class="i-ph:instagram-logo-bold hover:transform-scale-120" data-v-ba20b910></div></a></li><li data-v-ba20b910><a href="#" class="inline-block p-3 text-primary font-size-5" data-v-ba20b910><div class="i-ic:baseline-tiktok hover:transform-scale-120" data-v-ba20b910></div></a></li><li data-v-ba20b910><a href="mailto:GDiner@example.com" class="inline-block p-3 text-primary font-size-5" data-v-ba20b910><div class="i-material-symbols:mail-outline-rounded hover:transform-scale-120" data-v-ba20b910></div></a></li></ul>',1),ne={class:"mx-auto md:mx-0 py-3"},re=_(()=>e("img",{src:Z,alt:"阿橘飯店Logo",class:"w-30"},null,-1)),ce={class:"hidden md:flex items-center gap-4 lg:gap-6 text-primary me-auto"},de={class:"relative flex gap-2"},ue={class:"relative w-50"},pe=_(()=>e("div",{class:"i-material-symbols:search"},null,-1)),ve=[pe],fe=_(()=>e("div",{class:"i-material-symbols:shopping-cart-outline"},null,-1)),me={key:0,class:"absolute flex justify-center items-center bg-info p-2 font-size-3 text-secondary rd-50% size-5 right-[-8px] bottom-3"},be={__name:"FrontNavbar",setup(r){const x=V(),{cart:n}=j(x),R=A(),S=B(),c=u(!1),p=u(""),f=u(0),g=u(!0),i=u(),m=u(!1),C=E(()=>{let o=0;return n.value.carts.forEach(d=>{o+=d.qty}),o});function k(){let o=window.scrollY||window.pageYOffset;o>f.value&&f.value>124?g.value=!1:o<f.value&&(g.value=!0),f.value=o}function F(){document.body.style.overflow="hidden"}function w(){document.body.style.overflow=""}function I(o){(o.target.dataset.type==="button"||o.target.dataset.type==="layer")&&(i.value.hasAttribute("open")?(i.value.classList.add("closing"),m.value=!1,w()):(i.value.classList.add("opening"),i.value.setAttribute("open",""),m.value=!0,F()))}function T(o){o.animationName.includes("close")?(i.value.classList.remove("closing"),i.value.removeAttribute("open")):o.animationName.includes("open")&&i.value.classList.remove("opening")}function z(){p.value&&(S.push(`/products?search=${p.value}`),p.value="",c.value=!c.value)}return G(()=>{window.addEventListener("scroll",k)}),M(()=>{window.removeEventListener("scroll",k)}),q(()=>R.path,()=>{i.value.hasAttribute("open")&&(i.value.classList.add("closing"),m.value=!1,w())}),(o,d)=>{const l=$("RouterLink");return h(),y(P,null,[ee,e("nav",{class:b(["bg-secondary sticky top-0 transition-top-400 z-4",{navbarHide:!g.value}])},[e("div",te,[e("div",se,[e("details",{class:"md:hidden",ref_key:"details",ref:i,onClick:K(I,["prevent"])},[e("summary",ae,[e("div",{class:b(m.value?"i-material-symbols:close-rounded":"i-ic:baseline-menu"),"data-type":"button"},null,2)]),e("div",oe,[e("div",{class:"sideNavbar absolute left-0 z-3 w-80vw flex flex-col bg-secondary pt-10 border-r-8 border-primary border-solid",onAnimationend:T},[e("ul",le,[e("li",null,[t(l,{to:"/recommend",class:"block px-8 py-3 font-size-6 text-primary"},{default:s(()=>[a("推薦 ")]),_:1})]),e("li",null,[t(l,{to:"/products",class:"block px-8 py-3 font-size-6 text-primary"},{default:s(()=>[a("所有料理 ")]),_:1})]),e("li",null,[t(l,{to:"/about",class:"block px-8 py-3 font-size-6 text-primary"},{default:s(()=>[a("關於 ")]),_:1})]),e("li",null,[t(l,{to:"/contact",class:"block px-8 py-3 font-size-6 text-primary"},{default:s(()=>[a("聯絡我們 ")]),_:1})]),e("li",null,[t(l,{to:"/order",class:"block px-8 py-3 font-size-6 text-primary"},{default:s(()=>[a("訂單查詢 ")]),_:1})])]),ie],32)])],512)]),e("h1",ne,[t(l,{to:"/",class:"text-primary flex items-center"},{default:s(()=>[re]),_:1})]),e("ul",ce,[e("li",null,[t(l,{to:"/recommend",class:"block py-3 text-primary font-size-4.5 opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6"},{default:s(()=>[a(" 推薦")]),_:1})]),e("li",null,[t(l,{to:"/products",class:"block py-3 text-primary font-size-4.5 opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6"},{default:s(()=>[a(" 所有料理")]),_:1})]),e("li",null,[t(l,{to:"/about",class:"block py-3 text-primary font-size-4.5 opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6"},{default:s(()=>[a(" 關於")]),_:1})]),e("li",null,[t(l,{to:"/contact",class:"block py-3 text-primary font-size-4.5 opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6"},{default:s(()=>[a(" 聯絡我們")]),_:1})]),e("li",null,[t(l,{to:"/order",class:"block py-3 text-primary font-size-4.5 opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6"},{default:s(()=>[a(" 訂單查詢")]),_:1})])]),e("div",de,[e("form",{class:b(["absolute left--50 top-1/2 translate-y--1/2",{hidden:!c.value}])},[e("div",ue,[O(e("input",{type:"text",id:"search",placeholder:"搜尋","onUpdate:modelValue":d[0]||(d[0]=v=>p.value=v),autocomplete:"off",class:"customBorder outline-0 rd-3 p-3 pr-9 bg-secondary w-full",onKeyup:Y(z,["enter"])},null,544),[[U,p.value,void 0,{trim:!0}]]),e("button",{type:"button",class:"absolute right-2 top-1/2 translate-y--1/2 font-size-6 text-primary",onClick:z},ve)])],2),e("button",{class:"font-size-6 text-primary hover:scale-125",onClick:d[1]||(d[1]=v=>c.value=!c.value)},[e("div",{class:b(c.value?"i-material-symbols:close-rounded":"i-material-symbols:search")},null,2)]),t(l,{to:"/cart",class:"relative flex items-center bg-transparent border-0 outline-0 font-size-6 text-primary hover:cursor-pointer hover:scale-125"},{default:s(()=>{var v;return[fe,(v=D(n).carts)!=null&&v.length?(h(),y("span",me,H(C.value),1)):J("",!0)]}),_:1})])])],2)],64)}}},he=L(be,[["__scopeId","data-v-ba20b910"]]),ye="/GDiner/assets/footer-logo-DDexpzfI.png",_e={},xe={class:"bg-info pt-16 pb-12.5"},ge={class:"container px-10 md:px-12.5"},ke={class:"grid gap-10 sm:grid-cols-3 sm:gap-0 mb-4"},we=e("div",{class:"text-center sm:text-left"},[e("img",{src:ye,alt:"阿橘飯店"})],-1),ze=e("h4",{class:"font-size-6 md:font-size-7 mb-5 text-secondary"},"快速連結",-1),Le=e("div",null,[e("h4",{class:"text-secondary font-size-7 mb-5"},"我們的使命"),e("p",{class:"text-secondary lh-normal tracking-wider opacity-75"}," 我們的使命是創造美好的回憶，並為顧客帶來最佳的用餐體驗。我們期待著與您相遇，為您提供一場無與倫比的美食之旅，讓您流連忘返，愉快滿足。 ")],-1),$e=N('<div class="mb-10"><ul class="flex justify-center"><li><a href="#" class="inline-block p-3 text-secondary font-size-6"><div class="i-mdi:twitter hover:transform-scale-120"></div></a></li><li><a href="#" class="inline-block p-3 text-secondary font-size-6"><div class="i-ant-design:facebook-filled hover:transform-scale-120"></div></a></li><li><a href="#" class="inline-block p-3 text-secondary font-size-6"><div class="i-ph:instagram-logo-bold hover:transform-scale-120"></div></a></li><li><a href="#" class="inline-block p-3 text-secondary font-size-6"><div class="i-ic:baseline-tiktok hover:transform-scale-120"></div></a></li><li><a href="mailto:GDiner@example.com" class="inline-block p-3 text-secondary font-size-6"><div class="i-material-symbols:mail-outline-rounded hover:transform-scale-120"></div></a></li></ul></div><div class="text-center"><p class="text-secondary mb-2">本網站僅供練習用，無商業用途。</p><div> 由<a href="https://www.designevo.com/tw/" title="免費的線上標誌製做器">DesignEvo</a>製作的Logo </div></div>',2);function De(r,x){const n=$("RouterLink");return h(),y("footer",xe,[e("div",ge,[e("div",ke,[we,e("div",null,[ze,e("ul",null,[e("li",null,[t(n,{to:"/recommend",class:"inline-block py-2 text-secondary opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6"},{default:s(()=>[a(" 推薦")]),_:1})]),e("li",null,[t(n,{to:"/products",class:"inline-block py-2 text-secondary opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6"},{default:s(()=>[a(" 料理")]),_:1})]),e("li",null,[t(n,{to:"/about",class:"inline-block py-2 text-secondary opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6"},{default:s(()=>[a(" 關於")]),_:1})]),e("li",null,[t(n,{to:"/contact",class:"inline-block py-2 text-secondary opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6"},{default:s(()=>[a(" 聯絡我們")]),_:1})])])]),Le]),$e])])}const Ne=L(_e,[["render",De]]),Re={class:"bg-secondary min-h-screen grid"},Ce={__name:"FrontLayout",setup(r){return(x,n)=>(h(),y("div",Re,[t(he),t(D(X)),t(Ne)]))}};export{Ce as default};
