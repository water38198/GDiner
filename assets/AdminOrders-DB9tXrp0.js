import{r as _,l as C,o as i,c as d,a as e,b as r,w as D,n as y,t as n,k as L,H as B,x as k,h as E,S as f,M as I,f as V,_ as R,e as U,F as x,g as O,B as S,u as A}from"./index-DeJfmtbo.js";import{_ as F}from"./PaginationComponent-BS_lQwJQ.js";import{u as P}from"./index-CO1L_0eG.js";const H={BASE_URL:"/GDiner/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_PATH:"payzoom",VITE_URL:"https://vue3-course-api.hexschool.io"},q={class:"modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable"},N={class:"modal-content"},Y={class:"modal-body"},z={class:"container-fluid"},G={key:0,class:"row gy-4"},j={class:"col-12 col-md-6"},J={class:"col-12 col-md-6"},K={class:"col-12 col-md-6"},Q={class:"col-12 col-md-6"},W={class:"col-12"},X={class:"col-12"},Z={class:"form-check"},ee={class:"modal-footer"},se=["disabled"],te={__name:"OrderModal",props:{order:{type:Object,required:!0}},emits:["refresh"],setup(M,{emit:p}){const v=M,l=_({...v.order});C(()=>v.order,a=>{l.value={...a}});const m=_(!1),b=p,h=_(null),$=async()=>{const{VITE_URL:a,VITE_PATH:s}=H;try{m.value=!0;const t=await E.put(`${a}/v2/api/${s}/admin/order/${l.value.id}`,{data:l.value});f.fire({icon:"success",title:`${t.data.message}`,showConfirmButton:!1,timer:1500,didClose:()=>{m.value=!1,b("refresh"),I.getInstance(h.value).hide()}})}catch(t){f.fire({icon:"error",title:"錯誤",text:`${t.response.data.message||"請稍後再試"}`})}finally{m.value=!1}},u=a=>/^(09)[0-9]{8}$/.test(a)?!0:"請輸入正確的手機號碼";return(a,s)=>{const t=V("VField"),o=V("ErrorMessage"),T=V("VForm");return i(),d("div",{class:"modal fade",id:"OrderModal",tabindex:"-1","aria-labelledby":"OrderLabel","aria-hidden":"true",ref_key:"modalRef",ref:h},[e("div",q,[e("div",N,[s[13]||(s[13]=e("div",{class:"modal-header"},[e("h1",{class:"modal-title fs-2 fw-bold",id:"ProductModalLabel"}," 編輯訂單"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),e("div",Y,[r(T,{onSubmit:$,id:"OrderForm"},{default:D(({errors:g})=>[e("div",z,[s[11]||(s[11]=e("h4",{class:"text-center fs-4 fw-bold"},"客戶資料",-1)),l.value.user?(i(),d("div",G,[e("div",j,[s[5]||(s[5]=e("label",{for:"name",class:"form-label"},"姓名",-1)),r(t,{type:"text",id:"name",placeholder:"請輸入姓名",modelValue:l.value.user.name,"onUpdate:modelValue":s[0]||(s[0]=c=>l.value.user.name=c),modelModifiers:{trim:!0},name:"姓名",rules:"required",class:y(["form-control",{"is-invalid":g.姓名}])},null,8,["modelValue","class"]),r(o,{name:"姓名",class:"invalid-feedback"})]),e("div",J,[s[6]||(s[6]=e("label",{for:"tel",class:"form-label"},"電話",-1)),r(t,{type:"tel",id:"tel",placeholder:"請輸入電話",modelValue:l.value.user.tel,"onUpdate:modelValue":s[1]||(s[1]=c=>l.value.user.tel=c),modelModifiers:{trim:!0},name:"電話",class:y(["form-control",{"is-invalid":g.電話}]),rules:u},null,8,["modelValue","class"]),r(o,{name:"電話",class:"invalid-feedback"})]),e("div",K,[s[7]||(s[7]=e("label",{for:"email",class:"form-label"},"Email",-1)),r(t,{type:"email",id:"email",placeholder:"請輸入Email",modelValue:l.value.user.email,"onUpdate:modelValue":s[2]||(s[2]=c=>l.value.user.email=c),modelModifiers:{trim:!0},name:"Email",rules:"required|email",class:y(["form-control",{"is-invalid":g.Email}])},null,8,["modelValue","class"]),r(o,{name:"Email",class:"invalid-feedback"})]),e("div",Q,[s[8]||(s[8]=e("label",{for:"address",class:"form-label"},"地址",-1)),r(t,{type:"address",id:"address",placeholder:"請輸入地址",modelValue:l.value.user.address,"onUpdate:modelValue":s[3]||(s[3]=c=>l.value.user.address=c),modelModifiers:{trim:!0},name:"地址",rules:"required",class:y(["form-control",{"is-invalid":g.地址}])},null,8,["modelValue","class"]),r(o,{name:"地址",class:"invalid-feedback"})]),e("div",W,[s[9]||(s[9]=e("h4",null,"留言：",-1)),e("p",null,n(l.value.message),1)]),e("div",X,[e("div",Z,[L(e("input",{class:"form-check-input",type:"checkbox",id:"is_paid","onUpdate:modelValue":s[4]||(s[4]=c=>l.value.is_paid=c)},null,512),[[B,l.value.is_paid]]),s[10]||(s[10]=e("label",{class:"form-check-label",for:"is_paid"},"是否啟用",-1))])])])):k("",!0)])]),_:1})]),e("div",ee,[s[12]||(s[12]=e("button",{type:"button",class:"btn btn-outline-dark","data-bs-dismiss":"modal"},"取消",-1)),e("button",{type:"submit",class:"btn btn-primary",form:"OrderForm",disabled:m.value},"送出",8,se)])])])],512)}}},w={BASE_URL:"/GDiner/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_PATH:"payzoom",VITE_URL:"https://vue3-course-api.hexschool.io"},le={class:"position-relative container py-10"},ae={class:"table-responsive"},oe={class:"table align-middle text-nowrap"},ne={class:"table-group-divider"},ie={type:"i"},re={key:0},de={class:"order-message"},ue={class:"text-center"},ce={class:"text-center"},me={key:0,class:"text-success"},pe={key:1,class:"text-danger"},_e={class:"btn-group",role:"group","aria-label":"edit button group"},fe=["onClick"],ve=["onClick"],be={__name:"AdminOrders",setup(M){const p=_(!1),v=_([]),l=_({}),m=async()=>{const{VITE_URL:u,VITE_PATH:a}=w;try{p.value=!0;const s=await E.get(`${u}/v2/api/${a}/admin/orders`);v.value=s.data.orders,l.value=s.data.pagination}catch(s){f.fire({icon:"error",title:"錯誤",text:`${s.response.data.message||"請稍後再試"}`})}finally{p.value=!1}};U(()=>{m()});const b=_({}),h=u=>{b.value={...u}},$=u=>{f.fire({title:`確定要刪除訂單${u.id}嗎？`,icon:"warning",showCancelButton:!0,confirmButtonText:"確定",confirmButtonColor:"#d33",cancelButtonText:"取消"}).then(async a=>{if(a.isConfirmed)try{p.value=!0;const{VITE_URL:s,VITE_PATH:t}=w,o=await E.delete(`${s}/v2/api/${t}/admin/order/${u.id}`);f.fire({title:o.data.message,icon:"success",showConfirmButton:!1,timer:2e3})}catch(s){f.fire({icon:"error",title:"錯誤",text:`${s.response.data.message||"請稍後再試"}`})}finally{p.value=!1,m()}})};return(u,a)=>{const s=V("VLoading");return i(),d(x,null,[e("div",le,[r(s,{active:p.value,"is-full-page":!1},null,8,["active"]),a[1]||(a[1]=e("h2",{class:"text-center fw-bold"},"訂單管理",-1)),e("div",ae,[e("table",oe,[a[0]||(a[0]=e("thead",null,[e("tr",null,[e("th",null,"下單時間"),e("th",null,"ID"),e("th",null,"品項"),e("th",null,"買家資訊"),e("th",null,"留言"),e("th",null,"總額"),e("th",null,"付款"),e("th",{class:"text-center"},"編輯")])],-1)),e("tbody",ne,[(i(!0),d(x,null,O(v.value,t=>(i(),d("tr",{key:t.id},[e("td",null,n(A(P)(t.create_at*1e3,"YYYY-MM-DD")),1),e("td",null,n(t.id),1),e("td",null,[e("ol",ie,[(i(!0),d(x,null,O(t.products,o=>(i(),d("li",{key:o.id},n(o.product.title)+" x "+n(o.qty),1))),128))])]),e("td",null,[e("ul",null,[e("li",null,"姓名："+n(t.user.name),1),e("li",null,"電郵："+n(t.user.email),1),e("li",null,"電話："+n(t.user.tel),1),e("li",null,"用餐："+n(t.user.type),1),t.user.type==="內用"?(i(),d("li",re,"座位："+n(t.user.seat_number),1)):k("",!0)])]),e("td",de,n(t.message),1),e("td",ue,n(t.total),1),e("td",ce,[t.is_paid?(i(),d("span",me,"已付款")):(i(),d("span",pe,"尚未付款"))]),e("td",null,[e("div",_e,[e("button",{type:"button",class:"btn btn-outline-primary","data-bs-toggle":"modal","data-bs-target":"#OrderModal",onClick:o=>h(t)},"編輯",8,fe),e("button",{type:"button",class:"btn btn-outline-danger",onClick:o=>$(t)},"刪除",8,ve)])])]))),128))])])]),l.value.total_pages>1?(i(),S(F,{key:0,pagination:l.value,"change-page":m},null,8,["pagination"])):k("",!0)]),r(te,{order:b.value},null,8,["order"])],64)}}},Ve=R(be,[["__scopeId","data-v-c0273be6"]]);export{Ve as default};
