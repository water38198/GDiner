import{_ as R,b as k,f as _,g as d,h as e,j as s,k as l,l as n,q as o,I as c,i as y,C as p,S as f,r as v,o as E,x as V,F as L,L as T,R as b}from"./index-BrG9BiK3.js";var w={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payzoom",BASE_URL:"/GDiner/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const A={class:"bg-secondary"},z={class:"nav-list flex flex-col gap-10 py-8 h-full"},D={class:"mt-auto"},I={__name:"AdminNavbar",setup(x){const{VITE_URL:i}=w,r=k();function a(){p.post(`${i}/v2/logOut`).then(()=>{document.cookie="myToken=; expires=;",f.fire({icon:"success",title:"登出成功",didClose:()=>{r.push("/")}})}).catch(t=>{f.fire({icon:"error",text:`${t.response.data.message}`})})}return(t,m)=>(_(),d("nav",A,[e("ul",z,[e("li",null,[s(o(c),{to:"/admin/products",class:"block px-8 py-4 ml-8 rd-[100vw_0_0_100vw] font-size-8"},{default:l(()=>[n("產品 ")]),_:1})]),e("li",null,[s(o(c),{to:"/admin/orders",class:"block px-8 py-4 ml-8 rd-[100vw_0_0_100vw] font-size-8"},{default:l(()=>[n("訂單 ")]),_:1})]),e("li",null,[s(o(c),{to:"/admin/coupons",class:"block px-8 py-4 ml-8 rd-[100vw_0_0_100vw] font-size-8"},{default:l(()=>[n("優惠券 ")]),_:1})]),e("li",D,[s(o(c),{to:"/",class:"block px-8 py-4 ml-8 font-size-4"},{default:l(()=>[n("回前台 ")]),_:1})]),e("li",null,[e("a",{href:"#",class:"block px-8 ml-8 font-size-4",onClick:y(a,["prevent"])},"登出")])])]))}},S=R(I,[["__scopeId","data-v-c5e71bcc"]]);var C={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payzoom",BASE_URL:"/GDiner/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const $={class:"grid grid-cols-[20rem_1fr] gap-2 h-screen"},N={key:0},U={__name:"AdminLayout",setup(x){const{VITE_URL:i}=C,r=k(),a=v(!1),t=v(!1);function m(){var u;t.value=!0;const h=(u=document.cookie.split("; ").find(g=>g.startsWith("myToken=")))==null?void 0:u.split("=")[1];p.defaults.headers.common.Authorization=h,p.post(`${i}/v2/api/user/check`).then(()=>{a.value=!0}).catch(()=>{a.value=!1,f.fire({title:"請重新登入",icon:"error",didClose:()=>{r.push("/login")}})}).finally(()=>{t.value=!1})}return E(()=>{m()}),(h,u)=>(_(),d(L,null,[s(o(T),{active:t.value,"full-page":!0},null,8,["active"]),e("div",$,[s(S),a.value?(_(),d("div",N,[s(o(b))])):V("",!0)])],64))}};export{U as default};
