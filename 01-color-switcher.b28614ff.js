const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let d=null;function n(){const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=t}t.addEventListener("click",(function(a){t.disabled=!0,e.disabled=!1,d=setInterval(n,1e3)})),e.addEventListener("click",(function(n){t.disabled=!1,e.disabled=!0,clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.b28614ff.js.map
