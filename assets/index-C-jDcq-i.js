import{a as z,t as E,b as A,i as L,n as F,p as P,c as D}from"./index-CkGfcHWQ.js";import{r as p,G as O,x as R,H as x}from"./index-DuHCPTtL.js";const C=L?window:void 0;function N(n,r={}){const{immediate:s=!0,fpsLimit:e=void 0,window:t=C}=r,a=p(!1),f=e?1e3/e:null;let i=0,o=null;function c(l){if(!a.value||!t)return;i||(i=l);const d=l-i;if(f&&d<f){o=t.requestAnimationFrame(c);return}i=l,n({delta:d,timestamp:l}),o=t.requestAnimationFrame(c)}function u(){!a.value&&t&&(a.value=!0,i=0,o=t.requestAnimationFrame(c))}function m(){a.value=!1,o!=null&&t&&(t.cancelAnimationFrame(o),o=null)}return s&&u(),E(m),{isActive:O(a),pause:m,resume:u}}function T(n,r,s){const{immediate:e=!0,delay:t=0,onError:a=F,onSuccess:f=F,resetOnExecute:i=!0,shallow:o=!0,throwError:c}=s??{},u=o?x(r):p(r),m=p(!1),l=p(!1),d=x(void 0);async function y(v=0,...h){i&&(u.value=r),d.value=void 0,m.value=!1,l.value=!0,v>0&&await P(v);const q=typeof n=="function"?n(...h):n;try{const w=await q;u.value=w,m.value=!0,f(w)}catch(w){if(d.value=w,a(w),c)throw w}finally{l.value=!1}return u.value}e&&y(t);const g={state:u,isReady:m,isLoading:l,error:d,execute:y};function I(){return new Promise((v,h)=>{D(l).toBe(!1).then(()=>v(g)).catch(h)})}return{...g,then(v,h){return I().then(v,h)}}}async function b(n){return new Promise((r,s)=>{const e=new Image,{src:t,srcset:a,sizes:f,class:i,loading:o,crossorigin:c,referrerPolicy:u}=n;e.src=t,a&&(e.srcset=a),f&&(e.sizes=f),i&&(e.className=i),o&&(e.loading=o),c&&(e.crossOrigin=c),u&&(e.referrerPolicy=u),e.onload=()=>r(e),e.onerror=s})}function H(n,r={}){const s=T(()=>b(A(n)),void 0,{resetOnExecute:!0,...r});return R(()=>A(n),()=>s.execute(r.delay),{deep:!0}),s}function U(n={}){const{controls:r=!1,interval:s="requestAnimationFrame"}=n,e=p(new Date),t=()=>e.value=new Date,a=s==="requestAnimationFrame"?N(t,{immediate:!0}):z(t,s,{immediate:!0});return r?{now:e,...a}:e}export{U as a,H as u};
