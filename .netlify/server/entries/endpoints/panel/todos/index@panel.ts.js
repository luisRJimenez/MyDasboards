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
  del: () => del,
  get: () => get,
  patch: () => patch,
  post: () => post
});
module.exports = __toCommonJS(stdin_exports);
const base = "https://api.svelte.dev";
function api(method, resource, data) {
  return fetch(`${base}/${resource}`, {
    method,
    headers: {
      "content-type": "application/json"
    },
    body: data && JSON.stringify(data)
  });
}
const get = async ({ locals }) => {
  const response = await api("get", `./todos/${locals.userid}`);
  if (response.status === 404) {
    return {
      body: {
        todos: []
      }
    };
  }
  if (response.status === 200) {
    return {
      body: {
        todos: await response.json()
      }
    };
  }
  return {
    status: response.status
  };
};
const post = async ({ request, locals }) => {
  const form = await request.formData();
  await api("post", `./todos/${locals.userid}`, {
    text: form.get("text")
  });
  return {};
};
const redirect = {
  status: 303,
  headers: {
    location: "./todos"
  }
};
const patch = async ({ request, locals }) => {
  const form = await request.formData();
  await api("patch", `./todos/${locals.userid}/${form.get("uid")}`, {
    text: form.has("text") ? form.get("text") : void 0,
    done: form.has("done") ? !!form.get("done") : void 0
  });
  return redirect;
};
const del = async ({ request, locals }) => {
  const form = await request.formData();
  await api("delete", `./todos/${locals.userid}/${form.get("uid")}`);
  return redirect;
};
