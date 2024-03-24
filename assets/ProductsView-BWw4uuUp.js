import{r as d,u as F,a as O,c as H,o as G,w as J,C as K,d as Q,f as a,i as L,l as W,g as e,p,D as g,k as u,v as S,E as X,t as x,F as V,A as R,m as k,h as T,B as Y,S as Z,e as n,j as ee,n as te,y as oe,z as se,x as le}from"./index-BE6KWW_P.js";import{L as re}from"./index-58APw_xi.js";import{_ as ae}from"./plugin-vueexport-helper-DlAUqK2U.js";var ne={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payzoom",BASE_URL:"/GDiner/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const r=C=>(oe("data-v-03ed9ce7"),C=C(),se(),C),ie={class:"container px-4 lg:px-12.5"},ue=r(()=>e("h2",{class:"mb-10 py-6 font-size-10 md:mb-16 md:font-size-15"},"料理",-1)),ce={class:"flex flex-wrap justify-between mb-6"},de={action:"",class:"flex gap-2 sm:gap-4"},pe=r(()=>e("h3",null,"篩選：",-1)),ve={class:"relative mb-4"},fe=r(()=>e("summary",{class:"flex list-none text-primary-light cursor-pointer hover:underline hover:underline-offset-4"},[e("span",{class:"text-primary-light hover:text-primary"},"分類"),e("div",{class:"i-material-symbols:keyboard-arrow-down"})],-1)),he={class:"absolute top-10 left-[-40px] sm:left-[-1.2rem] z-2 w-80 rd-4 customBorder rd-2 bg-secondary"},_e=r(()=>e("span",null,"0 已選取",-1)),me={class:"px-5 py-1"},be={for:"主食",class:"relative flex gap-3 py-2.5 lh-tight cursor-pointer"},ye={for:"沙拉",class:"relative flex gap-3 py-2.5 lh-tight cursor-pointer"},ge={for:"湯品",class:"relative flex gap-3 py-2.5 lh-tight cursor-pointer"},xe={for:"副食",class:"relative flex gap-3 py-2.5 lh-tight cursor-pointer"},ke={for:"甜點",class:"relative flex gap-3 py-2.5 lh-tight cursor-pointer"},we={for:"飲料",class:"relative flex gap-3 py-2.5 lh-tight cursor-pointer"},Ce={for:"套餐",class:"relative flex gap-3 py-2.5 lh-tight cursor-pointer"},Ve={class:"relative"},ze=r(()=>e("summary",{class:"flex list-none text-primary-light hover:cursor-pointer hover:underline hover:underline-offset-4"},[e("span",{class:"text-primary-light hover:text-primary"},"價格"),e("div",{class:"i-material-symbols:keyboard-arrow-down"})],-1)),Pe={class:"absolute top-10 left-[-120px] sm:left-[-1.2rem] z-2 w-80 rd-4 customBorder rd-2 bg-secondary"},$e=r(()=>e("span",null,"價格範圍",-1)),Re={class:"flex items-center p-5"},Te=r(()=>e("span",{class:"me-1"},"$",-1)),Ue={class:"price-group"},Be=r(()=>e("label",{for:"lowPrice"},"最低價",-1)),Le=r(()=>e("span",{class:"ms-5 me-1"},"$",-1)),Se={class:"price-group"},Ee=r(()=>e("label",{for:"highPrice"},"最高價",-1)),qe=r(()=>e("label",{for:"sortBy",class:"me-4"},"排序:",-1)),De=le('<option value="" disabled class="hidden" selected data-v-03ed9ce7>請選擇</option><option value="最高價格" data-v-03ed9ce7>最高價格</option><option value="最低價格" data-v-03ed9ce7>最低價格</option><option value="最新" data-v-03ed9ce7>最新</option><option value="最舊" data-v-03ed9ce7>最舊</option>',5),Ie=[De],Me={class:"ms-auto"},Ne={key:0,class:"flex gap-4 mb-6"},je=["onClick"],Ae=r(()=>e("div",{class:"i-material-symbols:close"},null,-1)),Fe=r(()=>e("div",{class:"i-material-symbols:close"},null,-1)),Oe=r(()=>e("div",{class:"i-material-symbols:close"},null,-1)),He={key:0,class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"},Ge={class:"card"},Je={class:"card-image"},Ke=["src"],Qe={class:"mb-4 tracking-wider"},We={class:"pb-4"},Xe={key:1},Ye=r(()=>e("h3",{class:"pt-10 font-size-6 text-center"},[u("很抱歉，沒有符合條件的商品。"),e("br"),u("(〒︿〒)")],-1)),Ze=[Ye],et={key:1,class:"mb-12"},tt={role:"navigation","aria-label":"Pagination"},ot={class:"flex justify-center font-size-5 fw-bold"},st={key:0},lt=r(()=>e("div",{class:"i-ic:round-keyboard-arrow-left"},null,-1)),rt=[lt],at=["onClick"],nt={key:1},it=r(()=>e("div",{class:"i-ic:round-keyboard-arrow-right"},null,-1)),ut=[it],ct={__name:"ProductsView",setup(C){const{VITE_URL:E,VITE_PATH:q}=ne,z=d(!1),D=d(),m=d(""),l=d([]),h=d(),_=d(),b=d(""),v=d(""),f=F(),I=O(),i=d({current:1,total:0}),w=d([]),y=H(()=>{let s=[];return l.value.length>0?l.value.forEach(t=>{s=[...w.value.filter(c=>c.category===t)].concat(s)}):s=w.value,h.value>0&&(s=s.filter(t=>t.price>=h.value)),_.value>0&&(s=s.filter(t=>t.price<=_.value)),m.value==="最新"&&(s=s.sort((t,c)=>c.created-t.created)),m.value==="最舊"&&(s=s.sort((t,c)=>t.created-c.created)),m.value==="最高價格"&&(s=s.sort((t,c)=>c.price-t.price)),m.value==="最低價格"&&(s=s.sort((t,c)=>t.price-c.price)),v.value&&(s=s.filter(t=>t.title.includes(v.value))),s});function M(){z.value=!0,Y.get(`${E}/v2/api/${q}/products/all`).then(s=>{w.value=s.data.products}).catch(s=>{Z.fire({title:"錯誤發生",icon:"error",text:`${s.response.data.message}，請嘗試重新整理，如果此狀況持續發生，請聯絡我們`,confirmButtonColor:"#3D081B"})}).finally(()=>{z.value=!1})}function N(s){const t=l.value.indexOf(s);l.value.splice(t,1)}function U(){l.value=[]}function P(){h.value=null,_.value=null,b.value=""}function B(){v.value="",I.push("/products")}function j(){U(),P(),B()}function $(s){typeof s=="number"?i.value.current=s:s==="+"?i.value.current++:i.value--,window.scrollTo({top:0})}return G(()=>{f.query.category&&l.value.push(f.query.category),f.query.sort&&(m.value=f.query.sort),f.query.search&&(v.value=f.query.search),M()}),J(()=>f.query,()=>{f.query.search&&(v.value=f.query.search)}),K(()=>{let s=h.value,t=_.value;(h.value==null||h.value==null)&&(s=""),(_.value==null||_.value==null)&&(t=""),s==""&&t==""?b.value="":b.value=`${s} ~ ${t}`,i.value.total=Math.ceil(y.value.length/12),i.value.current=1}),(s,t)=>{const c=Q("RouterLink");return n(),a(V,null,[L(W(re),{active:z.value},null,8,["active"]),e("div",ie,[ue,e("div",ce,[e("form",de,[pe,e("details",ve,[fe,e("div",he,[e("div",{class:"flex justify-between px-5 py-4 border-b-1 border-solid border-primary-200"},[_e,e("button",{type:"button",class:"bg-transparent border-0 underline underline-offset-4 tracking-widest hover:cursor-pointer hover:decoration-2",onClick:U},"重置")]),e("ul",me,[e("li",null,[e("label",be,[p(e("input",{type:"checkbox",id:"主食",value:"主食","onUpdate:modelValue":t[0]||(t[0]=o=>l.value=o),class:"appearance-none m-0 size-5 rd-1 cursor-pointer"},null,512),[[g,l.value]]),u(" 主食 ")])]),e("li",null,[e("label",ye,[p(e("input",{type:"checkbox",id:"沙拉",value:"沙拉","onUpdate:modelValue":t[1]||(t[1]=o=>l.value=o),class:"appearance-none m-0 size-5 rd-1 cursor-pointer"},null,512),[[g,l.value]]),u(" 沙拉 ")])]),e("li",null,[e("label",ge,[p(e("input",{type:"checkbox",id:"湯品",value:"湯品","onUpdate:modelValue":t[2]||(t[2]=o=>l.value=o),class:"appearance-none m-0 size-5 rd-1 cursor-pointer"},null,512),[[g,l.value]]),u(" 湯品 ")])]),e("li",null,[e("label",xe,[p(e("input",{type:"checkbox",id:"副食",value:"副食","onUpdate:modelValue":t[3]||(t[3]=o=>l.value=o),class:"appearance-none m-0 size-5 rd-1 cursor-pointer"},null,512),[[g,l.value]]),u(" 副食 ")])]),e("li",null,[e("label",ke,[p(e("input",{type:"checkbox",id:"甜點",value:"甜點","onUpdate:modelValue":t[4]||(t[4]=o=>l.value=o),class:"appearance-none m-0 size-5 rd-1 cursor-pointer"},null,512),[[g,l.value]]),u(" 甜點 ")])]),e("li",null,[e("label",we,[p(e("input",{type:"checkbox",id:"飲料",value:"飲料","onUpdate:modelValue":t[5]||(t[5]=o=>l.value=o),class:"appearance-none m-0 size-5 rd-1 cursor-pointer"},null,512),[[g,l.value]]),u(" 飲料 ")])]),e("li",null,[e("label",Ce,[p(e("input",{type:"checkbox",id:"套餐",value:"套餐","onUpdate:modelValue":t[6]||(t[6]=o=>l.value=o),class:"appearance-none m-0 size-5 rd-1 cursor-pointer"},null,512),[[g,l.value]]),u(" 套餐 ")])])])])]),e("details",Ve,[ze,e("div",Pe,[e("div",{class:"flex justify-between px-5 py-4 border-b-1 border-solid border-primary-200"},[$e,e("button",{type:"button",class:"bg-transparent border-0 underline underline-offset-4 tracking-widest hover:cursor-pointer hover:decoration-2",onClick:P},"重置")]),e("div",Re,[Te,e("div",Ue,[p(e("input",{type:"number",id:"lowPrice","onUpdate:modelValue":t[7]||(t[7]=o=>h.value=o),class:"w-100%",placeholder:"最低價",min:"0"},null,512),[[S,h.value,void 0,{trim:!0}]]),Be]),Le,e("div",Se,[p(e("input",{type:"number",id:"highPrice","onUpdate:modelValue":t[8]||(t[8]=o=>_.value=o),class:"w-100%",placeholder:"最高價",min:"0"},null,512),[[S,_.value,void 0,{trim:!0}]]),Ee])])])]),e("div",null,[qe,p(e("select",{name:"sortBy",id:"sortBy",onChange:t[9]||(t[9]=(...o)=>s.sortProduct&&s.sortProduct(...o)),"onUpdate:modelValue":t[10]||(t[10]=o=>m.value=o),class:"bg-transparent border-0 cursor-pointer",ref:"sortRef"},Ie,544),[[X,m.value]])])]),e("span",Me,x(y.value.length===w.value.length?`${y.value.length} 項料理`:`${y.value.length}
                之 ${w.value.length} 項料理`),1)]),l.value.length!==0||b.value!==""||v.value!==""?(n(),a("div",Ne,[(n(!0),a(V,null,R(l.value,o=>(n(),a("button",{type:"button",class:"flex items-center gap-0.5 px-2 py-1 bg-transparent border-1px border-solid border-primary-200 rd-6 font-size-3 cursor-pointer",key:o,onClick:A=>N(o)},[u(x(o)+" ",1),Ae],8,je))),128)),b.value!==""?(n(),a("button",{key:0,type:"button",class:"flex items-center gap-0.5 px-2 py-1 bg-transparent border-1px border-solid border-primary-200 rd-6 font-size-3 cursor-pointer",onClick:P},[u(x(b.value)+" ",1),Fe])):k("",!0),v.value!==""?(n(),a("button",{key:1,type:"button",class:"flex items-center gap-0.5 px-2 py-1 bg-transparent border-1px border-solid border-primary-200 rd-6 font-size-3 cursor-pointer",onClick:B},[u(x(v.value)+" ",1),Oe])):k("",!0),e("button",{type:"button",onClick:j,class:"bg-transparent border-0 font-size-3 underline underline-offset-4 cursor-pointer hover:decoration-2"}," 清除全部 ")])):k("",!0),e("div",{class:"relative min-h-100 mb-12",ref_key:"productsListRef",ref:D},[y.value.length>0?(n(),a("ul",He,[(n(!0),a(V,null,R(y.value.slice(12*(i.value.current-1),12*i.value.current),o=>(n(),a("li",{key:o.id,"data-aos":"fade-up","data-aos-delay":500,"data-aos-offset":"0"},[e("div",Ge,[L(c,{to:`/product/${o.id}`,class:"block"},{default:ee(()=>[e("div",Je,[e("img",{src:o.imageUrl,alt:"",class:"block w-100% h-150px sm:h-350px md:h-300px"},null,8,Ke)]),e("h3",Qe,x(o.title),1),e("div",We,[e("span",null,"NT$ "+x(o.price),1)])]),_:2},1032,["to"])])]))),128))])):y.value.length===0&&(l.value.length!==0||b.value!==""||v.value!=="")?(n(),a("div",Xe,Ze)):k("",!0)],512),i.value.total>1?(n(),a("div",et,[e("nav",tt,[e("ul",ot,[i.value.current!==1?(n(),a("li",st,[e("a",{href:"#",class:"block px-2 fw-400",onClick:t[11]||(t[11]=T(o=>$("-"),["prevent"]))},rt)])):k("",!0),(n(!0),a(V,null,R(i.value.total,o=>(n(),a("li",{key:`${o}+123`,class:te({"underline underline-offset-6 decoration-2 pointer-events-none":o==i.value.current})},[e("a",{href:"#",class:"block px-4",onClick:T(A=>$(o),["prevent"])},x(o),9,at)],2))),128)),i.value.current!==i.value.total?(n(),a("li",nt,[e("a",{href:"#",class:"block px-2 fw-400",onClick:t[12]||(t[12]=T(o=>$("+"),["prevent"]))},ut)])):k("",!0)])])])):k("",!0)])],64)}}},ft=ae(ct,[["__scopeId","data-v-03ed9ce7"]]);export{ft as default};
