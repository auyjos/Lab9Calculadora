(()=>{"use strict";var e={28:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(81),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([e.id,"*, *::before, *::after {\r\n  box-sizing: border-box;\r\n  font-family: Gotham Rounded, sans-serif;\r\n  font-weight: normal;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  background: linear-gradient(to right, #1a1e20, #7a7b7b);\r\n  flex-wrap: wrap;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.calculator-grid {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-content: center;\r\n  min-height: 100vh;\r\n  grid-template-columns: repeat(4, 100px);\r\n  grid-template-rows: minmax(120px, auto) repeat(5, 100px);\r\n}\r\n\r\n.calculator-grid > button {\r\n  cursor: pointer;\r\n  font-size: 2rem;\r\n  border: 1px solid white;\r\n  outline: none;\r\n  background-color: rgba(255, 255, 255, .75);\r\n}\r\n\r\n.calculator-grid > button:hover {\r\n  background-color: rgba(255, 255, 255, .9);\r\n}\r\n\r\n.span-two {\r\n  grid-column: span 2;\r\n}\r\n\r\n.output {\r\n  grid-column: 1 / -1;\r\n  background-color: rgba(0, 0, 0, .75);\r\n  display: flex;\r\n  align-items: flex-end;\r\n  justify-content: space-around;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  word-wrap: break-word;\r\n  word-break: break-all;\r\n}\r\n\r\n.output .previous-operand {\r\n  color: rgba(255, 255, 255, .75);\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.output .current-operand {\r\n  color: white;\r\n  font-size: 2.5rem;\r\n}\r\n\r\n",""]);const s=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var u=0;u<e.length;u++){var p=[].concat(e[u]);t&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],u=t.base?c[0]+t.base:c[0],p=i[u]||0,d="".concat(u," ").concat(p);i[u]=p+1;var l=r(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)n[l].references++,n[l].updater(f);else{var h=o(f,t);t.byIndex=s,n.splice(s,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var i=t(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=r(i[a]);n[s].references--}for(var c=t(e,o),u=0;u<i.length;u++){var p=r(i[u]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}i=c}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return e[t](i,i.exports,r),i.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.nc=void 0,(()=>{var e=r(379),n=r.n(e),t=r(795),o=r.n(t),i=r(569),a=r.n(i),s=r(565),c=r.n(s),u=r(216),p=r.n(u),d=r(589),l=r.n(d),f=r(28),h={};h.styleTagTransform=l(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=p(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const g=document.querySelectorAll("[data-numero]"),m=document.querySelectorAll("[operacion]"),v=document.querySelector("[igual]"),y=document.querySelector("[data-borrar]"),b=document.querySelector("[clear-all]"),x=document.querySelector("[data-masmenos]"),O=document.querySelector("[data-operando-previo ]"),S=document.querySelector("[data-siguiente-operando]"),E=new class{constructor(e,n){this.previoOperandoTextElement=e,this.siguienteOperandoTextElement=n,this.clear()}clear(){this.siguienteOperando="",this.previoOperando="",this.operation=void 0}delete(){this.siguienteOperando=this.siguienteOperando.toString().slice(0,-1)}changeSymbol(){this.siguienteOperando.includes("-")?this.siguienteOperando=this.siguienteOperando.replace("-",""):this.siguienteOperando="-"+this.siguienteOperando}appendNumber(e){"."===e&&this.siguienteOperando.includes(".")||(this.siguienteOperando=this.siguienteOperando.toString()+e.toString())}chooseOperation(e){""!==this.siguienteOperando&&(""!==this.previoOperando&&this.compute(),this.operation=e,this.previoOperando=this.siguienteOperando,this.siguienteOperando="")}compute(){let e;const n=parseFloat(this.previoOperando),r=parseFloat(this.siguienteOperando);if(!isNaN(n)&&!isNaN(r)){switch(this.operation){case"+":e=n+r;break;case"-":e=n-r;break;case"*":e=n*r;break;case"÷":e=n/r;break;case"%":e=n%r;break;default:return}this.siguienteOperando=e,this.operation=void 0,this.previoOperando=""}}getDisplayNumber(e){const n=e.toString(),r=parseFloat(n.split(".")[0]),t=n.split(".")[1];let o;if(o=isNaN(r)?"":r.toString(),null!=t){if(r>=0){let e=8-o.length;return console.log(e),console.log(t),`${o}.${t.substring(0,e)}`}{if(r<-9999999)return"ERROR";let e=7-o.length;return`${o}.${t.substring(0,e)}`}}return r>999999999||r<-99999999?"ERROR":o}updateDisplay(){this.siguienteOperandoTextElement.innerText=this.getDisplayNumber(this.siguienteOperando),null!=this.operation?this.previoOperandoTextElement.innerText=`${this.getDisplayNumber(this.previoOperando)} ${this.operation}`:this.previoOperandoTextElement.innerText=""}}(O,S);g.forEach((function(e){e.addEventListener("click",(function(){E.appendNumber(e.innerText),E.updateDisplay()}))})),m.forEach((function(e){e.addEventListener("click",(function(){E.chooseOperation(e.innerText),E.updateDisplay()}))})),v.addEventListener("click",(function(e){E.compute(),E.updateDisplay()})),b.addEventListener("click",(function(e){E.clear(),E.updateDisplay()})),y.addEventListener("click",(function(e){E.delete(),E.updateDisplay()})),x.addEventListener("click",(function(e){E.changeSymbol()}))})()})();