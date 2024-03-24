import{r as g,w as q,d as D,e as d,f as u,i,j as M,g as e,t as b,n as v,F as P,A as I,p as S,v as L,q as B,m as N,D as R,B as k,S as _,o as A,l as O,I as F}from"./index-BE6KWW_P.js";import{L as H}from"./index-58APw_xi.js";import{P as j}from"./PaginationComp-CIzJpkUo.js";import"./plugin-vueexport-helper-DlAUqK2U.js";var G={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payzoom",BASE_URL:"/GDiner/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const J={class:"bg-primary p-4 flex justify-between items-center"},K={class:"text-white"},Q={class:"grid grid-cols-12 gap-6 p-3"},W={class:"col-span-4"},X={class:"input-group"},Y=e("label",{for:"imagUrl",class:"block"},"主要圖片",-1),Z=["src"],ee={action:"/api/thisismycourse2/admin/upload",enctype:"multipart/form-data",method:"post",class:"my-4"},te=e("h4",{class:"font-size-5 mb-4"},"多圖新增",-1),oe={class:"flex justify-between mb-2"},se={for:"images-1"},le=["onClick"],ae={class:"input-group"},ie=["onUpdate:modelValue"],ne=["src"],re={action:"/api/thisismycourse2/admin/upload",enctype:"multipart/form-data",method:"post",class:"mt-10"},de={class:"col-span-8"},ue={class:"grid grid-cols-2 gap-col-6 gap-row-4"},ce={class:"input-group col-span-2"},pe=e("label",{for:"title"},"名稱：",-1),me={class:"input-group"},ve=e("label",{for:"category"},"分類：",-1),_e=e("option",{value:"主食"},"主食",-1),ge=e("option",{value:"沙拉"},"沙拉",-1),he=e("option",{value:"湯品"},"湯品",-1),fe=e("option",{value:"副食"},"副食",-1),be=e("option",{value:"甜點"},"甜點",-1),xe=e("option",{value:"飲料"},"飲料",-1),ye=e("option",{value:"套餐"},"套餐",-1),Ve={class:"input-group"},we=e("label",{for:"unit"},"單位：",-1),$e=e("datalist",{id:"units"},[e("option",{value:"碗"}),e("option",{value:"客"}),e("option",{value:"杯"}),e("option",{value:"份"}),e("option",{value:"個"})],-1),ke={class:"input-group"},Ue=e("label",{for:"origin_price"},"原價：",-1),Ce={class:"input-group"},Pe=e("label",{for:"price"},"售價：",-1),Ee={class:"input-group"},Te=e("label",{for:"veggie"},"素食:",-1),ze=e("option",{value:"全素",class:"text-green-700"},"全素",-1),De=e("option",{value:"蛋奶素",class:"text-yellow-700"},"蛋奶素",-1),Me=e("option",{value:"葷食",class:"text-red"},"葷食",-1),Se={class:"input-group col-span-2"},Ie=e("label",{for:"tags"},"標籤：",-1),Le={class:"col-span-2"},Ne={key:0,class:"mb-4 flex"},qe={class:"flex"},Be={class:"font-size-4 px-4"},Re=["onClick"],Ae=e("div",{class:"i-ic:baseline-close"},null,-1),Oe=[Ae],Fe={class:"input-group col-span-2"},He=e("label",{for:"description"},"產品敘述:",-1),je={class:"input-group col-span-2"},Ge=e("label",{for:"content"},"內容說明:",-1),Je=e("label",{for:"is_enabled"},"是否啟用",-1),Ke={class:"text-end p-3 border-t border-solid border-#dee2e6"},Qe=e("button",{type:"submit",class:"m-1 px-3 py-1.5 text-secondary bg-primary border-0 rd cursor-pointer hover:bg-primary-light"},"確定",-1),We={__name:"ProductModal",props:["tempProduct","isNew"],setup(E,{expose:x}){const{VITE_URL:y,VITE_PATH:w}=G,m=E,t=g(m.tempProduct),c=g(),r=g("");function $(n){n.target.nodeName==="DIALOG"&&c.value.close()}function h(){t.value.imagesUrl||(t.value.imagesUrl=[]),t.value.imagesUrl[t.value.imagesUrl.length-1]!==""&&t.value.imagesUrl.push("")}function U(n,o){const a=o.target.files[0],l=new FormData;l.append("file-to-upload",a),k.post(`${y}/v2/api/${w}/admin/upload`,l).then(f=>{h(),n==="images"?t.value.imagesUrl[t.value.imagesUrl.length-1]=f.data.imageUrl:n==="image"&&(t.value.imageUrl=f.data.imageUrl)}).catch(f=>{_.fire({icon:"error",title:"錯誤發生",text:f.response.data.message})})}function C(){if(r.value=="")return;t.value.tags||(t.value.tags=[]);const n=t.value.tags[t.value.tags.length-1]||"";r.value===n||n==null||(t.value.tags.push(r.value),r.value="")}function T(n){const o=t.value.tags.indexOf(n);t.value.tags.splice(o,1)}return q(()=>m.tempProduct,()=>{t.value=m.tempProduct}),x({dialog:c}),(n,o)=>{const a=D("VField"),l=D("ErrorMessage"),f=D("VForm");return d(),u("dialog",{ref_key:"dialog",ref:c,class:"max-w-1140px w-100% border-0 rd p-0 backdrop:backdrop-blur-3",onClick:$},[i(f,{onSubmit:o[15]||(o[15]=p=>n.$emit("confirmProduct",t.value))},{default:M(({errors:p})=>[e("div",J,[e("h3",K,b(E.isNew?"新增產品":"編輯產品"),1),e("button",{type:"button",class:"i-ic:baseline-close p-2 text-white font-size-4 hover:cursor-pointer",onClick:o[0]||(o[0]=s=>c.value.close())})]),e("div",null,[e("div",Q,[e("div",W,[e("div",X,[Y,i(a,{name:"主要圖片",id:"imageUrl",type:"text",placeholder:"請輸入圖片連結",modelValue:t.value.imageUrl,"onUpdate:modelValue":o[1]||(o[1]=s=>t.value.imageUrl=s),class:v({invalid:p.主要圖片}),rules:"required"},null,8,["modelValue","class"]),i(l,{name:"主要圖片",class:"block ps-2 pt-2 text-red-500 font-size-3"}),e("img",{src:t.value.imageUrl,alt:""},null,8,Z)]),e("form",ee,[e("input",{type:"file",name:"file-to-upload",onChange:o[2]||(o[2]=s=>U("image",s))},null,32)]),e("div",null,[te,(d(!0),u(P,null,I(t.value.imagesUrl,(s,V)=>(d(),u("div",{key:s,class:"mb-4"},[e("div",oe,[e("label",se,"圖片網址"+b(V+1),1),e("button",{class:"i-ic:baseline-close font-size-5 opacity-50 hover:cursor-pointer hover:opacity-75",onClick:z=>t.value.imagesUrl.splice(V,1)},null,8,le)]),e("div",ae,[S(e("input",{type:"text","onUpdate:modelValue":z=>t.value.imagesUrl[V]=z,placeholder:"請輸入圖片網址",class:",b-2"},null,8,ie),[[L,t.value.imagesUrl[V]]])]),e("img",{src:s,alt:""},null,8,ne)]))),128)),e("button",{type:"button",class:"inline-block w-100% bg-transparent border-primary border-solid border-1 rd text-primary py-1 mb-1 cursor-pointer hover:bg-primary hover:text-secondary",onClick:h}," 新增圖片網址 "),e("form",re,[e("input",{type:"file",name:"file-to-upload",onChange:o[3]||(o[3]=s=>U("images",s))},null,32)])])]),e("div",de,[e("div",ue,[e("div",ce,[pe,i(a,{type:"text",id:"title",name:"名稱",rules:"required",placeholder:"請輸入標題",modelValue:t.value.title,"onUpdate:modelValue":o[4]||(o[4]=s=>t.value.title=s),class:v({invalid:p.名稱})},null,8,["modelValue","class"]),i(l,{name:"名稱",class:"block ps-2 pt-2 text-red-500 font-size-3"})]),e("div",me,[ve,i(a,{as:"select",name:"分類",rules:"required",id:"category",class:v({invalid:p.分類}),modelValue:t.value.category,"onUpdate:modelValue":o[5]||(o[5]=s=>t.value.category=s)},{default:M(()=>[_e,ge,he,fe,be,xe,ye]),_:2},1032,["class","modelValue"]),i(l,{name:"分類",class:"block ps-2 pt-2 text-red-500 font-size-3"})]),e("div",Ve,[we,i(a,{type:"text",id:"unit",placeholder:"請輸入單位",modelValue:t.value.unit,"onUpdate:modelValue":o[6]||(o[6]=s=>t.value.unit=s),list:"units",name:"單位",rules:"required",class:v({invalid:p.單位}),autocomplete:"off"},null,8,["modelValue","class"]),$e,i(l,{name:"單位",class:"block ps-2 pt-2 text-red-500 font-size-3"})]),e("div",ke,[Ue,i(a,{type:"number",name:"原價",id:"origin_price",placeholder:"請輸入原價",min:"0",rules:"required|min_value:0",class:v({invalid:p.原價}),modelValue:t.value.origin_price,"onUpdate:modelValue":o[7]||(o[7]=s=>t.value.origin_price=s),modelModifiers:{number:!0}},null,8,["class","modelValue"]),i(l,{name:"原價",class:"block ps-2 pt-2 text-red-500 font-size-3"})]),e("div",Ce,[Pe,i(a,{type:"number",id:"price",placeholder:"請輸入售價",min:"0",modelValue:t.value.price,"onUpdate:modelValue":o[8]||(o[8]=s=>t.value.price=s),modelModifiers:{number:!0},name:"售價",rules:{required:!0,max_value:t.value.origin_price,min_value:0},class:v({invalid:p.售價})},null,8,["modelValue","rules","class"]),i(l,{name:"售價",class:"block ps-2 pt-2 text-red-500 font-size-3"})]),e("div",Ee,[Te,i(a,{as:"select",id:"veggie",modelValue:t.value.veggie,"onUpdate:modelValue":o[9]||(o[9]=s=>t.value.veggie=s),name:"素食",rules:"required",class:v({invalid:p.素食})},{default:M(()=>[ze,De,Me]),_:2},1032,["modelValue","class"]),i(l,{name:"素食",class:"block ps-2 pt-2 text-red-500 font-size-3"})]),e("div",Se,[Ie,S(e("input",{type:"text",id:"tags","onUpdate:modelValue":o[10]||(o[10]=s=>r.value=s),onKeydown:B(C,["enter"])},null,544),[[L,r.value,void 0,{trim:!0}]])]),e("div",Le,[t.value.tags?(d(),u("div",Ne,[e("ul",qe,[(d(!0),u(P,null,I(t.value.tags,(s,V)=>(d(),u("li",{key:`${V}+${s}`,class:"flex px-2 py-2 border-1 border-solid border-primary rd me-2"},[e("span",Be,b(s),1),e("a",{class:"border-0 bg-transparent p-0 hover:cursor-pointer",onClick:z=>T(s)},Oe,8,Re)]))),128))])])):N("",!0),e("button",{type:"button",class:"border-0 rd bg-primary text-white px-4 py-2 hover:cursor-pointer hover:bg-primary-light",onClick:C},"新增標籤")]),e("div",Fe,[He,i(a,{as:"textarea",id:"description",rows:"6",modelValue:t.value.description,"onUpdate:modelValue":o[11]||(o[11]=s=>t.value.description=s),name:"產品敘述",rules:"required",class:v({invalid:p.產品敘述})},null,8,["modelValue","class"]),i(l,{name:"產品敘述",class:"block ps-2 pt-2 text-red-500 font-size-3"})]),e("div",je,[Ge,i(a,{as:"textarea",id:"content",rows:"4",modelValue:t.value.content,"onUpdate:modelValue":o[12]||(o[12]=s=>t.value.content=s),name:"內容說明",rules:"required",class:v({invalid:p.內容說明})},null,8,["modelValue","class"]),i(l,{name:"內容說明",class:"block ps-2 pt-2 text-red-500 font-size-3"})]),e("div",null,[S(e("input",{type:"checkbox",id:"is_enabled","onUpdate:modelValue":o[13]||(o[13]=s=>t.value.is_enabled=s),"true-value":1,"false-value":0},null,512),[[R,t.value.is_enabled]]),Je])])])]),e("div",Ke,[e("button",{type:"button",class:"m-1 px-3 py-1.5 bg-transparent text-#6c757d border-1 border-solid border-#6c757d rd hover:cursor-pointer hover:bg-#5c636a hover:text-white",onClick:o[14]||(o[14]=s=>c.value.close())},"取消"),Qe])])]),_:1})],512)}}};var Xe={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payzoom",BASE_URL:"/GDiner/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Ye={class:"p-10"},Ze=e("h2",{class:"font-size-12"},"產品",-1),et={class:"text-end mt-6"},tt={class:"relative min-h-100"},ot={class:"w-100% mt-6"},st=e("thead",{class:"border-b-1 border-black border-solid fw-bold text-left"},[e("tr",null,[e("th",{width:"120"}," 縮圖 "),e("th",{width:"120"}," 分類 "),e("th",null,"產品名稱"),e("th",{width:"120",class:"text-end"}," 原價 "),e("th",{width:"120",class:"text-end"}," 售價 "),e("th",{width:"100",class:"text-center"}," 是否啟用 "),e("th",{width:"120"}," 編輯 ")])],-1),lt=["src"],at={class:"text-end"},it={class:"text-end"},nt={class:"text-center"},rt={key:0,class:"text-#198754"},dt={key:1,class:"text-red"},ut=["onClick"],ct=["onClick"],gt={__name:"AdminProducts",setup(E){const{VITE_URL:x,VITE_PATH:y}=Xe,w=g([]),m=g(),t=g({}),c=g(!0),r=g({}),$=g(!1);function h(o=1){$.value=!0,k.get(`${x}/v2/api/${y}/admin/products?page=${o}`).then(a=>{w.value=a.data.products,r.value=a.data.pagination}).catch(a=>{_.fire({icon:"error",title:"錯誤發生",text:a.response.data.message})}).finally(()=>{$.value=!1})}function U(){m.value.dialog.showModal(),t.value={},c.value=!0}function C(o){t.value=JSON.parse(JSON.stringify(o)),c.value=!1,m.value.dialog.showModal()}function T(o){if(c.value)o.created=Date.now(),k.post(`${x}/v2/api/${y}/admin/product`,{data:o}).then(a=>{_.fire({title:`${a.data.message}`,icon:"success",didClose:()=>{h(r.value.current_page||1)}}),m.value.dialog.close(),t.value={}}).catch(a=>{_.fire({icon:"error",title:"錯誤發生",text:`${a.response.data.message}`})});else{const{id:a}=o;k.put(`${x}/v2/api/${y}/admin/product/${a}`,{data:o}).then(l=>{_.fire({title:`${l.data.message}`,icon:"success",didClose:()=>{h(r.value.current_page||1)}}),m.value.dialog.close(),t.value={}}).catch(l=>{_.fire({icon:"error",title:"錯誤發生",text:`${l.response.data.message}`})})}}function n(o){_.fire({title:`你確定要刪除 ${o.title} 嗎?`,showCancelButton:!0,confirmButtonText:"確定",cancelButtonText:"取消"}).then(a=>{a.isConfirmed&&k.delete(`${x}/v2/api/${y}/admin/product/${o.id}`).then(l=>{_.fire({icon:"success",text:l.data.message,didClose:()=>{h(r.value.current_page||1)}})}).catch(l=>{_.fire({icon:"error",text:l.response.data.message})})})}return A(()=>{h()}),(o,a)=>(d(),u(P,null,[e("div",Ye,[Ze,e("div",et,[e("button",{type:"button",class:"bg-primary border-0 text-white cursor-pointer inline-block px-3 py-1.5 rd font-size-4 hover:bg-primary-light",onClick:a[0]||(a[0]=l=>U())},"建立新的產品")]),e("div",tt,[i(O(H),{active:$.value,"is-full-page":!1},null,8,["active"]),e("table",ot,[st,e("tbody",null,[(d(!0),u(P,null,I(w.value,l=>(d(),u("tr",{class:"border-b border-#DEE2E6 border-solid",key:l.id},[e("td",null,[e("img",{src:l.imageUrl,alt:"",width:"120",height:"100"},null,8,lt)]),e("td",null,b(l.category),1),e("td",null,b(l.title),1),e("td",at,b(l.origin_price),1),e("td",it,b(l.price),1),e("td",nt,[l.is_enabled?(d(),u("span",rt,"啟用")):(d(),u("span",dt,"未啟用"))]),e("td",null,[e("div",null,[e("button",{type:"button",class:"text-#0d6efd bg-transparent border-1 border-#0d6efd border-solid rd-tl rd-bl px-2 py-1 hover:bg-#0d6efd hover:text-white hover:cursor-pointer",onClick:f=>C(l)}," 編輯 ",8,ut),e("button",{type:"button",class:"text-#dc3545 bg-transparent border-1 border-#de3545 border-solid rd-tr rd-br px-2 py-1 hover:bg-#de3545 hover:text-white hover:cursor-pointer",onClick:f=>n(l)}," 刪除 ",8,ct)])])]))),128))])])])]),i(We,{onConfirmProduct:T,"temp-product":t.value,"is-new":c.value,ref_key:"dialog",ref:m},null,8,["temp-product","is-new"]),w.value.length?(d(),F(j,{key:0,pages:r.value,onChangePage:h},null,8,["pages"])):N("",!0)],64))}};export{gt as default};
