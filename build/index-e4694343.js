import{b as e}from"./_commonjsHelpers-6e998e78.js";import t from"react";import{r as n}from"./index-12da9a8f.js";var r={},o={};Object.defineProperty(o,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=t,a=n.exports;function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){return f(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),i(t,[{key:"componentDidMount",value:function(){this.props.innerRef((0,a.findDOMNode)(this))}},{key:"componentWillUnmount",value:function(){this.props.innerRef(null)}},{key:"render",value:function(){return this.props.children}}]),t}();o.default=p,function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=o;Object.defineProperty(e,"default",{enumerable:!0,get:function(){return(e=t,e&&e.__esModule?e:{default:e}).default;var e}})}(r);var l=e(r);export{l as N};