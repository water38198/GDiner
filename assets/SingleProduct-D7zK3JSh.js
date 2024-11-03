import{x,o as a,c as n,b as g,u as t,F as c,a as s,g as _,p as h,f as k,_ as S,j as V,e as N,r as L,i as B,t as r,n as T,k as q,v as R,z as U,S as D,A as j}from"./index-DuHCPTtL.js";import{u as w,P as z}from"./ProductCard-C4aihYKx.js";import"./index-C-jDcq-i.js";import"./index-CkGfcHWQ.js";const A={class:"position-relative"},F={class:"list-unstyled row row-cols-2 row-cols-lg-4"},M={__name:"RandomProducts",props:{id:{type:String}},setup(f){const{getRandomProducts:u,randomProducts:p,isLoading:m}=w(),e=f;return x(()=>e.id,()=>{u(e.id)}),(y,v)=>{const l=k("VLoading");return a(),n("div",A,[g(l,{active:t(m),"is-full-page":!1},null,8,["active"]),t(p).length>0?(a(),n(c,{key:0},[v[0]||(v[0]=s("h3",{class:"mb-8 fw-bold"},"誠心推薦",-1)),s("div",null,[s("ul",F,[(a(!0),n(c,null,_(t(p),d=>(a(),n("li",{key:d.id},[g(z,{product:d},null,8,["product"])]))),128))])])],64)):h("",!0)])}}},E={class:"position-relative container py-10 min-vh-100"},I={class:"row gy-4"},Q={class:"col-12 col-md-5"},G={id:"carousel",class:"carousel slide"},H={class:"carousel-inner"},J={class:"carousel-item active"},K=["src","alt"],O=["src","alt"],W={class:"col-12 col-md-7"},X={class:"mb-8 fs-1"},Y={class:"mb-4 d-flex gap-2"},Z={class:"badge text-bg-info fs-6"},ss={class:"mb-8"},ts={class:"text-danger fs-3 me-4"},es={class:"text-gray"},os={key:1,class:"fs-3"},as={class:"mb-4 w-md-75"},ns={class:"d-flex justify-content-between border-custom quantity-input"},ls={class:"mb-8 d-flex gap-2"},is={class:"mb-8"},rs={__name:"SingleProduct",setup(f){const u=U(),p=V(),{getProduct:m,product:e,isLoading:y}=w();N(()=>{m(u.params.id)}),x(()=>u.params.id,()=>{m(u.params.id)});const v=b=>{switch(b){case"全素":return"success";case"蛋奶素":return"warning";default:return"danger"}},l=L(1),d=b=>{b==="+"?l.value++:b==="-"&&l.value--,(l.value<1||typeof l.value!="number")&&(l.value=1,D.fire({icon:"warning",title:"數量不得小於1",confirmButtonColor:"#3D081B",timer:1500}))},C=j(),$=async()=>{await p.addToCart(e.value.id,l.value),C.push("/cart")};return(b,o)=>{const P=k("VLoading");return a(),n("main",E,[g(P,{active:t(y),"is-full-page":!1},null,8,["active"]),s("div",I,[s("div",Q,[s("div",G,[s("div",H,[s("div",J,[s("img",{src:t(e).imageUrl,alt:t(e).title,class:"border-custom"},null,8,K)]),t(e).imagesUrl?(a(),n(c,{key:0},[(a(!0),n(c,null,_(t(e).imagesUrl,i=>(a(),n("div",{key:i,class:"carousel-item"},[s("img",{src:i,alt:`${t(e).title}的圖片`,class:"border-custom"},null,8,O)]))),128)),o[4]||(o[4]=B('<button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev" data-v-7e527364><span class="carousel-control-prev-icon" aria-hidden="true" data-v-7e527364></span><span class="visually-hidden" data-v-7e527364>上一張</span></button><button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next" data-v-7e527364><span class="carousel-control-next-icon" aria-hidden="true" data-v-7e527364></span><span class="visually-hidden" data-v-7e527364>下一張</span></button>',2))],64)):h("",!0)])])]),s("div",W,[s("h2",X,r(t(e).title),1),s("div",Y,[s("span",Z,r(t(e).category),1),s("span",{class:T(["badge fs-6",`text-bg-${v(t(e).veggie)}`])},r(t(e).veggie),3),(a(!0),n(c,null,_(t(e).tags,i=>(a(),n("span",{key:i,class:"badge text-bg-primary bg-opacity-75 fs-6"},r(i),1))),128))]),s("div",ss,[t(e).origin_price!==t(e).price?(a(),n(c,{key:0},[s("span",ts,"NT$ "+r(t(e).price),1),s("del",es,"NT$ "+r(t(e).origin_price),1)],64)):(a(),n("span",os,"NT$ "+r(t(e).price),1))]),s("div",as,[o[7]||(o[7]=s("label",{class:"mb-2 d-block fw-bold",for:"quantity"},"數量",-1)),s("div",ns,[s("button",{type:"button",class:"d-block px-4 bg-transparent border-0",onClick:o[0]||(o[0]=i=>d("-"))},o[5]||(o[5]=[s("i",{class:"bi bi-dash fs-4"},null,-1)])),q(s("input",{type:"number",name:"",id:"quantity","onUpdate:modelValue":o[1]||(o[1]=i=>l.value=i),min:"1",class:"d-block flex-shrink-0 bg-transparent border-0 text-center",onChange:d},null,544),[[R,l.value]]),s("button",{type:"button",class:"d-block px-4 bg-transparent border-0",onClick:o[2]||(o[2]=i=>d("+"))},o[6]||(o[6]=[s("i",{class:"bi bi-plus fs-4"},null,-1)]))])]),s("div",ls,[s("button",{type:"button",class:"flex-fill btn btn-outline-primary border-custom rounded-pill py-3",onClick:o[3]||(o[3]=i=>t(p).addToCart(t(e).id,l.value))},"加入購物車"),s("button",{type:"button",class:"flex-fill btn btn-info rounded-pill py-3 btn-shadow",onClick:$},"立即購買")]),s("div",is,[o[8]||(o[8]=s("h3",{class:"mb-2 fs-3 fw-bold"},"商品介紹：",-1)),s("p",null,r(t(e).description),1)]),s("div",null,[o[9]||(o[9]=s("h3",{class:"mb-2 fs-3 fw-bold"},"商品內容：",-1)),s("p",null,r(t(e).content),1)])])]),g(M,{id:t(e).id},null,8,["id"])])}}},bs=S(rs,[["__scopeId","data-v-7e527364"]]);export{bs as default};
