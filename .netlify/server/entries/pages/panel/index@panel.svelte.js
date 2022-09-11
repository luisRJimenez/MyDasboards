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
  default: () => Index_panel,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cbebd36d = require("../../../chunks/index-cbebd36d.js");
var import_Cabecera_968729ba = require("../../../chunks/Cabecera-968729ba.js");
var import_Counter_6f1e6712 = require("../../../chunks/Counter-6f1e6712.js");
var import_stores_fafaecc9 = require("../../../chunks/stores-fafaecc9.js");
var import_index_6fa35462 = require("../../../chunks/index-6fa35462.js");
var index_panel_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1ld3ty0.svelte-1ld3ty0{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}h1.svelte-1ld3ty0.svelte-1ld3ty0{width:100%;text-align:center;padding-top:1.5rem;padding-bottom:1.5rem}.welcome.svelte-1ld3ty0.svelte-1ld3ty0{position:relative;width:100%;height:0;padding:0 0 calc(100% * 495 / 2048) 0}.welcome.svelte-1ld3ty0 img.svelte-1ld3ty0{position:absolute;width:100%;height:100%;top:0;display:block}",
  map: null
};
const prerender = true;
const Index_panel = (0, import_index_cbebd36d.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_cbebd36d.v)(import_Cabecera_968729ba.C, "Cabecera").$$render($$result, {}, {}, {})}
<section class="${"svelte-1ld3ty0"}"><h1 class="${"text-4xl svelte-1ld3ty0"}"><div class="${"welcome svelte-1ld3ty0"}"><picture><source srcset="${"svelte-welcome.webp"}" type="${"image/webp"}">
				<img src="${"svelte-welcome.png"}" alt="${"Welcome"}" class="${"svelte-1ld3ty0"}"></picture></div>
		<span>to your new </span><br>
		<span>SvelteKit app</span></h1>

	<h2 class="${"py-4"}">try editing <strong>src/routes/index.svelte</strong></h2>

	${(0, import_index_cbebd36d.v)(import_Counter_6f1e6712.C, "Counter").$$render($$result, {}, {}, {})}
</section>`;
});
