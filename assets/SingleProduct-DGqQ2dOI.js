import{s as I,u as L,r as n,o as T,w as E,d as V,f as l,g as e,i as f,l as _,E as N,F as P,A,t as r,n as y,j as U,e as c,k as O,y as q,z as M}from"./index-t_8Uj0nF.js";import{a as F}from"./axios-Bo0ATomq.js";import{S as k}from"./sweetalert2.all-BJRN9t4W.js";import{L as G}from"./index-CiZ4T_H2.js";import{u as H}from"./cartStore-CRXlYGmg.js";import{R as j}from"./RandomProduct-fNdnj9rp.js";import{_ as Q}from"./plugin-vueexport-helper-DlAUqK2U.js";var J={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payzoom",BASE_URL:"/GDiner/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const d=u=>(q("data-v-7358c65b"),u=u(),M(),u),K={class:"py-10"},W={class:"container px-4 md:px-12.5"},X={class:"grid md:grid-cols-[40%_60%] gap-10 mb-16"},Y={class:"mb-8"},Z={class:"flex flex-wrap gap-2"},ee={class:"font-size-10 font-serif mb-6"},te={class:"flex gap-2"},oe={class:"font-size-4 text-info mb-3"},se={key:0,class:"mb-6"},ae={class:"me-4"},re={class:"text-red font-size-6"},ie={key:1,class:"mb-6"},ne={class:"font-size-6"},le={class:"mb-6"},ce=d(()=>e("label",{class:"block mb-3 font-size-3 text-primary-light",for:"quantity"},"數量",-1)),de={class:"relative grid grid-cols-3 w-40 customBorder rd-3 h-12.5"},ue=d(()=>e("div",{class:"i-ic:round-minus"},null,-1)),pe=[ue],_e=["value"],ve=d(()=>e("div",{class:"i-ic:round-plus"},null,-1)),me=[ve],fe={class:"md:max-w-100 w-100% mb-6"},ge={class:"mb-6"},he=d(()=>e("h3",{class:"mb-3 font-size-5"},"商品介紹：",-1)),be={class:"lh-normal"},xe=d(()=>e("h3",{class:"mb-3 font-size-5"},"商品內容：",-1)),ye=["src"],ke={__name:"SingleProduct",setup(u){const{VITE_URL:w,VITE_PATH:C}=J,g=H(),{isLoading:z}=I(g),{addCart:h}=g,v=L(),b=n(v.params.id),t=n({}),a=n(1),p=n([]),m=n();function x(){p.value.push("product"),F.get(`${w}/v2/api/${C}/product/${b.value}`).then(o=>{t.value=o.data.product}).catch(o=>{k.fire({title:"錯誤發生",icon:"error",text:`${o.response.data.message}，請嘗試重新整理，如果此狀況持續發生，請聯絡我們`,confirmButtonColor:"#3D081B"})}).finally(()=>{p.value.splice(p.value.indexOf("product"),1)})}function R(o){o.target.value<1||typeof+o.target.value!="number"?(k.fire({title:"數量錯誤請重新輸入",icon:"error",timer:3e3}),o.target.value=a.value):a.value=o.target.value}function S(){m.value.showModal()}function B(o){o.target.nodeName==="DIALOG"&&m.value.close()}function $(o){return o==="全素"?"text-green-700":o==="蛋奶素"?"text-yellow-500":"text-red-700"}return T(()=>{x()}),E(()=>v.params,()=>{b.value=v.params.id,a.value=1,x()}),(o,s)=>{const D=V("RouterLink");return c(),l("main",K,[e("div",W,[e("div",X,[f(_(G),{active:p.value.includes("product")},null,8,["active"]),e("div",null,[e("div",Y,[e("div",{class:"product-image customBorder-xl bg-primary bg-cover bg-center rd-3 overflow-hidden w-100% h-300px lg:h-500px cursor-pointer",style:N({"background-image":`url(${t.value.imageUrl})`}),onClick:S},null,4)]),e("div",Z,[(c(!0),l(P,null,A(t.value.tags,i=>(c(),l("span",{key:i,class:"border-2 border-solid border-primary-200 px-4 py-2 rd-10 text-primary-2"},r(i),1))),128))])]),e("div",null,[e("h2",ee,r(t.value.title),1),e("div",te,[e("p",oe,r(t.value.category),1),e("p",{class:y(["font-size-4",$(t.value.veggie)])},r(t.value.veggie),3)]),t.value.origin_price!==t.value.price?(c(),l("div",se,[e("del",ae,"NT$"+r(t.value.origin_price),1),e("span",re,"NT$"+r(t.value.price),1)])):(c(),l("div",ie,[e("span",ne," NT$"+r(t.value.price),1)])),e("div",le,[ce,e("div",de,[e("button",{class:"block bg-transparent border-0 px-4 cursor-pointer font-size-5 fw-900",onClick:s[0]||(s[0]=i=>a.value-1>0?a.value--:"")},pe),e("input",{type:"number",name:"",id:"quantity",value:a.value,class:"block bg-transparent border-0 appearance-none outline-0 w-100% text-center",min:"1",onChange:s[1]||(s[1]=i=>R(i))},null,40,_e),e("button",{class:"block bg-transparent border-0 px-4 cursor-pointer font-size-5 fw-900",onClick:s[2]||(s[2]=i=>a.value++)},me)])]),e("div",fe,[e("button",{class:y(["block customBorder rd-10 w-100% bg-transparent mb-4 py-3 cursor-pointer hover:outline-1px hover:outline-solid hover:outline-primary",{"pointer-events-none opacity-75":_(z)}]),onClick:s[3]||(s[3]=i=>_(h)(t.value.id,a.value))},"加入購物車",2),f(D,{to:"/cart",onClick:s[4]||(s[4]=i=>_(h)(t.value.id,a.value,!0)),class:"block w-100% rd-10 bg-info text-secondary text-center py-3 shadow-[0_2px_0_0_#3D081B] hover:shadow-[0_2px_2px_0_#3D081B]"},{default:U(()=>[O(" 立即購買")]),_:1})]),e("div",ge,[he,e("p",be,r(t.value.description),1)]),e("div",null,[xe,e("p",null,r(t.value.content),1)])])]),f(j,{exclude:[t.value.id]},null,8,["exclude"])]),e("dialog",{ref_key:"imgDialogRef",ref:m,onClick:B,class:"bg-secondary"},[e("img",{src:t.value.imageUrl,alt:"",class:"block max-h-80vh"},null,8,ye)],512)])}}},De=Q(ke,[["__scopeId","data-v-7358c65b"]]);export{De as default};
