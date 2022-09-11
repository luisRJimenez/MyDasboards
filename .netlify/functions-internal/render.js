const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["about.svg","ejemplo.svg","favicon.png","home.svg","robots.txt","svelte-welcome.png","svelte-welcome.webp","todos.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"start-04c14b68.js","js":["start-04c14b68.js","chunks/index-12f3f129.js","chunks/index-e69bb987.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/10.js'))
		],
		routes: [
			{
				type: 'page',
				id: "panel/about@panel",
				pattern: /^\/panel\/about\/?$/,
				names: [],
				types: [],
				path: "/panel/about",
				shadow: null,
				a: [2,3],
				b: [1]
			},
			{
				type: 'page',
				id: "panel/todos@panel",
				pattern: /^\/panel\/todos\/?$/,
				names: [],
				types: [],
				path: "/panel/todos",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/panel/todos/index@panel.ts.js')),
				a: [2,4],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
