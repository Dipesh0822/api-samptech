(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3/ER":function(t,e,r){"use strict";(function(t){var n=r("Ju5/"),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o?n.a.Buffer:void 0,s=a?a.allocUnsafe:void 0;e.a=function(t,e){if(e)return t.slice();var r=t.length,n=s?s(r):new t.constructor(r);return t.copy(n),n}}).call(this,r("3UD+")(t))},"3UD+":function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},"Ju5/":function(t,e,r){"use strict";var n=r("XqMk"),o="object"==typeof self&&self&&self.Object===Object&&self,i=n.a||o||Function("return this")();e.a=i},L3Qv:function(t,e,r){"use strict";e.a=function(){return!1}},WOAq:function(t,e,r){"use strict";(function(t){var n=r("Ju5/"),o=r("L3Qv"),i="object"==typeof exports&&exports&&!exports.nodeType&&exports,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,s=a&&a.exports===i?n.a.Buffer:void 0;e.a=(s?s.isBuffer:void 0)||o.a}).call(this,r("3UD+")(t))},XqMk:function(t,e,r){"use strict";var n="object"==typeof global&&global&&global.Object===Object&&global;e.a=n},xutz:function(t,e,r){"use strict";(function(t){var n=r("XqMk"),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o&&n.a.process,s=function(){try{return i&&i.require&&i.require("util").types||a&&a.binding&&a.binding("util")}catch(t){}}();e.a=s}).call(this,r("3UD+")(t))},zioG:function(t,e,r){"use strict";function n(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{c(n.next(t))}catch(e){i(e)}}function s(t){try{c(n.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}c((n=n.apply(t,e||[])).next())}))}r.d(e,"a",(function(){return je})),r.d(e,"b",(function(){return me}));var o=r("fXoL"),i=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},a=r("Ju5/"),s=function(){return a.a.Date.now()},c=a.a.Symbol,u=Object.prototype,h=u.hasOwnProperty,l=u.toString,f=c?c.toStringTag:void 0,d=Object.prototype.toString,p=c?c.toStringTag:void 0,b=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":p&&p in Object(t)?function(t){var e=h.call(t,f),r=t[f];try{t[f]=void 0;var n=!0}catch(i){}var o=l.call(t);return n&&(e?t[f]=r:delete t[f]),o}(t):function(t){return d.call(t)}(t)},y=function(t){return null!=t&&"object"==typeof t},g=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,j=/^0o[0-7]+$/i,m=parseInt,w=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||y(t)&&"[object Symbol]"==b(t)}(t))return NaN;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(g,"");var r=v.test(t);return r||j.test(t)?m(t.slice(2),r?2:8):_.test(t)?NaN:+t},O=Math.max,E=Math.min,A=function(t,e){return t===e||t!=t&&e!=e},x=function(t,e){for(var r=t.length;r--;)if(A(t[r][0],e))return r;return-1},D=Array.prototype.splice;function P(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}P.prototype.clear=function(){this.__data__=[],this.size=0},P.prototype.delete=function(t){var e=this.__data__,r=x(e,t);return!(r<0||(r==e.length-1?e.pop():D.call(e,r,1),--this.size,0))},P.prototype.get=function(t){var e=this.__data__,r=x(e,t);return r<0?void 0:e[r][1]},P.prototype.has=function(t){return x(this.__data__,t)>-1},P.prototype.set=function(t,e){var r=this.__data__,n=x(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};var S,T=P,I=function(t){if(!i(t))return!1;var e=b(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},z=a.a["__core-js_shared__"],M=(S=/[^.]+$/.exec(z&&z.keys&&z.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"",C=Function.prototype.toString,N=function(t){if(null!=t){try{return C.call(t)}catch(e){}try{return t+""}catch(e){}}return""},W=/^\[object .+?Constructor\]$/,U=RegExp("^"+Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),R=function(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return function(t){return!(!i(t)||(e=t,M&&M in e))&&(I(t)?U:W).test(N(t));var e}(r)?r:void 0},k=R(a.a,"Map"),F=R(Object,"create"),L=Object.prototype.hasOwnProperty,V=Object.prototype.hasOwnProperty;function $(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}$.prototype.clear=function(){this.__data__=F?F(null):{},this.size=0},$.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},$.prototype.get=function(t){var e=this.__data__;if(F){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return L.call(e,t)?e[t]:void 0},$.prototype.has=function(t){var e=this.__data__;return F?void 0!==e[t]:V.call(e,t)},$.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=F&&void 0===e?"__lodash_hash_undefined__":e,this};var B=$,H=function(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map};function q(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}q.prototype.clear=function(){this.size=0,this.__data__={hash:new B,map:new(k||T),string:new B}},q.prototype.delete=function(t){var e=H(this,t).delete(t);return this.size-=e?1:0,e},q.prototype.get=function(t){return H(this,t).get(t)},q.prototype.has=function(t){return H(this,t).has(t)},q.prototype.set=function(t,e){var r=H(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};var Z=q;function J(t){var e=this.__data__=new T(t);this.size=e.size}J.prototype.clear=function(){this.__data__=new T,this.size=0},J.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},J.prototype.get=function(t){return this.__data__.get(t)},J.prototype.has=function(t){return this.__data__.has(t)},J.prototype.set=function(t,e){var r=this.__data__;if(r instanceof T){var n=r.__data__;if(!k||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Z(n)}return r.set(t,e),this.size=r.size,this};var X=J,G=function(){try{var t=R(Object,"defineProperty");return t({},"",{}),t}catch(e){}}(),K=function(t,e,r){"__proto__"==e&&G?G(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r},Q=Object.prototype.hasOwnProperty,Y=function(t,e,r){var n=t[e];Q.call(t,e)&&A(n,r)&&(void 0!==r||e in t)||K(t,e,r)},tt=function(t,e,r,n){var o=!r;r||(r={});for(var i=-1,a=e.length;++i<a;){var s=e[i],c=n?n(r[s],t[s],s,r,t):void 0;void 0===c&&(c=t[s]),o?K(r,s,c):Y(r,s,c)}return r},et=function(t){return y(t)&&"[object Arguments]"==b(t)},rt=Object.prototype,nt=rt.hasOwnProperty,ot=rt.propertyIsEnumerable,it=et(function(){return arguments}())?et:function(t){return y(t)&&nt.call(t,"callee")&&!ot.call(t,"callee")},at=Array.isArray,st=r("WOAq"),ct=/^(?:0|[1-9]\d*)$/,ut=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&ct.test(t))&&t>-1&&t%1==0&&t<e},ht=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},lt={};lt["[object Float32Array]"]=lt["[object Float64Array]"]=lt["[object Int8Array]"]=lt["[object Int16Array]"]=lt["[object Int32Array]"]=lt["[object Uint8Array]"]=lt["[object Uint8ClampedArray]"]=lt["[object Uint16Array]"]=lt["[object Uint32Array]"]=!0,lt["[object Arguments]"]=lt["[object Array]"]=lt["[object ArrayBuffer]"]=lt["[object Boolean]"]=lt["[object DataView]"]=lt["[object Date]"]=lt["[object Error]"]=lt["[object Function]"]=lt["[object Map]"]=lt["[object Number]"]=lt["[object Object]"]=lt["[object RegExp]"]=lt["[object Set]"]=lt["[object String]"]=lt["[object WeakMap]"]=!1;var ft=function(t){return function(e){return t(e)}},dt=r("xutz"),pt=dt.a&&dt.a.isTypedArray,bt=pt?ft(pt):function(t){return y(t)&&ht(t.length)&&!!lt[b(t)]},yt=Object.prototype.hasOwnProperty,gt=function(t,e){var r=at(t),n=!r&&it(t),o=!r&&!n&&Object(st.a)(t),i=!r&&!n&&!o&&bt(t),a=r||n||o||i,s=a?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],c=s.length;for(var u in t)!e&&!yt.call(t,u)||a&&("length"==u||o&&("offset"==u||"parent"==u)||i&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||ut(u,c))||s.push(u);return s},_t=Object.prototype,vt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||_t)},jt=function(t,e){return function(r){return t(e(r))}},mt=jt(Object.keys,Object),wt=Object.prototype.hasOwnProperty,Ot=function(t){return null!=t&&ht(t.length)&&!I(t)},Et=function(t){return Ot(t)?gt(t):function(t){if(!vt(t))return mt(t);var e=[];for(var r in Object(t))wt.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)},At=Object.prototype.hasOwnProperty,xt=function(t){return Ot(t)?gt(t,!0):function(t){if(!i(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=vt(t),r=[];for(var n in t)("constructor"!=n||!e&&At.call(t,n))&&r.push(n);return r}(t)},Dt=r("3/ER"),Pt=function(){return[]},St=Object.prototype.propertyIsEnumerable,Tt=Object.getOwnPropertySymbols,It=Tt?function(t){return null==t?[]:(t=Object(t),function(e,r){for(var n=-1,o=null==e?0:e.length,i=0,a=[];++n<o;){var s=e[n];St.call(t,s)&&(a[i++]=s)}return a}(Tt(t)))}:Pt,zt=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t},Mt=jt(Object.getPrototypeOf,Object),Ct=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)zt(e,It(t)),t=Mt(t);return e}:Pt,Nt=function(t,e,r){var n=e(t);return at(t)?n:zt(n,r(t))},Wt=function(t){return Nt(t,Et,It)},Ut=function(t){return Nt(t,xt,Ct)},Rt=R(a.a,"DataView"),kt=R(a.a,"Promise"),Ft=R(a.a,"Set"),Lt=R(a.a,"WeakMap"),Vt=N(Rt),$t=N(k),Bt=N(kt),Ht=N(Ft),qt=N(Lt),Zt=b;(Rt&&"[object DataView]"!=Zt(new Rt(new ArrayBuffer(1)))||k&&"[object Map]"!=Zt(new k)||kt&&"[object Promise]"!=Zt(kt.resolve())||Ft&&"[object Set]"!=Zt(new Ft)||Lt&&"[object WeakMap]"!=Zt(new Lt))&&(Zt=function(t){var e=b(t),r="[object Object]"==e?t.constructor:void 0,n=r?N(r):"";if(n)switch(n){case Vt:return"[object DataView]";case $t:return"[object Map]";case Bt:return"[object Promise]";case Ht:return"[object Set]";case qt:return"[object WeakMap]"}return e});var Jt=Zt,Xt=Object.prototype.hasOwnProperty,Gt=a.a.Uint8Array,Kt=function(t){var e=new t.constructor(t.byteLength);return new Gt(e).set(new Gt(t)),e},Qt=/\w*$/,Yt=c?c.prototype:void 0,te=Yt?Yt.valueOf:void 0,ee=Object.create,re=function(){function t(){}return function(e){if(!i(e))return{};if(ee)return ee(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),ne=dt.a&&dt.a.isMap,oe=ne?ft(ne):function(t){return y(t)&&"[object Map]"==Jt(t)},ie=dt.a&&dt.a.isSet,ae=ie?ft(ie):function(t){return y(t)&&"[object Set]"==Jt(t)},se={};se["[object Arguments]"]=se["[object Array]"]=se["[object ArrayBuffer]"]=se["[object DataView]"]=se["[object Boolean]"]=se["[object Date]"]=se["[object Float32Array]"]=se["[object Float64Array]"]=se["[object Int8Array]"]=se["[object Int16Array]"]=se["[object Int32Array]"]=se["[object Map]"]=se["[object Number]"]=se["[object Object]"]=se["[object RegExp]"]=se["[object Set]"]=se["[object String]"]=se["[object Symbol]"]=se["[object Uint8Array]"]=se["[object Uint8ClampedArray]"]=se["[object Uint16Array]"]=se["[object Uint32Array]"]=!0,se["[object Error]"]=se["[object Function]"]=se["[object WeakMap]"]=!1;var ce=function t(e,r,n,o,a,s){var c,u=1&r,h=2&r,l=4&r;if(n&&(c=a?n(e,o,a,s):n(e)),void 0!==c)return c;if(!i(e))return e;var f=at(e);if(f){if(c=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&Xt.call(t,"index")&&(r.index=t.index,r.input=t.input),r}(e),!u)return function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}(e,c)}else{var d=Jt(e),p="[object Function]"==d||"[object GeneratorFunction]"==d;if(Object(st.a)(e))return Object(Dt.a)(e,u);if("[object Object]"==d||"[object Arguments]"==d||p&&!a){if(c=h||p?{}:function(t){return"function"!=typeof t.constructor||vt(t)?{}:re(Mt(t))}(e),!u)return h?function(t,e){return tt(t,Ct(t),e)}(e,function(t,e){return t&&tt(e,xt(e),t)}(c,e)):function(t,e){return tt(t,It(t),e)}(e,function(t,e){return t&&tt(e,Et(e),t)}(c,e))}else{if(!se[d])return a?e:{};c=function(t,e,r){var n,o,i=t.constructor;switch(e){case"[object ArrayBuffer]":return Kt(t);case"[object Boolean]":case"[object Date]":return new i(+t);case"[object DataView]":return function(t,e){var r=e?Kt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?Kt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,r);case"[object Map]":return new i;case"[object Number]":case"[object String]":return new i(t);case"[object RegExp]":return(o=new(n=t).constructor(n.source,Qt.exec(n))).lastIndex=n.lastIndex,o;case"[object Set]":return new i;case"[object Symbol]":return te?Object(te.call(t)):{}}}(e,d,u)}}s||(s=new X);var b=s.get(e);if(b)return b;s.set(e,c),ae(e)?e.forEach((function(o){c.add(t(o,r,n,o,e,s))})):oe(e)&&e.forEach((function(o,i){c.set(i,t(o,r,n,i,e,s))}));var y=l?h?Ut:Wt:h?keysIn:Et,g=f?void 0:y(e);return function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r););}(g||e,(function(o,i){g&&(o=e[i=o]),Y(c,i,t(o,r,n,i,e,s))})),c},ue=Function.prototype.toString,he=Object.prototype.hasOwnProperty,le=ue.call(Object);function fe(t,e=new Set){const r=[t],n=new Set;for(;r.length>0;){const t=r.shift();if(!(n.has(t)||de(t)||e.has(t)))if(n.add(t),t[Symbol.iterator])try{for(const e of t)r.push(e)}catch(o){}else for(const e in t)"defaultValue"!==e&&r.push(t[e])}return n}function de(t){const e=Object.prototype.toString.call(t),r=typeof t;return"number"===r||"boolean"===r||"string"===r||"symbol"===r||"function"===r||"[object Date]"===e||"[object RegExp]"===e||"[object Module]"===e||null==t||t instanceof EventTarget||t instanceof Event}class pe extends class{constructor(t){if(this.crashes=[],this.state="initializing",this._crashNumberLimit="number"==typeof t.crashNumberLimit?t.crashNumberLimit:3,this._now=Date.now,this._minimumNonErrorTimePeriod="number"==typeof t.minimumNonErrorTimePeriod?t.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const e=t.error||t.reason;e instanceof Error&&this._handleError(e,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}setCreator(t){this._creator=t}setDestructor(t){this._destructor=t}destroy(){this._stopErrorHandling(),this._listeners={}}on(t,e){this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e)}off(t,e){this._listeners[t]=this._listeners[t].filter(t=>t!==e)}_fire(t,...e){const r=this._listeners[t]||[];for(const n of r)n.apply(this,[null,...e])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(t,e){if(this._shouldReactToError(t)){this.crashes.push({message:t.message,stack:t.stack,filename:e.filename,lineno:e.lineno,colno:e.colno,date:this._now()});const r=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:t,causesRestart:r}),r?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(t){return t.is&&t.is("CKEditorError")&&null!=t.context&&"ready"===this.state&&this._isErrorComingFromThisItem(t)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit||(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}{constructor(t,e={}){super(e),this._editor=null,this._throttledSave=function(t,e,r){var n=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return i(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),function(t,e,r){var n,o,a,c,u,h,l=0,f=!1,d=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var r=n,i=o;return n=o=void 0,l=e,c=t.apply(i,r)}function y(t){return l=t,u=setTimeout(_,e),f?b(t):c}function g(t){var r=t-h;return void 0===h||r>=e||r<0||d&&t-l>=a}function _(){var t=s();if(g(t))return v(t);u=setTimeout(_,function(t){var r=e-(t-h);return d?E(r,a-(t-l)):r}(t))}function v(t){return u=void 0,p&&n?b(t):(n=o=void 0,c)}function j(){var t=s(),r=g(t);if(n=arguments,o=this,h=t,r){if(void 0===u)return y(h);if(d)return clearTimeout(u),u=setTimeout(_,e),b(h)}return void 0===u&&(u=setTimeout(_,e)),c}return e=w(e)||0,i(r)&&(f=!!r.leading,a=(d="maxWait"in r)?O(w(r.maxWait)||0,e):a,p="trailing"in r?!!r.trailing:p),j.cancel=function(){void 0!==u&&clearTimeout(u),l=0,n=h=o=u=void 0},j.flush=function(){return void 0===u?c:v(s())},j}(t,e,{leading:n,maxWait:e,trailing:o})}(this._save.bind(this),"number"==typeof e.saveInterval?e.saveInterval:5e3),this._creator=(e,r)=>t.create(e,r),this._destructor=t=>t.destroy()}get editor(){return this._editor}get _item(){return this._editor}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(t=>{console.error("An error happened during the editor destroying.",t)}).then(()=>{if("string"==typeof this._elementOrData)return this.create(this._data,this._config,this._config.context);{const t=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,t,t.context)}}).then(()=>{this._fire("restart")})}create(t=this._elementOrData,e=this._config,r){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=t,this._config=this._cloneEditorConfiguration(e)||{},this._config.context=r,this._creator(t,this._config))).then(t=>{this._editor=t,t.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=t.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const t=this._editor;return this._editor=null,this._destructor(t)})}_save(){const t=this._editor.model.document.version;if(t!==this._lastDocumentVersion)try{this._data=this._getData(),this._lastDocumentVersion=t}catch(e){console.error(e,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(t){this._excludedProps=t}_getData(){const t={};for(const e of this._editor.model.document.getRootNames())t[e]=this._editor.data.get({rootName:e});return t}_isErrorComingFromThisItem(t){return function(t,e,r=new Set){if(t===e&&"object"==typeof(n=t)&&null!==n)return!0;var n;const o=fe(t,r),i=fe(e,r);for(const a of o)if(i.has(a))return!0;return!1}(this._editor,t.context,this._excludedProps)}_cloneEditorConfiguration(t){return function(t,e){return ce(t,5,e="function"==typeof e?e:void 0)}(t,(t,e)=>function(t){return y(t)&&1===t.nodeType&&!function(t){if(!y(t)||"[object Object]"!=b(t))return!1;var e=Mt(t);if(null===e)return!0;var r=he.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&ue.call(r)==le}(t)}(t)||"context"===e?t:void 0)}}var be=r("3Pt+"),ye=r("ofXK");function ge(t,e){}const _e=(t,e)=>("0"+e.toString(16)).slice(-2),ve=new Array(256).fill(0).map(_e);let je=(()=>{class t{constructor(t,e){this.config={},this.data="",this.tagName="div",this.ready=new o.o,this.change=new o.o,this.blur=new o.o,this.focus=new o.o,this.error=new o.o,this.initiallyDisabled=!1,this.isEditorSettingData=!1,this.id=function(){const t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,r=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+ve[t>>0&255]+ve[t>>8&255]+ve[t>>16&255]+ve[t>>24&255]+ve[e>>0&255]+ve[e>>8&255]+ve[e>>16&255]+ve[e>>24&255]+ve[r>>0&255]+ve[r>>8&255]+ve[r>>16&255]+ve[r>>24&255]+ve[n>>0&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]}(),this.ngZone=e,this.elementRef=t}set disabled(t){this.setDisabledState(t)}get disabled(){return this.editorInstance?this.editorInstance.isReadOnly:this.initiallyDisabled}get editorInstance(){let t=this.editorWatchdog;return this.watchdog&&(t=this.watchdog._watchdogs.get(this.id)),t?t.editor:null}ngAfterViewInit(){this.attachToWatchdog()}ngOnDestroy(){return n(this,void 0,void 0,(function*(){this.watchdog?yield this.watchdog.remove(this.id):this.editorWatchdog&&this.editorWatchdog.editor&&(yield this.editorWatchdog.destroy(),this.editorWatchdog=void 0)}))}writeValue(t){null===t&&(t=""),this.editorInstance?(this.isEditorSettingData=!0,this.editorInstance.setData(t),this.isEditorSettingData=!1):(this.data=t,this.editorElement&&(this.editorElement.innerHTML=this.data))}registerOnChange(t){this.cvaOnChange=t}registerOnTouched(t){this.cvaOnTouched=t}setDisabledState(t){this.editorInstance&&(this.editorInstance.isReadOnly=t),this.initiallyDisabled=t}attachToWatchdog(){const t=(t,e)=>n(this,void 0,void 0,(function*(){return this.ngZone.runOutsideAngular(()=>n(this,void 0,void 0,(function*(){this.elementRef.nativeElement.appendChild(t);const r=yield this.editor.create(t,e);return this.initiallyDisabled&&(r.isReadOnly=this.initiallyDisabled),this.ngZone.run(()=>{this.ready.emit(r)}),this.setUpEditorEvents(r),r})))})),e=t=>n(this,void 0,void 0,(function*(){yield t.destroy(),this.elementRef.nativeElement.removeChild(this.editorElement)})),r=()=>{this.ngZone.run(()=>{this.error.emit()})},o=document.createElement(this.tagName),i=this.getConfig();if(this.editorElement=o,this.watchdog)this.watchdog.add({id:this.id,type:"editor",creator:t,destructor:e,sourceElementOrData:o,config:i}),this.watchdog.on("itemError",(t,{itemId:e})=>{e===this.id&&r()});else{const n=new pe(this.editor);n.setCreator(t),n.setDestructor(e),n.on("error",r),this.editorWatchdog=n,this.editorWatchdog.create(o,i)}}getConfig(){if(this.data&&this.config.initialData)throw new Error("Editor data should be provided either using `config.initialData` or `data` properties.");return Object.assign(Object.assign({},this.config),{initialData:this.config.initialData||this.data||""})}setUpEditorEvents(t){const e=t.editing.view.document;t.model.document.on("change:data",e=>{this.ngZone.run(()=>{if(this.cvaOnChange&&!this.isEditorSettingData){const e=t.getData();this.cvaOnChange(e)}this.change.emit({event:e,editor:t})})}),e.on("focus",e=>{this.ngZone.run(()=>{this.focus.emit({event:e,editor:t})})}),e.on("blur",e=>{this.ngZone.run(()=>{this.cvaOnTouched&&this.cvaOnTouched(),this.blur.emit({event:e,editor:t})})})}}return t.\u0275fac=function(e){return new(e||t)(o.Ob(o.l),o.Ob(o.A))},t.\u0275cmp=o.Ib({type:t,selectors:[["ckeditor"]],inputs:{config:"config",data:"data",tagName:"tagName",disabled:"disabled",editor:"editor",watchdog:"watchdog"},outputs:{ready:"ready",change:"change",blur:"blur",focus:"focus",error:"error"},features:[o.Bb([{provide:be.h,useExisting:Object(o.U)(()=>t),multi:!0}])],decls:1,vars:0,template:function(t,e){1&t&&o.Ac(0,ge,0,0,"ng-template")},encapsulation:2}),t})(),me=(()=>{class t{}return t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({factory:function(e){return new(e||t)},imports:[[be.f,ye.c]]}),t})()}}]);