import{_ as C,s as B,u as T,a as E,r as u,c as G,o as F,b as O,w as q,d as $,e as y,f as _,g as e,h as K,n as k,i as t,j as o,k as a,l as D,t as U,m as Y,p as H,v as J,q as P,F as Q,x as N,y as W,z as X,R as Z}from"./index-DQmpIAIG.js";import{u as ee}from"./cartStore-JlhPiREe.js";import"./axios-Bo0ATomq.js";import"./sweetalert2.all-BD7UMsDl.js";const te="/GDiner/assets/logo-mjMDtLnI.png",n=r=>(W("data-v-16f6c8cc"),r=r(),X(),r),se=n(()=>e("div",{class:"bg-info py-2.5 flex justify-center"},[e("span",{class:"tracking-widest text-white"}," 訂單滿千免運 "),e("div",{class:"i-fluent-emoji-flat:rocket inline-block ms-2"})],-1)),oe={class:"md:container py-5 px-4 md:px-12.5 flex sm-gap-8"},ae={class:"flex md:hidden items-center w-80px"},le={class:"font-size-6 text-primary"},ie={class:"absolute left-0 top-87px w-100vw h-100vh z-2","data-type":"layer"},ce={class:"mb-auto"},ne=N('<ul class="flex justify-center bg-primary-veryLight py-4 sticky bottom-0" data-v-16f6c8cc><li data-v-16f6c8cc><a href="#" class="inline-block p-3 text-primary font-size-5" data-v-16f6c8cc><div class="i-mdi:twitter hover:transform-scale-120" data-v-16f6c8cc></div></a></li><li data-v-16f6c8cc><a href="#" class="inline-block p-3 text-primary font-size-5" data-v-16f6c8cc><div class="i-ant-design:facebook-filled hover:transform-scale-120" data-v-16f6c8cc></div></a></li><li data-v-16f6c8cc><a href="#" class="inline-block p-3 text-primary font-size-5" data-v-16f6c8cc><div class="i-ph:instagram-logo-bold hover:transform-scale-120" data-v-16f6c8cc></div></a></li><li data-v-16f6c8cc><a href="#" class="inline-block p-3 text-primary font-size-5" data-v-16f6c8cc><div class="i-ic:baseline-tiktok hover:transform-scale-120" data-v-16f6c8cc></div></a></li><li data-v-16f6c8cc><a href="mailto:GDiner@example.com" class="inline-block p-3 text-primary font-size-5" data-v-16f6c8cc><div class="i-material-symbols:mail-outline-rounded hover:transform-scale-120" data-v-16f6c8cc></div></a></li></ul>',1),re={class:"mx-auto md:mx-0 py-2"},de=n(()=>e("img",{src:te,alt:"阿橘飯店Logo",class:"w-100%"},null,-1)),ue={class:"hidden md:flex items-center gap-6 text-primary me-auto"},fe={class:"flex gap-2"},pe=n(()=>e("div",{class:"i-material-symbols:search"},null,-1)),ve=[pe],me=n(()=>e("div",{class:"i-material-symbols:shopping-cart-outline"},null,-1)),he={key:0,class:"absolute flex justify-center items-center bg-info font-size-3 text-secondary rd-50% size-4 right-[-6px] bottom-2"},ye={class:"w-100% bg-secondary flex justify-center items-center p-5"},_e={action:""},be={class:"custom-input-group"},xe=n(()=>e("label",{for:"search"},"搜尋料理",-1)),ge=n(()=>e("div",{class:"i-material-symbols:search"},null,-1)),ke=[ge],we=n(()=>e("div",{class:"i-material-symbols:close-rounded"},null,-1)),ze=[we],Le={__name:"NavBarComp",setup(r){const b=ee(),{cart:c}=B(b),R=T(),S=E(),f=u(),p=u(""),v=u(0),x=u(!0),l=u(),h=u(!1),j=G(()=>{let s=0;return c.value.carts.forEach(d=>{s+=d.qty}),s});function I(){z(),f.value.showModal()}function M(s){s.target.nodeName==="DIALOG"&&f.value.close()}function w(){let s=window.scrollY||window.pageYOffset;s>v.value&&v.value>124?x.value=!1:s<v.value&&(x.value=!0),v.value=s}function z(){document.body.style.overflow="hidden"}function g(){document.body.style.overflow=""}function V(s){(s.target.dataset.type==="button"||s.target.dataset.type==="layer")&&(l.value.hasAttribute("open")?(l.value.classList.add("closing"),h.value=!1,g()):(l.value.classList.add("opening"),l.value.setAttribute("open",""),h.value=!0,z()))}function A(s){s.animationName.includes("close")?(l.value.classList.remove("closing"),l.value.removeAttribute("open")):s.animationName.includes("open")&&l.value.classList.remove("opening")}function L(){p.value&&(S.push(`/products?search=${p.value}`),p.value="",f.value.close())}return F(()=>{window.addEventListener("scroll",w)}),O(()=>{window.removeEventListener("scroll",w)}),q(()=>R.path,()=>{l.value.hasAttribute("open")&&(l.value.classList.add("closing"),h.value=!1,g())}),(s,d)=>{const i=$("RouterLink");return y(),_(Q,null,[se,e("nav",{class:k(["bg-secondary sticky top-0 transition-top-400 z-4",{navbarHide:!x.value}])},[e("div",oe,[e("div",ae,[e("details",{class:"md:hidden",ref_key:"details",ref:l,onClick:K(V,["prevent"])},[e("summary",le,[e("div",{class:k(h.value?"i-material-symbols:close-rounded":"i-ic:baseline-menu"),"data-type":"button"},null,2)]),e("div",ie,[e("div",{class:"sideNavbar absolute left-0 z-3 w-80vw flex flex-col bg-secondary pt-10 border-r-8 border-primary border-solid",onAnimationend:A},[e("ul",ce,[e("li",null,[t(i,{to:"/recommend",class:"block px-8 py-3 font-size-6 text-primary"},{default:o(()=>[a("推薦 ")]),_:1})]),e("li",null,[t(i,{to:"/products",class:"block px-8 py-3 font-size-6 text-primary"},{default:o(()=>[a("料理 ")]),_:1})]),e("li",null,[t(i,{to:"/about",class:"block px-8 py-3 font-size-6 text-primary"},{default:o(()=>[a("關於 ")]),_:1})]),e("li",null,[t(i,{to:"/contact",class:"block px-8 py-3 font-size-6 text-primary"},{default:o(()=>[a("聯絡我們 ")]),_:1})])]),ne],32)])],512)]),e("h1",re,[t(i,{to:"/",class:"text-primary flex items-center"},{default:o(()=>[de]),_:1})]),e("ul",ue,[e("li",null,[t(i,{to:"/recommend",class:"block py-3 text-primary font-size-4.5 opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6"},{default:o(()=>[a(" 推薦")]),_:1})]),e("li",null,[t(i,{to:"/products",class:"block py-3 text-primary font-size-4.5 opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6"},{default:o(()=>[a(" 料理")]),_:1})]),e("li",null,[t(i,{to:"/about",class:"block py-3 text-primary font-size-4.5 opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6"},{default:o(()=>[a(" 關於")]),_:1})]),e("li",null,[t(i,{to:"/contact",class:"block py-3 text-primary font-size-4.5 opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6"},{default:o(()=>[a(" 聯絡我們")]),_:1})])]),e("div",fe,[e("button",{class:"font-size-6 text-primary hover:scale-125",onClick:I},ve),t(i,{to:"/cart",class:"relative flex items-center bg-transparent border-0 outline-0 font-size-6 text-primary hover:cursor-pointer hover:scale-125"},{default:o(()=>{var m;return[me,(m=D(c).carts)!=null&&m.length?(y(),_("span",he,U(j.value),1)):Y("",!0)]}),_:1})])])],2),e("dialog",{ref_key:"searchModal",ref:f,onClick:M,class:k(["m-0 p-0 border-0 w-full max-w-full",{"mt-9":v.value==0}]),onClose:g},[e("div",ye,[e("form",_e,[e("div",be,[H(e("input",{type:" text",id:"search",placeholder:"搜尋","onUpdate:modelValue":d[0]||(d[0]=m=>p.value=m),autocomplete:"off",class:"customBorder bg-secondary w-75 md:w-100",onKeyup:P(L,["enter"])},null,544),[[J,p.value,void 0,{trim:!0}]]),xe,e("button",{type:"button",class:"absolute right-2 top-1/2 translate-y--1/2 font-size-6 text-primary",onClick:L},ke)])]),e("button",{type:"button",class:"text-primary font-size-6 md:font-size-8 px-3 hover:opacity-50",onClick:d[1]||(d[1]=m=>f.value.close())},ze)])],34)],64)}}},Ce=C(Le,[["__scopeId","data-v-16f6c8cc"]]),$e="/GDiner/assets/footer-logo-DDexpzfI.png",De={},Ne={class:"bg-info pt-16 pb-12.5"},Re={class:"container px-10 md:px-12.5"},Se={class:"grid gap-10 sm:grid-cols-3 sm:gap-0 mb-4"},je=e("div",{class:"text-center sm:text-left"},[e("img",{src:$e,alt:""})],-1),Ie=e("h4",{class:"font-size-6 md:font-size-7 mb-5 text-secondary"},"快速連結",-1),Me=e("div",null,[e("h4",{class:"text-secondary font-size-7 mb-5"},"我們的使命"),e("p",{class:"text-secondary lh-normal tracking-wider opacity-75"}," 我們的使命是創造美好的回憶，並為顧客帶來最佳的用餐體驗。我們期待著與您相遇，為您提供一場無與倫比的美食之旅，讓您流連忘返，愉快滿足。")],-1),Ve=N('<div class="mb-10"><ul class="flex justify-center"><li><a href="#" class="inline-block p-3 text-secondary font-size-6"><div class="i-mdi:twitter hover:transform-scale-120"></div></a></li><li><a href="#" class="inline-block p-3 text-secondary font-size-6"><div class="i-ant-design:facebook-filled hover:transform-scale-120"></div></a></li><li><a href="#" class="inline-block p-3 text-secondary font-size-6"><div class="i-ph:instagram-logo-bold hover:transform-scale-120"></div></a></li><li><a href="#" class="inline-block p-3 text-secondary font-size-6"><div class="i-ic:baseline-tiktok hover:transform-scale-120"></div></a></li><li><a href="mailto:GDiner@example.com" class="inline-block p-3 text-secondary font-size-6"><div class="i-material-symbols:mail-outline-rounded hover:transform-scale-120"></div></a></li></ul></div><div class="text-center"><p class="text-secondary mb-2">本網站僅供練習用，無商業用途。</p><div>由<a href="https://www.designevo.com/tw/" title="免費的線上標誌製做器">DesignEvo</a>製作的Logo</div></div>',2);function Ae(r,b){const c=$("RouterLink");return y(),_("footer",Ne,[e("div",Re,[e("div",Se,[je,e("div",null,[Ie,e("ul",null,[e("li",null,[t(c,{to:"/recommend",class:"inline-block py-2 text-secondary opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6"},{default:o(()=>[a(" 推薦")]),_:1})]),e("li",null,[t(c,{to:"/products",class:"inline-block py-2 text-secondary opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6"},{default:o(()=>[a(" 料理")]),_:1})]),e("li",null,[t(c,{to:"/about",class:"inline-block py-2 text-secondary opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6"},{default:o(()=>[a(" 關於")]),_:1})]),e("li",null,[t(c,{to:"/contact",class:"inline-block py-2 text-secondary opacity-75 hover:opacity-100 hover:underline hover:underline-offset-6"},{default:o(()=>[a(" 聯絡我們")]),_:1})])])]),Me]),Ve])])}const Be=C(De,[["render",Ae]]),Te={class:"bg-secondary min-h-screen grid"},qe={__name:"FrontLayout",setup(r){return(b,c)=>(y(),_("div",Te,[t(Ce),t(D(Z)),t(Be)]))}};export{qe as default};
