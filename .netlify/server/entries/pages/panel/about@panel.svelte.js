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
  default: () => About_panel,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cbebd36d = require("../../../chunks/index-cbebd36d.js");
var import_Cabecera_968729ba = require("../../../chunks/Cabecera-968729ba.js");
var import_env_14926626 = require("../../../chunks/env-14926626.js");
var import_stores_fafaecc9 = require("../../../chunks/stores-fafaecc9.js");
var about_panel_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-orw3hl{padding-top:0.5rem;padding-bottom:0.5rem;font-size:1rem;line-height:1.5rem\n}a.svelte-orw3hl{-webkit-text-decoration-line:none;text-decoration-line:none\n}a.svelte-orw3hl:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline\n}a.svelte-orw3hl{--tw-text-opacity:1;color:hsl(var(--a) / var(--tw-text-opacity))\n}a.svelte-orw3hl:hover{--tw-text-opacity:1;color:hsl(var(--af, var(--a)) / var(--tw-text-opacity))\n}",
  map: null
};
const hydrate = import_env_14926626.d;
const router = import_env_14926626.b;
const prerender = false;
const About_panel = (0, import_index_cbebd36d.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_cbebd36d.v)(import_Cabecera_968729ba.C, "Cabecera").$$render($$result, {}, {}, {})}

	<div class="${"container mx-auto pt-16 px-16 lg:px-32"}"><h1 class="${"text-center text-4xl py-4"}">About this app</h1>
	
		<p class="${"svelte-orw3hl"}">This is a <a href="${"https://kit.svelte.dev"}" class="${"svelte-orw3hl"}">SvelteKit</a> app. You can make your own by typing the
			following into your command line and following the prompts:
		</p>
	
		<div class="${"mockup-code"}"><pre>npm init svelte</pre></div>
	
		<p class="${"svelte-orw3hl"}">The page you&#39;re looking at is purely static HTML, with no client-side interactivity needed.
			Because of that, we don&#39;t need to load any JavaScript. Try viewing the page&#39;s source, or opening
			the devtools network panel and reloading.
		</p>
	
		<p class="${"svelte-orw3hl"}">The <a href="${"/todos"}" class="${"svelte-orw3hl"}">TODOs</a> page illustrates SvelteKit&#39;s data loading and form handling. Try using
			it with JavaScript disabled!
		</p>
	</div>`;
});
