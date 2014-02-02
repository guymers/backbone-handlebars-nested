module.exports = {
	build: {
		options: {
			remove: "script[data-requirejs-config]",
			update: {
				selector: "script[data-main]",
				attribute: "src",
				value: "main.js"
			}
		},
		src: "index.html",
		dest: "build/index.html"
	}
};
