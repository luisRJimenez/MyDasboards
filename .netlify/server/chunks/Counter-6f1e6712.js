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
  C: () => Counter
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cbebd36d = require("./index-cbebd36d.js");
var import_index_6fa35462 = require("./index-6fa35462.js");
var Counter_svelte_svelte_type_style_lang = "";
const css = {
  code: ".counter.svelte-vs20y8.svelte-vs20y8{display:flex;border-top:1px solid rgba(238, 229, 229, 0.1);border-bottom:1px solid rgba(232, 226, 226, 0.1);margin:1rem 0}.counter.svelte-vs20y8 button.svelte-vs20y8{width:2em;padding:0;display:flex;align-items:center;justify-content:center;border:0;background-color:transparent;touch-action:manipulation;color:var(--text-color);font-size:2rem}.counter.svelte-vs20y8 button.svelte-vs20y8:hover{background-color:rgba(232, 226, 226, 0.1)}svg.svelte-vs20y8.svelte-vs20y8{width:25%;height:25%}path.svelte-vs20y8.svelte-vs20y8{vector-effect:non-scaling-stroke;stroke-width:2px;stroke:darkslateblue}.counter-viewport.svelte-vs20y8.svelte-vs20y8{width:8em;height:4em;overflow:hidden;text-align:center;position:relative}.counter-viewport.svelte-vs20y8 strong.svelte-vs20y8{position:absolute;display:flex;width:100%;height:100%;font-weight:400;color:var(--accent-color);font-size:4rem;align-items:center;justify-content:center}.counter-digits.svelte-vs20y8.svelte-vs20y8{position:absolute;width:100%;height:100%}.hidden.svelte-vs20y8.svelte-vs20y8{top:-100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}",
  map: null
};
function modulo(n, m) {
  return (n % m + m) % m;
}
const Counter = (0, import_index_cbebd36d.c)(($$result, $$props, $$bindings, slots) => {
  let offset;
  let $displayed_count, $$unsubscribe_displayed_count;
  let count = 0;
  const displayed_count = (0, import_index_6fa35462.s)();
  $$unsubscribe_displayed_count = (0, import_index_cbebd36d.a)(displayed_count, (value) => $displayed_count = value);
  $$result.css.add(css);
  {
    displayed_count.set(count);
  }
  offset = modulo($displayed_count, 1);
  $$unsubscribe_displayed_count();
  return `<div class="${"counter svelte-vs20y8"}"><button aria-label="${"Decrease the counter by one"}" class="${"svelte-vs20y8"}"><svg aria-hidden="${"true"}" viewBox="${"0 0 1 1"}" class="${"svelte-vs20y8"}"><path d="${"M0,0.5 L1,0.5"}" class="${"svelte-vs20y8"}"></path></svg></button>

	<div class="${"counter-viewport svelte-vs20y8"}"><div class="${"counter-digits svelte-vs20y8"}" style="${"transform: translate(0, " + (0, import_index_cbebd36d.e)(100 * offset) + "%)"}"><strong class="${"hidden svelte-vs20y8"}" aria-hidden="${"true"}">${(0, import_index_cbebd36d.e)(Math.floor($displayed_count + 1))}</strong>
			<strong class="${"svelte-vs20y8"}">${(0, import_index_cbebd36d.e)(Math.floor($displayed_count))}</strong></div></div>

	<button aria-label="${"Increase the counter by one"}" class="${"svelte-vs20y8"}"><svg aria-hidden="${"true"}" viewBox="${"0 0 1 1"}" class="${"svelte-vs20y8"}"><path d="${"M0,0.5 L1,0.5 M0.5,0 L0.5,1"}" class="${"svelte-vs20y8"}"></path></svg></button>
</div>`;
});
