import{a as k}from"./axios-Bo0ATomq.js";import{u as E,r as u,o as w,w as y,d as I,e as i,f as d,i as m,l as S,g as o,F as P,A as V,j as B,t as _,m as h,y as T,z as D}from"./index-t_8Uj0nF.js";import{S as A}from"./sweetalert2.all-BJRN9t4W.js";import{L as N}from"./index-CiZ4T_H2.js";import{_ as $}from"./plugin-vueexport-helper-DlAUqK2U.js";var C={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payzoom",BASE_URL:"/GDiner/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const M=a=>(T("data-v-f45c0be5"),a=a(),D(),a),U={key:0,class:"relative"},z=M(()=>o("h3",{class:"font-serif lh-tight font-size-7 mb-10"},"誠心推薦",-1)),O={key:0},F={class:"grid grid-cols-2 md:grid-cols-3 gap-4"},H={class:"card"},j={class:"customBorder-xl rd-3 overflow-hidden mb-4"},G=["src"],q={class:"mb-4 tracking-wider"},J={class:"pb-4"},K={__name:"RandomProduct",props:{exclude:{type:Array,default:()=>[]}},setup(a){const f=E(),{VITE_URL:v,VITE_PATH:g}=C,r=u([]),n=u([]),c=u([]),x=a;function p(){c.value.push("products"),k.get(`${v}/v2/api/${g}/products/all`).then(t=>{n.value=t.data.products,L()}).catch(t=>{A.fire({title:"錯誤發生",icon:"error",text:`${t.response.data.message}，請嘗試重新整理，如果此狀況持續發生，請聯絡我們`,confirmButtonColor:"#3D081B"})}).finally(()=>{c.value.splice(c.value.indexOf("products"),1)})}function R(t){const l=Math.random()*(t+1);return Math.floor(l)}function L(){if(r.value=[],n.value.length===0)return;const t=[...n.value];x.exclude.forEach(e=>{t.filter(b=>b.id!==e)});const l=t.length,s=[];for(;s.length<3;){const e=R(l);s.includes(e)||s.push(e)}s.forEach(e=>r.value.push(t[e]))}return w(()=>{p()}),y(()=>f.params,()=>{p()}),(t,l)=>{const s=I("RouterLink");return n.value.length>0?(i(),d("div",U,[m(S(N),{active:c.value.includes("products"),"is-full-page":!1},null,8,["active"]),z,r.value.length>0?(i(),d("div",O,[o("ul",F,[(i(!0),d(P,null,V(r.value,e=>(i(),d("li",{key:e.id},[o("div",H,[m(s,{to:`/product/${e.id}`,class:"block"},{default:B(()=>[o("div",j,[o("img",{src:e.imageUrl,alt:"",class:"block h-150px w-100% sm:h-350px md:h-350px"},null,8,G)]),o("h3",q,_(e.title),1),o("div",J,[o("span",null,"NT$ "+_(e.price),1)])]),_:2},1032,["to"])])]))),128))])])):h("",!0)])):h("",!0)}}},ee=$(K,[["__scopeId","data-v-f45c0be5"]]);export{ee as R};