import{_ as h,A as R,r as m,C as y,o as i,c,a,n as k,u as n,q as p,F as u,g as x,b as l,w as D,d as C,t as E,R as V,h as w,S as L,O as T,D as A,E as I}from"./index-DeJfmtbo.js";const S={BASE_URL:"/GDiner/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_PATH:"payzoom",VITE_URL:"https://vue3-course-api.hexschool.io"},N={class:"navbar navbar-expand-lg bg-body-tertiary"},$={class:"container"},B={class:"offcanvas-body"},O={class:"navbar-nav align-items-center"},U={class:"nav-item"},z={__name:"AdminNavbar",setup(_){const e=R(),d=[{name:"商品",path:"/admin/products"},{name:"訂單",path:"/admin/orders"},{name:"優惠券",path:"/admin/coupons"},{name:"前台",path:"/"}],f=async()=>{const{VITE_URL:o}=S;try{await w.post(`${o}/v2/logout`),document.cookie=`RGToken = ; expires = ${new Date};path=/; `,e.push({name:"home"})}catch(s){L.fire({icon:"error",title:"錯誤",text:`${s.response.data.message||"請稍後再試"}`})}},r=m(null),b=o=>{const s=T.getInstance(r);s&&s.hide(),e.push(o)},{toggleDemo:v,isDemo:g}=y("demo");return(o,s)=>(i(),c("nav",N,[a("div",$,[a("a",{class:k(["navbar-brand",n(g)?"link-primary":"link-danger"]),href:"#",onClick:s[0]||(s[0]=p((...t)=>n(v)&&n(v)(...t),["prevent"]))},"後台",2),s[2]||(s[2]=a("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasResponsive","aria-controls":"offcanvasResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},[a("span",{class:"navbar-toggler-icon"})],-1)),a("div",{class:"offcanvas-lg offcanvas-end",tabindex:"-1",id:"offcanvasResponsive","aria-labelledby":"offcanvasResponsiveLabel",ref_key:"offcanvasRef",ref:r},[s[1]||(s[1]=a("div",{class:"offcanvas-header"},[a("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","data-bs-target":"#offcanvasResponsive","aria-label":"Close"})],-1)),a("div",B,[a("ul",O,[(i(),c(u,null,x(d,t=>a("li",{key:t.name,class:"nav-item"},[l(n(V),{to:t.path,class:"nav-link","data-bs-dismiss":"offcanvas","data-bs-target":"#offcanvasResponsive",onClick:G=>b(t.path)},{default:D(()=>[C(E(t.name),1)]),_:2},1032,["to","onClick"])])),64)),a("li",U,[a("a",{href:"#",class:"nav-link",onClick:p(f,["prevent"])},"登出")])])])],512)])]))}},F=h(z,[["__scopeId","data-v-8a746ba2"]]),P={__name:"AdminLayout",setup(_){const e=m(!0);return I("demo",{isDemo:e,toggleDemo:()=>{e.value=!e.value}}),(f,r)=>(i(),c(u,null,[l(F),l(n(A))],64))}};export{P as default};
