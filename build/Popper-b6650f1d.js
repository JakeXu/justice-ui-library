import*as e from"react";import t from"react";import{m as n}from"./memoize-one.esm-8827f1ac.js";import{a as o,_ as r}from"./objectWithoutPropertiesLoose-982ef579.js";import{_ as i,a}from"./setPrototypeOf-c6ba02e6.js";import{_ as s}from"./inheritsLoose-6fd5c6e3.js";import{c as p,b as f}from"./_commonjsHelpers-6e998e78.js";import{p as l}from"./index-95a210fb.js";var u=function(){},c="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,d=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(c&&navigator.userAgent.indexOf(e[t])>=0)return 1;return 0}();var h=c&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then((function(){t=!1,e()})))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout((function(){t=!1,e()}),d))}};function m(e){return e&&"[object Function]"==={}.toString.call(e)}function v(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}function g(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function b(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=v(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/(auto|scroll|overlay)/.test(n+r+o)?e:b(g(e))}function y(e){return e&&e.referenceNode?e.referenceNode:e}var w=c&&!(!window.MSInputMethodContext||!document.documentMode),x=c&&/MSIE 10/.test(navigator.userAgent);function E(e){return 11===e?w:10===e?x:w||x}function O(e){if(!e)return document.documentElement;for(var t=E(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var o=n&&n.nodeName;return o&&"BODY"!==o&&"HTML"!==o?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===v(n,"position")?O(n):n:e?e.ownerDocument.documentElement:document.documentElement}function N(e){return null!==e.parentNode?N(e.parentNode):e}function P(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=n?e:t,r=n?t:e,i=document.createRange();i.setStart(o,0),i.setEnd(r,0);var a,s,p=i.commonAncestorContainer;if(e!==p&&t!==p||o.contains(r))return"BODY"===(s=(a=p).nodeName)||"HTML"!==s&&O(a.firstElementChild)!==a?O(p):p;var f=N(e);return f.host?P(f.host,t):P(e,N(t).host)}function M(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",o=e.nodeName;if("BODY"===o||"HTML"===o){var r=e.ownerDocument.documentElement,i=e.ownerDocument.scrollingElement||r;return i[n]}return e[n]}function L(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=M(t,"top"),r=M(t,"left"),i=n?-1:1;return e.top+=o*i,e.bottom+=o*i,e.left+=r*i,e.right+=r*i,e}function T(e,t){var n="x"===t?"Left":"Top",o="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"])+parseFloat(e["border"+o+"Width"])}function _(e,t,n,o){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],E(10)?parseInt(n["offset"+e])+parseInt(o["margin"+("Height"===e?"Top":"Left")])+parseInt(o["margin"+("Height"===e?"Bottom":"Right")]):0)}function A(e){var t=e.body,n=e.documentElement,o=E(10)&&getComputedStyle(n);return{height:_("Height",t,n,o),width:_("Width",t,n,o)}}var C=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),F=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function j(e){return S({},e,{right:e.left+e.width,bottom:e.top+e.height})}function B(e){var t={};try{if(E(10)){t=e.getBoundingClientRect();var n=M(e,"top"),o=M(e,"left");t.top+=n,t.left+=o,t.bottom+=n,t.right+=o}else t=e.getBoundingClientRect()}catch(e){}var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?A(e.ownerDocument):{},a=i.width||e.clientWidth||r.width,s=i.height||e.clientHeight||r.height,p=e.offsetWidth-a,f=e.offsetHeight-s;if(p||f){var l=v(e);p-=T(l,"x"),f-=T(l,"y"),r.width-=p,r.height-=f}return j(r)}function I(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=E(10),r="HTML"===t.nodeName,i=B(e),a=B(t),s=b(e),p=v(t),f=parseFloat(p.borderTopWidth),l=parseFloat(p.borderLeftWidth);n&&r&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var u=j({top:i.top-a.top-f,left:i.left-a.left-l,width:i.width,height:i.height});if(u.marginTop=0,u.marginLeft=0,!o&&r){var c=parseFloat(p.marginTop),d=parseFloat(p.marginLeft);u.top-=f-c,u.bottom-=f-c,u.left-=l-d,u.right-=l-d,u.marginTop=c,u.marginLeft=d}return(o&&!n?t.contains(s):t===s&&"BODY"!==s.nodeName)&&(u=L(u,t)),u}function W(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,o=I(e,n),r=Math.max(n.clientWidth,window.innerWidth||0),i=Math.max(n.clientHeight,window.innerHeight||0),a=t?0:M(n),s=t?0:M(n,"left"),p={top:a-o.top+o.marginTop,left:s-o.left+o.marginLeft,width:r,height:i};return j(p)}function H(e){var t=e.nodeName;if("BODY"===t||"HTML"===t)return!1;if("fixed"===v(e,"position"))return!0;var n=g(e);return!!n&&H(n)}function k(e){if(!e||!e.parentElement||E())return document.documentElement;for(var t=e.parentElement;t&&"none"===v(t,"transform");)t=t.parentElement;return t||document.documentElement}function U(e,t,n,o){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},a=r?k(e):P(e,y(t));if("viewport"===o)i=W(a,r);else{var s=void 0;"scrollParent"===o?"BODY"===(s=b(g(t))).nodeName&&(s=e.ownerDocument.documentElement):s="window"===o?e.ownerDocument.documentElement:o;var p=I(s,a,r);if("HTML"!==s.nodeName||H(a))i=p;else{var f=A(e.ownerDocument),l=f.height,u=f.width;i.top+=p.top-p.marginTop,i.bottom=l+p.top,i.left+=p.left-p.marginLeft,i.right=u+p.left}}var c="number"==typeof(n=n||0);return i.left+=c?n:n.left||0,i.top+=c?n:n.top||0,i.right-=c?n:n.right||0,i.bottom-=c?n:n.bottom||0,i}function R(e){return e.width*e.height}function V(e,t,n,o,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var a=U(n,o,i,r),s={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},p=Object.keys(s).map((function(e){return S({key:e},s[e],{area:R(s[e])})})).sort((function(e,t){return t.area-e.area})),f=p.filter((function(e){var t=e.width,o=e.height;return t>=n.clientWidth&&o>=n.clientHeight})),l=f.length>0?f[0].key:p[0].key,u=e.split("-")[1];return l+(u?"-"+u:"")}function Y(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=o?k(t):P(t,y(n));return I(n,r,o)}function q(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),o=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+o,height:e.offsetHeight+n}}function z(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}function G(e,t,n){n=n.split("-")[0];var o=q(e),r={width:o.width,height:o.height},i=-1!==["right","left"].indexOf(n),a=i?"top":"left",s=i?"left":"top",p=i?"height":"width",f=i?"width":"height";return r[a]=t[a]+t[p]/2-o[p]/2,r[s]=n===s?t[s]-o[f]:t[z(s)],r}function X(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function J(e,t,n){return(void 0===n?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex((function(e){return e[t]===n}));var o=X(e,(function(e){return e[t]===n}));return e.indexOf(o)}(e,"name",n))).forEach((function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&m(n)&&(t.offsets.popper=j(t.offsets.popper),t.offsets.reference=j(t.offsets.reference),t=n(t,e))})),t}function K(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=Y(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=V(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=G(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=J(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function Q(e,t){return e.some((function(e){var n=e.name;return e.enabled&&n===t}))}function Z(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<t.length;o++){var r=t[o],i=r?""+r+n:e;if(void 0!==document.body.style[i])return i}return null}function $(){return this.state.isDestroyed=!0,Q(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[Z("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function ee(e){var t=e.ownerDocument;return t?t.defaultView:window}function te(e,t,n,o){var r="BODY"===e.nodeName,i=r?e.ownerDocument.defaultView:e;i.addEventListener(t,n,{passive:!0}),r||te(b(i.parentNode),t,n,o),o.push(i)}function ne(e,t,n,o){n.updateBound=o,ee(e).addEventListener("resize",n.updateBound,{passive:!0});var r=b(e);return te(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function oe(){this.state.eventsEnabled||(this.state=ne(this.reference,this.options,this.state,this.scheduleUpdate))}function re(){var e,t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,ee(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach((function(e){e.removeEventListener("scroll",t.updateBound)})),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function ie(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function ae(e,t){Object.keys(t).forEach((function(n){var o="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&ie(t[n])&&(o="px"),e.style[n]=t[n]+o}))}var se=c&&/Firefox/i.test(navigator.userAgent);function pe(e,t,n){var o=X(e,(function(e){return e.name===t})),r=!!o&&e.some((function(e){return e.name===n&&e.enabled&&e.order<o.order}));if(!r){var i="`"+t+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return r}var fe=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],le=fe.slice(3);function ue(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=le.indexOf(e),o=le.slice(n+1).concat(le.slice(0,n));return t?o.reverse():o}var ce="flip",de="clockwise",he="counterclockwise";function me(e,t,n,o){var r=[0,0],i=-1!==["right","left"].indexOf(o),a=e.split(/(\+|\-)/).map((function(e){return e.trim()})),s=a.indexOf(X(a,(function(e){return-1!==e.search(/,|\s/)})));a[s]&&-1===a[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var p=/\s*,\s*|\s+/,f=-1!==s?[a.slice(0,s).concat([a[s].split(p)[0]]),[a[s].split(p)[1]].concat(a.slice(s+1))]:[a];return f=f.map((function(e,o){var r=(1===o?!i:i)?"height":"width",a=!1;return e.reduce((function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,a=!0,e):a?(e[e.length-1]+=t,a=!1,e):e.concat(t)}),[]).map((function(e){return function(e,t,n,o){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+r[1],a=r[2];if(!i)return e;if(0===a.indexOf("%")){return j("%p"===a?n:o)[t]/100*i}if("vh"===a||"vw"===a)return("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i;return i}(e,r,t,n)}))})),f.forEach((function(e,t){e.forEach((function(n,o){ie(n)&&(r[t]+=n*("-"===e[o-1]?-1:1))}))})),r}var ve={shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],o=t.split("-")[1];if(o){var r=e.offsets,i=r.reference,a=r.popper,s=-1!==["bottom","top"].indexOf(n),p=s?"left":"top",f=s?"width":"height",l={start:F({},p,i[p]),end:F({},p,i[p]+i[f]-a[f])};e.offsets.popper=S({},a,l[o])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n=t.offset,o=e.placement,r=e.offsets,i=r.popper,a=r.reference,s=o.split("-")[0],p=void 0;return p=ie(+n)?[+n,0]:me(n,i,a,s),"left"===s?(i.top+=p[0],i.left-=p[1]):"right"===s?(i.top+=p[0],i.left+=p[1]):"top"===s?(i.left+=p[0],i.top-=p[1]):"bottom"===s&&(i.left+=p[0],i.top+=p[1]),e.popper=i,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||O(e.instance.popper);e.instance.reference===n&&(n=O(n));var o=Z("transform"),r=e.instance.popper.style,i=r.top,a=r.left,s=r[o];r.top="",r.left="",r[o]="";var p=U(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);r.top=i,r.left=a,r[o]=s,t.boundaries=p;var f=t.priority,l=e.offsets.popper,u={primary:function(e){var n=l[e];return l[e]<p[e]&&!t.escapeWithReference&&(n=Math.max(l[e],p[e])),F({},e,n)},secondary:function(e){var n="right"===e?"left":"top",o=l[n];return l[e]>p[e]&&!t.escapeWithReference&&(o=Math.min(l[n],p[e]-("right"===e?l.width:l.height))),F({},n,o)}};return f.forEach((function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";l=S({},l,u[t](e))})),e.offsets.popper=l,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,o=t.reference,r=e.placement.split("-")[0],i=Math.floor,a=-1!==["top","bottom"].indexOf(r),s=a?"right":"bottom",p=a?"left":"top",f=a?"width":"height";return n[s]<i(o[p])&&(e.offsets.popper[p]=i(o[p])-n[f]),n[p]>i(o[s])&&(e.offsets.popper[p]=i(o[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!pe(e.instance.modifiers,"arrow","keepTogether"))return e;var o=t.element;if("string"==typeof o){if(!(o=e.instance.popper.querySelector(o)))return e}else if(!e.instance.popper.contains(o))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var r=e.placement.split("-")[0],i=e.offsets,a=i.popper,s=i.reference,p=-1!==["left","right"].indexOf(r),f=p?"height":"width",l=p?"Top":"Left",u=l.toLowerCase(),c=p?"left":"top",d=p?"bottom":"right",h=q(o)[f];s[d]-h<a[u]&&(e.offsets.popper[u]-=a[u]-(s[d]-h)),s[u]+h>a[d]&&(e.offsets.popper[u]+=s[u]+h-a[d]),e.offsets.popper=j(e.offsets.popper);var m=s[u]+s[f]/2-h/2,g=v(e.instance.popper),b=parseFloat(g["margin"+l]),y=parseFloat(g["border"+l+"Width"]),w=m-e.offsets.popper[u]-b-y;return w=Math.max(Math.min(a[f]-h,w),0),e.arrowElement=o,e.offsets.arrow=(F(n={},u,Math.round(w)),F(n,c,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(Q(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=U(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),o=e.placement.split("-")[0],r=z(o),i=e.placement.split("-")[1]||"",a=[];switch(t.behavior){case ce:a=[o,r];break;case de:a=ue(o);break;case he:a=ue(o,!0);break;default:a=t.behavior}return a.forEach((function(s,p){if(o!==s||a.length===p+1)return e;o=e.placement.split("-")[0],r=z(o);var f=e.offsets.popper,l=e.offsets.reference,u=Math.floor,c="left"===o&&u(f.right)>u(l.left)||"right"===o&&u(f.left)<u(l.right)||"top"===o&&u(f.bottom)>u(l.top)||"bottom"===o&&u(f.top)<u(l.bottom),d=u(f.left)<u(n.left),h=u(f.right)>u(n.right),m=u(f.top)<u(n.top),v=u(f.bottom)>u(n.bottom),g="left"===o&&d||"right"===o&&h||"top"===o&&m||"bottom"===o&&v,b=-1!==["top","bottom"].indexOf(o),y=!!t.flipVariations&&(b&&"start"===i&&d||b&&"end"===i&&h||!b&&"start"===i&&m||!b&&"end"===i&&v),w=!!t.flipVariationsByContent&&(b&&"start"===i&&h||b&&"end"===i&&d||!b&&"start"===i&&v||!b&&"end"===i&&m),x=y||w;(c||g||x)&&(e.flipped=!0,(c||g)&&(o=a[p+1]),x&&(i=function(e){return"end"===e?"start":"start"===e?"end":e}(i)),e.placement=o+(i?"-"+i:""),e.offsets.popper=S({},e.offsets.popper,G(e.instance.popper,e.offsets.reference,e.placement)),e=J(e.instance.modifiers,e,"flip"))})),e},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],o=e.offsets,r=o.popper,i=o.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return r[a?"left":"top"]=i[n]-(s?r[a?"width":"height"]:0),e.placement=z(t),e.offsets.popper=j(r),e}},hide:{order:800,enabled:!0,fn:function(e){if(!pe(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=X(e.instance.modifiers,(function(e){return"preventOverflow"===e.name})).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,o=t.y,r=e.offsets.popper,i=X(e.instance.modifiers,(function(e){return"applyStyle"===e.name})).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a=void 0!==i?i:t.gpuAcceleration,s=O(e.instance.popper),p=B(s),f={position:r.position},l=function(e,t){var n=e.offsets,o=n.popper,r=n.reference,i=Math.round,a=Math.floor,s=function(e){return e},p=i(r.width),f=i(o.width),l=-1!==["left","right"].indexOf(e.placement),u=-1!==e.placement.indexOf("-"),c=t?l||u||p%2==f%2?i:a:s,d=t?i:s;return{left:c(p%2==1&&f%2==1&&!u&&t?o.left-1:o.left),top:d(o.top),bottom:d(o.bottom),right:c(o.right)}}(e,window.devicePixelRatio<2||!se),u="bottom"===n?"top":"bottom",c="right"===o?"left":"right",d=Z("transform"),h=void 0,m=void 0;if(m="bottom"===u?"HTML"===s.nodeName?-s.clientHeight+l.bottom:-p.height+l.bottom:l.top,h="right"===c?"HTML"===s.nodeName?-s.clientWidth+l.right:-p.width+l.right:l.left,a&&d)f[d]="translate3d("+h+"px, "+m+"px, 0)",f[u]=0,f[c]=0,f.willChange="transform";else{var v="bottom"===u?-1:1,g="right"===c?-1:1;f[u]=m*v,f[c]=h*g,f.willChange=u+", "+c}var b={"x-placement":e.placement};return e.attributes=S({},b,e.attributes),e.styles=S({},f,e.styles),e.arrowStyles=S({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,n;return ae(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach((function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)})),e.arrowElement&&Object.keys(e.arrowStyles).length&&ae(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,o,r){var i=Y(r,t,e,n.positionFixed),a=V(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",a),ae(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}},ge={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:ve},be=function(){function e(t,n){var o=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};C(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(o.update)},this.update=h(this.update.bind(this)),this.options=S({},e.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(S({},e.Defaults.modifiers,r.modifiers)).forEach((function(t){o.options.modifiers[t]=S({},e.Defaults.modifiers[t]||{},r.modifiers?r.modifiers[t]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(e){return S({name:e},o.options.modifiers[e])})).sort((function(e,t){return e.order-t.order})),this.modifiers.forEach((function(e){e.enabled&&m(e.onLoad)&&e.onLoad(o.reference,o.popper,o.options,e,o.state)})),this.update();var i=this.options.eventsEnabled;i&&this.enableEventListeners(),this.state.eventsEnabled=i}return D(e,[{key:"update",value:function(){return K.call(this)}},{key:"destroy",value:function(){return $.call(this)}},{key:"enableEventListeners",value:function(){return oe.call(this)}},{key:"disableEventListeners",value:function(){return re.call(this)}}]),e}();be.Utils=("undefined"!=typeof window?window:global).PopperUtils,be.placements=fe,be.Defaults=ge;var ye=be,we=function(e,t){return we=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},we(e,t)};var xe=function(){return xe=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},xe.apply(this,arguments)},Ee={exports:{}},Oe={exports:{}},Ne="__global_unique_id__",Pe=function(){return p[Ne]=(p[Ne]||0)+1};!function(e,n){n.__esModule=!0;var o=t;a(o);var r=a(l.exports),i=a(Pe);function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}a(u);var c=1073741823;function d(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,o){e=n,t.forEach((function(t){return t(e,o)}))}}}n.default=function(e,t){var n,a,l="__create-react-context-"+(0,i.default)()+"__",u=function(e){function n(){var t,o;s(this,n);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=o=p(this,e.call.apply(e,[this].concat(i))),o.emitter=d(o.props.value),p(o,t)}return f(n,e),n.prototype.getChildContext=function(){var e;return(e={})[l]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,o=e.value,r=void 0;((i=n)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?r=0:(r="function"==typeof t?t(n,o):c,0!==(r|=0)&&this.emitter.set(e.value,r))}var i,a},n.prototype.render=function(){return this.props.children},n}(o.Component);u.childContextTypes=((n={})[l]=r.default.object.isRequired,n);var h=function(t){function n(){var e,o;s(this,n);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return e=o=p(this,t.call.apply(t,[this].concat(i))),o.state={value:o.getValue()},o.onUpdate=function(e,t){0!=((0|o.observedBits)&t)&&o.setState({value:o.getValue()})},p(o,e)}return f(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?c:t},n.prototype.componentDidMount=function(){this.context[l]&&this.context[l].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?c:e},n.prototype.componentWillUnmount=function(){this.context[l]&&this.context[l].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[l]?this.context[l].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(o.Component);return h.contextTypes=((a={})[l]=r.default.object,a),{Provider:u,Consumer:h}},e.exports=n.default}(Oe,Oe.exports),function(e,n){n.__esModule=!0;var o=i(t),r=i(Oe.exports);function i(e){return e&&e.__esModule?e:{default:e}}n.default=o.default.createContext||r.default,e.exports=n.default}(Ee,Ee.exports);var Me=f(Ee.exports),Le=Me(),Te=Me(),_e=function(t){function n(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return e=t.call.apply(t,[this].concat(o))||this,i(a(e),"referenceNode",void 0),i(a(e),"setReferenceNode",(function(t){t&&e.referenceNode!==t&&(e.referenceNode=t,e.forceUpdate())})),e}s(n,t);var o=n.prototype;return o.componentWillUnmount=function(){this.referenceNode=null},o.render=function(){return e.createElement(Le.Provider,{value:this.referenceNode},e.createElement(Te.Provider,{value:this.setReferenceNode},this.props.children))},n}(e.Component),Ae=function(e){return Array.isArray(e)?e[0]:e},Ce=function(e){if("function"==typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return e.apply(void 0,n)}},De=function(e,t){if("function"==typeof e)return Ce(e,t);null!=e&&(e.current=t)},Fe={position:"absolute",top:0,left:0,opacity:0,pointerEvents:"none"},Se={},je=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return t=e.call.apply(e,[this].concat(o))||this,i(a(t),"state",{data:void 0,placement:void 0}),i(a(t),"popperInstance",void 0),i(a(t),"popperNode",null),i(a(t),"arrowNode",null),i(a(t),"setPopperNode",(function(e){e&&t.popperNode!==e&&(De(t.props.innerRef,e),t.popperNode=e,t.updatePopperInstance())})),i(a(t),"setArrowNode",(function(e){t.arrowNode=e})),i(a(t),"updateStateModifier",{enabled:!0,order:900,fn:function(e){var n=e.placement;return t.setState({data:e,placement:n}),e}}),i(a(t),"getOptions",(function(){return{placement:t.props.placement,eventsEnabled:t.props.eventsEnabled,positionFixed:t.props.positionFixed,modifiers:r({},t.props.modifiers,{arrow:r({},t.props.modifiers&&t.props.modifiers.arrow,{enabled:!!t.arrowNode,element:t.arrowNode}),applyStyle:{enabled:!1},updateStateModifier:t.updateStateModifier})}})),i(a(t),"getPopperStyle",(function(){return t.popperNode&&t.state.data?r({position:t.state.data.offsets.popper.position},t.state.data.styles):Fe})),i(a(t),"getPopperPlacement",(function(){return t.state.data?t.state.placement:void 0})),i(a(t),"getArrowStyle",(function(){return t.arrowNode&&t.state.data?t.state.data.arrowStyles:Se})),i(a(t),"getOutOfBoundariesState",(function(){return t.state.data?t.state.data.hide:void 0})),i(a(t),"destroyPopperInstance",(function(){t.popperInstance&&(t.popperInstance.destroy(),t.popperInstance=null)})),i(a(t),"updatePopperInstance",(function(){t.destroyPopperInstance();var e=a(t).popperNode,n=t.props.referenceElement;n&&e&&(t.popperInstance=new ye(n,e,t.getOptions()))})),i(a(t),"scheduleUpdate",(function(){t.popperInstance&&t.popperInstance.scheduleUpdate()})),t}s(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.placement!==e.placement||this.props.referenceElement!==e.referenceElement||this.props.positionFixed!==e.positionFixed||this.props.modifiers!==e.modifiers?this.updatePopperInstance():this.props.eventsEnabled!==e.eventsEnabled&&this.popperInstance&&(this.props.eventsEnabled?this.popperInstance.enableEventListeners():this.popperInstance.disableEventListeners()),t.placement!==this.state.placement&&this.scheduleUpdate()},n.componentWillUnmount=function(){De(this.props.innerRef,null),this.destroyPopperInstance()},n.render=function(){return Ae(this.props.children)({ref:this.setPopperNode,style:this.getPopperStyle(),placement:this.getPopperPlacement(),outOfBoundaries:this.getOutOfBoundariesState(),scheduleUpdate:this.scheduleUpdate,arrowProps:{ref:this.setArrowNode,style:this.getArrowStyle()}})},t}(e.Component);function Be(t){var n=t.referenceElement,i=o(t,["referenceElement"]);return e.createElement(Le.Consumer,null,(function(t){return e.createElement(je,r({referenceElement:void 0!==n?n:t},i))}))}i(je,"defaultProps",{placement:"bottom",eventsEnabled:!0,referenceElement:void 0,positionFixed:!1}),ye.placements;var Ie={auto:[],top:["top","bottom","top"],right:["right","left","right"],bottom:["bottom","top","bottom"],left:["left","right","left"]},We=function(e){return Ie[e]},He=function(e){function o(){var t=null!==e&&e.apply(this,arguments)||this;return t.getModifiers=n((function(e){var n={flip:{enabled:!0,behavior:We(e.split("-")[0]),boundariesElement:"viewport"},hide:{enabled:!0},offset:{enabled:!0,offset:t.props.offset},preventOverflow:{enabled:!0,escapeWithReference:!1,boundariesElement:"window"}};return t.props.modifiers?xe(xe({},n),t.props.modifiers):n})),t}return function(e,t){function n(){this.constructor=e}we(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(o,e),o.prototype.render=function(){var e=this.props,n=e.placement,o=e.children,r=e.referenceElement,i=this.getModifiers(this.props.placement);return t.createElement(Be,xe({positionFixed:!0,modifiers:i,placement:n},r?{referenceElement:r}:{}),o)},o.defaultProps={children:function(){return null},offset:"0, 8px",placement:"bottom-start"},o}(t.Component);export{Te as M,ye as P,He as a,Ce as b,_e as c,De as s,Ae as u,u as w};