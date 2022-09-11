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
  M: () => Milink
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cbebd36d = require("./index-cbebd36d.js");
var import_stores_fafaecc9 = require("./stores-fafaecc9.js");
var Milink_svelte_svelte_type_style_lang = "";
const css = {
  code: ".icon.svelte-1stopie.svelte-1stopie{filter:invert(78%) sepia(23%) saturate(104%) hue-rotate(152deg) brightness(94%) contrast(89%)}.active.svelte-1stopie .icon.svelte-1stopie{filter:invert(20%) sepia(64%) saturate(308%) hue-rotate(169deg) brightness(92%) contrast(91%)}.active.svelte-1stopie:focus .icon.svelte-1stopie{filter:invert(20%) sepia(64%) saturate(308%) hue-rotate(169deg) brightness(92%) contrast(91%)}.active.svelte-1stopie:active .icon.svelte-1stopie{filter:invert(20%) sepia(64%) saturate(308%) hue-rotate(169deg) brightness(92%) contrast(91%)}",
  map: null
};
const Milink = (0, import_index_cbebd36d.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_cbebd36d.a)(import_stores_fafaecc9.p, (value) => $page = value);
  let { href = "" } = $$props;
  let { title = "" } = $$props;
  let { icono = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.icono === void 0 && $$bindings.icono && icono !== void 0)
    $$bindings.icono(icono);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<a sveltekit:prefetch${(0, import_index_cbebd36d.b)("href", href, 0)} class="${["svelte-1stopie", $page.url.pathname === href ? "active" : ""].join(" ").trim()}"><img${(0, import_index_cbebd36d.b)("src", icono, 0)} alt="${""}" class="${"w-6 h-6 icon svelte-1stopie"}">
    ${(0, import_index_cbebd36d.e)(title)}
     
  </a>`;
});
