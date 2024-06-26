import{r as e,c as t,h as i,a as o,g as r}from"./p-3336fe3b.js";import{g as l,c as s,d as c,e as n}from"./p-7670cb34.js";import{g as a,a as m,t as g}from"./p-8a8117a5.js";import{c as v}from"./p-32d89c78.js";import{v as u}from"./p-bc59b609.js";import{a as f,b as d}from"./p-b24413c7.js";import{c as h,r as p}from"./p-4029f0cb.js";import{d as z}from"./p-2b6bbee5.js";import"./p-1693d6aa.js";import"./p-55e78f21.js";import"./p-e55a8f78.js";import"./p-9fa54181.js";import"./p-1e979cc8.js";import"./p-40f10385.js";const x=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);const b='.gov-form-multi-select__list{margin:0;padding:0}.gov-form-multi-select__list>.gov-form-multi-select__item{margin:0;padding:0;background:none}.gov-form-multi-select__list>.gov-form-multi-select__item::before{display:none}.gov-spin-animation,.gov-pseudo-spin-animation::before{animation:spin 4s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}@keyframes countdown{to{transform:scaleX(0)}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}.gov-form-multi-select{position:relative;display:flex;width:100%;align-items:center}.gov-form-multi-select .element{position:relative;display:flex;flex:1 1 auto}.gov-form-multi-select input,.gov-form-multi-select select,.gov-form-multi-select textarea{width:100%;border-radius:var(--gov-border-radius, 0.1875rem);background-color:var(--gov-form-bg-color, var(--gov-color-neutral-white));font-family:var(--gov-font-family, "Roboto", sans-serif)}.gov-form-multi-select input:focus,.gov-form-multi-select select:focus,.gov-form-multi-select textarea:focus{outline:none}.gov-form-multi-select input:focus-visible,.gov-form-multi-select select:focus-visible,.gov-form-multi-select textarea:focus-visible{border-radius:var(--gov-border-radius, 0.1875rem);outline:var(--gov-outline-width, 0.125rem) solid var(--gov-color-focus-base);outline-offset:0}.gov-form-multi-select input::-moz-placeholder,.gov-form-multi-select select::-moz-placeholder,.gov-form-multi-select textarea::-moz-placeholder{color:var(--gov-form-placeholder-color, var(--gov-color-secondary-600))}.gov-form-multi-select input::placeholder,.gov-form-multi-select select::placeholder,.gov-form-multi-select textarea::placeholder{color:var(--gov-form-placeholder-color, var(--gov-color-secondary-600))}.gov-form-multi-select textarea{font-weight:var(--gov-text-m-font-weight);font-size:var(--gov-text-m-font-size);line-height:var(--gov-text-m-line-height);letter-spacing:var(--gov-text-m-letter-spacing);padding:0.5rem 0.75rem;resize:none}.gov-form-multi-select *[slot=left-icon],.gov-form-multi-select *[slot=right-icon]{position:absolute;top:50%;display:flex;justify-content:center;transform:translateY(-50%);pointer-events:none}.gov-form-multi-select *[slot=left-icon]{left:0}.gov-form-multi-select *[slot=right-icon]{right:0}.gov-form-multi-select *[slot=prefix],.gov-form-multi-select *[slot=sufix]{margin:0}[size=s].gov-form-multi-select{font-weight:var(--gov-text-s-font-weight);font-size:var(--gov-text-s-font-size);line-height:var(--gov-text-s-line-height);letter-spacing:var(--gov-text-s-letter-spacing);gap:0.5rem var(--gov-form-input-core-s-icon-size, 1rem)}[size=s].gov-form-multi-select input,[size=s].gov-form-multi-select select{font-weight:var(--gov-text-s-font-weight);font-size:var(--gov-text-s-font-size);line-height:var(--gov-text-s-line-height);letter-spacing:var(--gov-text-s-letter-spacing);height:var(--gov-form-input-core-s-height, 2rem);padding:var(--gov-form-input-core-s-padding, 0.25rem 0.75rem)}[size=s].gov-form-multi-select *[slot=left-icon],[size=s].gov-form-multi-select *[slot=right-icon]{width:var(--gov-form-input-core-s-icon-size, 1rem);height:var(--gov-form-input-core-s-icon-size, 1rem)}[size=s].gov-form-multi-select *[slot=left-icon]{left:calc((var(--gov-form-input-core-s-icon-padding, 2rem) - var(--gov-form-input-core-s-icon-size, 1rem)) / 2)}[size=s].gov-form-multi-select *[slot=left-icon]~input{padding-left:var(--gov-form-input-core-s-icon-padding, 2rem)}[size=s].gov-form-multi-select *[slot=right-icon]{right:calc((var(--gov-form-input-core-s-icon-padding, 2rem) - var(--gov-form-input-core-s-icon-size, 1rem)) / 2)}[size=s].gov-form-multi-select *[slot=right-icon]~input,[size=s].gov-form-multi-select *[slot=right-icon]~select{padding-right:var(--gov-form-input-core-s-icon-padding, 2rem)}[size=m].gov-form-multi-select{font-weight:var(--gov-text-m-font-weight);font-size:var(--gov-text-m-font-size);line-height:var(--gov-text-m-line-height);letter-spacing:var(--gov-text-m-letter-spacing);gap:0.5rem var(--gov-form-input-core-m-icon-size, 1rem)}[size=m].gov-form-multi-select input,[size=m].gov-form-multi-select select{font-weight:var(--gov-text-m-font-weight);font-size:var(--gov-text-m-font-size);line-height:var(--gov-text-m-line-height);letter-spacing:var(--gov-text-m-letter-spacing);height:var(--gov-form-input-core-m-height, 2.5rem);padding:var(--gov-form-input-core-m-padding, 0.4375rem 0.75rem)}[size=m].gov-form-multi-select *[slot=left-icon],[size=m].gov-form-multi-select *[slot=right-icon]{width:var(--gov-form-input-core-m-icon-size, 1rem);height:var(--gov-form-input-core-m-icon-size, 1rem)}[size=m].gov-form-multi-select *[slot=left-icon]{left:calc((var(--gov-form-input-core-m-icon-padding, 2.5rem) - var(--gov-form-input-core-m-icon-size, 1rem)) / 2)}[size=m].gov-form-multi-select *[slot=left-icon]~input{padding-left:var(--gov-form-input-core-m-icon-padding, 2.5rem)}[size=m].gov-form-multi-select *[slot=right-icon]{right:calc((var(--gov-form-input-core-m-icon-padding, 2.5rem) - var(--gov-form-input-core-m-icon-size, 1rem)) / 2)}[size=m].gov-form-multi-select *[slot=right-icon]~input,[size=m].gov-form-multi-select *[slot=right-icon]~select{padding-right:var(--gov-form-input-core-m-icon-padding, 2.5rem)}[size=l].gov-form-multi-select{font-weight:var(--gov-text-m-font-weight);font-size:var(--gov-text-m-font-size);line-height:var(--gov-text-m-line-height);letter-spacing:var(--gov-text-m-letter-spacing);gap:0.5rem var(--gov-form-input-core-l-icon-size, 1rem)}[size=l].gov-form-multi-select input,[size=l].gov-form-multi-select select{font-weight:var(--gov-text-m-font-weight);font-size:var(--gov-text-m-font-size);line-height:var(--gov-text-m-line-height);letter-spacing:var(--gov-text-m-letter-spacing);height:var(--gov-form-input-core-l-height, 3rem);padding:var(--gov-form-input-core-l-padding, 0.6875rem 0.75rem)}[size=l].gov-form-multi-select *[slot=left-icon],[size=l].gov-form-multi-select *[slot=right-icon]{width:var(--gov-form-input-core-l-icon-size, 1rem);height:var(--gov-form-input-core-l-icon-size, 1rem)}[size=l].gov-form-multi-select *[slot=left-icon]{left:calc((var(--gov-form-input-core-l-icon-padding, 2.5rem) - var(--gov-form-input-core-l-icon-size, 1rem)) / 2)}[size=l].gov-form-multi-select *[slot=left-icon]~input{padding-left:var(--gov-form-input-core-l-icon-padding, 2.5rem)}[size=l].gov-form-multi-select *[slot=right-icon]{right:calc((var(--gov-form-input-core-l-icon-padding, 2.5rem) - var(--gov-form-input-core-l-icon-size, 1rem)) / 2)}[size=l].gov-form-multi-select *[slot=right-icon]~input,[size=l].gov-form-multi-select *[slot=right-icon]~select{padding-right:var(--gov-form-input-core-l-icon-padding, 2.5rem)}[size=xl].gov-form-multi-select{font-weight:var(--gov-text-l-font-weight);font-size:var(--gov-text-l-font-size);line-height:var(--gov-text-l-line-height);letter-spacing:var(--gov-text-l-letter-spacing);gap:0.5rem var(--gov-form-input-core-xl-icon-size, 1.25rem)}[size=xl].gov-form-multi-select input,[size=xl].gov-form-multi-select select{font-weight:var(--gov-text-l-font-weight);font-size:var(--gov-text-l-font-size);line-height:var(--gov-text-l-line-height);letter-spacing:var(--gov-text-l-letter-spacing);height:var(--gov-form-input-core-xl-height, 3.5rem);padding:var(--gov-form-input-core-xl-padding, 0.9375rem 1rem 0.875rem)}[size=xl].gov-form-multi-select *[slot=left-icon],[size=xl].gov-form-multi-select *[slot=right-icon]{width:var(--gov-form-input-core-xl-icon-size, 1.25rem);height:var(--gov-form-input-core-xl-icon-size, 1.25rem)}[size=xl].gov-form-multi-select *[slot=left-icon]{left:calc((var(--gov-form-input-core-xl-icon-padding, 3rem) - var(--gov-form-input-core-xl-icon-size, 1.25rem)) / 2)}[size=xl].gov-form-multi-select *[slot=left-icon]~input{padding-left:var(--gov-form-input-core-xl-icon-padding, 3rem)}[size=xl].gov-form-multi-select *[slot=right-icon]{right:calc((var(--gov-form-input-core-xl-icon-padding, 3rem) - var(--gov-form-input-core-xl-icon-size, 1.25rem)) / 2)}[size=xl].gov-form-multi-select *[slot=right-icon]~input,[size=xl].gov-form-multi-select *[slot=right-icon]~select{padding-right:var(--gov-form-input-core-xl-icon-padding, 3rem)}[variant=primary].gov-form-multi-select input,[variant=primary].gov-form-multi-select select,[variant=primary].gov-form-multi-select textarea{color:var(--gov-form-input-color-primary, var(--gov-color-secondary-700));border:var(--gov-form-input-border-primary, 0.0625rem solid var(--gov-color-primary-600))}[variant=primary].gov-form-multi-select *[slot=left-icon],[variant=primary].gov-form-multi-select *[slot=right-icon]:not(.icon-arrow){color:var(--gov-form-input-icon-color-primary, var(--gov-color-primary))}[variant=secondary].gov-form-multi-select input,[variant=secondary].gov-form-multi-select select,[variant=secondary].gov-form-multi-select textarea{color:var(--gov-form-input-color-secondary, var(--gov-color-secondary-700));border:var(--gov-form-input-border-secondary, 0.0625rem solid var(--gov-color-secondary-700))}[variant=secondary].gov-form-multi-select *[slot=left-icon],[variant=secondary].gov-form-multi-select *[slot=right-icon]:not(.icon-arrow){color:var(--gov-form-input-icon-color-secondary, var(--gov-color-primary))}[disabled=""].gov-form-multi-select,[disabled=true i].gov-form-multi-select,[disabled="1"].gov-form-multi-select{pointer-events:none}[disabled=""].gov-form-multi-select input,[disabled=""].gov-form-multi-select select,[disabled=""].gov-form-multi-select textarea,[disabled=true i].gov-form-multi-select input,[disabled=true i].gov-form-multi-select select,[disabled=true i].gov-form-multi-select textarea,[disabled="1"].gov-form-multi-select input,[disabled="1"].gov-form-multi-select select,[disabled="1"].gov-form-multi-select textarea{border-color:var(--gov-form-state-color-disabled, var(--gov-color-secondary-600));background:var(--gov-form-input-disabled-bg, var(--gov-color-secondary-300));color:var(--gov-form-state-color-disabled, var(--gov-color-secondary-600))}[disabled=""].gov-form-multi-select *[slot=left-icon],[disabled=""].gov-form-multi-select *[slot=right-icon],[disabled=true i].gov-form-multi-select *[slot=left-icon],[disabled=true i].gov-form-multi-select *[slot=right-icon],[disabled="1"].gov-form-multi-select *[slot=left-icon],[disabled="1"].gov-form-multi-select *[slot=right-icon]{color:var(--gov-form-state-color-disabled, var(--gov-color-secondary-600)) !important}[invalid=""].gov-form-multi-select input,[invalid=""].gov-form-multi-select select,[invalid=""].gov-form-multi-select textarea,[invalid=true i].gov-form-multi-select input,[invalid=true i].gov-form-multi-select select,[invalid=true i].gov-form-multi-select textarea,[invalid="1"].gov-form-multi-select input,[invalid="1"].gov-form-multi-select select,[invalid="1"].gov-form-multi-select textarea{border-color:var(--gov-form-state-color-error, var(--gov-color-error));color:var(--gov-form-state-color-error, var(--gov-color-error))}[invalid=""].gov-form-multi-select input::-moz-placeholder,[invalid=""].gov-form-multi-select select::-moz-placeholder,[invalid=""].gov-form-multi-select textarea::-moz-placeholder,[invalid=true i].gov-form-multi-select input::-moz-placeholder,[invalid=true i].gov-form-multi-select select::-moz-placeholder,[invalid=true i].gov-form-multi-select textarea::-moz-placeholder,[invalid="1"].gov-form-multi-select input::-moz-placeholder,[invalid="1"].gov-form-multi-select select::-moz-placeholder,[invalid="1"].gov-form-multi-select textarea::-moz-placeholder{color:var(--gov-form-state-color-error, var(--gov-color-error-300))}[invalid=""].gov-form-multi-select input::placeholder,[invalid=""].gov-form-multi-select select::placeholder,[invalid=""].gov-form-multi-select textarea::placeholder,[invalid=true i].gov-form-multi-select input::placeholder,[invalid=true i].gov-form-multi-select select::placeholder,[invalid=true i].gov-form-multi-select textarea::placeholder,[invalid="1"].gov-form-multi-select input::placeholder,[invalid="1"].gov-form-multi-select select::placeholder,[invalid="1"].gov-form-multi-select textarea::placeholder{color:var(--gov-form-state-color-error, var(--gov-color-error-300))}[invalid=""].gov-form-multi-select *[slot=left-icon],[invalid=""].gov-form-multi-select *[slot=right-icon],[invalid=true i].gov-form-multi-select *[slot=left-icon],[invalid=true i].gov-form-multi-select *[slot=right-icon],[invalid="1"].gov-form-multi-select *[slot=left-icon],[invalid="1"].gov-form-multi-select *[slot=right-icon]{color:var(--gov-form-state-color-error, var(--gov-color-error)) !important}[invalid=""].gov-form-multi-select *[slot=right-icon]:not(.icon-validation):not(.icon-arrow),[invalid=true i].gov-form-multi-select *[slot=right-icon]:not(.icon-validation):not(.icon-arrow),[invalid="1"].gov-form-multi-select *[slot=right-icon]:not(.icon-validation):not(.icon-arrow){display:none}[success=""].gov-form-multi-select *[slot=right-icon]:not(.icon-arrow),[success=true i].gov-form-multi-select *[slot=right-icon]:not(.icon-arrow),[success="1"].gov-form-multi-select *[slot=right-icon]:not(.icon-arrow){color:var(--gov-form-state-color-success, var(--gov-color-success))}[success=""].gov-form-multi-select *[slot=right-icon]:not(.icon-validation):not(.icon-arrow),[success=true i].gov-form-multi-select *[slot=right-icon]:not(.icon-validation):not(.icon-arrow),[success="1"].gov-form-multi-select *[slot=right-icon]:not(.icon-validation):not(.icon-arrow){display:none}[multiline=""].gov-form-multi-select *[slot=left-icon],[multiline=""].gov-form-multi-select *[slot=right-icon],[multiline=true i].gov-form-multi-select *[slot=left-icon],[multiline=true i].gov-form-multi-select *[slot=right-icon],[multiline="1"].gov-form-multi-select *[slot=left-icon],[multiline="1"].gov-form-multi-select *[slot=right-icon]{display:none}.gov-form-multi-select{background:none}.gov-form-multi-select select{-webkit-appearance:none;-moz-appearance:none}.gov-form-multi-select select::-ms-expand{display:none}[size=s].gov-form-multi-select *[slot=right-icon]{right:var(--gov-form-select-s-arrow-right-position, 0.75rem);width:var(--gov-form-select-s-arrow-size, 0.75rem);height:var(--gov-form-select-s-arrow-size, 0.75rem)}[size=s][invalid=""].gov-form-multi-select .icon-arrow,[size=s][invalid=true i].gov-form-multi-select .icon-arrow,[size=s][invalid="1"].gov-form-multi-select .icon-arrow{right:calc(3 * var(--gov-form-select-s-arrow-right-position, 0.75rem))}[size=s][success=""].gov-form-multi-select .icon-arrow,[size=s][success=true i].gov-form-multi-select .icon-arrow,[size=s][success="1"].gov-form-multi-select .icon-arrow{right:calc(3 * var(--gov-form-select-s-arrow-right-position, 0.75rem))}[size=m].gov-form-multi-select *[slot=right-icon]{right:var(--gov-form-select-m-arrow-right-position, 1rem);width:var(--gov-form-select-m-arrow-size, 0.75rem);height:var(--gov-form-select-m-arrow-size, 0.75rem)}[size=m][invalid=""].gov-form-multi-select .icon-arrow,[size=m][invalid=true i].gov-form-multi-select .icon-arrow,[size=m][invalid="1"].gov-form-multi-select .icon-arrow{right:calc(3 * var(--gov-form-select-m-arrow-right-position, 1rem))}[size=m][success=""].gov-form-multi-select .icon-arrow,[size=m][success=true i].gov-form-multi-select .icon-arrow,[size=m][success="1"].gov-form-multi-select .icon-arrow{right:calc(3 * var(--gov-form-select-m-arrow-right-position, 1rem))}[size=l].gov-form-multi-select *[slot=right-icon]{right:var(--gov-form-select-l-arrow-right-position, 1rem);width:var(--gov-form-select-l-arrow-size, 1rem);height:var(--gov-form-select-l-arrow-size, 1rem)}[size=l][invalid=""].gov-form-multi-select .icon-arrow,[size=l][invalid=true i].gov-form-multi-select .icon-arrow,[size=l][invalid="1"].gov-form-multi-select .icon-arrow{right:calc(3 * var(--gov-form-select-l-arrow-right-position, 1rem))}[size=l][success=""].gov-form-multi-select .icon-arrow,[size=l][success=true i].gov-form-multi-select .icon-arrow,[size=l][success="1"].gov-form-multi-select .icon-arrow{right:calc(3 * var(--gov-form-select-l-arrow-right-position, 1rem))}[size=xl].gov-form-multi-select *[slot=right-icon]{right:var(--gov-form-select-xl-arrow-right-position, 1.3125rem);width:var(--gov-form-select-xl-arrow-size, 1rem);height:var(--gov-form-select-xl-arrow-size, 1rem)}[size=xl][invalid=""].gov-form-multi-select .icon-arrow,[size=xl][invalid=true i].gov-form-multi-select .icon-arrow,[size=xl][invalid="1"].gov-form-multi-select .icon-arrow{right:calc(3 * var(--gov-form-select-xl-arrow-right-position, 1.3125rem))}[size=xl][success=""].gov-form-multi-select .icon-arrow,[size=xl][success=true i].gov-form-multi-select .icon-arrow,[size=xl][success="1"].gov-form-multi-select .icon-arrow{right:calc(3 * var(--gov-form-select-xl-arrow-right-position, 1.3125rem))}[size=s][invalid=""].gov-form-multi-select *[slot=right-icon]~select,[size=s][invalid=""].gov-form-multi-select *[slot=right-icon]~input,[size=s][invalid=true i].gov-form-multi-select *[slot=right-icon]~select,[size=s][invalid=true i].gov-form-multi-select *[slot=right-icon]~input,[size=s][invalid="1"].gov-form-multi-select *[slot=right-icon]~select,[size=s][invalid="1"].gov-form-multi-select *[slot=right-icon]~input{padding-right:calc(2 * var(--gov-form-input-core-s-icon-padding, 2rem))}[size=s][success=""].gov-form-multi-select *[slot=right-icon]~select,[size=s][success=""].gov-form-multi-select *[slot=right-icon]~input,[size=s][success=true i].gov-form-multi-select *[slot=right-icon]~select,[size=s][success=true i].gov-form-multi-select *[slot=right-icon]~input,[size=s][success="1"].gov-form-multi-select *[slot=right-icon]~select,[size=s][success="1"].gov-form-multi-select *[slot=right-icon]~input{padding-right:calc(2 * var(--gov-form-input-core-s-icon-padding, 2rem))}[size=m][invalid=""].gov-form-multi-select *[slot=right-icon]~select,[size=m][invalid=""].gov-form-multi-select *[slot=right-icon]~input,[size=m][invalid=true i].gov-form-multi-select *[slot=right-icon]~select,[size=m][invalid=true i].gov-form-multi-select *[slot=right-icon]~input,[size=m][invalid="1"].gov-form-multi-select *[slot=right-icon]~select,[size=m][invalid="1"].gov-form-multi-select *[slot=right-icon]~input{padding-right:calc(2 * var(--gov-form-input-core-m-icon-padding, 2.5rem))}[size=m][success=""].gov-form-multi-select *[slot=right-icon]~select,[size=m][success=""].gov-form-multi-select *[slot=right-icon]~input,[size=m][success=true i].gov-form-multi-select *[slot=right-icon]~select,[size=m][success=true i].gov-form-multi-select *[slot=right-icon]~input,[size=m][success="1"].gov-form-multi-select *[slot=right-icon]~select,[size=m][success="1"].gov-form-multi-select *[slot=right-icon]~input{padding-right:calc(2 * var(--gov-form-input-core-m-icon-padding, 2.5rem))}[size=l][invalid=""].gov-form-multi-select *[slot=right-icon]~select,[size=l][invalid=""].gov-form-multi-select *[slot=right-icon]~input,[size=l][invalid=true i].gov-form-multi-select *[slot=right-icon]~select,[size=l][invalid=true i].gov-form-multi-select *[slot=right-icon]~input,[size=l][invalid="1"].gov-form-multi-select *[slot=right-icon]~select,[size=l][invalid="1"].gov-form-multi-select *[slot=right-icon]~input{padding-right:calc(2 * var(--gov-form-input-core-l-icon-padding, 2.5rem))}[size=l][success=""].gov-form-multi-select *[slot=right-icon]~select,[size=l][success=""].gov-form-multi-select *[slot=right-icon]~input,[size=l][success=true i].gov-form-multi-select *[slot=right-icon]~select,[size=l][success=true i].gov-form-multi-select *[slot=right-icon]~input,[size=l][success="1"].gov-form-multi-select *[slot=right-icon]~select,[size=l][success="1"].gov-form-multi-select *[slot=right-icon]~input{padding-right:calc(2 * var(--gov-form-input-core-l-icon-padding, 2.5rem))}[size=xl][invalid=""].gov-form-multi-select *[slot=right-icon]~select,[size=xl][invalid=""].gov-form-multi-select *[slot=right-icon]~input,[size=xl][invalid=true i].gov-form-multi-select *[slot=right-icon]~select,[size=xl][invalid=true i].gov-form-multi-select *[slot=right-icon]~input,[size=xl][invalid="1"].gov-form-multi-select *[slot=right-icon]~select,[size=xl][invalid="1"].gov-form-multi-select *[slot=right-icon]~input{padding-right:calc(2 * var(--gov-form-input-core-xl-icon-padding, 3rem))}[size=xl][success=""].gov-form-multi-select *[slot=right-icon]~select,[size=xl][success=""].gov-form-multi-select *[slot=right-icon]~input,[size=xl][success=true i].gov-form-multi-select *[slot=right-icon]~select,[size=xl][success=true i].gov-form-multi-select *[slot=right-icon]~input,[size=xl][success="1"].gov-form-multi-select *[slot=right-icon]~select,[size=xl][success="1"].gov-form-multi-select *[slot=right-icon]~input{padding-right:calc(2 * var(--gov-form-input-core-xl-icon-padding, 3rem))}.gov-form-multi-select{flex-wrap:wrap}.gov-form-multi-select__wrap{display:flex;gap:0.5rem;width:100%}.gov-form-multi-select__list{font-weight:var(--gov-text-xs-font-weight);font-size:var(--gov-text-xs-font-size);line-height:var(--gov-text-xs-line-height);letter-spacing:var(--gov-text-xs-letter-spacing);display:flex;gap:0.5rem;flex-wrap:wrap}.gov-form-multi-select__list>.gov-form-multi-select__item{position:relative;display:flex;flex:0 0 auto;align-items:center;padding:0rem 0rem 0rem 0.5rem;background:var(--gov-form-multiselect-bg, var(--gov-color-primary-200));transition:150ms linear background-color}';const w=b;const y=class{constructor(i){e(this,i);this.govFocus=t(this,"gov-focus",7);this.govBlur=t(this,"gov-blur",7);this.govChange=t(this,"gov-change",7);this.govSelect=t(this,"gov-select",7);this.govRemove=t(this,"gov-remove",7);this.identifier=undefined;this.placeholder=undefined;this.variant=undefined;this.size="m";this.name=undefined;this.hideSelectedList=false;this.required=false;this.disabled=false;this.invalid=undefined;this.success=undefined;this.messageEmpty="Nebyly nalezeny žádné výsledky";this.messageLoading="Načítám...";this.wcagDescribedBy=undefined;this.wcagLabelledBy=undefined;this.wcagOwns=undefined;this.focused=undefined;this.value=undefined;this.selectedOptions=[];this.options=[];this.selectId=h("GovSelect");this.listId=h("GovMultiList");this.h=a(this.host);this.f=l(this.h)}validateVariant(e){u(c,e,s.root)}validateSize(e){u(n,e,s.root)}watchDisabled(){this.passControlAttrs()}passControlAttrs(){this.f.passAttrToControl("size",this.size);this.f.passAttrToControl("disabled",m(this.disabled));this.f.passAttrToControl("invalid",m(this.invalid));this.f.passAttrToControl("success",m(this.success))}componentWillLoad(){this.validateVariant(this.variant);this.validateSize(this.size);this.watchDisabled()}getAvailableOptions(){if(Array.isArray(this.options)&&this.options.length){return this.options.filter((e=>{const t=this.selectedOptions.findIndex((t=>t.value===e.value));return t!==-1||(e===null||e===void 0?void 0:e.disabled)?false:true}))}return Array.from(this.selectRef.querySelectorAll("option")).filter((e=>!(e.disabled||e.selected))).map((e=>({name:e.textContent,value:e.value})))}initAutocomplete(){this.autocompleteRef.addEventListener("gov-select",this.onSelectHandler.bind(this));this.autocompleteRef.addEventListener("gov-input",this.onInputHandler.bind(this));this.autocompleteRef.addEventListener("gov-focus",this.onFocusHandler.bind(this));this.autocompleteRef.addEventListener("gov-blur",this.onBlurHandler.bind(this));this.autocompleteRef.setSearchCallback((e=>new Promise((t=>{const i=this.getAvailableOptions();if(String(e).length===0){return t(i)}t(i.filter((({name:t})=>{if(!t)return false;return p(t).toLowerCase().indexOf(p(e).toLowerCase())>-1})))})))).then()}getOptionIndex(e){return this.selectedOptions.findIndex((t=>t.value===e.value&&t.name===e.name))}getOptionElement(e){return this.selectRef.querySelector('option[value="'+e.value+'"]')}selectOption(e,t=true){const i=this.getOptionIndex(e);if(i===-1){this.selectedOptions=[...this.selectedOptions,e];if(t){this.govChange.emit({component:s.root,value:this.selectedOptions});this.govSelect.emit({component:s.root,value:this.selectedOptions})}const i=this.getOptionElement(e);if(i){i.selected=true}}}removeOption(e,t=true){const i=this.getOptionIndex(e);if(i!==-1){this.selectedOptions.splice(i,1);this.selectedOptions=[...this.selectedOptions];if(t){this.govChange.emit({component:s.root,value:this.selectedOptions});this.govRemove.emit({component:s.root,value:this.selectedOptions})}const o=this.getOptionElement(e);if(o){o.selected=false}}}async componentDidLoad(){this.initAutocomplete();if(v()){await z(500);await this.validateWcag()}}async componentDidRender(){this.selectRef.querySelectorAll("option").forEach((e=>{if(e.selected){this.selectOption({name:e.textContent,value:e.value},false)}}))}render(){return i(o,{key:"a97b10412ea6b0f2f7dc108034283b60a84cfaae",class:s.root,size:this.size,variant:this.variant},i("div",{key:"b9bec05b8fb3bf50d3a7dbf3aedab3c66e064964",class:s.wrap},i("div",{key:"71750ef29924924554af44ff7d186d7ab1b8229f",class:"element"},i("gov-form-autocomplete",{key:"c7fb2e13327afde4a8ccb49abc28f056c01f5ef4",value:this.value,disabled:this.disabled,identifier:this.identifier||this.selectId,required:false,size:this.size,variant:this.variant,placeholder:this.placeholder,"message-empty":this.messageEmpty,"message-loading":this.messageLoading,ref:e=>this.autocompleteRef=e,minlength:0,wcagDescribedBy:this.wcagDescribedBy,wcagLabelledBy:this.wcagLabelledBy,wcagOwns:this.listId}),i("gov-icon",{key:"b5b1ca44291c420fbb9a76528b885aab0973d186",slot:"right-icon",class:"icon-arrow",name:"chevron-down"}),this.h.hasSlot("right-icon")&&!(this.success||this.invalid)&&i("slot",{name:"right-icon"}),this.success&&i("gov-icon",{slot:"right-icon",class:"icon-validation",name:"check-lg"}),this.invalid&&i("gov-icon",{slot:"right-icon",class:"icon-validation",name:"exclamation-lg"}),i("select",{key:"3deddb2b22e5f1ad2d733bcf340a0862513aebc8",hidden:true,"aria-hidden":m(true),multiple:true,required:this.required,name:this.name,disabled:this.disabled,ref:e=>this.selectRef=e,"aria-disabled":g(this.disabled),"aria-required":g(this.required),"aria-invalid":g(this.invalid),"aria-describedby":this.wcagDescribedBy,"aria-labelledby":this.wcagLabelledBy,"aria-owns":this.wcagOwns},i("slot",{key:"c1b7cd6cf47aa86db6ab5a8326db9d78e84148eb"}),this.options.map((e=>i("option",{value:e.value,selected:e.value===this.value,disabled:e===null||e===void 0?void 0:e.disabled},e.name)))))),this.hideSelectedList===false?i("ul",{role:"listbox",id:this.listId,class:s.list},this.selectedOptions.map((e=>i("li",{class:s.item,role:"option"},e.name,i("gov-button",{wcagLabel:"Odebrat vybranou položku "+e.name,variant:"primary",type:"base",size:"s","on-gov-click":()=>this.onTagRemove(e)},i("gov-icon",{name:"x-lg"})))))):null)}onFocusHandler(e){e.stopPropagation();this.focused=true;this.govFocus.emit({component:s.root,originalEvent:e,value:this.selectedOptions})}onBlurHandler(e){e.stopPropagation();e.stopPropagation();this.focused=false;this.govBlur.emit({component:s.root,originalEvent:e,value:this.selectedOptions})}onInputHandler(e){this.value=e.detail.value;e.stopPropagation()}onSelectHandler(e){e.stopPropagation();const t=e.detail.selected;this.selectOption(t);this.value="";this.autocompleteRef.clearValue();this.autocompleteRef.focus()}onTagRemove(e){this.removeOption(e)}async setFocus(e){return this.selectRef.focus(e)}async setValue(e){this.value=e}async getRef(){return this.selectRef}async getSelectedOptions(){return this.selectedOptions}async setOptions(e){if(Array.isArray(e)){this.options=e}}async setSelectedOptions(e){if(Array.isArray(e)){this.selectedOptions=e}}async removeSelectedOption(e,t=false){if(typeof e==="object"&&x(e,"name")&&x(e,"value")){this.removeOption(e,t)}}async setSelectedOption(e,t=false){if(typeof e==="object"&&x(e,"name")&&x(e,"value")){this.selectOption(e,t)}}async validateWcag(){f(this.wcagDescribedBy,"wcag-described-by",s.root);f(this.wcagLabelledBy,"wcag-labelled-by",s.root);f(this.wcagOwns,"wcag-owns",s.root);d(this.identifier||this.selectId,this.wcagLabelledBy,s.root)}get host(){return r(this)}static get watchers(){return{variant:["validateVariant"],size:["validateSize","watchDisabled"],disabled:["watchDisabled"],invalid:["watchDisabled"],success:["watchDisabled"]}}};y.style=w;export{y as gov_form_multi_select};
//# sourceMappingURL=p-cb1e975d.entry.js.map