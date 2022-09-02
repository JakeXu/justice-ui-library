import{jsxs as t,jsx as i}from"react/jsx-runtime";import*as e from"react";import{s as a}from"../../style-inject.es-1f59c1d0.js";import{c as n}from"../../index-6ea95111.js";import{FieldLabel as o,FieldErrorMessage as d}from"../Form/utility/index.js";import{Button as l}from"../Button/index.js";import{Input as s}from"./ValidFieldText.js";import{translation as r}from"../../utils/i18n/index.js";import"../../fa_icons-aa14317c.js";import{ButtonWithIcon as p}from"../ButtonWithIcon/index.js";import"../../server-ce56d26a.js";import"../../index-dd80248b.js";import"stream";import"../../purify.es-49746c08.js";import"../../constants/common.js";import"../../utils/typography.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../nonIterableRest-e93b6547.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../utils/i18n/loadLanguages.js";import"styled-components";import"../../objectWithoutProperties-90b89624.js";import"../../objectWithoutPropertiesLoose-982ef579.js";import"../../get-ae46b391.js";import"../../index-1901cda4.js";import"../../_commonjsHelpers-6e998e78.js";import"../../objectSpread-31108fba.js";import"../../index-a06f61c9.js";import"../../context-f854a00e.js";import"../../use-memo-one.esm-19c0a4a5.js";import"../../Label-68007c80.js";import"../../core.esm-a8712816.js";import"../../inheritsLoose-6fd5c6e3.js";import"../../unitless.esm-d94354fa.js";import"../../index-7f436594.js";import"../../noop-2d37c277.js";import"../../slicedToArray-a622878d.js";import"../../index-72b69d08.js";import"../InlinePopover/index.js";import"../../math-a65253e9.js";import"../../elevation-2baba17b.js";import"../../Popper-97f606ed.js";import"../../memoize-one.esm-8827f1ac.js";import"../../types/enum.js";import"../../utils/input.js";a('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.valid-dynamic-text .field-label{font-size:14px;padding-bottom:4px}.valid-dynamic-text__input{display:flex;flex-direction:column}.valid-dynamic-text__input label{display:none}.valid-dynamic-text__input__field{align-items:center;display:flex;flex-direction:row}.valid-dynamic-text__input__field:hover{background-color:transparent!important}.valid-dynamic-text__input__field:not(:last-child){margin-bottom:16px}.valid-dynamic-text__input__field [class|=Content__ChildWrapper]>[class|=Content]{border:1px solid #b8bfcd}.valid-dynamic-text__input__field [class|=Content__ChildWrapper]>[class|=Content]:hover{border-color:#687792}.valid-dynamic-text__input__field--focused [class|=Content__ChildWrapper]>[class|=Content]{border:2px solid #0b6cff}.valid-dynamic-text__input__field--focused [class|=Content__ChildWrapper]>[class|=Content]:hover{border-color:#0b6cff}.valid-dynamic-text__input__field>div{width:100%}.valid-dynamic-text__input__field button{color:#4c576b!important;width:40px}.valid-dynamic-text__input__field button:hover{text-decoration:none}.valid-dynamic-text__input__field button.delete-button>span>span{display:inline-block;margin-right:0!important;overflow:unset!important}.valid-dynamic-text__input__field input{font-family:Roboto,sans-serif;font-size:16px}.valid-dynamic-text__input__add-btn{align-items:center;background-color:#f5f6f8!important;border-radius:4px;display:flex;height:40px;justify-content:center;width:100%}.valid-dynamic-text__input__add-btn.shrink{width:calc(100% - 40px)}.valid-dynamic-text__input__add-btn button{justify-content:center;width:100%}.valid-dynamic-text__input__add-btn button:hover{text-decoration:none}.valid-dynamic-text__input__add-btn button:disabled span{color:#b8bfcd}.valid-dynamic-text__input__add-btn button span{color:#0b6cff}');const c=({placeholder:a,name:c,values:m,onChange:_,isDisabled:u=!1,type:f="text",label:b,errMessage:x,maxField:j,addText:y=r("common.add"),dataQa:h=null,addDataQa:v=null,inputDataQa:g=null,deleteDataQa:C=null,dataQaProps:k=null})=>{const[w,q]=e.useState(null),W=(t,e)=>{const n=i(s,{isLabelHidden:!0,placeholder:a,name:c,value:t,onChange:t=>((t,i)=>{const{value:e}=t.currentTarget;m[i]=e,_(m)})(t,e),disabled:u,shouldFitContainer:!0,type:f,onFocus:()=>q(e),onBlur:()=>q(null)});return g?i("div",{"data-qa-id":g,"data-qa-props":k?`${k}_${e}`:null,children:n}):n},$=t=>{const e=i(l,{onClick:()=>(t=>{_([...m.filter(((i,e)=>e!==t))])})(t),appearance:"link",className:"delete-button",children:i("span",{className:"icon icon-trash"})});return C?i("span",{"data-qa-id":C,"data-qa-props":k?`${k}_${t}`:null,children:e}):e};return t("div",{className:"valid-dynamic-text",children:[i(o,{label:b}),t("div",{className:"valid-dynamic-text__input","data-qa-id":h,children:[m.map(((i,e)=>t("div",{className:n("valid-dynamic-text__input__field",{"valid-dynamic-text__input__field--focused":w===e,"valid-dynamic-text__input__field--disabled":u}),children:[W(i,e),m.length>1&&!u&&$(e)]},e))),!!x&&i(d,{message:x}),!u&&i("div",{className:n("valid-dynamic-text__input__add-btn",{shrink:m.length>1}),hidden:u,"data-qa-id":v,"data-qa-props":k,children:i(p,{buttonIcon:"icon-plus",onClick:()=>{_([...m,""])},appearance:"link",isDisabled:m.length>=j,children:`${y} (${m.length}/${j})`})})]})]})};export{c as ValidDynamicText};
