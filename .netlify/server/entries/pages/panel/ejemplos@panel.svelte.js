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
  default: () => Ejemplos_panel,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cbebd36d = require("../../../chunks/index-cbebd36d.js");
var import_env_14926626 = require("../../../chunks/env-14926626.js");
var import_Counter_6f1e6712 = require("../../../chunks/Counter-6f1e6712.js");
var import_Milink_ac98d84e = require("../../../chunks/Milink-ac98d84e.js");
var import_Cabecera_968729ba = require("../../../chunks/Cabecera-968729ba.js");
var import_index_6fa35462 = require("../../../chunks/index-6fa35462.js");
var import_stores_fafaecc9 = require("../../../chunks/stores-fafaecc9.js");
const Title1 = (0, import_index_cbebd36d.c)(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="${"bg-base-300"}">Component 1
</h1>`;
});
const Title2 = (0, import_index_cbebd36d.c)(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="${"bg-base-300"}">Component 2
</h1>`;
});
var ejemplos_panel_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-d2m9cs{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}.touster.svelte-d2m9cs{position:absolute;top:0;right:0;padding:10px;background-color:#ff3d00e0;color:white;margin:2px;text-align:center;z-index:9999}div.svelte-d2m9cs{width:300px;padding:10px;background-color:#ff3d00e0;color:white;margin:2px;text-align:center}",
  map: null
};
const hydrate = import_env_14926626.d;
const router = import_env_14926626.b;
const prerender = true;
const myHtml = "<span><strong>My text:</strong> text</span>";
const Ejemplos_panel = (0, import_index_cbebd36d.c)(($$result, $$props, $$bindings, slots) => {
  let squared;
  let cubed;
  let reducir;
  let link = [
    {
      href: "http://www.mysite.com",
      title: "my sitie"
    }
  ];
  let list = [1, 2, 3];
  let { condition = false } = $$props;
  let component = Title1;
  let num = 0;
  if ($$props.condition === void 0 && $$bindings.condition && condition !== void 0)
    $$bindings.condition(condition);
  $$result.css.add(css);
  squared = num * num;
  cubed = squared * num;
  reducir = cubed / num;
  return `${(0, import_index_cbebd36d.v)(import_Cabecera_968729ba.C, "Cabecera").$$render($$result, {}, {}, {})}
<section class="${"svelte-d2m9cs"}"><div class="${"svelte-d2m9cs"}">Use</div>
  ${(0, import_index_cbebd36d.v)(import_Milink_ac98d84e.M, "Mylink").$$render($$result, Object.assign(link[0]), {}, {})}
  <select><option${(0, import_index_cbebd36d.b)("value", Title1, 0)}>Title 1</option><option${(0, import_index_cbebd36d.b)("value", Title2, 0)}>Title 2</option><option${(0, import_index_cbebd36d.b)("value", import_Counter_6f1e6712.C, 0)}>Contador</option></select>
  
  
  ${(0, import_index_cbebd36d.v)(component || import_index_cbebd36d.m, "svelte:component").$$render($$result, {}, {}, {})}

 
  
  <button class="${"btn"}">Increment: ${(0, import_index_cbebd36d.e)(num)}</button>
  
  <p>${(0, import_index_cbebd36d.e)(squared)}</p>
  <p>${(0, import_index_cbebd36d.e)(cubed)}</p>
  <p>${(0, import_index_cbebd36d.e)(reducir)}</p>

  <button class="${"btn"}">Toggle
  </button>

  ${condition ? `<div class="${"touster svelte-d2m9cs"}">fades in  and out
  </div>` : ``}

${(0, import_index_cbebd36d.f)(list, (n) => {
    return `<div class="${"svelte-d2m9cs"}">${(0, import_index_cbebd36d.e)(n)}
  </div>`;
  })}

<button class="${"btn"}">Cycle
</button>

<!-- HTML_TAG_START -->${"<div>Contenido</div>"}<!-- HTML_TAG_END -->
<!-- HTML_TAG_START -->${myHtml}<!-- HTML_TAG_END -->

<button>Press me
</button>
<button>Press me
</button>
<button>Press me once!!!
</button>
<button>Press me
</button>
</section>`;
});
