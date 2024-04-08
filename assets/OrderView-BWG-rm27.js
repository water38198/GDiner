import{_ as y,a as k,r as u,o as D,e as I,g as i,j as m,q as v,h as e,m as V,v as L,t as o,F as b,B,x as E,k as S,C as R,S as f,f as d,L as T,l as z,z as C,A as M}from"./index-BwSUGqHk.js";import{h as $}from"./moment-Cl4UOzQZ.js";var O={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payzoom",BASE_URL:"/GDiner/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const s=r=>(C("data-v-97518e7d"),r=r(),M(),r),U={class:"container px-4 md:px-12.5"},q=s(()=>e("h2",{class:"font-size-12 mb-10"},"訂單查詢",-1)),A={class:"mb-10 md:w-50%"},N={class:"custom-input-group"},Y=s(()=>e("label",{for:"orderId"},"訂單號碼",-1)),P={key:0,class:"grid md:grid-cols-2 gap-10 mb-10"},j={class:"col-span-2 md:col-span-1"},F=s(()=>e("h3",{class:"font-size-8 mb-4"},"訂單資訊",-1)),H={class:"grid gap-4"},G=s(()=>e("span",{class:"inline-block w-25"},"訂單號碼：",-1)),J=s(()=>e("span",{class:"inline-block w-25"},"下單時間：",-1)),K=s(()=>e("span",{class:"inline-block w-25"},"留言：",-1)),Q={class:"col-span-2 md:col-span-1"},W=s(()=>e("h3",{class:"font-size-8 mb-4"},"買家資訊",-1)),X={class:"grid gap-4"},Z=s(()=>e("span",{class:"inline-block w-25"},"姓名：",-1)),ee=s(()=>e("span",{class:"inline-block w-25"},"Email：",-1)),se=s(()=>e("span",{class:"inline-block w-25"},"地址：",-1)),te=s(()=>e("span",{class:"inline-block w-25"},"電話：",-1)),oe={class:"col-span-2"},le=s(()=>e("h3",{class:"font-size-8 mb-4"},"訂購的料理",-1)),ae={class:"w-full"},ne=s(()=>e("thead",{class:"border-b-1 border-solid border-primary-veryLight"},[e("tr",{class:"opacity-60 text-left"},[e("th",{class:"w-30 md:w-35"},"圖片"),e("th",null,"名稱"),e("th",null,"數量"),e("th",{class:"text-right"},"小計")])],-1)),re={class:"border-b-1 border-solid border-primary-veryLight"},ie={class:"w-100% h-30 md:w-25"},de=["src","alt"],ce={class:"text-right"},ue={colspan:"4",class:"text-right font-size-6"},_e={__name:"OrderView",setup(r){const{VITE_URL:g,VITE_PATH:x}=O,_=k(),n=u(""),t=u(null),c=u(!1);function p(h){c.value=!0,R.get(`${g}/v2/api/${x}/order/${h}`).then(l=>{l.data.order===null?f.fire({title:"號碼錯誤",icon:"error",text:"您的訂單號碼可能輸入錯誤，請嘗試重新輸入",confirmButtonColor:"#3D081B"}):(t.value=l.data.order,console.log(t.value))}).catch(l=>{f.fire({title:"錯誤發生",icon:"error",text:`${l.response.data.message}，請嘗試重新整理，如果此狀況持續發生，請聯絡我們`,confirmButtonColor:"#3D081B"})}).finally(()=>{c.value=!1})}return D(()=>{_.query.id&&(n.value=_.query.id,p(n.value))}),(h,l)=>{const w=I("RouterLink");return d(),i(b,null,[m(v(T),{active:c.value},null,8,["active"]),e("div",U,[q,e("div",A,[e("div",N,[V(e("input",{type:"text",id:"orderId",placeholder:"請輸入訂單ID","onUpdate:modelValue":l[0]||(l[0]=a=>n.value=a)},null,512),[[L,n.value,void 0,{trim:!0}]]),Y,e("button",{class:"absolute h-100% right-0 top-1/2 translate-y--1/2 block px-6 border-l-3 border-solid border-primary rd-tr-4 rd-br-4 hover-bg-primary hover-text-secondary",onClick:l[1]||(l[1]=a=>p(n.value))},"查詢")])]),t.value!==null?(d(),i("div",P,[e("div",j,[F,e("ul",H,[e("li",null,[G,e("span",null,o(t.value.id),1)]),e("li",null,[J,e("span",null,o(v($)(t.value.create_at*1e3).format("YYYY-MM-DD")),1)]),e("li",null,[K,e("span",null,o(t.value.message),1)])])]),e("div",Q,[W,e("ul",X,[e("li",null,[Z,e("span",null,o(t.value.user.name),1)]),e("li",null,[ee,e("span",null,o(t.value.user.email),1)]),e("li",null,[se,e("span",null,o(t.value.user.address),1)]),e("li",null,[te,e("span",null,o(t.value.user.tel),1)])])]),e("div",oe,[le,e("table",ae,[ne,e("tbody",re,[(d(!0),i(b,null,B(t.value.products,a=>(d(),i("tr",{key:a.id},[e("td",null,[e("div",ie,[e("img",{src:a.product.imageUrl,alt:`${a.product.title}的照片`,class:"block max-w-25 w-100% h-100% border-2 border-solid border-primary rd-2.5"},null,8,de)])]),e("td",null,o(a.product.title),1),e("td",null,o(a.qty),1),e("td",ce,o(Math.floor(a.final_total)),1)]))),128))]),e("tfoot",null,[e("tr",null,[e("td",ue," 總計："+o(Math.floor(t.value.total)),1)])])])])])):E("",!0),m(w,{to:"/",class:"mx-auto mb-10 flex justify-center items-center max-w-50% w-100% h-12 p-x-7.5 p-y-1.5 bg-info shadow-[0_2px_0_0_#3D081B] text-secondary border-0 rd-10 hover:shadow-none hover:bg-info-dark"},{default:S(()=>[z(" 回首頁")]),_:1})])],64)}}},me=y(_e,[["__scopeId","data-v-97518e7d"]]);export{me as default};
