import{a as h,e as d,f as p,g as e,i as t,j as n,k as i,l as s,H as r,h as x,B as m,S as f,r as R,o as g,m as E,F as V,R as y}from"./index-BE6KWW_P.js";import{L as T}from"./index-58APw_xi.js";import{_ as w}from"./plugin-vueexport-helper-DlAUqK2U.js";var L={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payzoom",BASE_URL:"/GDiner/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const A={class:"bg-secondary"},b={class:"nav-list flex flex-col gap-10 py-8 h-full"},z={class:"mt-auto"},D={__name:"AdminNavbar",setup(v){const{VITE_URL:c}=L,l=h();function o(){m.post(`${c}/v2/logOut`).then(()=>{document.cookie="myToken=; expires=; path=/",f.fire({icon:"success",title:"登出成功",didClose:()=>{l.push("/")}})}).catch(a=>{f.fire({icon:"error",text:`${a.response.data.message}`})})}return(a,u)=>(d(),p("nav",A,[e("ul",b,[e("li",null,[t(s(r),{to:"/admin/adminProducts",class:"block px-8 py-4 ml-8 rd-[100vw_0_0_100vw] font-size-8"},{default:n(()=>[i("產品 ")]),_:1})]),e("li",null,[t(s(r),{to:"/admin/adminOrders",class:"block px-8 py-4 ml-8 rd-[100vw_0_0_100vw] font-size-8"},{default:n(()=>[i("訂單 ")]),_:1})]),e("li",null,[t(s(r),{to:"/admin/adminCoupons",class:"block px-8 py-4 ml-8 rd-[100vw_0_0_100vw] font-size-8"},{default:n(()=>[i("優惠券 ")]),_:1})]),e("li",z,[t(s(r),{to:"/",class:"block px-8 py-4 ml-8 font-size-4"},{default:n(()=>[i("回前台 ")]),_:1})]),e("li",null,[e("a",{href:"#",class:"block px-8 ml-8 font-size-4",onClick:x(o,["prevent"])},"登出")])])]))}},S=w(D,[["__scopeId","data-v-c2517197"]]);var C={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payzoom",BASE_URL:"/GDiner/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const I={class:"grid grid-cols-[20rem_1fr] gap-2 h-screen"},O={key:0},U={__name:"AdminLayout",setup(v){const{VITE_URL:c}=C,l=h(),o=R(!1);function a(){var _;const u=(_=document.cookie.split("; ").find(k=>k.startsWith("myToken=")))==null?void 0:_.split("=")[1];m.defaults.headers.common.Authorization=u,m.post(`${c}/v2/api/user/check`).then(()=>{o.value=!0}).catch(()=>{o.value=!0,f.fire({title:"請重新登入",icon:"error",didClose:()=>{l.push("/login")}})})}return g(()=>{a()}),(u,_)=>(d(),p(V,null,[t(s(T),{active:!o.value,"full-page":!0},null,8,["active"]),e("div",I,[t(S),o.value?(d(),p("div",O,[t(s(y))])):E("",!0)])],64))}};export{U as default};
