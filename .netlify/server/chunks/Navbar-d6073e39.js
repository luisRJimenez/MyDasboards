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
  N: () => Navbar
});
module.exports = __toCommonJS(stdin_exports);
var import_index_cbebd36d = require("./index-cbebd36d.js");
var import_stores_fafaecc9 = require("./stores-fafaecc9.js");
const Navbar = (0, import_index_cbebd36d.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_cbebd36d.a)(import_stores_fafaecc9.p, (value) => $page = value);
  let urls = $page.url.pathname;
  $$unsubscribe_page();
  return `<div class="${"w-full navbar bg-base-300 sticky top-0 z-10"}">${urls != "/" ? `<div class="${"lg:hidden"}"><label tabindex="${"0"}" for="${"my-drawer-2"}" class="${"btn btn-square btn-ghost"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" class="${"inline-block w-6 h-6 stroke-current"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h16M4 18h16"}"></path></svg></label></div>` : ``}
  <div class="${"navbar-start px-2 mx-2"}"><a href="${"/"}" class="${"btn btn-ghost normal-case text-xl"}">Navbar</a></div>
  
  <div class="${"navbar-end mr-4"}"><ul class="${"menu menu-horizontal"}"><li><a href="${"/panel"}">Panel</a></li>
      <li><a href="${"/auth/register"}">Register</a></li>
      <li><a href="${"/auth/login"}">Login</a></li></ul>

  
    <div class="${"dropdown dropdown-end"}"><label for="${""}" tabindex="${"0"}" class="${"btn btn-ghost btn-circle avatar"}"><div class="${"w-10 rounded-full"}"><img src="${"https://placeimg.com/80/80/people"}" alt="${""}"></div></label>
      <ul tabindex="${"0"}" class="${"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"}"><li><a href="${"/"}" class="${"justify-between"}">Profile
            <span class="${"badge"}">New</span></a></li>
        <li><a href="${"/"}">Settings</a></li>
        <li><a href="${"/"}">Logout</a></li></ul></div></div></div>`;
});
