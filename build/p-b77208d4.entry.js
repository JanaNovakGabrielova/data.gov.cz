import{r as o,h as a,a as r,g as i}from"./p-3336fe3b.js";import{g as e}from"./p-8a8117a5.js";const c={root:"gov-cookiebar",holder:"gov-cookiebar__holder",content:"gov-cookiebar__content",actions:"gov-cookiebar__actions",actionsPrimary:"gov-cookiebar__actions-primary",actionsSecondary:"gov-cookiebar__actions-secondary"};const t=".gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-cookiebar{z-index:51;position:fixed;right:0;bottom:0;left:0;background-color:var(--gov-cookiebar-bg, var(--gov-color-neutral-white));box-shadow:var(--gov-cookiebar-box-shadow, 0 0.0625rem 2.5rem rgba(var(--gov-color-secondary-800-rgb), 0.45))}.gov-cookiebar__holder{display:block;width:100%;max-width:calc(var(--gov-container-width, 73.75rem) + 2 * var(--gov-container-padding, 2.5rem));margin-right:auto;margin-left:auto;padding-right:var(--gov-container-padding-mobile, 1.25rem);padding-left:var(--gov-container-padding-mobile, 1.25rem);padding-top:1.25rem;padding-bottom:1.25rem}@media (min-width: 48em){.gov-cookiebar__holder{padding-right:var(--gov-container-padding, 2.5rem);padding-left:var(--gov-container-padding, 2.5rem)}}.gov-cookiebar__holder>*{margin-bottom:0}.gov-cookiebar__holder>*+*{margin-top:2rem}.gov-cookiebar__content>*{margin-bottom:0}.gov-cookiebar__content>*+*{margin-top:0.75rem}.gov-cookiebar__content p{color:var(--gov-cookiebar-color, var(--gov-color-secondary-700));letter-spacing:0.0125em}.gov-cookiebar__actions,.gov-cookiebar__actions-primary,.gov-cookiebar__actions-secondary{display:flex;gap:0.625rem;flex-wrap:wrap;justify-content:space-between}@media (min-width: 48em){.gov-cookiebar__holder{padding-top:2rem;padding-bottom:2rem}.gov-cookiebar__actions,.gov-cookiebar__actions-primary,.gov-cookiebar__actions-secondary{gap:1rem}}";const n=t;const s=class{constructor(a){o(this,a);this.h=e(this.host)}render(){return a(r,{key:"a2499f2257ac968243fe1841456b35475c663129",class:this.h.classes(c.root)},a("div",{key:"04cbb4d3780bab0953eeccd7ce4dc3043e5ee3a5",class:c.holder},a("div",{key:"caf6ec18349f2b3d81fcf137038018572842fc1e",class:c.content},a("slot",{key:"ecadc222b7ba146d2ecbb57cef1d59b64312d24b"})),(this.h.hasSlot("actions-primary")||this.h.hasSlot("actions-secondary"))&&a("div",{class:c.actions},this.h.hasSlot("actions-primary")&&a("div",{class:c.actionsPrimary},a("slot",{name:"actions-primary"})),this.h.hasSlot("actions-secondary")&&a("div",{class:c.actionsSecondary},a("slot",{name:"actions-secondary"})))))}get host(){return i(this)}};s.style=n;export{s as gov_cookiebar};
//# sourceMappingURL=p-b77208d4.entry.js.map