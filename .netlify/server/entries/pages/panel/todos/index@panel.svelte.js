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
var import_index_cbebd36d = require("../../../../chunks/index-cbebd36d.js");
var import_Cabecera_968729ba = require("../../../../chunks/Cabecera-968729ba.js");
var import_stores_fafaecc9 = require("../../../../chunks/stores-fafaecc9.js");
var index_panel_svelte_svelte_type_style_lang = "";
const css = {
  code: `.todos.svelte-1x7su8u.svelte-1x7su8u.svelte-1x7su8u{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto;line-height:1}.new.svelte-1x7su8u.svelte-1x7su8u.svelte-1x7su8u{margin:0 0 0.5rem 0}input.svelte-1x7su8u.svelte-1x7su8u.svelte-1x7su8u{border:1px solid transparent}input.svelte-1x7su8u.svelte-1x7su8u.svelte-1x7su8u:focus-visible{box-shadow:inset 1px 1px 6px rgba(0, 0, 0, 0.1);border:1px solid #ff3e00 !important;outline:none}.new.svelte-1x7su8u input.svelte-1x7su8u.svelte-1x7su8u{font-size:28px;width:100%;padding:0.5em 1em 0.3em 1em;box-sizing:border-box;background:rgba(255, 255, 255, 0.05);border-radius:8px;text-align:center}.todo.svelte-1x7su8u.svelte-1x7su8u.svelte-1x7su8u{display:grid;grid-template-columns:2rem 1fr 2rem;grid-gap:0.5rem;align-items:center;margin:0 0 0.5rem 0;padding:0.5rem;background-color:white;border-radius:8px;filter:drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));transform:translate(-1px, -1px);transition:filter 0.2s, transform 0.2s}.done.svelte-1x7su8u.svelte-1x7su8u.svelte-1x7su8u{transform:none;opacity:0.4;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.1))}form.text.svelte-1x7su8u.svelte-1x7su8u.svelte-1x7su8u{position:relative;display:flex;align-items:center;flex:1}.todo.svelte-1x7su8u input.svelte-1x7su8u.svelte-1x7su8u{flex:1;padding:0.5em 2em 0.5em 0.8em;border-radius:3px;width:100%}.todo.svelte-1x7su8u button.svelte-1x7su8u.svelte-1x7su8u{width:2em;height:2em;border:none;background-color:transparent;background-position:50% 50%;background-repeat:no-repeat}button.toggles.svelte-1x7su8u.svelte-1x7su8u.svelte-1x7su8u{border:1px solid rgba(0, 0, 0, 0.2);border-radius:50%;box-sizing:border-box;background-size:1em auto}.done.svelte-1x7su8u .toggles.svelte-1x7su8u.svelte-1x7su8u{background-image:url("data:image/svg+xml,%3Csvg width='22' height='16' viewBox='0 0 22 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 1.5L7.4375 14.5L1.5 8.5909' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}.delete.svelte-1x7su8u.svelte-1x7su8u.svelte-1x7su8u{background-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 5V22H19.5V5H4.5Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M10 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 5H22' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8 5L9.6445 2H14.3885L16 5H8Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E%0A");opacity:0.2}.delete.svelte-1x7su8u.svelte-1x7su8u.svelte-1x7su8u:hover,.delete.svelte-1x7su8u.svelte-1x7su8u.svelte-1x7su8u:focus{transition:opacity 0.2s;opacity:1}.save.svelte-1x7su8u.svelte-1x7su8u.svelte-1x7su8u{position:absolute;right:0;opacity:0;background-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 2H3.5C2.67158 2 2 2.67157 2 3.5V20.5C2 21.3284 2.67158 22 3.5 22H20.5C21.3284 22 22 21.3284 22 20.5V3.5C22 2.67157 21.3284 2 20.5 2Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M17 2V11H7.5V2H17Z' fill='white' stroke='white' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M13.5 5.5V7.5' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M5.99844 2H18.4992' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A")}.todo.svelte-1x7su8u input.svelte-1x7su8u:focus+.save.svelte-1x7su8u,.save.svelte-1x7su8u.svelte-1x7su8u.svelte-1x7su8u:focus{transition:opacity 0.2s;opacity:1}`,
  map: null
};
const prerender = false;
const Index_panel = (0, import_index_cbebd36d.c)(($$result, $$props, $$bindings, slots) => {
  let { todos } = $$props;
  if ($$props.todos === void 0 && $$bindings.todos && todos !== void 0)
    $$bindings.todos(todos);
  $$result.css.add(css);
  return `${(0, import_index_cbebd36d.v)(import_Cabecera_968729ba.C, "Cabecera").$$render($$result, {}, {}, {})}
<div class="${"todos pt-16 mx-auto px-16 lg:px-40 svelte-1x7su8u"}"><h1 class="${"text-center text-4xl py-4"}">Todos</h1>

	<form class="${"new svelte-1x7su8u"}" action="${"./todos"}" method="${"post"}"><input name="${"text"}" aria-label="${"Add todo"}" placeholder="${"+ tap to add a todo"}" class="${"svelte-1x7su8u"}"></form>

	${(0, import_index_cbebd36d.f)(todos, (todo) => {
    return `<div class="${["todo svelte-1x7su8u", todo.done ? "done" : ""].join(" ").trim()}"><form action="${"./todos?_method=PATCH"}" method="${"post"}"><input type="${"hidden"}" name="${"uid"}"${(0, import_index_cbebd36d.b)("value", todo.uid, 0)} class="${"svelte-1x7su8u"}">
				<input type="${"hidden"}" name="${"done"}"${(0, import_index_cbebd36d.b)("value", todo.done ? "" : "true", 0)} class="${"svelte-1x7su8u"}">
				<button class="${"toggles svelte-1x7su8u"}" aria-label="${"Mark todo as " + (0, import_index_cbebd36d.e)(todo.done ? "not done" : "done")}"></button></form>

			<form class="${"text svelte-1x7su8u"}" action="${"./todos?_method=PATCH"}" method="${"post"}"><input type="${"hidden"}" name="${"uid"}"${(0, import_index_cbebd36d.b)("value", todo.uid, 0)} class="${"svelte-1x7su8u"}">
				<input aria-label="${"Edit todo"}" type="${"text"}" name="${"text"}"${(0, import_index_cbebd36d.b)("value", todo.text, 0)} class="${"svelte-1x7su8u"}">
				<button class="${"save svelte-1x7su8u"}" aria-label="${"Save todo"}"></button></form>

			<form action="${"./todos?_method=DELETE"}" method="${"post"}"><input type="${"hidden"}" name="${"uid"}"${(0, import_index_cbebd36d.b)("value", todo.uid, 0)} class="${"svelte-1x7su8u"}">
				<button class="${"delete svelte-1x7su8u"}" aria-label="${"Delete todo"}" ${todo.pending_delete ? "disabled" : ""}></button></form>
		</div>`;
  })}
</div>`;
});
