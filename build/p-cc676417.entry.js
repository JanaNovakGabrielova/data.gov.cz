import{r as e,c as o,h as r,a,g as t}from"./p-3336fe3b.js";import{v as i}from"./p-b24413c7.js";import{c as s}from"./p-32d89c78.js";import{d as n}from"./p-2b6bbee5.js";import{g as c}from"./p-8a8117a5.js";import"./p-40f10385.js";import"./p-4029f0cb.js";const d={root:"gov-breadcrumbs"};const b=".gov-breadcrumbs ul{margin:0;padding:0}.gov-breadcrumbs li{margin:0;padding:0;background:none}.gov-breadcrumbs li::before{display:none}.gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-breadcrumbs ul{position:relative;display:flex;width:100%;padding-bottom:0.3125rem;overflow-x:auto;flex-wrap:wrap}.gov-breadcrumbs li{display:flex;justify-content:flex-start;align-items:center;white-space:nowrap}.gov-breadcrumbs button{font-weight:var(--gov-text-m-font-weight);font-size:var(--gov-text-m-font-size);line-height:var(--gov-text-m-line-height);letter-spacing:var(--gov-text-m-letter-spacing);padding:0;border:none;background:none;color:var(--gov-breadcrumbs-link-color, var(--gov-color-primary));text-decoration:underline}.gov-breadcrumbs button:hover{text-decoration:none}.gov-breadcrumbs .gov-icon{width:0.625rem;height:0.625rem;margin:0rem 1rem;color:var(--gov-breadcrumbs-arrow-color, var(--gov-color-secondary-600))}";const m=b;const g=class{constructor(r){e(this,r);this.govChange=o(this,"gov-change",7);this.collapsible=false;this.isExpanded=false;this.wcagLabel=undefined;this.wcagLabelledBy=undefined;this.h=c(this.host)}async componentDidRender(){if(s()){await n(500);await this.validateWcag()}}render(){return r(a,{key:"1a7362efa1a7f7bd06d93ed4b635799b8a181720",class:this.h.classes(d.root)},r("nav",{key:"edb6148271c5d3ec2c9c929573a99acfa4494d75","aria-label":this.wcagLabel,"aria-labelledby":this.wcagLabelledBy},r("slot",{key:"681558951e8ecfc73eb286019cba54cd9b29bf2b"})))}async validateWcag(){i(this.wcagLabel,this.wcagLabelledBy,d.root)}get host(){return t(this)}};g.style=m;export{g as gov_breadcrumbs};
//# sourceMappingURL=p-cc676417.entry.js.map