parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"sByI":[function(require,module,exports) {
(()=>{const e={openModalBtn:document.querySelector("[data-mobile-menu-open]"),modal:document.querySelector("[data-mobile-menu]"),modalClose:document.querySelector("[data-mobile-menu-close]")};function o(){e.modal.classList.toggle("backdrop__is-hidden")}e.openModalBtn.addEventListener("click",o),e.modalClose.addEventListener("click",o)})();const e=document.querySelector("[data-mobile-menu]"),o=document.querySelector("[close0]"),t=document.querySelector("[close1]"),c=document.querySelector("[close2]"),n=document.querySelector("[close3]"),d=document.querySelector("[close4]");function l(){e.classList.toggle("is-hidden")}o.addEventListener("click",l),t.addEventListener("click",l),c.addEventListener("click",l),n.addEventListener("click",l),d.addEventListener("click",l);
},{}]},{},["sByI"], null)
//# sourceMappingURL=/team-project/mobile-menu.df6cbfbf.js.map