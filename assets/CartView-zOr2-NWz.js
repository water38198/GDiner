import{s as M,c as O,r as g,d as x,f as c,i as a,l as s,g as e,j as y,F,A as H,e as u,k,t as p,n as w,p as G,v as J,m as K,y as Q,z as W}from"./index-t_8Uj0nF.js";import{u as X}from"./cartStore-CRXlYGmg.js";import{L}from"./index-CiZ4T_H2.js";import{S as b}from"./sweetalert2.all-BJRN9t4W.js";import{a as N}from"./axios-Bo0ATomq.js";import{R as Y}from"./RandomProduct-fNdnj9rp.js";import{_ as Z}from"./plugin-vueexport-helper-DlAUqK2U.js";var ee={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payzoom",BASE_URL:"/GDiner/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const r=h=>(Q("data-v-18382f7b"),h=h(),W(),h),te={class:"container px-2 md:px-12 py-20"},se={key:0},oe={class:"flex justify-between items-center pt-12.5 pb-7.5"},le=r(()=>e("h2",{class:"font-size-12 lh-tight font-serif"},"購物車",-1)),ae={class:"mb-10 pb-10 border-b-1 border-solid border-primary-200"},re={class:"block md:table w-100%"},ne=r(()=>e("thead",{class:"block md:table-header-group w-100% mb-4 border-b-1 border-solid border-primary-veryLight text-primary-200"},[e("tr",{class:"flex md:table-row justify-between"},[e("th",{class:"text-left"},"料理"),e("th",{class:"md:50% lg:w-60%"}),e("th",{class:"hidden md:block text-start"},"數量"),e("th",{class:"text-right"},"小計")])],-1)),de={class:"block md:table-row-group"},ie={class:"hidden sm:block md:pt-10 row-start-1 row-end-3"},ce={class:"me-2 w-100% h-30 md:me-10 md:w-25"},ue=["src"],pe={class:"md:pt-10 align-top text-start col-start-1 sm:col-start-2 col-end-4"},me={class:"font-size-3.5 text-primary opacity-75 lh-150%"},_e={class:"md:pt-10 align-top col-start-1 sm:col-start-2 col-end-4"},be={class:"md:mb-6 flex"},he={class:"relative grid grid-cols-3 w-40 customBorder rd-3 h-10 md:h-12.5"},fe=["onClick"],ve=r(()=>e("div",{class:"i-ic:round-minus"},null,-1)),ge=[ve],xe=["value","onChange"],ye=["onClick"],ke=r(()=>e("div",{class:"i-ic:round-plus"},null,-1)),we=[ke],Ve={class:"flex ms-2"},Ce=["onClick"],ze=r(()=>e("div",{class:"i-material-symbols:delete-outline"},null,-1)),$e=[ze],Te={class:"md:pt-10 align-top text-end row-start-1 col-start-4"},Ee={class:"ps-10 text-nowrap"},Re={colspan:"4",class:"pt-10 text-end"},Be={class:"col-span-2 md:col-span-1 grid grid-cols-2 gap-4"},Fe=r(()=>e("h2",{class:"col-span-2 mb-10 font-size-10 lh-tight font-serif"},"顧客資訊",-1)),Le={class:"custom-input-group mb-4 col-span-2"},Ne=r(()=>e("label",{for:"email"},"Email",-1)),Se={class:"custom-input-group mb-4"},De=r(()=>e("label",{for:"姓名"},"姓名",-1)),Ie={class:"custom-input-group mb-4"},Ue=r(()=>e("label",{for:"電話"},"電話",-1)),qe={class:"custom-input-group mb-4 col-span-2"},je=r(()=>e("label",{for:"地址"},"地址",-1)),Ae={class:"custom-input-group mb-4 col-span-2"},Pe=r(()=>e("label",{for:"message"},"留言(非必須)",-1)),Me={class:"col-span-2 md:col-span-1"},Oe={class:"md:sticky top-22"},He={class:"flex justify-center md:justify-end mb-10 font-size-5"},Ge=r(()=>e("h3",{class:"font-size-5 font-serif me-5"},"總計",-1)),Je={key:0,class:"text-primary opacity-60"},Ke={key:1,class:"text-red-500"},Qe={class:"font-size-3 me-2"},We={class:"font-size-5 text-red-500"},Xe={class:"w-60% mx-auto md:ml-auto md:mr-0"},Ye={class:"custom-input-group mb-4"},Ze=r(()=>e("label",{for:"coupon"},"優惠券",-1)),et={key:0,class:"mb-4"},tt={class:"mb-2"},st=r(()=>e("div",{class:"text-center md:text-end"},[e("button",{type:"submit",class:"max-w-60% w-100% h-12 p-x-7.5 p-y-1.5 bg-info text-secondary border-0 rd-10 cursor-pointer hover:shadow-[0_0_3px_0_#3D081B]"},"送出訂單")],-1)),ot={key:1,class:"pb-20"},lt=r(()=>e("h2",{class:"mb-7 font-size-8 md:font-size-12 lh-tight font-serif text-center"}," 目前購物車為空 (´⊙ω⊙`)",-1)),at={class:"text-center"},rt={__name:"CartView",setup(h){const{VITE_URL:z,VITE_PATH:$}=ee,T=X(),{cart:n,isLoading:S}=M(T),D=O(()=>{const d=[];return n.value.carts&&n.value.carts.forEach(o=>d.push(o.product.id)),d}),{getCart:E,updateCart:V,deleteCart:I,deleteCartAll:R}=T,U=g(),f=g([]),i=g({user:{email:"",name:"",tel:"",address:""},message:""}),m=g("");function q(){if(n.value.carts.length===0){b.fire({icon:"error",title:"目前沒有東西在購物車喔~"});return}f.value.push("userForm"),N.post(`${z}/v2/api/${$}/order`,{data:i.value}).then(d=>{b.fire({title:d.data.message,icon:"success",text:`訂單號碼：${d.data.orderId}`,didClose:()=>{E()}})}).catch(d=>{b.fire({title:"錯誤發生",icon:"error",text:`${d.response.data.message}，請嘗試重新整理，如果此狀況持續發生，請聯絡我們`,confirmButtonColor:"#3D081B"})}).finally(()=>{f.value.splice(f.value.indexOf("userForm"),1)})}function j(){m.value&&N.post(`${z}/v2/api/${$}/coupon`,{data:{code:m.value}}).then(d=>{b.fire({icon:"success",title:`${d.data.message}`,toast:!0,position:"bottom-end",timer:1500,showConfirmButton:!1}),m.value="",E()}).catch(d=>{b.fire({icon:"error",title:`${d.response.data.message}`})})}function A(d){return/^(09)[0-9]{8}$/.test(d)?!0:"請輸入正確的電話號碼"}return(d,o)=>{var B;const C=x("RouterLink"),_=x("VField"),v=x("ErrorMessage"),P=x("VForm");return u(),c(F,null,[a(s(L),{active:s(S),"is-full-page":!0},null,8,["active"]),e("div",te,[e("div",{class:"relative mb-10",ref_key:"cartRef",ref:U},[(B=s(n).carts)!=null&&B.length?(u(),c("div",se,[e("div",oe,[le,a(C,{to:"/products",class:"tracking-widest underline underline-offset-4 hover:decoration-2"},{default:y(()=>[k(" 繼續購物 ")]),_:1})]),e("div",ae,[e("table",re,[ne,e("tbody",de,[(u(!0),c(F,null,H(s(n).carts,t=>(u(),c("tr",{key:t.id+"123",class:"grid gap-2 grid-rows-[repeat(2,auto)] grid-cols-[repeat(4,1fr)] md:table-row mb-6 w-100%"},[e("td",ie,[e("div",ce,[e("img",{src:t.product.imageUrl,alt:"",class:"block max-w-25 w-100% h-100% border-2 border-solid border-primary rd-2.5"},null,8,ue)])]),e("td",pe,[e("div",null,[a(C,{to:`/product/${t.product.id}`,class:"block mb-2 lh-normal hover:underline hover:underline-offset-4 hover:decoration-2"},{default:y(()=>[k(p(t.product.title),1)]),_:2},1032,["to"]),e("div",null,[e("span",me," NT$"+p(t.product.price),1)])])]),e("td",_e,[e("div",be,[e("div",he,[e("button",{class:"block bg-transparent border-0 px-4 cursor-pointer font-size-5 fw-900",onClick:l=>{t.qty-1>0&&t.qty--,s(V)(t)}},ge,8,fe),e("input",{type:"number",name:"",id:"quantity",value:t.qty,class:"block bg-transparent border-0 appearance-none outline-0 w-100% text-center",min:"1",onChange:l=>s(V)(t,l)},null,40,xe),e("button",{class:"block bg-transparent border-0 px-4 cursor-pointer font-size-5 fw-900",onClick:l=>{t.qty++,s(V)(t)}},we,8,ye)]),e("div",Ve,[e("button",{type:"button",class:"bg-transparent border-0 font-size-5 cursor-pointer px-0",onClick:l=>s(I)(t.id)},$e,8,Ce)])])]),e("td",Te,[e("span",Ee,"NT$ "+p(t.final_total),1)])]))),128))]),e("tfoot",null,[e("tr",null,[e("td",Re,[e("button",{type:"button",class:"bg-transparent border-0 underline underline-offset-4 cursor-pointer hover:text-primary-light",onClick:o[0]||(o[0]=(...t)=>s(R)&&s(R)(...t))},"清空購物車")])])])])]),e("div",null,[a(s(L),{active:f.value.includes("userForm")},null,8,["active"]),a(P,{class:"grid grid-cols-2 gap-4",onSubmit:q,autocomplete:"off"},{default:y(({errors:t})=>[e("div",Be,[Fe,e("div",Le,[a(_,{type:"email",name:"email",id:"email",class:w(["block w-100% p-x-3 p-y-1.5 border-1 border-solid border-#dee2e6 rd",{invalid:t.email}]),placeholder:"請輸入 Email",rules:"required|email",modelValue:i.value.user.email,"onUpdate:modelValue":o[1]||(o[1]=l=>i.value.user.email=l)},null,8,["class","modelValue"]),Ne,a(v,{name:"email",class:"block ps-3 pt-2 text-red-500 font-size-3"})]),e("div",Se,[a(_,{type:"text",name:"姓名",id:"name",class:w(["block w-100% p-x-3 p-y-1.5 border-1 border-solid border-#dee2e6 rd",{invalid:t.姓名}]),rules:"required",placeholder:"請輸入 姓名",modelValue:i.value.user.name,"onUpdate:modelValue":o[2]||(o[2]=l=>i.value.user.name=l)},null,8,["class","modelValue"]),De,a(v,{name:"姓名",class:"block ps-3 pt-2 text-red-500 font-size-3"})]),e("div",Ie,[a(_,{type:"tel",name:"電話",id:"tel",class:w(["block w-100% p-x-3 p-y-1.5 border-1 border-solid border-#dee2e6 rd",{invalid:t.電話}]),rules:A,placeholder:"請輸入 電話",modelValue:i.value.user.tel,"onUpdate:modelValue":o[3]||(o[3]=l=>i.value.user.tel=l)},null,8,["class","modelValue"]),Ue,a(v,{name:"電話",class:"block ps-3 pt-2 text-red-500 font-size-3"})]),e("div",qe,[a(_,{type:"address",name:"地址",id:"address",class:w(["block w-100% p-x-3 p-y-1.5 border-1 border-solid border-#dee2e6 rd",{invalid:t.地址}]),rules:"required",placeholder:"請輸入 地址",modelValue:i.value.user.address,"onUpdate:modelValue":o[4]||(o[4]=l=>i.value.user.address=l)},null,8,["class","modelValue"]),je,a(v,{name:"地址",class:"block ps-3 pt-2 text-red-500 font-size-3"})]),e("div",Ae,[a(_,{as:"textarea",name:"userForm.message",id:"message",cols:"30",rows:"10",class:"block w-100% p-x-3 p-y-1.5 border-1 border-solid border-#dee2e6 rd",modelValue:i.value.message,"onUpdate:modelValue":o[5]||(o[5]=l=>i.value.message=l),placeholder:"請輸入留言"},null,8,["modelValue"]),Pe])]),e("div",Me,[e("div",Oe,[e("div",He,[Ge,s(n).total===s(n).final_total?(u(),c("p",Je,[k("NT$ "),e("span",null,p(s(n).final_total),1)])):(u(),c("p",Ke,[e("del",Qe,"NT$"+p(s(n).total),1),e("span",We,"NT$"+p(s(n).final_total),1)]))]),e("div",Xe,[e("div",Ye,[G(e("input",{type:"text",name:"coupon",id:"coupon",class:"block w-100% p-x-3 p-y-1.5 border-1 border-solid border-#dee2e6 rd",placeholder:"請輸入 優惠券","onUpdate:modelValue":o[6]||(o[6]=l=>m.value=l)},null,512),[[J,m.value,void 0,{trim:!0}]]),Ze,e("button",{type:"button",class:"absolute right-0 top-50% translate-y--50% block h-100% border-0 bg-transparent p-x-3 p-y-1.5 border-l-2 border-solid border-primary rd-r-3 cursor-pointer hover:bg-primary hover:text-secondary",onClick:j},"使用")]),s(n).carts[0].coupon?(u(),c("div",et,[e("p",tt,"已套用優惠券代碼："+p(s(n).carts[0].coupon.code),1),e("p",null,"折扣金額： -"+p(s(n).total-s(n).final_total),1)])):K("",!0)]),st])])]),_:1})])])):(u(),c("div",ot,[lt,e("div",at,[a(C,{to:"/products",class:"inline-block bg-info text-secondary tracking-widest px-5 py-3 rd-100vh shadow-[0_2px_0_0_#3D081B] hover:shadow-[0_1px_0_0_#3D081B]"},{default:y(()=>[k(" 趕緊購物去 ")]),_:1})])]))],512),a(Y,{exclude:D.value},null,8,["exclude"])])],64)}}},_t=Z(rt,[["__scopeId","data-v-18382f7b"]]);export{_t as default};