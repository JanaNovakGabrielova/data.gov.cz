import{r as o,c as a,h as e,a as t,g as i}from"./p-3336fe3b.js";import{g as r,a as d}from"./p-8a8117a5.js";import{c as s}from"./p-32d89c78.js";import{a as l}from"./p-40f10385.js";import{a as n}from"./p-b24413c7.js";import{c as m}from"./p-4029f0cb.js";import{d as c}from"./p-2b6bbee5.js";import{M as g}from"./p-1ef9a822.js";const h='.gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-modal{display:none}.gov-modal__dialog{z-index:101;position:fixed;top:50%;left:50%;display:flex;justify-content:center;align-items:center;width:100%;max-width:var(--gov-modal-max-width, 52.5rem);height:100%;padding:0.5rem;border:none;background:transparent;transform:translate(-50%, -50%);pointer-events:none}.gov-modal__inner{position:relative;display:flex;flex-direction:column;width:100%;max-height:100%;border-radius:var(--gov-border-radius, 0.1875rem);background:var(--gov-modal-bg, var(--gov-color-neutral-white));overflow:hidden;pointer-events:auto;box-shadow:0 0 1.5rem rgba(var(--gov-color-secondary-800-rgb), 0.24)}.gov-modal__header{display:flex;gap:1rem;align-items:flex-start;padding:1.5rem 1rem;border-bottom:var(--gov-modal-border-color, 0.0625rem solid var(--gov-color-secondary-500))}.gov-modal__icon{flex:0 0 auto;padding-top:calc((var(--gov-text-3xl-font-size) * 1.5 - 1.5rem) / 2)}.gov-modal__icon>*{width:1.5rem;height:1.5rem}.gov-modal__title{font-weight:var(--gov-text-3xl-font-weight);font-size:var(--gov-text-3xl-font-size);line-height:var(--gov-text-3xl-line-height);letter-spacing:var(--gov-text-3xl-letter-spacing);margin:0}.gov-modal__close{flex:0 0 auto;margin-left:auto}.gov-modal__content{height:100%;padding:1.5rem 1rem;color:var(--gov-modal-text-color, var(--gov-color-secondary-700));overflow:auto}.gov-modal__content>*:last-child{margin-bottom:0}.gov-modal__footer,.gov-modal__actions{padding:1.5rem 1rem;border-top:var(--gov-modal-border-color, 0.0625rem solid var(--gov-color-secondary-500))}.gov-modal__actions{display:flex;gap:0.5rem 1rem;flex-wrap:wrap;justify-content:flex-end}.gov-modal__dialog:focus .gov-modal__inner{outline:var(--gov-outline-width, 0.125rem) solid var(--gov-color-focus-base)}.gov-modal[open=""],.gov-modal[open=true i],.gov-modal[open="1"]{display:block}@media (min-width: 30em){.gov-modal__dialog{max-width:calc(var(--gov-modal-max-width, 52.5rem) + 3rem);padding:1.5rem}.gov-modal__dialog:focus{outline-offset:-1.5rem}.gov-modal__inner{box-shadow:0 0 2rem rgba(var(--gov-color-secondary-800-rgb), 0.32)}.gov-modal--prompt .gov-modal__dialog{max-width:calc(var(--gov-modal-prompt-max-width, 33.125rem) + 3rem)}}@media (min-width: 48em){.gov-modal__header{gap:1.25rem;padding:2rem 2.5rem 2rem 3rem}.gov-modal__content{padding:2rem 3rem}.gov-modal__footer{padding:1rem 3rem}.gov-modal--prompt .gov-modal__header,.gov-modal--prompt .gov-modal__content,.gov-modal--prompt .gov-modal__footer,.gov-modal--prompt .gov-modal__actions{padding:1.5rem}}';const v=h;const f=class{constructor(e){o(this,e);this.govClose=a(this,"gov-close",7);this.open=false;this.label=undefined;this.role="dialog";this.labelTag="h2";this.wcagLabelledBy=undefined;this.wcagDescribedBy=undefined;this.wcagCloseLabel="Zavřít okno";this.wcagCloseLabelledBy=undefined;this.h=r(this.host);this.labelId=m("GovPromptLabel");this.contentId=m("GovPromptContent")}validateLabelTag(o){const a=["h1","h2","h3","h4","h5","h6"];if(o){if(!a.includes(o)){l(`[${g.root}]: Tag ${o} is not allowed.`)}}}watchOpen(o){this.open=o}showModal(){this.open=true;document.body.classList.add(g.bodyFix)}hideModal(){this.open=false;document.body.classList.remove(g.bodyFix)}async componentWillRender(){if(this.open){this.showModal()}else{this.hideModal()}}async componentDidRender(){if(s()){await c(500);await this.validateWcag()}}render(){const o=this.labelTag;return e(t,{key:"84a5d08945676342cee3267da8709188ff62ecc8",class:this.h.classes(g.rootPrompt),open:this.open},e("dialog",{key:"bafc4b917fbbb1dc2e575b1c7fadc039df2e0071",class:g.dialog,hidden:!this.open,tabindex:"-1",open:this.open,"aria-modal":"true","aria-hidden":d(!this.open),"aria-labelledby":this.wcagLabelledBy||this.labelId,"aria-describedby":this.wcagDescribedBy||this.contentId,role:this.role},e("div",{key:"ba6e9b9a91a0c2d663313d827ab520bc49c2b4d1",class:g.inner},e("div",{key:"ca1a7f05d562d883bf9ea0f467d695eeb2635b88",class:g.header},this.h.hasSlot("icon")&&e("div",{class:g.icon},e("slot",{name:"icon"})),this.label&&e(o,{class:g.title,id:this.labelId},this.label),e("gov-button",{key:"adf90e2a1603c8f73ff94e6300ae30d697e6086a",class:g.close,variant:"primary",wcagLabel:this.wcagCloseLabel,wcagLabelledBy:this.wcagCloseLabelledBy,type:"base","on-gov-click":this.onCloseHandler.bind(this)},e("gov-icon",{key:"24b3595916c4e2c588cf56a172d3c33135185a75",name:"x-lg"}))),e("div",{key:"877c52498bc408ff40db7cb5f50e262e86ff7c9b",class:g.content,id:this.contentId},e("slot",{key:"8f9f3466f037febbfb8b0b4f89d082c7a1b5123e"})),e("div",{key:"632d15842829f857e5595f06631e33f816caa505",class:g.actions},e("slot",{key:"f6d7e1ddfdac79e68b2f7ac2a459ff6ce9f0d85b",name:"actions"})))),this.open?e("gov-backdrop",{"wcag-label":this.wcagCloseLabel,"wcag-labelled-by":this.wcagCloseLabelledBy,"on-gov-click":this.onCloseHandler.bind(this)}):null)}onCloseHandler(o){o.stopPropagation();this.hideModal();this.govClose.emit(o)}async show(){this.showModal()}async hide(){this.hideModal()}async validateWcag(){n(this.wcagLabelledBy,"wcag-labelled-by",g.root);n(this.wcagDescribedBy,"wcag-described-by",g.root)}get host(){return i(this)}static get watchers(){return{labelTag:["validateLabelTag"],open:["watchOpen"]}}};f.style=v;export{f as gov_prompt};
//# sourceMappingURL=p-e5df1da2.entry.js.map