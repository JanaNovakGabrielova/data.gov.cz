import{r as t,h as i,a as e,g as o}from"./p-3336fe3b.js";import{g as s}from"./p-8a8117a5.js";import{v as a}from"./p-bc59b609.js";import{a as n,c as r}from"./p-9604dcd4.js";import"./p-40f10385.js";import"./p-2b6bbee5.js";import"./p-55e78f21.js";const m=".gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-statsbar-item{position:relative;display:block;padding:1.25rem}.gov-statsbar-item__icon,.gov-statsbar-item__number{margin-bottom:1rem}.gov-statsbar-item__icon,.gov-statsbar-item__icon .gov-icon{display:block;width:2rem;height:2rem}.gov-statsbar-item__number{font-weight:var(--gov-text-5xl-font-weight);font-size:var(--gov-text-5xl-font-size);line-height:var(--gov-text-5xl-line-height);letter-spacing:var(--gov-text-5xl-letter-spacing)}.gov-statsbar-item__text{font-weight:var(--gov-text-xl-font-weight);font-size:var(--gov-text-xl-font-size);line-height:var(--gov-text-xl-line-height);letter-spacing:var(--gov-text-xl-letter-spacing);letter-spacing:0.0125em}.gov-statsbar-item__text>*:last-child{margin-bottom:0}.gov-statsbar-item[icon-position=left]{padding-left:3rem}.gov-statsbar-item[icon-position=left] .gov-statsbar-item__icon{position:absolute;top:1.5rem;left:0}@media (min-width: 30em){.gov-statsbar-item{flex:1 0 50%;max-width:50%}}@media (min-width: 48em){.gov-statsbar-item{padding:2.5rem}.gov-statsbar-item__icon,.gov-statsbar-item__icon .gov-icon{width:3rem;height:3rem}.gov-statsbar-item[icon-position=left]{padding-left:4rem}.gov-statsbar-item[icon-position=left] .gov-statsbar-item__icon{top:2.75rem}}@media (min-width: 64em){.gov-statsbar-item{flex-basis:auto;max-width:25%}}";const c=m;const g=class{constructor(i){t(this,i);this.iconPosition=undefined;this.h=s(this.host)}validateIconPosition(t){a(r,t,n.root)}componentWillLoad(){this.validateIconPosition(this.iconPosition)}render(){return i(e,{key:"18e71c721508c9bd673721bd35b28c9b9da49c5e",class:this.h.classes(n.root)},i("article",{key:"df5e814ef4230431836d158b56a3fb3b6a34341c"},this.h.hasSlot("icon")&&i("span",{class:n.icon},i("slot",{name:"icon"})),i("p",{key:"d02b79f0836e2bfe99fbf2150323f26f33b08252",class:n.number},i("slot",{key:"e46e9a9790c74cc55ff852f3cc6a216184377a39"})),this.h.hasSlot("text")&&i("div",{class:n.text},i("slot",{name:"text"}))))}get host(){return o(this)}static get watchers(){return{iconPosition:["validateIconPosition"]}}};g.style=c;export{g as gov_statsbar_item};
//# sourceMappingURL=p-a07c5078.entry.js.map