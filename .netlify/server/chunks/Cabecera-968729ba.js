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
  C: () => Cabecera
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cbebd36d = require("./index-cbebd36d.js");
var import_stores_fafaecc9 = require("./stores-fafaecc9.js");
function title(path) {
  let pagina = path.substring(path.lastIndexOf("/") + 1);
  return pagina[0].toUpperCase() + pagina.slice(1);
}
const Cabecera = (0, import_index_cbebd36d.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_cbebd36d.a)(import_stores_fafaecc9.p, (value) => $page = value);
  let urls = $page.url.pathname;
  let titulo = title(urls);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>${(0, import_index_cbebd36d.e)(titulo)}</title>`, ""}`, ""}`;
});
