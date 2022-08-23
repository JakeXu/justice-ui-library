import{jsxs as e,Fragment as o,jsx as t}from"react/jsx-runtime";import*as s from"react";import{ValidFieldText as i}from"./ValidFieldText.js";import{c as r}from"../../index-6ea95111.js";import{R as a}from"../../server-ce56d26a.js";import{s as n}from"../../style-inject.es-1f59c1d0.js";import{Button as p}from"../Button/index.js";import{translation as l}from"../../utils/i18n/index.js";import"../../fa_icons-aa14317c.js";import{p as d}from"../../purify.es-49746c08.js";import{generatePassword as c}from"../../utils/password.js";import{DEFAULT_PASSWORD_AND_SECRET_REGEX as m}from"../../constants/common.js";import"../../index-a84576da.js";import"../../objectWithoutPropertiesLoose-982ef579.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"styled-components";import"../../objectWithoutProperties-90b89624.js";import"../../get-ae46b391.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../index-d0edc839.js";import"../../index-dd80248b.js";import"../../context-f854a00e.js";import"../../use-memo-one.esm-19c0a4a5.js";import"../../Label-e62580a5.js";import"../../_commonjsHelpers-6e998e78.js";import"../../core.esm-a8712816.js";import"../../inheritsLoose-6fd5c6e3.js";import"../../unitless.esm-d94354fa.js";import"../../index-6f6eab52.js";import"../../noop-2d37c277.js";import"../../slicedToArray-a622878d.js";import"../../nonIterableRest-e93b6547.js";import"../../index-72b69d08.js";import"../Form/utility/index.js";import"../../utils/typography.js";import"stream";import"../../utils/i18n/loadLanguages.js";import"../InlinePopover/index.js";import"../../math-dfd2e461.js";import"../../elevation-7ebf3bff.js";import"../../Popper-db0b109c.js";import"../../memoize-one.esm-8827f1ac.js";import"../../types/enum.js";import"../../utils/input.js";import"../../objectSpread-31108fba.js";import"crypto";n('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.valid-field-password{font-family:Roboto,sans-serif;position:relative}.valid-field-password .password-field-text input{padding-right:24px}.valid-field-password .password-field-text .password-eye-icon{color:#687792;cursor:pointer}.valid-field-password .password-field-text .password-eye-icon:hover{color:#232831}.valid-field-password .generate-password{color:#0b6cff;cursor:pointer;display:inline-block;padding:0;text-decoration:none}.valid-field-password .generate-password :focus{outline:none}.valid-field-password .level{font-size:16px;margin-top:5px;position:absolute;right:0;text-transform:capitalize}.valid-field-password .level.poor{color:#e32626}.valid-field-password .level.weak{color:#f1a20a}.valid-field-password .level.good{color:#025896}.valid-field-password .level.average{color:#687792}.valid-field-password .level.excellent{color:#00642e}');class f extends s.Component{constructor(e){super(e),this.state={isIconEyeOff:!0,levelColor:""}}toolTipIconEye=s.createRef();componentDidMount(){setTimeout((()=>{a.rebuild()}),100)}componentWillUnmount(){this.hideTooltip()}static getDerivedStateFromProps(e,o){return e.strengthLevelIndicator!==o.levelColor?{levelColor:e.strengthLevelIndicator}:""}toggleIconEyeOff=()=>{this.setState((e=>({isIconEyeOff:!e.isIconEyeOff})),(()=>this.resetTooltipIconEye()))};resetTooltipIconEye=()=>{this.toolTipIconEye&&this.toolTipIconEye.current&&(a.hide(this.toolTipIconEye.current),a.show(this.toolTipIconEye.current))};hideTooltip=()=>{this.toolTipIconEye&&this.toolTipIconEye.current&&a.hide(this.toolTipIconEye.current)};handleEyeIcon=()=>{const{isIconEyeOff:s}=this.state;return e(o,{children:[t("i",{ref:this.toolTipIconEye,"data-for":"eyeInfo__tooltip","data-tip":d.sanitize(l(s?"password.viewPassword":"password.hiddenPassword")),"data-html":!0,"data-place":"top",className:r("password-eye-icon",{"icon-eye":!s,"icon-eye-off":s}),onClick:this.toggleIconEyeOff}),t(a,{effect:"solid",id:"eyeInfo__tooltip"})]})};handleFieldType=()=>this.state.isIconEyeOff?"password":"text";handleGeneratePassword=()=>{const{customPattern:e,onChange:o,name:t}=this.props;if(!o)return;o({target:{name:t,value:c(e||m)}})};handleGenerateText=()=>{const{hasGeneratePassword:s,strengthLevelIndicator:i,customField:a}=this.props,{levelColor:n}=this.state;return e(o,{children:[s&&t(p,{appearance:"link",spacing:"none",className:"generate-password",onClick:this.handleGeneratePassword,children:l("password.generateNew")}),i&&t("span",{className:r("level",n),children:l(`password.${i}`)}),a]})};render(){return t("div",{className:"valid-field-password",children:t(i,{...this.props,rightIcon:this.handleEyeIcon(),type:this.handleFieldType(),className:r(this.props.className,"password-field-text"),customField:this.handleGenerateText()})})}}export{f as ValidFieldPassword};
