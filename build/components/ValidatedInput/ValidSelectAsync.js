import{jsx as t,jsxs as e}from"react/jsx-runtime";import{c as r}from"../../index-6ea95111.js";import{FieldLabel as n,FieldErrorMessage as o,FieldHelperText as i}from"../Form/utility/index.js";import{S as a}from"../../react-select.esm-596351a6.js";import u,{useCallback as c,useEffect as s,useState as l,useRef as f,useMemo as p}from"react";import{c as h}from"../../_commonjsHelpers-6e998e78.js";import{c as d}from"../../stateManager-845a3300.esm-62551c7b.js";import{s as m}from"../../style-inject.es-1f59c1d0.js";import"../../server-ce56d26a.js";import"../../index-dd80248b.js";import"stream";import"../../utils/i18n/index.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../nonIterableRest-e93b6547.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../utils/i18n/loadLanguages.js";import"../../fa_icons-aa14317c.js";import"../../purify.es-49746c08.js";import"../../constants/common.js";import"../../utils/typography.js";import"../../index-1901cda4.js";import"../../memoize-one.esm-8827f1ac.js";import"../../unitless.esm-d94354fa.js";function y(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function j(t,e){if(t){if("string"==typeof t)return w(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(t,e):void 0}}function O(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(t,e)||j(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function x(t){var e=function(t,e){if("object"!==L(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===L(e)?e:String(e)}function P(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}var E={exports:{}};!function(t){var e=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new T(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return M()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=P(a,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?d:p,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",m={};function y(){}function v(){}function g(){}var b={};c(b,i,(function(){return this}));var w=Object.getPrototypeOf,j=w&&w(w(_([])));j&&j!==r&&n.call(j,i)&&(b=j);var O=g.prototype=y.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function P(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function _(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:M}}function M(){return{value:e,done:!0}}return v.prototype=g,c(O,"constructor",g),c(g,"constructor",v),v.displayName=c(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},L(x.prototype),c(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(O),c(O,u,"Generator"),c(O,i,(function(){return this})),c(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:_(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}(E);var S=E.exports,T=setTimeout;function _(t,e){var r=e.useCachedSetTimeout?T:setTimeout;return new Promise((function(e){r(e,t)}))}function M(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.useCachedSetTimeout,n=_(t,{useCachedSetTimeout:r});function o(t){return n.then((function(){return t}))}return o.then=function(){return n.then.apply(n,arguments)},o.catch=Promise.resolve().catch,o}var k={},I={};Object.defineProperty(I,"__esModule",{value:!0});var A=u;I.default=function(){var t=A.useRef(!1);return A.useEffect((function(){return t.current=!0,function(){t.current=!1}}),[]),A.useCallback((function(){return t.current}),[t])};var R=h&&h.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(k,"__esModule",{value:!0});var C=R(I),N=k.default=C.default,F=function(t,e,r){return t-e-10<r};function G(t){return function(t){if(Array.isArray(t))return w(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||j(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var V=function(t,e){return[].concat(G(t),G(e))},q='[react-select-async-paginate] response of "loadOptions" should be an object with "options" prop, which contains array of options.',D=function(t,e){if(!e)throw t.error(q,"Received:",e),new Error(q);if(!Array.isArray(e.options))throw t.error(q,"Received:",e),new Error(q)},U=function(t){var e=t.options,r=t.defaultOptions,n=t.additional,o=t.defaultAdditional,i=!0===r?null:r instanceof Array?r:e;return i?{"":{isFirstLoad:!1,isLoading:!1,options:i,hasMore:!0,additional:o||n}}:{}},H=function(t){return{isFirstLoad:!0,options:[],hasMore:!0,isLoading:!1,additional:t.additional}},z=function(){var t,e=(t=S.mark((function t(e,r,n,o,i,a,u,c){var s,l,f,p,h,d,m,v,w,j,O;return S.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=r.current.inputValue,l=!n.current[s],!(f=l?H(r.current):n.current[s]).isLoading&&f.hasMore){t.next=5;break}return t.abrupt("return");case 5:if(a((function(t){return g(g({},t),{},y({},s,g(g({},f),{},{isLoading:!0})))})),!(o>0&&"input-change"===e)){t.next=13;break}return t.next=9,i(o);case 9:if(p=r.current.inputValue,s===p){t.next=13;break}return a((function(t){return l?(t[s],b(t,[s].map(x))):g(g({},t),{},y({},s,g(g({},f),{},{isLoading:!1})))})),t.abrupt("return");case 13:return t.prev=13,m=r.current.loadOptions,t.next=17,m(s,f.options,f.additional);case 17:h=t.sent,d=!1,t.next=24;break;case 21:t.prev=21,t.t0=t.catch(13),d=!0;case 24:if(!d){t.next=27;break}return a((function(t){return g(g({},t),{},y({},s,g(g({},f),{},{isLoading:!1})))})),t.abrupt("return");case 27:u(console,h),w=(v=h).options,j=v.hasMore,O=h.hasOwnProperty("additional")?h.additional:f.additional,a((function(t){return g(g({},t),{},y({},s,g(g({},f),{},{options:c(f.options,w,O),hasMore:!!j,isLoading:!1,isFirstLoad:!1,additional:O})))}));case 31:case"end":return t.stop()}}),t,null,[[13,21]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){P(i,n,o,a,u,"next",t)}function u(t){P(i,n,o,a,u,"throw",t)}a(void 0)}))});return function(t,r,n,o,i,a,u,c){return e.apply(this,arguments)}}(),B=function(t){return t+1},W=function(t,e,r,n,o,i,a,u,c){var s=arguments.length>9&&void 0!==arguments[9]?arguments[9]:[],l=c.defaultOptions,f=c.loadOptionsOnMenuOpen,p=void 0===f||f,h=c.debounceTimeout,d=void 0===h?0:h,m=c.inputValue,y=c.menuIsOpen,v=c.filterOption,g=void 0===v?null:v,b=c.reduceOptions,w=void 0===b?V:b,j=c.shouldLoadMore,O=void 0===j?F:j,L=o(),x=t(!0),P=t(c);P.current=c;var E=e(0)[1],S=t(null);null===S.current&&(S.current=a(c));var T=n((function(t){u(t,P,S,d,M,(function(t){S.current=t(S.current),L()&&E(B)}),i,w)}),[d]),_=n((function(){var t=P.current.inputValue;S.current[t]&&T("menu-scroll")}),[T]);r((function(){x.current?x.current=!1:(S.current={},E(B)),!0===l&&T("autoload")}),s),r((function(){y&&!S.current[m]&&T("input-change")}),[m]),r((function(){y&&!S.current[""]&&p&&T("menu-toggle")}),[y]);var k=S.current[m]||H(c);return{handleScrolledToBottom:_,shouldLoadMore:O,filterOption:g,isLoading:k.isLoading,isFirstLoad:k.isFirstLoad,options:k.options}},Y=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return W(f,l,s,c,N,D,U,z,t,e)},Q=function(t,e,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],i=n.inputValue,a=n.menuIsOpen,u=n.defaultInputValue,c=n.defaultMenuIsOpen,s=n.onInputChange,l=n.onMenuClose,f=n.onMenuOpen,p=t(u||""),h=O(p,2),d=h[0],m=h[1],y=t(!!c),v=O(y,2),b=v[0],w=v[1],j="string"==typeof i?i:d,L="boolean"==typeof a?a:b,x=e((function(t,e){s&&s(t,e),m(t)}),[s]),P=e((function(){l&&l(),w(!1)}),[l]),E=e((function(){f&&f(),w(!0)}),[f]),S=r(g(g({},n),{},{inputValue:j,menuIsOpen:L}),o);return g(g({},S),{},{inputValue:j,menuIsOpen:L,onInputChange:x,onMenuClose:P,onMenuOpen:E})},$=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Q(l,c,Y,t,e)},J={};Object.defineProperty(J,"__esModule",{value:!0});var K=J.default=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(2===t.length)return Z(t[0],t[1])||null;var r=t.slice(1).reduce((function(t,e){return Z(t,e)}),t[0]);return r||null},X=new WeakMap;function Z(t,e){if(t&&e){var r=X.get(t)||new WeakMap;X.set(t,r);var n=r.get(e)||function(r){tt(t,r),tt(e,r)};return r.set(e,n),n}return t||e}function tt(t,e){"function"==typeof t?t(e):t.current=e}var et=function(e){function r(r){var n=r.selectProps,o=n.handleScrolledToBottom,i=n.shouldLoadMore,a=r.innerRef,u=r.useEffect,c=r.useRef,s=r.useCallback,l=r.setTimeout,f=r.clearTimeout,p=c(null),h=c(null),d=s((function(){var t=h.current;if(!t)return!1;var e=t.scrollTop,r=t.scrollHeight,n=t.clientHeight;return i(r,n,e)}),[i]),m=s((function(){d()&&o&&o()}),[d,o]),y=s((function(){m(),p.current=l(y,300)}),[m]);return u((function(){return y(),function(){p.current&&f(p.current)}}),[]),t(e,g(g({},r),{},{innerRef:K(a,h)}))}return r.defaultProps={useEffect:s,useRef:f,useCallback:c,setTimeout:setTimeout,clearTimeout:clearTimeout},r}(d.MenuList),rt=function(t){return function(t,e){return t((function(){return g({MenuList:et},e)}),[e])}(p,t)},nt=["components","selectRef","isLoading","useComponents","useAsyncPaginate","cacheUniqs"];var ot=function(e){function r(r){var n=r.components,o=r.selectRef,i=r.isLoading,a=r.useComponents,u=r.useAsyncPaginate,c=r.cacheUniqs,s=u(b(r,nt),c),l=a(n),f="boolean"==typeof i?i:s.isLoading;return t(e,g(g(g({},r),s),{},{isLoading:f,components:l,ref:o}))}return r.defaultProps={selectRef:null,cacheUniqs:[],components:{},useComponents:rt,useAsyncPaginate:$},r}(a);m('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.valid-select-async-input .field-label{font-size:14px;padding-bottom:4px}');const it=({label:a,errMessage:u,optionalLabel:c,isInvalid:s,isRequired:l=!0,tooltip:f,className:p,dataQa:h,helperText:d,...m})=>e("div",{className:r("valid-select-input","valid-select-async-input",p),"data-qa-id":h,children:[!!a&&t(n,{label:a,optionalLabel:c,isRequired:l,tooltip:f}),t(ot,{...m,className:"styled-atlaskit-select",classNamePrefix:"styled-atlaskit-select"}),s&&t(o,{message:u}),d&&t(i,{message:d})]});export{it as ValidSelectAsync};
