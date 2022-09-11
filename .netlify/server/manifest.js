var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["about.svg", "ejemplo.svg", "favicon.png", "home.svg", "robots.txt", "svelte-welcome.png", "svelte-welcome.webp", "todos.svg"]),
  mimeTypes: { ".svg": "image/svg+xml", ".png": "image/png", ".txt": "text/plain", ".webp": "image/webp" },
  _: {
    entry: { "file": "start-04c14b68.js", "js": ["start-04c14b68.js", "chunks/index-12f3f129.js", "chunks/index-e69bb987.js", "chunks/singletons-d1fb5791.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/9.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/10.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "panel@panel",
        pattern: /^\/panel\/?$/,
        names: [],
        types: [],
        path: "/panel",
        shadow: null,
        a: [3, 4],
        b: [1]
      },
      {
        type: "page",
        id: "auth/login@reset",
        pattern: /^\/auth\/login\/?$/,
        names: [],
        types: [],
        path: "/auth/login",
        shadow: null,
        a: [5, 6],
        b: [1]
      },
      {
        type: "page",
        id: "auth/register@reset",
        pattern: /^\/auth\/register\/?$/,
        names: [],
        types: [],
        path: "/auth/register",
        shadow: null,
        a: [5, 7],
        b: [1]
      },
      {
        type: "page",
        id: "panel/about@panel",
        pattern: /^\/panel\/about\/?$/,
        names: [],
        types: [],
        path: "/panel/about",
        shadow: null,
        a: [3, 8],
        b: [1]
      },
      {
        type: "page",
        id: "panel/ejemplos@panel",
        pattern: /^\/panel\/ejemplos\/?$/,
        names: [],
        types: [],
        path: "/panel/ejemplos",
        shadow: null,
        a: [3, 9],
        b: [1]
      },
      {
        type: "page",
        id: "panel/todos@panel",
        pattern: /^\/panel\/todos\/?$/,
        names: [],
        types: [],
        path: "/panel/todos",
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/panel/todos/index@panel.ts.js"))),
        a: [3, 10],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
