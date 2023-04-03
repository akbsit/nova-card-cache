/*! For license information please see card.js.LICENSE.txt */
(()=>{"use strict";var t,e={438:(t,e,r)=>{const n=Vue;var o=(0,n.createElementVNode)("div",{class:"ncc_px-3 ncc_py-3"},[(0,n.createElementVNode)("h1",{class:"ncc_text-center ncc_text-3xl ncc_text-gray-500 ncc_font-light"}," Component not available ")],-1),c={class:"ncc_flex-1 ncc_pl-8 ncc_pr-3"},i=(0,n.createElementVNode)("h1",{class:"ncc_text-3xl ncc_text-80 ncc_font-light"}," Cache ",-1),a={key:0,class:"ncc_mt-3"},u={key:0,class:"ncc_flex-2 ncc_pr-8 ncc_pl-3 ncc_text-right"},l={class:"ncc_flex ncc_flex-col"},s=["innerHTML"];var f="/nova-vendor/nova-card-cache/delete";function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function p(){p=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var c=e&&e.prototype instanceof d?e:d,i=Object.create(c.prototype),a=new N(o||[]);return n(i,"_invoke",{value:L(t,r,a)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function d(){}function v(){}function y(){}var m={};u(m,c,(function(){return this}));var g=Object.getPrototypeOf,_=g&&g(g(C([])));_&&_!==e&&r.call(_,c)&&(m=_);var x=y.prototype=d.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(n,c,i,a){var u=s(t[n],t,c);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==h(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,a)}),(function(t){o("throw",t,i,a)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return o("throw",t,i,a)}))}a(u.arg)}var c;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return c=c?c.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,c){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw c;return j()}for(r.method=o,r.arg=c;;){var i=r.delegate;if(i){var a=E(i,r);if(a){if(a===f)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var c=o.arg;return c?c.done?(e[t.resultName]=c.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):c:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function C(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return v.prototype=y,n(x,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:v,configurable:!0}),v.displayName=u(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,a,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(b.prototype),u(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,c){void 0===c&&(c=Promise);var i=new b(l(e,r,n,o),c);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(x),u(x,a,"Generator"),u(x,c,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=C,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var a=r.call(c,"catchLoc"),u=r.call(c,"finallyLoc");if(a&&u){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(a){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var c=o;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var i=c?c.completion:{};return i.type=t,i.arg=e,c?(this.method="next",this.next=c.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function d(t,e,r,n,o,c,i){try{var a=t[c](i),u=a.value}catch(t){return void r(t)}a.done?e(u):Promise.resolve(u).then(n,o)}const v={props:["card"],data:function(){return{isLoadingData:!1,size:null}},mounted:function(){this.init()},computed:{loaderIcon:function(){return'<svg viewBox="0 0 128 128" class="ncc_w-4 ncc_h-4 ncc_mr-2"><g><path d="M78.75 16.18V1.56a64.1 64.1 0 0 1 47.7 47.7H111.8a49.98 49.98 0 0 0-33.07-33.08zM16.43 49.25H1.8a64.1 64.1 0 0 1 47.7-47.7V16.2a49.98 49.98 0 0 0-33.07 33.07zm33.07 62.32v14.62A64.1 64.1 0 0 1 1.8 78.5h14.63a49.98 49.98 0 0 0 33.07 33.07zm62.32-33.07h14.62a64.1 64.1 0 0 1-47.7 47.7v-14.63a49.98 49.98 0 0 0 33.08-33.07z" fill="#eef3fb" fill-opacity="1"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="-90 64 64" dur="600ms" repeatCount="indefinite"></animateTransform></g></svg>'}},methods:{init:function(){this.size=this.card.size},getClassList:function(){var t="ncc_text-white ncc_text-sm ncc_px-4 ncc_py-2 ncc_font-medium ncc_rounded-md ncc_flex ncc_items-center";return this.isLoadingData?t+=" ncc_bg-red-400 ncc_cursor-default":t+=" ncc_bg-red-500 hover:ncc_bg-red-400",t},flushCache:function(){var t,e=this;return(t=p().mark((function t(){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isLoadingData){t.next=2;break}return t.abrupt("return");case 2:return e.isLoadingData=!0,t.next=5,Nova.request().delete(f).then((function(t){var r=t.data.data;r&&(e.size=r.size)}));case 5:e.isLoadingData=!1;case 6:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var c=t.apply(e,r);function i(t){d(c,n,o,i,a,"next",t)}function a(t){d(c,n,o,i,a,"throw",t)}i(void 0)}))})()}}};const y=(0,r(744).Z)(v,[["render",function(t,e,r,f,h,p){var d=(0,n.resolveComponent)("Card",!0);return h.size?((0,n.openBlock)(),(0,n.createBlock)(d,{key:1,class:"ncc_flex ncc_items-center ncc_justify-center"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",c,[i,h.size?((0,n.openBlock)(),(0,n.createElementBlock)("div",a,[(0,n.createTextVNode)(" Cache Size: "),(0,n.createElementVNode)("code",null,(0,n.toDisplayString)(h.size),1)])):(0,n.createCommentVNode)("",!0)]),h.size?((0,n.openBlock)(),(0,n.createElementBlock)("div",u,[(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("button",{onClick:e[0]||(e[0]=function(){return p.flushCache&&p.flushCache.apply(p,arguments)}),class:(0,n.normalizeClass)(p.getClassList())},[h.isLoadingData?((0,n.openBlock)(),(0,n.createElementBlock)("span",{key:0,innerHTML:p.loaderIcon},null,8,s)):(0,n.createCommentVNode)("",!0),(0,n.createTextVNode)(" Flush ")],2)])])):(0,n.createCommentVNode)("",!0)]})),_:1})):((0,n.openBlock)(),(0,n.createBlock)(d,{key:0,class:"ncc_flex ncc_flex-col ncc_items-center ncc_justify-center"},{default:(0,n.withCtx)((function(){return[o]})),_:1}))}]]);Nova.booting((function(t,e){t.component("nova-card-cache",y)}))},962:()=>{},744:(t,e)=>{e.Z=(t,e)=>{const r=t.__vccOpts||t;for(const[t,n]of e)r[t]=n;return r}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var c=r[t]={exports:{}};return e[t](c,c.exports,n),c.exports}n.m=e,t=[],n.O=(e,r,o,c)=>{if(!r){var i=1/0;for(s=0;s<t.length;s++){for(var[r,o,c]=t[s],a=!0,u=0;u<r.length;u++)(!1&c||i>=c)&&Object.keys(n.O).every((t=>n.O[t](r[u])))?r.splice(u--,1):(a=!1,c<i&&(i=c));if(a){t.splice(s--,1);var l=o();void 0!==l&&(e=l)}}return e}c=c||0;for(var s=t.length;s>0&&t[s-1][2]>c;s--)t[s]=t[s-1];t[s]=[r,o,c]},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={440:0,458:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,c,[i,a,u]=r,l=0;if(i.some((e=>0!==t[e]))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var s=u(n)}for(e&&e(r);l<i.length;l++)c=i[l],n.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return n.O(s)},r=self.webpackChunkfalbar_nova_card_cache=self.webpackChunkfalbar_nova_card_cache||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),n.O(void 0,[458],(()=>n(438)));var o=n.O(void 0,[458],(()=>n(962)));o=n.O(o)})();