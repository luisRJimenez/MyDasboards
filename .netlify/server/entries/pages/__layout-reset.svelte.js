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
  default: () => _layout_reset
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cbebd36d = require("../../chunks/index-cbebd36d.js");
var import_stores_fafaecc9 = require("../../chunks/stores-fafaecc9.js");
var import_app_2b14ae68 = require("../../chunks/app-2b14ae68.js");
var __layoutReset_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-ra2kgo.svelte-ra2kgo{display:flex;flex-direction:column;padding:1rem 1rem 0rem 1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box;min-height:100vh;justify-content:space-between;background-color:transparent;overflow:hidden}footer.svelte-ra2kgo.svelte-ra2kgo{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}footer.svelte-ra2kgo a.svelte-ra2kgo{font-weight:bold}@media(min-width: 480px){footer.svelte-ra2kgo.svelte-ra2kgo{padding:40px 0}}",
  map: null
};
const _layout_reset = (0, import_index_cbebd36d.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_cbebd36d.a)(import_stores_fafaecc9.p, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<main class="${"svelte-ra2kgo"}">${(0, import_index_cbebd36d.v)(import_app_2b14ae68.T, "Transicion").$$render($$result, { url: $page.url.pathname }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}

        
<footer class="${"svelte-ra2kgo"}"><p>visit <a class="${"link-accent link-hover svelte-ra2kgo"}" href="${"https://kit.svelte.dev"}">LuisRJimenez</a> Desarrollador Full Stack</p></footer>
</main>`;
});
