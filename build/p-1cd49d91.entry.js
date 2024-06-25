import{r as e,h as t,a,g as s,c as o}from"./p-3336fe3b.js";import{c as i,v as r}from"./p-b24413c7.js";import{c as n}from"./p-32d89c78.js";import{d as c}from"./p-2b6bbee5.js";import{g as m}from"./p-8a8117a5.js";import{F as g,a as l}from"./p-e55a8f78.js";import{v}from"./p-bc59b609.js";import{c as f}from"./p-4029f0cb.js";import"./p-40f10385.js";import"./p-55e78f21.js";const d={root:"gov-attachments",label:"gov-attachments__label",list:"gov-attachments__list"};const p={root:"gov-attachments-item",name:"gov-attachments-item__name",file:"gov-attachments-item__file",messages:"gov-attachments-item__messages"};const h=".gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-attachments{position:relative;display:block;width:100%}.gov-attachments__label{font-weight:var(--gov-text-s-font-weight);font-size:var(--gov-text-s-font-size);line-height:var(--gov-text-s-line-height);letter-spacing:var(--gov-text-s-letter-spacing);color:var(--gov-form-label-color, #686868)}.gov-attachments__list>*:last-child{margin-bottom:0}";const b=h;const y=class{constructor(t){e(this,t);this.label=undefined;this.wcagLabel=undefined;this.h=m(this.host)}async componentDidRender(){if(n()){await c(500);await this.validateWcag()}}render(){return t(a,{key:"aa547c47c902f12c38bdd679526ff86cfec12818",class:this.h.classes(d.root)},this.label?t("p",{class:d.label},this.label):null,t("div",{key:"6cf6368fab23af6d4cd90f5da5ae3251fefcefba",class:d.list,role:"list","aria-label":this.wcagLabel},t("slot",{key:"f0892797011686b6e3bc46c95dc8946206dcd469"})))}async validateWcag(){i(this.wcagLabel,"wcag-label",d.root)}get host(){return s(this)}};y.style=b;const u=".gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-attachments-item{position:relative;display:block;width:100%;margin:0rem 0rem 0.5rem}.gov-attachments-item__messages>*:last-child{margin-bottom:0}.gov-attachments-item__file{display:flex;gap:1rem}.gov-attachments-item__name{display:flex;gap:0 0.5rem;flex-wrap:wrap;align-items:center;align-self:center;margin:0;color:var(--gov-attachments-name-color, var(--gov-color-primary))}.gov-attachments-item__name span{font-weight:var(--gov-text-xs-font-weight);font-size:var(--gov-text-xs-font-size);line-height:var(--gov-text-xs-line-height);letter-spacing:var(--gov-text-xs-letter-spacing);color:var(--gov-attachments-decor-color, var(--gov-color-secondary-700))}";const k=u;const x=class{constructor(t){e(this,t);this.govRemove=o(this,"gov-remove",7);this.wcagRemoveLabel=undefined;this.wcagRemoveLabelledBy=undefined;this.h=m(this.host)}async componentDidRender(){if(n()){await c(500);await this.validateWcag()}}render(){return t(a,{key:"76c9b8bdb75bb91378e8752154a31882c2c0bee6",class:this.h.classes(p.root),role:"listitem"},t("div",{key:"0364ce1cc0cef0b602319284324a7b594b7d246c",class:p.file},t("p",{key:"b9adc7239bdaa56687ae341d2ed7a81b0e0fe07d",class:p.name},t("slot",{key:"e559148b9cb72d772919b2f7ad7ca24d22aa7a22"}),t("slot",{key:"28ef2dcbc647ed1132d2d37bd7345a5ff2d95c77",name:"info"})),t("gov-button",{key:"eb3e122c8eccb6d023c1ea1fa63c192502c2388e",variant:"primary",type:"base",size:"s","wcag-label":this.wcagRemoveLabel,"wcag-labelled-by":this.wcagRemoveLabelledBy,"on-gov-click":this.govRemove.emit},t("gov-icon",{key:"b54a13790e224aa0745998087007d6d22a04a003",slot:"left-icon",name:"x-lg"}))),this.h.hasSlot("message")&&t("div",{class:p.messages},t("slot",{name:"message"})))}async validateWcag(){r(this.wcagRemoveLabel,this.wcagRemoveLabelledBy,p.root)}get host(){return s(this)}};x.style=k;const _=".gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-form-message{font-weight:var(--gov-text-s-font-weight);font-size:var(--gov-text-s-font-size);line-height:var(--gov-text-s-line-height);letter-spacing:var(--gov-text-s-letter-spacing);display:flex;gap:0.5rem;margin:0rem 0rem 1rem}.gov-form-message__icon{position:relative;top:calc(var(--gov-text-s-font-size) / 6);display:flex}.gov-form-message__icon>*{width:calc(var(--gov-text-s-font-size) * 1.167);height:calc(var(--gov-text-s-font-size) * 1.167)}.gov-form-message[variant=error]{color:var(--gov-form-message-error-color, var(--gov-color-error-400))}.gov-form-message[variant=secondary]{color:var(--gov-form-message-secondary-color, var(--gov-color-secondary-700))}.gov-form-message[variant=warning]{color:var(--gov-form-message-warning-color, var(--gov-color-warning-500))}.gov-form-message[variant=success]{color:var(--gov-form-message-success-color, var(--gov-color-success-500))}";const w=_;const j=class{constructor(t){e(this,t);this.variant="secondary";this.h=m(this.host);this.messageId=f("GovFormMessage")}validateVariant(e){v(l,e,g.root)}componentWillLoad(){this.validateVariant(this.variant)}render(){return t(a,{key:"e490cc2594836751d397a6af7120ee46811cc8dc",class:this.h.classes(g.root),variant:this.variant},this.h.hasSlot("icon")&&t("span",{class:g.icon},t("slot",{name:"icon"})),t("span",{key:"8d182e5b50155cf8482df3a40e8c6e47e2270aec",id:this.messageId,class:g.content},t("slot",{key:"dbd8d43925667e79db53e39acfbe9df1a7fcbed2"})))}async identifier(){return this.messageId}get host(){return s(this)}static get watchers(){return{variant:["validateVariant"]}}};j.style=w;export{y as gov_attachments,x as gov_attachments_item,j as gov_form_message};
//# sourceMappingURL=p-1cd49d91.entry.js.map