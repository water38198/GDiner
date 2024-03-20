import{a as x,S as v}from"./sweetalert2.all-BG_37rGc.js";import{h as M}from"./moment-Cl4UOzQZ.js";import{P as L}from"./PaginationComp-BHsoW4WD.js";import{L as N}from"./index-CegEb7TS.js";import{r,w as y,e as m,f,g as e,t as g,p as h,v as C,B as U,l as Y,x as R,y as B,o as P,j as w,m as z,F as k,z as A,I as O,i as j}from"./index-BGcmftwk.js";import{_ as F}from"./plugin-vueexport-helper-DlAUqK2U.js";const $=p=>(R("data-v-d9af6a84"),p=p(),B(),p),G={method:"dialog"},H={class:"bg-#212529 p-4 flex justify-between items-center"},q={class:"text-white"},J={class:"grid grid-cols-2 gap-6 p-5"},K={class:"input-group"},Q=$(()=>e("label",{for:"name"},"名稱：",-1)),W={class:"input-group"},X=$(()=>e("label",{for:"code"},"優惠碼：",-1)),Z={class:"input-group"},ee=$(()=>e("label",{for:"due_date"},"日期：",-1)),te={class:"input-group mb-4"},oe=$(()=>e("label",{for:"percent"},"優惠比例：",-1)),ae={for:"is_paid"},se={class:"text-end p-3 border-t border-solid border-#dee2e6"},le={__name:"CouponModal",props:["tempCoupon","isNew"],setup(p,{expose:b}){const u=p,o=r(u.tempCoupon),i=r(),c=r("");function _(d){d.target.nodeName==="DIALOG"&&i.value.close()}return y(()=>u.tempCoupon,()=>{o.value={...u.tempCoupon},o.value.due_date&&(c.value=M(o.value.due_date).format("YYYY-MM-DD")),o.value.is_enabled||(o.value.is_enabled=0)}),y(()=>c.value,()=>{o.value.due_date=new Date(c.value).getTime()}),b({dialog:i}),(d,t)=>(m(),f("dialog",{ref_key:"dialog",ref:i,class:"max-w-1140px w-100% border-0 rd p-0 backdrop:backdrop-blur-3",onClick:_},[e("form",G,[e("div",H,[e("h3",q,g(p.isNew?"新增優惠券":"編輯優惠券"),1),e("button",{type:"button",class:"i-ic:baseline-close p-2 text-white font-size-4 hover:cursor-pointer",onClick:t[0]||(t[0]=a=>i.value.close())})]),e("div",J,[e("div",K,[Q,h(e("input",{type:"text",id:"name",placeholder:"請輸入名稱","onUpdate:modelValue":t[1]||(t[1]=a=>o.value.title=a)},null,512),[[C,o.value.title]])]),e("div",W,[X,h(e("input",{type:"text",id:"code",placeholder:"請輸入優惠碼","onUpdate:modelValue":t[2]||(t[2]=a=>o.value.code=a)},null,512),[[C,o.value.code]])]),e("div",Z,[ee,h(e("input",{type:"date",id:"due_date",pattern:"yyyy-MM-dd","onUpdate:modelValue":t[3]||(t[3]=a=>c.value=a)},null,512),[[C,c.value]])]),e("div",te,[oe,h(e("input",{type:"number",id:"percent",placeholder:"請輸入折扣百分比","onUpdate:modelValue":t[4]||(t[4]=a=>o.value.percent=a),min:"0",max:"100"},null,512),[[C,o.value.percent,void 0,{number:!0}]])]),e("div",null,[e("label",ae,[h(e("input",{type:"checkbox",id:"is_paid","onUpdate:modelValue":t[5]||(t[5]=a=>o.value.is_enabled=a),class:"custom-checkbox","true-value":1,"false-value":0},null,512),[[U,o.value.is_enabled]]),Y(" 是否啟用 ")])])]),e("div",se,[e("button",{type:"button",class:"m-1 px-3 py-1.5 bg-transparent text-#6c757d border-1 border-solid border-#6c757d rd hover:cursor-pointer hover:bg-#5c636a hover:text-white",onClick:t[6]||(t[6]=a=>i.value.close())},"取消"),e("button",{type:"button",class:"m-1 px-3 py-1.5 text-white bg-#0d6efd border-0 rd hover:cursor-pointer hover:bg-#0b5ed7",onClick:t[7]||(t[7]=a=>d.$emit("confirmCoupon",o.value))},"確定")])])],512))}},ne=F(le,[["__scopeId","data-v-d9af6a84"]]);var de={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payzoom",BASE_URL:"/GDiner/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const ie={class:"p-10"},re=e("h2",{class:"font-size-12"},"優惠券",-1),ue={class:"relative min-h-100"},ce={class:"w-100% mt-6"},pe=e("thead",{class:"border-b-1 border-black border-solid fw-bold text-left"},[e("tr",null,[e("th",{width:"120"}," 名稱 "),e("th",null,"優惠碼"),e("th",null," 到期日 "),e("th",null," 百分比 "),e("th",{width:"100",class:"text-center"}," 是否啟用 "),e("th",{width:"120"}," 編輯 ")])],-1),ve={class:"text-center"},me={key:0,class:"text-#198754"},be={key:1,class:"text-red"},fe=["onClick"],_e=["onClick"],we={__name:"AdminCoupons",setup(p){const{VITE_URL:b,VITE_PATH:u}=de,o=r([]),i=r(!1),c=r({}),_=r({}),d=r(),t=r(!1);function a(l=1){i.value=!0,x.get(`${b}/v2/api/${u}/admin/coupons?page=${l}`).then(s=>{o.value=s.data.coupons,c.value=s.data.pagination}).catch(s=>{v.fire({icon:"error",title:"錯誤發生",text:s.response.data.message})}).finally(()=>{i.value=!1})}function V(){t.value=!0,_.value={},d.value.dialog.showModal()}function D(l){return M(l).format("YYYY-MM-DD")}function E(l){_.value=l,t.value=!1,d.value.dialog.showModal()}function I(l){t.value?x.post(`${b}/v2/api/${u}/admin/coupon`,{data:l}).then(s=>{v.fire({title:`${s.data.message}`,icon:"success",didClose:()=>{a()}}),d.value.dialog.close()}).catch(s=>{v.fire({title:"錯誤發生",text:`${s.response.data.message}`,icon:"error",target:"dialog"})}):x.put(`${b}/v2/api/${u}/admin/coupon/${l.id}`,{data:l}).then(s=>{v.fire({title:`${s.data.message}`,icon:"success",didClose:()=>{a()}}),d.value.dialog.close()}).catch(s=>{v.fire({title:"錯誤發生",text:`${s.response.data.message}`,icon:"error",target:"dialog"})})}function T(l){const{id:s}=l;x.delete(`${b}/v2/api/${u}/admin/coupon/${s}`).then(n=>{v.fire({title:`${n.data.message}`,icon:"success",didClose:()=>{a()}}),d.value.dialog.close()}).catch(n=>{v.fire({title:"錯誤發生",text:`${n.response.data.message}`,icon:"error",target:"dialog"})})}return P(()=>{a()}),(l,s)=>(m(),f(k,null,[e("div",ie,[re,e("div",ue,[w(z(N),{active:i.value,"is-full-page":!1},null,8,["active"]),e("div",{class:"text-end mt-6"},[e("button",{type:"button",class:"bg-#0d6efd border-0 text-white cursor-pointer inline-block px-3 py-1.5 rd font-size-4 hover:bg-#0b5ed7",onClick:V},"建立優惠券")]),e("table",ce,[pe,e("tbody",null,[(m(!0),f(k,null,A(o.value,n=>(m(),f("tr",{class:"border-b border-#DEE2E6 border-solid",key:n.id},[e("td",null,g(n.title),1),e("td",null,g(n.code),1),e("td",null,g(D(n.due_date)),1),e("td",null,g(n.percent),1),e("td",ve,[n.is_enabled?(m(),f("span",me,"啟用")):(m(),f("span",be,"未啟用"))]),e("td",null,[e("div",null,[e("button",{type:"button",class:"text-#0d6efd bg-transparent border-1 border-#0d6efd border-solid rd-tl rd-bl px-2 py-1 hover:bg-#0d6efd hover:text-white hover:cursor-pointer",onClick:S=>E(n)}," 編輯 ",8,fe),e("button",{type:"button",class:"text-#dc3545 bg-transparent border-1 border-#de3545 border-solid rd-tr rd-br px-2 py-1 hover:bg-#de3545 hover:text-white hover:cursor-pointer",onClick:S=>T(n)}," 刪除 ",8,_e)])])]))),128))])])]),o.value.length?(m(),O(L,{key:0,pages:c.value,onChangePage:a},null,8,["pages"])):j("",!0)]),w(ne,{"temp-coupon":_.value,ref_key:"couponModalRef",ref:d,"is-new":t.value,onConfirmCoupon:I},null,8,["temp-coupon","is-new"])],64))}};export{we as default};
