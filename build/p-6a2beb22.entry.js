import{r as e,h as o,a as i,g as t}from"./p-3336fe3b.js";import{a}from"./p-40f10385.js";import{a as r}from"./p-b4c087ba.js";const n='.gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-nav-item{display:block}.gov-nav-item__link{position:relative;display:block;padding:0.9375rem 3rem 0.9375rem 2.25rem;color:var(--gov-nav-color, var(--gov-color-neutral-white));text-decoration:none}.gov-nav-item__link:focus{outline:none}.gov-nav-item__link:focus-visible{border-radius:var(--gov-border-radius, 0.1875rem);outline:var(--gov-outline-width, 0.125rem) solid var(--gov-color-focus-base);outline-offset:0}.gov-nav-item__link:focus{outline-color:var(--gov-nav-color, var(--gov-color-neutral-white))}@media not all and (pointer: coarse){.gov-nav-item__link:hover{color:var(--gov-nav-color, var(--gov-color-neutral-white));text-decoration:underline}}@media (min-width: 48em){.gov-nav-item__link{display:inline-flex;justify-content:center;align-items:center;height:100%;padding:1.375rem 1.25rem 1.3125rem}.gov-nav-item__link::before{content:"";position:absolute;display:block;top:0;left:50%;width:0;height:0.125rem;background:var(--gov-nav-color, var(--gov-color-neutral-white));transform:translate(-50%);transition:width 150ms}@media not all and (pointer: coarse){.gov-nav-item__link:hover{text-decoration:none}.gov-nav-item__link:hover::before{width:100%}}}';const s=n;const l=class{constructor(o){e(this,o);this.isExpandedState=undefined;this.href=undefined}validateHref(e){if(!e){a(`[${r.root}]: Parameter href is required.`)}}componentWillLoad(){this.validateHref(this.href)}render(){return o(i,{key:"ac2f13f907e1a334f50d6cd518c935dfc4ffc59d",class:r.root,role:"listitem"},o("a",{key:"5a25f17c624f2078d006ba1267fb5e2afdb35487",href:this.href,class:r.link},o("slot",{key:"24334f56ddbfc19b35fba6ef770bb407d9fe7142"})))}get host(){return t(this)}static get watchers(){return{href:["validateHref"]}}};l.style=s;export{l as gov_nav_item};
//# sourceMappingURL=p-6a2beb22.entry.js.map