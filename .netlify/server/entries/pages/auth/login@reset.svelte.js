var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Login_reset
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cbebd36d = require("../../../chunks/index-cbebd36d.js");
var import_Cabecera_968729ba = require("../../../chunks/Cabecera-968729ba.js");
var import_stores_fafaecc9 = require("../../../chunks/stores-fafaecc9.js");
var loginOfficeDark = "/_app/assets/login-oficina-ef83d44d.jpeg";
var login_reset_svelte_svelte_type_style_lang = "";
const css = {
  code: ".input-float.svelte-1gav9fi.svelte-1gav9fi{--tw-border-opacity:1;border-color:hsl(var(--in) / var(--tw-border-opacity))\n}.input-float.svelte-1gav9fi.svelte-1gav9fi:focus{outline:2px solid hsl(var(--in))\n}.input-float.svelte-1gav9fi.svelte-1gav9fi{width:100%;padding-left:0.625rem;padding-right:0.625rem;padding-bottom:0.625rem;padding-top:1rem;font-size:1.25rem;line-height:1.75rem\n}.input-float.svelte-1gav9fi.svelte-1gav9fi:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)\n}.label-float.svelte-1gav9fi.svelte-1gav9fi{position:absolute;left:0.25rem;top:0.375rem;z-index:10;transform-origin:0;--tw-translate-y:-1rem;--tw-scale-x:.75;--tw-scale-y:.75;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));border-radius:9999px;--tw-bg-opacity:1;background-color:hsl(var(--b1) / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity));transition-duration:300ms\n}.peer.svelte-1gav9fi:focus~.label-float.svelte-1gav9fi{top:0.375rem;--tw-translate-y:-1rem;--tw-scale-x:.75;--tw-scale-y:.75;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));padding-left:0.5rem;padding-right:0.5rem;--tw-text-opacity:1;color:hsl(var(--p) / var(--tw-text-opacity))\n}.peer.svelte-1gav9fi:-moz-placeholder-shown~label.svelte-1gav9fi{top:1.75rem;--tw-translate-y:-0.75rem;--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}.peer.svelte-1gav9fi:-ms-input-placeholder~label.svelte-1gav9fi{top:1.75rem;--tw-translate-y:-0.75rem;--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}.peer.svelte-1gav9fi:placeholder-shown~label.svelte-1gav9fi{top:1.75rem;--tw-translate-y:-0.75rem;--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}",
  map: null
};
const Login_reset = (0, import_index_cbebd36d.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_cbebd36d.v)(import_Cabecera_968729ba.C, "Cabecera").$$render($$result, {}, {}, {})}

  <section><div class="${"pt-36 max-w-4xl mx-auto bg-base-100 rounded-lg shadow-xl "}"><div class="${"flex flex-col md:flex-row"}"><div class="${"h-24 md:h-auto md:w-1/2"}"><img aria-hidden="${"true"}" class="${"object-cover w-full h-full rounded-l-xl"}"${(0, import_index_cbebd36d.b)("src", loginOfficeDark, 0)} alt="${"Office"}"></div>
        <div class="${"flex items-center justify-center p-6 sm:p-12 md:w-1/2 "}"><div class="${"w-full"}"><h1 class="${"mb-4 text-2xl font-semibold text-neutral-content"}">Login</h1>
            <form method="${"post"}" class="${"space-y-4"}"><div class="${"relative "}"><input type="${"email"}" id="${"email"}" class="${"input input-float peer svelte-1gav9fi"}" placeholder="${" "}">
                 <label for="${"email"}" class="${"label-float svelte-1gav9fi"}">Email</label></div>
  
              <div class="${"relative "}"><input type="${"password"}" id="${"password"}" class="${"input input-float peer svelte-1gav9fi"}" placeholder="${" "}">
                <label for="${"password"}" class="${"label-float svelte-1gav9fi"}">Password</label></div>
  
              
             <button type="${"submit"}" class="${"btn w-full"}">Log In
              </button></form>
  
           
  
            <p class="${"mt-4"}"><a class="${"text-sm link-hover link-primary"}" href="${"/"}">Recuperar su password?
              </a></p>
            <p class="${"mt-1"}"><a class="${"text-sm link-hover link-primary"}" href="${"register"}">Crear cuenta
              </a></p></div></div></div></div> 
  </section>`;
});
