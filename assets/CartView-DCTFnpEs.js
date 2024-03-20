import{s as j,c as P,r as b,d as f,f as u,j as t,m as n,g as e,k as v,F as R,z as O,e as m,l as g,t as x,n as y,x as A,y as M}from"./index-BGcmftwk.js";import{u as H}from"./cartStore-WYb4YDzs.js";import{L as E}from"./index-CegEb7TS.js";import{S as V,a as G}from"./sweetalert2.all-BG_37rGc.js";import{R as J}from"./RandomProduct-BqahwbXt.js";import{_ as K}from"./plugin-vueexport-helper-DlAUqK2U.js";var Q={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payzoom",BASE_URL:"/GDiner/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const l=p=>(A("data-v-7e33f87d"),p=p(),M(),p),W={class:"container px-2 md:px-12 py-20"},X={key:0},Y={class:"flex justify-between items-center pt-12.5 pb-7.5"},Z=l(()=>e("h2",{class:"font-size-12 lh-tight font-serif"},"購物車",-1)),ee={class:"mb-10 pb-10 border-b-1 border-solid border-primary-200"},se={class:"block md:table w-100%"},te=l(()=>e("thead",{class:"block md:table-header-group w-100% mb-4 border-b-1 border-solid border-primary-veryLight text-primary-200"},[e("tr",{class:"flex md:table-row justify-between"},[e("th",{class:"text-left"},"料理"),e("th",{class:"md:50% lg:w-60%"}),e("th",{class:"hidden md:block text-start"},"數量"),e("th",{class:"text-right"},"小計")])],-1)),oe={class:"block md:table-row-group"},le={class:"hidden sm:block md:pt-10 row-start-1 row-end-3"},ae={class:"me-2 w-100% h-30 md:me-10 md:w-25"},re=["src"],de={class:"md:pt-10 align-top text-start col-start-1 sm:col-start-2 col-end-4"},ne={class:"font-size-3.5 text-primary opacity-75 lh-150%"},ie={class:"md:pt-10 align-top col-start-1 sm:col-start-2 col-end-4"},ce={class:"md:mb-6 flex"},ue={class:"relative grid grid-cols-3 w-40 customBorder rd-3 h-10 h- md:h-12.5"},me=["onClick"],pe=l(()=>e("div",{class:"i-ic:round-minus"},null,-1)),_e=[pe],he=["value","onChange"],be=["onClick"],fe=l(()=>e("div",{class:"i-ic:round-plus"},null,-1)),ve=[fe],ge={class:"absolute right--10 top-50% translate-y--50% flex ms-2 md:ms-4"},xe=["onClick"],ye=l(()=>e("div",{class:"i-material-symbols:delete-outline"},null,-1)),we=[ye],ke={class:"md:pt-10 align-top text-end row-start-1 col-start-4"},Ve={class:"ps-10 text-nowrap"},Ce={class:"relative"},ze={class:"col-span-2 md:col-span-1 grid grid-cols-2 gap-4"},Fe=l(()=>e("h2",{class:"col-span-2 mb-10 font-size-10 lh-tight font-serif"},"顧客資訊",-1)),Re={class:"custom-input-group mb-4 col-span-2"},Ee=l(()=>e("label",{for:"email"},"Email",-1)),$e={class:"custom-input-group mb-4"},Le=l(()=>e("label",{for:"姓名"},"姓名",-1)),Se={class:"custom-input-group mb-4"},Te=l(()=>e("label",{for:"電話"},"電話",-1)),Be={class:"custom-input-group mb-4 col-span-2"},Ie=l(()=>e("label",{for:"地址"},"地址",-1)),De={class:"custom-input-group mb-4 col-span-2"},Ue=l(()=>e("label",{for:"message"},"留言(非必須)",-1)),qe={class:"col-span-2 md:col-span-1"},Ne={class:"md:sticky top-22"},je={class:"flex justify-center md:justify-end mb-10 font-size-5"},Pe=l(()=>e("h3",{class:"font-size-5 font-serif me-5"},"總計",-1)),Oe={class:"text-primary opacity-60"},Ae=l(()=>e("div",{class:"text-center md:text-end"},[e("button",{type:"submit",class:"max-w-60% w-100% h-12 p-x-7.5 p-y-1.5 bg-info text-secondary border-0 rd-10 cursor-pointer hover:shadow-[0_0_3px_0_#3D081B]"},"送出訂單")],-1)),Me={key:1,class:"pb-20"},He=l(()=>e("h2",{class:"mb-7 font-size-8 md:font-size-12 lh-tight font-serif text-center"}," 目前購物車為空 (´⊙ω⊙`)",-1)),Ge={class:"text-center"},Je={__name:"CartView",setup(p){const{VITE_URL:$,VITE_PATH:L}=Q,C=H(),{cart:i,isLoading:S}=j(C),T=P(()=>{const d=[];return i.value.carts&&i.value.carts.forEach(a=>d.push(a.product.id)),d}),{getCart:B,updateCart:w,deleteCart:I}=C,D=b(),_=b([]),z=b(),r=b({user:{email:"",name:"",tel:"",address:""},message:""});function U(){if(i.value.carts.length===0){V.fire({icon:"error",title:"目前沒有東西在購物車喔~"});return}_.value.push("userForm"),G.post(`${$}/v2/api/${L}/order`,{data:r.value}).then(d=>{V.fire({title:d.data.message,icon:"success",text:`訂單號碼：${d.data.orderId}`,didClose:()=>{B(),z.value.resetForm()}})}).catch(d=>{V.fire({title:"錯誤發生",icon:"error",text:`${d.response.data.message}，請嘗試重新整理，如果此狀況持續發生，請聯絡我們`,confirmButtonColor:"#3D081B"})}).finally(()=>{_.value.splice(_.value.indexOf("userForm"),1)})}function q(d){return/^(09)[0-9]{8}$/.test(d)?!0:"請輸入正確的電話號碼"}return(d,a)=>{var F;const k=f("RouterLink"),c=f("VField"),h=f("ErrorMessage"),N=f("VForm");return m(),u(R,null,[t(n(E),{active:n(S),"is-full-page":!0},null,8,["active"]),e("div",W,[e("div",{class:"relative mb-10",ref_key:"cartRef",ref:D},[(F=n(i).carts)!=null&&F.length?(m(),u("div",X,[e("div",Y,[Z,t(k,{to:"/products",class:"tracking-widest underline underline-offset-4 hover:decoration-2"},{default:v(()=>[g(" 繼續購物 ")]),_:1})]),e("div",ee,[e("table",se,[te,e("tbody",oe,[(m(!0),u(R,null,O(n(i).carts,s=>(m(),u("tr",{key:s.id,class:"grid gap-2 grid-rows-[repeat(2,auto)] grid-cols-[repeat(4,1fr)] md:table-row mb-6 w-100%"},[e("td",le,[e("div",ae,[e("img",{src:s.product.imageUrl,alt:"",class:"block max-w-25 w-100% h-100% border-2 border-solid border-primary rd-2.5"},null,8,re)])]),e("td",de,[e("div",null,[t(k,{to:`/product/${s.product.id}`,class:"block mb-2 lh-normal hover:underline hover:underline-offset-4 hover:decoration-2"},{default:v(()=>[g(x(s.product.title),1)]),_:2},1032,["to"]),e("div",null,[e("span",ne," NT$"+x(s.product.price),1)])])]),e("td",ie,[e("div",ce,[e("div",ue,[e("button",{class:"block bg-transparent border-0 px-4 cursor-pointer font-size-5 fw-900",onClick:o=>{s.qty-1>0&&s.qty--,n(w)(s)}},_e,8,me),e("input",{type:"number",name:"",id:"quantity",value:s.qty,class:"block bg-transparent border-0 appearance-none outline-0 w-100% text-center",min:"1",onChange:o=>n(w)(s,o)},null,40,he),e("button",{class:"block bg-transparent border-0 px-4 cursor-pointer font-size-5 fw-900",onClick:o=>{s.qty++,n(w)(s)}},ve,8,be),e("div",ge,[e("button",{type:"button",class:"bg-transparent border-0 font-size-5 cursor-pointer",onClick:o=>n(I)(s.id)},we,8,xe)])])])]),e("td",ke,[e("span",Ve,"NT$ "+x(s.final_total),1)])]))),128))])])]),e("div",Ce,[t(n(E),{active:_.value.includes("userForm"),"is-full-page":!1},null,8,["active"]),t(N,{class:"grid grid-cols-2 gap-4",onSubmit:U,ref_key:"userFormRef",ref:z,autocomplete:"off"},{default:v(({errors:s})=>[e("div",ze,[Fe,e("div",Re,[t(c,{type:"email",name:"email",id:"email",class:y(["block w-100% p-x-3 p-y-1.5 border-1 border-solid border-#dee2e6 rd",{invalid:s.email}]),placeholder:"請輸入 Email",rules:"required|email",modelValue:r.value.user.email,"onUpdate:modelValue":a[0]||(a[0]=o=>r.value.user.email=o),autocomplete:"username"},null,8,["class","modelValue"]),Ee,t(h,{name:"email",class:"block ps-3 pt-2 text-red-500 font-size-3"})]),e("div",$e,[t(c,{type:"text",name:"姓名",id:"name",class:y(["block w-100% p-x-3 p-y-1.5 border-1 border-solid border-#dee2e6 rd",{invalid:s.姓名}]),rules:"required",placeholder:"請輸入 姓名",modelValue:r.value.user.name,"onUpdate:modelValue":a[1]||(a[1]=o=>r.value.user.name=o)},null,8,["class","modelValue"]),Le,t(h,{name:"姓名",class:"block ps-3 pt-2 text-red-500 font-size-3"})]),e("div",Se,[t(c,{type:"tel",name:"電話",id:"tel",class:y(["block w-100% p-x-3 p-y-1.5 border-1 border-solid border-#dee2e6 rd",{invalid:s.電話}]),rules:q,placeholder:"請輸入 電話",modelValue:r.value.user.tel,"onUpdate:modelValue":a[2]||(a[2]=o=>r.value.user.tel=o)},null,8,["class","modelValue"]),Te,t(h,{name:"電話",class:"block ps-3 pt-2 text-red-500 font-size-3"})]),e("div",Be,[t(c,{type:"address",name:"地址",id:"address",class:y(["block w-100% p-x-3 p-y-1.5 border-1 border-solid border-#dee2e6 rd",{invalid:s.地址}]),rules:"required",placeholder:"請輸入 地址",modelValue:r.value.user.address,"onUpdate:modelValue":a[3]||(a[3]=o=>r.value.user.address=o)},null,8,["class","modelValue"]),Ie,t(h,{name:"地址",class:"block ps-3 pt-2 text-red-500 font-size-3"})]),e("div",De,[t(c,{as:"textarea",name:"userForm.message",id:"message",cols:"30",rows:"10",class:"block w-100% p-x-3 p-y-1.5 border-1 border-solid border-#dee2e6 rd",modelValue:r.value.message,"onUpdate:modelValue":a[4]||(a[4]=o=>r.value.message=o),placeholder:"請輸入留言"},null,8,["modelValue"]),Ue])]),e("div",qe,[e("div",Ne,[e("div",je,[Pe,e("p",Oe,[g("NT$ "),e("span",null,x(n(i).final_total),1)])]),Ae])])]),_:1},512)])])):(m(),u("div",Me,[He,e("div",Ge,[t(k,{to:"/products",class:"inline-block bg-info text-secondary tracking-widest px-5 py-3 rd-100vh shadow-[0_2px_0_0_#3D081B] hover:shadow-[0_1px_0_0_#3D081B]"},{default:v(()=>[g(" 趕緊購物去 ")]),_:1})])]))],512),t(J,{exclude:T.value},null,8,["exclude"])])],64)}}},es=K(Je,[["__scopeId","data-v-7e33f87d"]]);export{es as default};
