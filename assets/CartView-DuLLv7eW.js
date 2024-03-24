import{r as x,o as j,w as H,d as V,e as m,f as p,i as n,l as s,g as e,F as S,A,j as $,t as _,m as U,B as N,S as g,s as G,c as J,k as L,n as R,p as K,v as Q,y as W,z as X}from"./index-BE6KWW_P.js";import{u as Y}from"./cartStore-fwzJaJv8.js";import{L as F}from"./index-58APw_xi.js";import{_ as Z}from"./plugin-vueexport-helper-DlAUqK2U.js";var ee={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payzoom",BASE_URL:"/GDiner/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const te={key:0,class:"relative"},se=e("h3",{class:"font-size-7 mb-10"},"誠心推薦",-1),oe={key:0},le={class:"grid grid-cols-2 md:grid-cols-3 gap-4"},ae={class:"card"},ne={class:"customBorder-xl rd-3 overflow-hidden mb-4"},re=["src"],ie={class:"mb-4 tracking-wider"},de={class:"pb-4"},ce={__name:"RandomProduct",props:{exclude:{type:Array,default:()=>[]}},setup(f){const{VITE_URL:C,VITE_PATH:z}=ee,b=x([]),o=x([]),v=x([]),E=f;function y(){v.value.push("products"),N.get(`${C}/v2/api/${z}/products/all`).then(u=>{o.value=u.data.products,B()}).catch(u=>{g.fire({title:"錯誤發生",icon:"error",text:`${u.response.data.message}，請嘗試重新整理，如果此狀況持續發生，請聯絡我們`,confirmButtonColor:"#3D081B"})}).finally(()=>{v.value.splice(v.value.indexOf("products"),1)})}function w(u){const h=Math.random()*(u+1);return Math.floor(h)}function B(){if(b.value=[],o.value.length===0)return;const u=[...o.value];E.exclude.forEach(a=>{u.filter(D=>D.id!==a)});const h=u.length,l=[];for(;l.length<3;){const a=w(h);l.includes(a)||l.push(a)}l.forEach(a=>b.value.push(u[a]))}return j(()=>{y()}),H(()=>E.exclude,()=>{y()}),(u,h)=>{const l=V("RouterLink");return o.value.length>0?(m(),p("div",te,[n(s(F),{active:v.value.includes("products"),"is-full-page":!1},null,8,["active"]),se,b.value.length>0?(m(),p("div",oe,[e("ul",le,[(m(!0),p(S,null,A(b.value,a=>(m(),p("li",{key:a.id,"data-aos":"fade-left"},[e("div",ae,[n(l,{to:`/product/${a.id}`,class:"block"},{default:$(()=>[e("div",ne,[e("img",{src:a.imageUrl,alt:"",class:"block w-100% h-150px sm:h-350px md:h-350px"},null,8,re)]),e("h3",ie,_(a.title),1),e("div",de,[e("span",null,"NT$ "+_(a.price),1)])]),_:2},1032,["to"])])]))),128))])])):U("",!0)])):U("",!0)}}};var ue={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payzoom",BASE_URL:"/GDiner/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const d=f=>(W("data-v-8973eb25"),f=f(),X(),f),me={class:"container px-2 md:px-12 py-10"},pe={class:"mb-10"},_e={key:0,"data-aos":"fade-up"},he={class:"flex justify-between items-center pb-7.5"},be=d(()=>e("h2",{class:"font-size-12"},"購物車",-1)),fe={class:"mb-10 pb-10 border-b-1 border-solid border-primary-200"},ve={class:"block md:table w-100%"},ge=d(()=>e("thead",{class:"block md:table-header-group w-100% mb-4 border-b-1 border-solid border-primary-veryLight text-primary-200"},[e("tr",{class:"flex md:table-row justify-between"},[e("th",{class:"text-left"},"料理"),e("th",{class:"md:w-50% lg:w-60%"}),e("th",{class:"hidden md:block text-start"},"數量"),e("th",{class:"text-right"},"小計")])],-1)),xe={class:"block md:table-row-group"},ye={class:"md:pt-10 row-start-1 row-end-3 col-span-3"},we={class:"w-100% h-30 me-2 md:w-25 lg:me-10"},ke=["src"],Ve={class:"md:pt-10 align-top col-start-4 col-end-10"},$e={class:"font-size-3.5 text-primary opacity-75 lh-150%"},Ce={class:"md:pt-10 align-top col-start-4 col-end-10"},ze={class:"md:mb-6 flex"},Ee={class:"relative grid grid-cols-3 w-40 customBorder rd-3 h-10 md:h-12.5"},Te=["onClick"],Le=d(()=>e("div",{class:"i-ic:round-minus"},null,-1)),Re=[Le],Be=["value","onChange"],De=["onClick"],Ie=d(()=>e("div",{class:"i-ic:round-plus"},null,-1)),Se=[Ie],Ue={class:"flex ms-2"},Ne=["onClick"],Fe=d(()=>e("div",{class:"i-material-symbols:delete-outline"},null,-1)),Pe=[Fe],Ae={class:"row-start-1 row-end-3 col-start-10 col-end-13 md:pt-10 align-top text-end"},qe={class:"pe-4 sm:ps-10 text-nowrap"},Me={class:"block md:table-row-group"},Oe={class:"block md:table-row"},je={colspan:"4",class:"block md:table-cell w-100% pt-10 text-end"},He={class:"col-span-2 md:col-span-1 grid grid-cols-2 gap-4"},Ge=d(()=>e("h2",{class:"col-span-2 mb-10 font-size-10"},"顧客資訊",-1)),Je={class:"custom-input-group mb-4 col-span-2"},Ke=d(()=>e("label",{for:"email"},"Email",-1)),Qe={class:"custom-input-group mb-4"},We=d(()=>e("label",{for:"姓名"},"姓名",-1)),Xe={class:"custom-input-group mb-4"},Ye=d(()=>e("label",{for:"電話"},"電話",-1)),Ze={class:"custom-input-group mb-4 col-span-2"},et=d(()=>e("label",{for:"地址"},"地址",-1)),tt={class:"custom-input-group mb-4 col-span-2"},st=d(()=>e("label",{for:"message"},"留言(非必須)",-1)),ot={class:"col-span-2 md:col-span-1"},lt={class:"md:sticky top-22"},at={class:"flex justify-center md:justify-end mb-10 font-size-5"},nt=d(()=>e("h3",{class:"font-size-5 font-serif me-5"},"總計",-1)),rt={key:0,class:"text-primary opacity-60"},it={key:1,class:"text-red-500"},dt={class:"font-size-3 me-2"},ct={class:"font-size-5 text-red-500"},ut={class:"w-60% mx-auto md:ml-auto md:mr-0"},mt={class:"custom-input-group mb-4"},pt=d(()=>e("label",{for:"coupon"},"優惠券",-1)),_t={key:0,class:"mb-4"},ht={class:"mb-2"},bt=d(()=>e("div",{class:"text-center md:text-end"},[e("button",{type:"submit",class:"max-w-60% w-100% h-12 p-x-7.5 p-y-1.5 bg-info text-secondary border-0 rd-10 cursor-pointer hover:shadow-[0_0_3px_0_#3D081B]"},"送出訂單")],-1)),ft={key:1,class:"pb-20"},vt=d(()=>e("h2",{class:"mb-7 font-size-8 md:font-size-12 lh-tight font-serif text-center"}," 目前購物車為空 (´⊙ω⊙`)",-1)),gt={class:"text-center"},xt={__name:"CartView",setup(f){const{VITE_URL:C,VITE_PATH:z}=ue,b=Y(),{cart:o,isLoading:v}=G(b),E=J(()=>{const c=[];return o.value.carts&&o.value.carts.forEach(r=>c.push(r.product.id)),c}),{getCart:y,updateCart:w,deleteCart:B,deleteCartAll:u}=b,h=x([]),l=x({user:{email:"",name:"",tel:"",address:""},message:""}),a=x("");function D(){if(o.value.carts.length===0){g.fire({icon:"error",title:"目前沒有東西在購物車喔~"});return}h.value.push("userForm"),N.post(`${C}/v2/api/${z}/order`,{data:l.value}).then(c=>{g.fire({title:c.data.message,icon:"success",text:`訂單號碼：${c.data.orderId}`,didClose:()=>{y()}})}).catch(c=>{g.fire({title:"錯誤發生",icon:"error",text:`${c.response.data.message}，請嘗試重新整理，如果此狀況持續發生，請聯絡我們`,confirmButtonColor:"#3D081B"})}).finally(()=>{h.value.splice(h.value.indexOf("userForm"),1)})}function q(){a.value&&N.post(`${C}/v2/api/${z}/coupon`,{data:{code:a.value}}).then(c=>{g.fire({icon:"success",title:`${c.data.message}`,toast:!0,position:"bottom-end",timer:1500,showConfirmButton:!1}),a.value="",y()}).catch(c=>{g.fire({icon:"error",title:`${c.response.data.message}`})})}function M(c){return/^(09)[0-9]{8}$/.test(c)?!0:"請輸入正確的電話號碼"}return(c,r)=>{var P;const I=V("RouterLink"),k=V("VField"),T=V("ErrorMessage"),O=V("VForm");return m(),p(S,null,[n(s(F),{active:s(v)},null,8,["active"]),e("div",me,[e("div",pe,[((P=s(o).carts)==null?void 0:P.length)>0?(m(),p("div",_e,[e("div",he,[be,n(I,{to:"/products",class:"tracking-widest underline underline-offset-4 hover:decoration-2"},{default:$(()=>[L(" 繼續購物 ")]),_:1})]),e("div",fe,[e("table",ve,[ge,e("tbody",xe,[(m(!0),p(S,null,A(s(o).carts,t=>(m(),p("tr",{key:t.id+"123",class:"grid gap-2 grid-rows-[repeat(2,auto)] grid-cols-[repeat(12,1fr)] md:table-row w-100% mb-6"},[e("td",ye,[e("div",we,[e("img",{src:t.product.imageUrl,alt:"",class:"block max-w-25 w-100% h-100% border-2 border-solid border-primary rd-2.5"},null,8,ke)])]),e("td",Ve,[e("div",null,[n(I,{to:`/product/${t.product.id}`,class:"block mb-2 lh-normal hover:underline hover:underline-offset-4 hover:decoration-2"},{default:$(()=>[L(_(t.product.title),1)]),_:2},1032,["to"]),e("div",null,[e("span",$e," NT$"+_(t.product.price),1)])])]),e("td",Ce,[e("div",ze,[e("div",Ee,[e("button",{class:"block bg-transparent border-0 px-4 cursor-pointer font-size-5 fw-900",onClick:i=>{t.qty-1>0&&t.qty--,s(w)(t)}},Re,8,Te),e("input",{type:"number",name:"",id:"quantity",value:t.qty,class:"block bg-transparent border-0 appearance-none outline-0 w-100% text-center font-size-4",min:"1",onChange:i=>s(w)(t,i)},null,40,Be),e("button",{class:"block bg-transparent border-0 px-4 cursor-pointer font-size-5 fw-900",onClick:i=>{t.qty++,s(w)(t)}},Se,8,De)]),e("div",Ue,[e("button",{type:"button",class:"bg-transparent border-0 font-size-5 cursor-pointer px-0",onClick:i=>s(B)(t.id)},Pe,8,Ne)])])]),e("td",Ae,[e("span",qe,"NT$ "+_(t.final_total),1)])]))),128))]),e("tfoot",Me,[e("tr",Oe,[e("td",je,[e("button",{type:"button",class:"bg-transparent border-0 underline underline-offset-4 cursor-pointer hover:text-primary-light",onClick:r[0]||(r[0]=(...t)=>s(u)&&s(u)(...t))},"清空購物車")])])])])]),e("div",null,[n(s(F),{active:h.value.includes("userForm")},null,8,["active"]),n(O,{class:"grid grid-cols-2 gap-4",onSubmit:D,autocomplete:"off"},{default:$(({errors:t})=>[e("div",He,[Ge,e("div",Je,[n(k,{type:"email",name:"email",id:"email",class:R({invalid:t.email}),placeholder:"請輸入 Email",rules:"required|email",modelValue:l.value.user.email,"onUpdate:modelValue":r[1]||(r[1]=i=>l.value.user.email=i)},null,8,["class","modelValue"]),Ke,n(T,{name:"email",class:"absolute block left-3 bottom--5 text-red-500 font-size-3"})]),e("div",Qe,[n(k,{type:"text",name:"姓名",id:"name",class:R({invalid:t.姓名}),rules:"required",placeholder:"請輸入 姓名",modelValue:l.value.user.name,"onUpdate:modelValue":r[2]||(r[2]=i=>l.value.user.name=i)},null,8,["class","modelValue"]),We,n(T,{name:"姓名",class:"absolute block left-3 bottom--5 text-red-500 font-size-3"})]),e("div",Xe,[n(k,{type:"tel",name:"電話",id:"tel",class:R({invalid:t.電話}),rules:M,placeholder:"請輸入 電話",modelValue:l.value.user.tel,"onUpdate:modelValue":r[3]||(r[3]=i=>l.value.user.tel=i)},null,8,["class","modelValue"]),Ye,n(T,{name:"電話",class:"absolute block left-3 bottom--5 text-red-500 font-size-3"})]),e("div",Ze,[n(k,{type:"address",name:"地址",id:"address",class:R({invalid:t.地址}),rules:"required",placeholder:"請輸入 地址",modelValue:l.value.user.address,"onUpdate:modelValue":r[4]||(r[4]=i=>l.value.user.address=i)},null,8,["class","modelValue"]),et,n(T,{name:"地址",class:"absolute block left-3 bottom--5 text-red-500 font-size-3"})]),e("div",tt,[n(k,{as:"textarea",name:"userForm.message",id:"message",cols:"30",rows:"10",modelValue:l.value.message,"onUpdate:modelValue":r[5]||(r[5]=i=>l.value.message=i),placeholder:"請輸入留言"},null,8,["modelValue"]),st])]),e("div",ot,[e("div",lt,[e("div",at,[nt,s(o).total===s(o).final_total?(m(),p("p",rt,[L("NT$ "),e("span",null,_(s(o).final_total),1)])):(m(),p("p",it,[e("del",dt,"NT$"+_(s(o).total),1),e("span",ct,"NT$"+_(s(o).final_total),1)]))]),e("div",ut,[e("div",mt,[K(e("input",{type:"text",name:"coupon",id:"coupon",class:"block w-100% p-x-3 p-y-1.5 border-1 border-solid border-#dee2e6 rd",placeholder:"請輸入 優惠券","onUpdate:modelValue":r[6]||(r[6]=i=>a.value=i)},null,512),[[Q,a.value,void 0,{trim:!0}]]),pt,e("button",{type:"button",class:"absolute right-0 top-50% translate-y--50% block h-100% border-0 bg-transparent p-x-3 p-y-1.5 border-l-2 border-solid border-primary rd-r-3 cursor-pointer hover:bg-primary hover:text-secondary",onClick:q},"使用")]),s(o).carts[0].coupon?(m(),p("div",_t,[e("p",ht,"已套用優惠券代碼："+_(s(o).carts[0].coupon.code),1),e("p",null,"折扣金額： -"+_(s(o).total-s(o).final_total),1)])):U("",!0)]),bt])])]),_:1})])])):(m(),p("div",ft,[vt,e("div",gt,[n(I,{to:"/products",class:"inline-block bg-info text-secondary tracking-widest px-5 py-3 rd-100vh shadow-[0_2px_0_0_#3D081B] hover:shadow-[0_1px_0_0_#3D081B]"},{default:$(()=>[L(" 趕緊購物去 ")]),_:1})])]))]),n(ce,{exclude:E.value},null,8,["exclude"])])],64)}}},$t=Z(xt,[["__scopeId","data-v-8973eb25"]]);export{$t as default};
