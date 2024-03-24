import{_ as N,r as h,c as I,w as T,e as M,f as n,g as i,j as u,k as U,h as e,n as C,t as c,p as D,F as O,B as E,q as S,v as q,E as L,l as P,z as R,A,o as F,m as J,J as Y,C as z,S as x,L as j}from"./index-DfcsDzMO.js";import{h as G}from"./moment-Cl4UOzQZ.js";import{P as H}from"./PaginationComp-DznfsdYr.js";const p=v=>(R("data-v-90a2ca91"),v=v(),A(),v),K={class:"bg-#212529 flex justify-between items-center p-4"},Q=p(()=>e("h3",{class:"text-white"},"修改訂單",-1)),W={class:"grid grid-cols-2 gap-6 p-3"},X={key:0},Z=p(()=>e("h4",{class:"text-center font-size-6 mb-2"},"客戶資料",-1)),ee={class:"input-group"},te=p(()=>e("label",{for:"name"},"姓名",-1)),se={class:"input-group"},oe=p(()=>e("label",{for:"tel"},"電話",-1)),le={class:"input-group"},ae=p(()=>e("label",{for:"email"},"Email",-1)),re={class:"input-group"},ne=p(()=>e("label",{for:"address"},"地址",-1)),de=p(()=>e("h4",null,"留言：",-1)),ie={class:"flex flex-col"},ue=p(()=>e("h4",{class:"text-center font-size-6"},"購買的商品",-1)),ce=p(()=>e("thead",null,[e("tr",null,[e("th",{class:"font-size-5"},"商品名稱"),e("th",{class:"font-size-5"},"數量")])],-1)),pe={class:"text-center font-size-4.5"},me={class:"input-group"},_e=["onUpdate:modelValue","onChange"],he={class:"text-end col-start-2"},ve={for:"is_paid",class:"me-2 cursor-pointer"},fe={class:"text-end p-3 border-t border-solid border-#dee2e6"},be={__name:"OrderModal",props:["tempOrder"],setup(v,{expose:y}){const m=v,s=h(m.tempOrder),_=h(),w=I(()=>JSON.stringify(m.tempOrder)==JSON.stringify(s.value));function $(d){d.target.nodeName==="DIALOG"&&_.value.close()}function k(d){s.value.products[d.id].final_total=s.value.products[d.id].qty*s.value.products[d.id].product.price,s.value.products[d.id].total=s.value.products[d.id].final_total}function f(d){return/^(09)[0-9]{8}$/.test(d)?!0:"請輸入正確的電話號碼"}return T(()=>m.tempOrder,()=>{s.value=JSON.parse(JSON.stringify(m.tempOrder))}),y({dialog:_}),(d,l)=>{const b=M("VField"),g=M("ErrorMessage"),r=M("VForm");return n(),i("dialog",{ref_key:"dialog",ref:_,class:"max-w-1140px w-100% border-0 rd p-0 backdrop:backdrop-blur-3",onClick:$},[u(r,{method:"dialog",onSubmit:l[7]||(l[7]=o=>d.$emit("confirmOrder",s.value))},{default:U(({errors:o})=>[e("div",K,[Q,e("button",{type:"button",class:"i-ic:baseline-close p-2 text-white font-size-4 hover:cursor-pointer",onClick:l[0]||(l[0]=t=>_.value.close())})]),e("div",W,[s.value.user?(n(),i("div",X,[Z,e("div",ee,[te,u(b,{type:"text",id:"name",placeholder:"請輸入姓名",modelValue:s.value.user.name,"onUpdate:modelValue":l[1]||(l[1]=t=>s.value.user.name=t),modelModifiers:{trim:!0},name:"姓名",rules:"required",class:C({invalid:o.姓名})},null,8,["modelValue","class"]),u(g,{name:"姓名",class:"block ps-2 pt-2 text-red-500 font-size-3"})]),e("div",se,[oe,u(b,{type:"tel",id:"tel",placeholder:"請輸入電話",modelValue:s.value.user.tel,"onUpdate:modelValue":l[2]||(l[2]=t=>s.value.user.tel=t),modelModifiers:{trim:!0},name:"電話",rules:f,class:C({invalid:o.電話})},null,8,["modelValue","class"]),u(g,{name:"電話",class:"block ps-2 pt-2 text-red-500 font-size-3"})]),e("div",le,[ae,u(b,{type:"email",id:"email",placeholder:"請輸入Email",modelValue:s.value.user.email,"onUpdate:modelValue":l[3]||(l[3]=t=>s.value.user.email=t),modelModifiers:{trim:!0},name:"Email",rules:"required|email",class:C({invalid:o.Email})},null,8,["modelValue","class"]),u(g,{name:"Email",class:"block ps-2 pt-2 text-red-500 font-size-3"})]),e("div",re,[ne,u(b,{type:"address",id:"address",placeholder:"請輸入地址",modelValue:s.value.user.address,"onUpdate:modelValue":l[4]||(l[4]=t=>s.value.user.address=t),modelModifiers:{trim:!0},name:"地址",rules:"required",class:C({invalid:o.地址})},null,8,["modelValue","class"]),u(g,{name:"地址",class:"block ps-2 pt-2 text-red-500 font-size-3"})]),e("div",null,[de,e("p",null,c(s.value.message),1)])])):D("",!0),e("div",ie,[ue,e("table",null,[ce,e("tbody",null,[(n(!0),i(O,null,E(s.value.products,t=>(n(),i("tr",{key:t.id},[e("td",pe,c(t.product.title),1),e("td",null,[e("div",me,[S(e("input",{type:"number",min:"1","onUpdate:modelValue":a=>t.qty=a,onChange:a=>k(t)},null,40,_e),[[q,t.qty,void 0,{number:!0}]])])])]))),128))])])]),e("div",he,[e("label",ve,[S(e("input",{type:"checkbox",id:"is_paid","onUpdate:modelValue":l[5]||(l[5]=t=>s.value.is_paid=t),class:"custom-checkbox cursor-pointer"},null,512),[[L,s.value.is_paid]]),P(" 是否付款 ")])])]),e("div",fe,[e("button",{type:"button",class:"m-1 px-3 py-1.5 bg-transparent text-#6c757d border-1 border-solid border-#6c757d rd hover:cursor-pointer hover:bg-#5c636a hover:text-white",onClick:l[6]||(l[6]=t=>_.value.close())},"取消"),e("button",{type:"submit",class:C(["m-1 px-3 py-1.5 text-white bg-#0d6efd border-0 rd cursor-pointer hover:bg-#0b5ed7",{disabled:w.value}])},"修改訂單",2)])]),_:1})],512)}}},ge=N(be,[["__scopeId","data-v-90a2ca91"]]);var xe={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payzoom",BASE_URL:"/GDiner/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const ye={class:"p-10"},$e=e("h2",{class:"font-size-12"},"訂單",-1),ke={class:"relative min-h-100"},Ve={class:"w-100% mt-6"},Ce=e("thead",{class:"border-b-1 border-black border-solid fw-bold text-left"},[e("tr",null,[e("th",{width:"120"}," 下單時間 "),e("th",null,"ID"),e("th",null," 購買品項 "),e("th",null," 使用者資訊 "),e("th",null," 留言 "),e("th",{class:"text-center"}," 訂單總額 "),e("th",{width:"100",class:"text-center"}," 是否付款 "),e("th",{width:"120"}," 編輯 ")])],-1),Oe={class:"text-center"},we={class:"text-center"},Ee={key:0,class:"text-green"},Me={key:1,class:"text-red"},ze={class:"btn-group"},Se=["onClick"],De=["onClick"],Te={__name:"AdminOrders",setup(v){const{VITE_URL:y,VITE_PATH:m}=xe,s=h([]),_=h({}),w=h({}),$=h(),k=h(!1);function f(r=1){k.value=!0,z.get(`${y}/v2/api/${m}/admin/orders?page=${r}`).then(o=>{s.value=o.data.orders,_.value=o.data.pagination}).catch(o=>{x.fire({icon:"error",title:"錯誤發生",text:o.response.data.message})}).finally(()=>{k.value=!1})}function d(r){w.value=r,$.value.dialog.showModal()}function l(r){x.fire({icon:"warning",title:"刪除訂單",text:`你確定要刪除 ${r} 這筆訂單嗎?`,showCancelButton:!0,cancelButtonText:"取消",confirmButtonText:"確定"}).then(o=>{o.isConfirmed&&z.delete(`${y}/v2/api/${m}/admin/order/${r}`).then(t=>{x.fire({icon:"success",title:`${t.data.message}`,didClose:()=>{f()}})}).catch(()=>{x.fire("錯誤發生","","error")})})}function b(r){const o=r;let t=0;t=Object.keys(o.products).reduce((a,V)=>{const B=o.products[V].coupon?o.products[V].coupon.percent/100:1;return a+o.products[V].final_total*B},0),o.total=t,z.put(`${y}/v2/api/${m}/admin/order/${r.id}`,{data:o}).then(a=>{$.value.dialog.close(),x.fire({icon:"success",title:`${a.data.message}`,didClose:()=>{f()}})}).catch(a=>{x.fire({title:"錯誤發生",icon:"error",text:`${a.response.data.message}，請嘗試重新整理，如果此狀況持續發生，請聯絡我們`,confirmButtonColor:"#3D081B"})})}function g(r){return G(r).format("YYYY-MM-DD")}return F(()=>{f()}),(r,o)=>(n(),i(O,null,[e("div",ye,[$e,e("div",ke,[u(J(j),{active:k.value,"is-full-page":!1},null,8,["active"]),e("table",Ve,[Ce,e("tbody",null,[(n(!0),i(O,null,E(s.value,t=>(n(),i("tr",{class:"border-b border-#DEE2E6 border-solid",key:t.id},[e("td",null,c(g(t.create_at*1e3)),1),e("td",null,c(t.id),1),e("td",null,[e("ul",null,[(n(!0),i(O,null,E(t.products,a=>(n(),i("li",{key:a.id},c(a.product.title)+" x "+c(a.qty),1))),128))])]),e("td",null,[e("ul",null,[(n(!0),i(O,null,E(t.user,(a,V)=>(n(),i("li",{key:a,class:"pt-2"},c(V)+" : "+c(a),1))),128))])]),e("td",null,c(t.message),1),e("td",Oe,c(t.total),1),e("td",we,[t.is_paid?(n(),i("span",Ee,"已付款")):(n(),i("span",Me,"尚未付款"))]),e("td",null,[e("div",ze,[e("button",{type:"button",class:"text-#0d6efd bg-transparent border-1 border-#0d6efd border-solid border-r-0 rd-tl rd-bl px-2 py-1 hover:bg-#0d6efd hover:text-white hover:cursor-pointer",onClick:a=>d(t)}," 編輯 ",8,Se),e("button",{type:"button",class:"text-#dc3545 bg-transparent border-1 border-#de3545 border-solid rd-tr rd-br px-2 py-1 hover:bg-#de3545 hover:text-white hover:cursor-pointer",onClick:a=>l(t.id)}," 刪除 ",8,De)])])]))),128))])])]),s.value.length?(n(),Y(H,{key:0,pages:_.value,onChangePage:f},null,8,["pages"])):D("",!0)]),u(ge,{"temp-order":w.value,ref_key:"orderModalRef",ref:$,onConfirmOrder:b},null,8,["temp-order"])],64))}};export{Te as default};
