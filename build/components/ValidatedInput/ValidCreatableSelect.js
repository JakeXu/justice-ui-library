import{jsxs as e,jsx as t}from"react/jsx-runtime";import{c as s}from"../../index-6ea95111.js";import{FieldLabel as i,FieldErrorMessage as o,FieldHelperText as a}from"../Form/utility/index.js";import{s as r}from"../../style-inject.es-1f59c1d0.js";import{CreatableSelect as m}from"../CreatableSelect/index.js";import"react";import"../../server-ce56d26a.js";import"../../index-dd80248b.js";import"stream";import"../../utils/i18n/index.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../nonIterableRest-e93b6547.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../utils/i18n/loadLanguages.js";import"../../fa_icons-e535ff8d.js";import"../../constants/common.js";import"../../utils/typography.js";import"../../stateManager-845a3300.esm-9a03801a.js";import"../../memoize-one.esm-8827f1ac.js";import"../../unitless.esm-d94354fa.js";import"../../index-95a210fb.js";import"../../createSelect-3a4027f0.js";import"../../objectWithoutPropertiesLoose-982ef579.js";import"../../objectWithoutProperties-90b89624.js";import"../../index-72b69d08.js";import"../../_commonjsHelpers-6e998e78.js";import"../../core.esm-a8712816.js";import"../../inheritsLoose-6fd5c6e3.js";r('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.valid-select-input .field-label{font-size:14px;padding-bottom:4px}');const p=({label:r,placeholder:p,options:l=[],name:n,value:d,onChange:c,errMessage:j,optionalLabel:b,isInvalid:f,isDisabled:u=!1,isRequired:g=!0,isClearable:h,tooltip:x,selectDataQa:y,isMulti:v=!1,className:C,helperText:L,...M})=>e("div",{className:s("valid-select-input",C),children:[!!r&&t(i,{label:r,optionalLabel:b,isRequired:g,tooltip:x}),t(m,{...M,options:l,placeholder:p,name:n,value:d,onChange:c,isDisabled:u,isClearable:h,isMulti:v,dataQa:y}),f&&t(o,{message:j}),L&&t(a,{message:L})]});export{p as ValidCreatableSelect};