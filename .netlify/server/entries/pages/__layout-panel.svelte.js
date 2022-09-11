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
  default: () => _layout_panel
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cbebd36d = require("../../chunks/index-cbebd36d.js");
var import_stores_fafaecc9 = require("../../chunks/stores-fafaecc9.js");
var import_app_2b14ae68 = require("../../chunks/app-2b14ae68.js");
var import_Navbar_d6073e39 = require("../../chunks/Navbar-d6073e39.js");
var import_Milink_ac98d84e = require("../../chunks/Milink-ac98d84e.js");
var import_index_6fa35462 = require("../../chunks/index-6fa35462.js");
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
const Links = (0, import_index_cbebd36d.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_cbebd36d.a)(import_stores_fafaecc9.p, (value) => $page = value);
  (0, import_index_cbebd36d.d)();
  let link = [
    {
      href: "/panel",
      title: "Panel",
      icono: "../home.svg"
    },
    {
      href: "/panel/about",
      title: "About",
      icono: "../about.svg"
    },
    {
      href: "/panel/ejemplos",
      title: "Ejemplos",
      icono: "../ejemplo.svg"
    },
    {
      href: "/panel/todos",
      title: "Todos",
      icono: "../todos.svg"
    }
  ];
  $$unsubscribe_page();
  return `


  <ul tabindex="${"0"}" class="${"menu py-4 px-4 overflow-y-auto w-80 bg-base-100 "}">
    

    
      
  ${(0, import_index_cbebd36d.f)(link, (el, key) => {
    return `<li${(0, import_index_cbebd36d.b)("class", $page.url.pathname != el.href ? "hover-bordered" : "bordered", 0)}>${(0, import_index_cbebd36d.v)(import_Milink_ac98d84e.M, "Milink").$$render($$result, Object.assign(link[key]), {}, {})}

  </li>`;
  })}

  
  </ul>`;
});
var Pageloader_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".progress.svelte-3uzwt8{position:fixed;top:0;left:0;right:0;height:0.2rem;z-index:9999}",
  map: null
};
const Pageloader = (0, import_index_cbebd36d.c)(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  let $progress, $$unsubscribe_progress;
  $$unsubscribe_navigating = (0, import_index_cbebd36d.a)(import_stores_fafaecc9.n, (value) => $navigating = value);
  const progress = (0, import_index_6fa35462.t)(0, { duration: 2500, easing: cubicOut });
  $$unsubscribe_progress = (0, import_index_cbebd36d.a)(progress, (value) => $progress = value);
  const unsubscribe = () => {
    if ($navigating) {
      progress.set(1, { duration: 250 });
    }
  };
  (0, import_index_cbebd36d.o)(() => {
    unsubscribe();
  });
  $$result.css.add(css$1);
  $$unsubscribe_navigating();
  $$unsubscribe_progress();
  return `<progress class="${"progress progress-primary w-full svelte-3uzwt8"}"${(0, import_index_cbebd36d.b)("value", $progress * 100, 0)} max="${"100"}">
</progress>`;
});
var __layoutPanel_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-gzej5c.svelte-gzej5c{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}footer.svelte-gzej5c.svelte-gzej5c{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}footer.svelte-gzej5c a.svelte-gzej5c{font-weight:bold}@media(min-width: 480px){footer.svelte-gzej5c.svelte-gzej5c{padding:40px 0}}.scrollbar.svelte-gzej5c.svelte-gzej5c::-webkit-scrollbar{width:10px;height:4px;border-radius:100vh}.scrollbar.svelte-gzej5c.svelte-gzej5c::-webkit-scrollbar-track{border-radius:100vh;background:#74726c}.scrollbar.svelte-gzej5c.svelte-gzej5c::-webkit-scrollbar-thumb{background:#504c4c;border-radius:100vh;border:3px solid #3e3f3c}.scrollbar.svelte-gzej5c.svelte-gzej5c::-webkit-scrollbar-thumb:hover{background:#958792}",
  map: null
};
const _layout_panel = (0, import_index_cbebd36d.c)(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  let $page, $$unsubscribe_page;
  $$unsubscribe_navigating = (0, import_index_cbebd36d.a)(import_stores_fafaecc9.n, (value) => $navigating = value);
  $$unsubscribe_page = (0, import_index_cbebd36d.a)(import_stores_fafaecc9.p, (value) => $page = value);
  let open;
  $$result.css.add(css);
  $$unsubscribe_navigating();
  $$unsubscribe_page();
  return `${$navigating ? `<div>${(0, import_index_cbebd36d.v)(Pageloader, "PageLoader").$$render($$result, {}, {}, {})}</div>` : ``}


  <div class="${"drawer drawer-mobile "}"><input id="${"my-drawer-2"}" type="${"checkbox"}" class="${"drawer-toggle"}"${(0, import_index_cbebd36d.b)("checked", open, 1)}>

    <div class="${"drawer-content flex flex-col scrollbar  svelte-gzej5c"}">
      ${(0, import_index_cbebd36d.v)(import_Navbar_d6073e39.N, "Navbar").$$render($$result, {}, {}, {})}

      

    

      <main class="${"svelte-gzej5c"}">${(0, import_index_cbebd36d.v)(import_app_2b14ae68.T, "Transicion").$$render($$result, { url: $page.url.pathname }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</main>

        
  
  
      <footer class="${"svelte-gzej5c"}"><p>visit <a class="${"link-accent link-hover svelte-gzej5c"}" href="${"https://kit.svelte.dev"}">LuisRJimenez</a> Desarrollador Full Stack</p></footer></div> 
    <div class="${"drawer-side"}"><label for="${"my-drawer-2"}" class="${"drawer-overlay"}"></label> 
      ${(0, import_index_cbebd36d.v)(Links, "Links").$$render($$result, {}, {}, {})}</div>
  
  </div>`;
});
