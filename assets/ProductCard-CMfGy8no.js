import{r as n,h as d,S as p,_ as w,f as C,o as l,B as D,w as E,a as c,u as y,c as _,b as R,t as v,R as T}from"./index-DGL7KspW.js";import{a as V}from"./index-CWFkADev.js";const L={BASE_URL:"/GDiner/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_PATH:"payzoom",VITE_URL:"https://vue3-course-api.hexschool.io"},{VITE_URL:f,VITE_PATH:g}=L;function F(){const e=n(!1),u=n([]),t=n({}),i=n({}),m=n([]),$=async()=>{e.value=!0;try{const o=await d.get(`${f}/v2/api/${g}/products/all`);u.value=o.data.products}catch{p.fire({icon:"error",title:"哇...",text:"網站出錯了！麻煩稍後一下再重新整理",confirmButtonColor:"#3D081B"})}finally{e.value=!1}},h=async o=>{e.value=!0;try{const r=await d.get(`${f}/v2/api/${g}/product/${o}`);t.value=r.data.product}catch{p.fire({icon:"error",title:"哇...",text:"網站出錯了！麻煩稍後一下再重新整理",confirmButtonColor:"#3D081B"})}finally{e.value=!1}},P=async(o="",r=1)=>{const s=o==="全部"?"":o;try{e.value=!0;const a=await d.get(`${f}/v2/api/${g}/products?category=${s}&page=${r}`);u.value=a.data.products,i.value=a.data.pagination}catch{p.fire({icon:"error",title:"哇...",text:"網站出錯了！麻煩稍後一下再重新整理",confirmButtonColor:"#3D081B"})}finally{e.value=!1}},x=async o=>{e.value=!0;try{const s=(await d.get(`${f}/v2/api/${g}/products/all`)).data.products.filter(a=>a.id!==o);m.value=k(s,4)}catch{p.fire({icon:"error",title:"哇...",text:"網站出錯了！麻煩稍後一下再重新整理",confirmButtonColor:"#3D081B"})}finally{e.value=!1}},k=(o,r)=>{const s=o.slice();for(let a=s.length-1;a>0;a--){const B=Math.floor(Math.random()*(a+1));[s[a],s[B]]=[s[B],s[a]]}return s.slice(0,r)};return{products:u,product:t,isLoading:e,randomProducts:m,pagination:i,getAllProducts:$,getProducts:P,getProduct:h,getRandomProducts:x}}const b={class:"card"},I={class:"border-custom image-container overflow-hidden"},S={key:0,class:"position-relative h-100 bg-secondary"},A=["src","alt"],N={class:"card-body"},U={class:"fs-5 card-title"},M={key:0},O={key:1},j={class:"text-danger me-2"},H={class:"fs-7"},q={__name:"ProductCard",props:{product:{type:Object,required:!0}},setup(e){const t=n(e.product),{isLoading:i}=V({src:t.value.imageUrl});return(m,$)=>{const h=C("VLoading");return l(),D(y(T),{to:`/product/${t.value.id}`,class:"d-block"},{default:E(()=>[c("div",b,[c("div",I,[y(i)?(l(),_("div",S,[R(h,{active:y(i),"is-full-page":!1},null,8,["active"])])):(l(),_("img",{key:1,src:t.value.imageUrl,alt:`${t.value.title}的圖片`,class:"w-100"},null,8,A))]),c("div",N,[c("h3",U,v(t.value.title),1),t.value.price==t.value.origin_price?(l(),_("div",M,[c("span",null,"NT$ "+v(t.value.price),1)])):(l(),_("div",O,[c("span",j,"NT$ "+v(t.value.price),1),c("del",H,"NT$ "+v(t.value.origin_price),1)]))])])]),_:1},8,["to"])}}},J=w(q,[["__scopeId","data-v-422af3eb"]]);export{J as P,F as u};