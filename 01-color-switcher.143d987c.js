const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let n=null;function a(){const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=t}t.addEventListener("click",(function(e){t.disabled=!0,n=setInterval(a,1e3)})),e.addEventListener("click",(function(a){t.disabled=!1,e.disabled=!0,clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.143d987c.js.map
