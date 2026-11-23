(function(){
"use strict";
const icons={
"book-open":'<path d="M12 7v14"/><path d="M3 18V5a2 2 0 0 1 2-2h3a4 4 0 0 1 4 4 4 4 0 0 1 4-4h3a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2h-3a4 4 0 0 0-4 4 4 4 0 0 0-4-4H5a2 2 0 0 0-2 2Z"/>',
"monitor-smartphone":'<rect x="2" y="3" width="15" height="13" rx="2"/><path d="M6 20h8M10 16v4"/><rect x="18" y="8" width="4" height="12" rx="1"/><path d="M19 17h2"/>',
"code":'<path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-12-2 16"/>',
"award":'<circle cx="12" cy="8" r="5"/><path d="m8.5 12.5-1 8 4.5-2.5 4.5 2.5-1-8"/>',
"graduation-cap":'<path d="m2 10 10-6 10 6-10 6-10-6Zm4 3.5V18c3.7 3 8.3 3 12 0v-4.5M22 10v6"/>',
"cpu":'<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 1v4m6-4v4M9 19v4m6-4v4M1 9h4m-4 6h4m14-6h4m-4 6h4"/>',
"brain":'<path d="M12 18V5a3.5 3.5 0 0 0-6.8-1.2 4.5 4.5 0 0 0-2.1 7.5 4 4 0 0 0 2.3 6.9A3.5 3.5 0 0 0 12 18Z"/><path d="M12 18V5a3.5 3.5 0 0 1 6.8-1.2 4.5 4.5 0 0 1 2.1 7.5 4 4 0 0 1-2.3 6.9A3.5 3.5 0 0 1 12 18Z"/><path d="M8 9c-2 0-3 1-3 3m11-3c2 0 3 1 3 3M8 15c-2 0-3-1-3-2m11 2c2 0 3-1 3-2"/>',
"shield":'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
"pen-tool":'<path d="m12 19 7-7 3 3-7 7-3-3ZM2 7l5-5 11 11-5 5L2 7Z"/><path d="M7 2v5H2m7 2-4 4m7-6 4-4"/>',
"clapperboard":'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M3 7l-1-4 18-2 1 6H3Zm3-4 4 4m3-5 4 5M8 12l7 4-7 4v-8Z"/>',
"history":'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5m4-1v5l3 2"/>',
"terminal":'<rect x="2" y="3" width="20" height="18" rx="2"/><path d="m6 8 4 4-4 4m6 0h6"/>',
"table":'<rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 9h20M2 15h20M9 3v18M16 3v18"/>',
"monitor":'<rect x="2" y="3" width="20" height="15" rx="2"/><path d="M8 22h8m-4-4v4"/>',
"binary":'<path d="M4 7h6m-3-3v12m7-11h5v7h-5zM5 20h5m-3-3v6m7-3h5"/>',
"workflow":'<rect x="2" y="2" width="7" height="6" rx="1"/><rect x="15" y="16" width="7" height="6" rx="1"/><rect x="2" y="16" width="7" height="6" rx="1"/><path d="M5.5 8v8M9 5h9v11m0-7-3-3m3 3 3-3"/>',
"sort":'<path d="M4 7h14M4 12h10M4 17h6m10-11v12m-3-3 3 3 3-3"/>',
"shield-alert":'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="M12 7v6m0 3h.01"/>',
"layers":'<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5m-18 5 9 5 9-5"/>',
"git-branch":'<circle cx="6" cy="3" r="2"/><circle cx="6" cy="21" r="2"/><circle cx="18" cy="6" r="2"/><path d="M6 5v14m12-11a6 6 0 0 1-6 6H6"/>',
"file-code":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6m-11 5-2 2 2 2m6-4 2 2-2 2"/>',
"image":'<rect x="2" y="3" width="20" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 17-5-5-4 4-3-3-6 6"/>',
"sparkles":'<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM4 18l.8 1.6L6.5 20l-1.7.4L4 22l-.8-1.6L1.5 20l1.7-.4L4 18Zm15-2 .9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16Z"/>',
"database":'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 4 18 4 18 0V5M3 12c0 4 18 4 18 0"/>',
"puzzle":'<path d="M8 3H3v6a3 3 0 1 1 0 6v6h6a3 3 0 1 1 6 0h6v-6a3 3 0 1 1 0-6V3h-6a3 3 0 1 1-7 0Z"/>'
};
function svg(name){const p=icons[name]||icons["book-open"];return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">'+p+'</svg>'}
function render(root){(root||document).querySelectorAll('[data-ll-icon]').forEach(el=>{const key=el.getAttribute("data-ll-icon");if(el.dataset.llRendered!==key){el.innerHTML=svg(key);el.dataset.llRendered=key;el.setAttribute("aria-hidden","true");}})}
function init(){render(document);if(window.MutationObserver){const observer=new MutationObserver(changes=>{if(changes.some(m=>m.addedNodes.length))render(document)});observer.observe(document.body,{childList:true,subtree:true});}}
window.LostIcons={render,svg};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();
})();