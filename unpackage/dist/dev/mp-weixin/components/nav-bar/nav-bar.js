"use strict";const e=require("../../common/vendor.js"),o={__name:"nav-bar",setup(c){let r=a=>{let n=document.createElement("view");n.setAttribute("style",`height:45px;width:45px;border-radius:999px;
      background:radial-gradient(circle at 50% 50%,transparent,rgba(var(--bs-body-color-rgb),0.4));
      position:absolute;
      bottom:calc(100vh - ${a.detail.y}px);
      left:calc(${a.detail.x}px - ${32.08*a.currentTarget.dataset.id}vw);
      animation: ripple 2s both !important;`),n.classList.add("ripple");let t=document.getElementById(`navBar${a.currentTarget.dataset.id}`);t.appendChild(n),setTimeout(()=>{t.removeChild(n)},2e3)};return(a,n)=>({a:e.o((...t)=>e.unref(r)&&e.unref(r)(...t)),b:e.o((...t)=>e.unref(r)&&e.unref(r)(...t)),c:e.o((...t)=>e.unref(r)&&e.unref(r)(...t))})}},i=e._export_sfc(o,[["__file","C:/Study/WarmlyArticle/components/nav-bar/nav-bar.vue"]]);wx.createComponent(i);
