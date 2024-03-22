import{s as A,u as B,a as T,r as d,c as E,o as F,b as G,w as O,d as q,e as h,f as y,g as e,h as K,n as k,i as s,j as i,k as l,l as L,t as U,m as Y,p as H,v as J,q as P,F as Q,x as N,y as W,z as X,R as Z}from"./index-t_8Uj0nF.js";import{u as ee}from"./cartStore-CRXlYGmg.js";import{_ as D}from"./plugin-vueexport-helper-DlAUqK2U.js";import"./axios-Bo0ATomq.js";import"./sweetalert2.all-BJRN9t4W.js";const te="/GDiner/assets/logo-mjMDtLnI.png",n=r=>(W("data-v-69816a51"),r=r(),X(),r),se=n(()=>e("div",{class:"bg-info py-2.5 flex justify-center"},[e("span",{class:"tracking-widest text-white"}," 訂單滿千免運 "),e("div",{class:"i-fluent-emoji-flat:rocket inline-block ms-2"})],-1)),ae={class:"md:container py-5 px-4 md:px-12.5 flex sm-gap-8"},oe={class:"flex md:hidden items-center w-80px"},ie={class:"font-size-6 text-primary"},le={class:"absolute left-0 top-87px w-100vw h-100vh z-2","data-type":"layer"},ne={class:"mb-auto"},re=N('<ul class="flex justify-center bg-primary-veryLight py-4 sticky bottom-0" data-v-69816a51><li data-v-69816a51><a href="#" class="inline-block p-3 text-primary font-size-5" data-v-69816a51><div class="i-mdi:twitter hover:transform-scale-120" data-v-69816a51></div></a></li><li data-v-69816a51><a href="#" class="inline-block p-3 text-primary font-size-5" data-v-69816a51><div class="i-ant-design:facebook-filled hover:transform-scale-120" data-v-69816a51></div></a></li><li data-v-69816a51><a href="#" class="inline-block p-3 text-primary font-size-5" data-v-69816a51><div class="i-ph:instagram-logo-bold hover:transform-scale-120" data-v-69816a51></div></a></li><li data-v-69816a51><a href="#" class="inline-block p-3 text-primary font-size-5" data-v-69816a51><div class="i-ic:baseline-tiktok hover:transform-scale-120" data-v-69816a51></div></a></li><li data-v-69816a51><a href="mailto:GDiner@example.com" class="inline-block p-3 text-primary font-size-5" data-v-69816a51><div class="i-material-symbols:mail-outline-rounded hover:transform-scale-120" data-v-69816a51></div></a></li></ul>',1),ce={class:"py-2 mx-auto md:mx-0"},de=n(()=>e("img",{src:te,alt:"阿橘飯店Logo",class:"w-100%"},null,-1)),ue={class:"hidden md:flex items-center gap-6 text-primary me-a"},pe={class:""},ve={class:"flex gap-2"},fe=n(()=>e("div",{class:"i-material-symbols:search"},null,-1)),me=[fe],he=n(()=>e("div",{class:"i-material-symbols:shopping-cart-outline"},null,-1)),ye={key:0,class:"absolute flex justify-center items-center bg-info font-size-3 text-secondary rd-50% size-4 right-[-6px] bottom-2"},_e={class:"w-100% bg-secondary flex justify-center items-center p-5"},be={action:""},xe={class:"custom-input-group"},ge=n(()=>e("label",{for:"search"},"搜尋料理",-1)),ke=n(()=>e("div",{class:"i-material-symbols:search"},null,-1)),we=[ke],ze=n(()=>e("div",{class:"i-material-symbols:close-rounded"},null,-1)),Ce=[ze],Le={__name:"NavBarComp",setup(r){const _=ee(),{cart:b}=A(_),R=B(),S=T(),u=d(),p=d(""),v=d(0),x=d(!0),a=d(),m=d(!1),$=E(()=>{let t=0;return b.value.carts.forEach(c=>{t+=c.qty}),t});function j(){z(),u.value.showModal()}function I(t){t.target.nodeName==="DIALOG"&&u.value.close()}function w(){let t=window.scrollY||window.pageYOffset;t>v.value&&v.value>124?x.value=!1:t<v.value&&(x.value=!0),v.value=t}function z(){document.body.style.overflow="hidden"}function g(){document.body.style.overflow=""}function M(t){(t.target.dataset.type==="button"||t.target.dataset.type==="layer")&&(a.value.hasAttribute("open")?(a.value.classList.add("closing"),m.value=!1,g()):(a.value.classList.add("opening"),a.value.setAttribute("open",""),m.value=!0,z()))}function V(t){t.animationName.includes("close")?(a.value.classList.remove("closing"),a.value.removeAttribute("open")):t.animationName.includes("open")&&a.value.classList.remove("opening")}function C(){p.value&&(S.push(`/products?search=${p.value}`),p.value="",u.value.close())}return F(()=>{window.addEventListener("scroll",w)}),G(()=>{window.removeEventListener("scroll",w)}),O(()=>R.path,()=>{a.value.hasAttribute("open")&&(a.value.classList.add("closing"),m.value=!1,g())}),(t,c)=>{const o=q("RouterLink");return h(),y(Q,null,[se,e("nav",{class:k(["bg-secondary sticky top-0 transition-top-400 z-4",{navbarHide:!x.value}])},[e("div",ae,[e("div",oe,[e("details",{class:"md:hidden",ref_key:"details",ref:a,onClick:K(M,["prevent"])},[e("summary",ie,[e("div",{class:k(m.value?"i-material-symbols:close-rounded":"i-ic:baseline-menu"),"data-type":"button"},null,2)]),e("div",le,[e("div",{class:"sideNavbar absolute left-0 z-3 w-80vw flex flex-col bg-secondary pt-10 border-r-8 border-primary border-solid",onAnimationend:V},[e("ul",ne,[e("li",null,[s(o,{to:"/recommend",class:"block px-8 py-3 font-size-6 text-primary"},{default:i(()=>[l("推薦 ")]),_:1})]),e("li",null,[s(o,{to:"/products",class:"block px-8 py-3 font-size-6 text-primary"},{default:i(()=>[l("料理 ")]),_:1})]),e("li",null,[s(o,{to:"/about",class:"block px-8 py-3 font-size-6 text-primary"},{default:i(()=>[l("關於 ")]),_:1})]),e("li",null,[s(o,{to:"/contact",class:"block px-8 py-3 font-size-6 text-primary"},{default:i(()=>[l("聯絡我們 ")]),_:1})])]),re],32)])],512)]),e("h1",ce,[s(o,{to:"/",class:"text-primary flex items-center"},{default:i(()=>[de]),_:1})]),e("ul",ue,[e("li",pe,[s(o,{to:"/recommend",class:"block py-3 text-primary font-size-4.5 opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6"},{default:i(()=>[l(" 推薦")]),_:1})]),e("li",null,[s(o,{to:"/products",class:"block py-3 text-primary font-size-4.5 opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6"},{default:i(()=>[l(" 料理")]),_:1})]),e("li",null,[s(o,{to:"/about",class:"block py-3 text-primary font-size-4.5 opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6"},{default:i(()=>[l(" 關於")]),_:1})]),e("li",null,[s(o,{to:"/contact",class:"block py-3 text-primary font-size-4.5 opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6"},{default:i(()=>[l(" 聯絡我們")]),_:1})])]),e("div",ve,[e("button",{class:"font-size-6 text-primary hover:scale-125",onClick:j},me),s(o,{to:"/cart",class:"relative flex items-center bg-transparent border-0 outline-0 font-size-6 text-primary hover:cursor-pointer hover:scale-125"},{default:i(()=>{var f;return[he,(f=L(b).carts)!=null&&f.length?(h(),y("span",ye,U($.value),1)):Y("",!0)]}),_:1})])])],2),e("dialog",{ref_key:"searchModal",ref:u,onClick:I,class:k(["m-0 p-0 border-0 w-full max-w-full",{"mt-9":v.value==0}]),onClose:g},[e("div",_e,[e("form",be,[e("div",xe,[H(e("input",{type:" text",id:"search",placeholder:"搜尋","onUpdate:modelValue":c[0]||(c[0]=f=>p.value=f),autocomplete:"off",class:"customBorder bg-secondary w-75 md:w-100",onKeyup:P(C,["enter"])},null,544),[[J,p.value,void 0,{trim:!0}]]),ge,e("button",{type:"button",class:"absolute right-2 top-1/2 translate-y--1/2 font-size-6 text-primary",onClick:C},we)])]),e("button",{type:"button",class:"text-primary font-size-8 hover:opacity-50",onClick:c[1]||(c[1]=f=>u.value.close())},Ce)])],34)],64)}}},Ne=D(Le,[["__scopeId","data-v-69816a51"]]),De="/GDiner/assets/footer-logo-DDexpzfI.png",Re={},Se={class:"bg-info pt-16 pb-12.5"},$e=N('<div class="container px-10 md:px-12.5"><div class="grid gap-10 sm:grid-cols-3 sm:gap-0 mb-4"><div class="text-center sm:text-left"><img src="'+De+'" alt=""></div><div><h4 class="font-size-6 md:font-size-7 mb-5 text-secondary">快速連結</h4><ul><li><a href="#" class="inline-block py-2 text-secondary opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6">商品</a></li><li><a href="#" class="inline-block py-2 text-secondary opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6">分類</a></li><li><a href="#" class="inline-block py-2 text-secondary opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6">關於</a></li><li><a href="#" class="inline-block py-2 text-secondary opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6">聯絡我們</a></li></ul></div><div><h4 class="text-secondary font-size-7 mb-5">我們的使命</h4><p class="text-secondary lh-normal tracking-wider opacity-75"> 我們的使命是創造美好的回憶，並為顧客帶來最佳的用餐體驗。我們期待著與您相遇，為您提供一場無與倫比的美食之旅，讓您流連忘返，愉快滿足。</p></div></div><div class="mb-10"><ul class="flex justify-center"><li><a href="#" class="inline-block p-3 text-secondary font-size-6"><div class="i-mdi:twitter hover:transform-scale-120"></div></a></li><li><a href="#" class="inline-block p-3 text-secondary font-size-6"><div class="i-ant-design:facebook-filled hover:transform-scale-120"></div></a></li><li><a href="#" class="inline-block p-3 text-secondary font-size-6"><div class="i-ph:instagram-logo-bold hover:transform-scale-120"></div></a></li><li><a href="#" class="inline-block p-3 text-secondary font-size-6"><div class="i-ic:baseline-tiktok hover:transform-scale-120"></div></a></li><li><a href="#" class="inline-block p-3 text-secondary font-size-6"><div class="i-material-symbols:mail-outline-rounded hover:transform-scale-120"></div></a></li></ul></div><div class="text-center"><p class="text-secondary mb-2">本網站僅供練習用，無商業用途。</p><div>由<a href="https://www.designevo.com/tw/" title="免費的線上標誌製做器">DesignEvo</a>製作的Logo</div></div></div>',1),je=[$e];function Ie(r,_){return h(),y("footer",Se,je)}const Me=D(Re,[["render",Ie]]),Ve={class:"bg-secondary min-h-screen grid"},Ge={__name:"FrontLayout",setup(r){return(_,b)=>(h(),y("div",Ve,[s(Ne),s(L(Z)),s(Me)]))}};export{Ge as default};
