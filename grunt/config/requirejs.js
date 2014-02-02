module.exports = {
	options: {
		baseUrl: "src",
		mainConfigFile: "src/config.js",
		optimize: "none",
		skipDirOptimize: true,
		removeCombined: true,
		findNestedDependencies: true,

		stubModules: ["text", "hbs"],

		pragmasOnSave: {
			excludeHbs: true,
			excludeAfterBuild: true
		}
	},

	build: {
		options: {
			name: "almond",
			include: "main",
			out: "build/main.js",
			excludeShallow: ["handlebars"],
			paths: {
				"handlebars.runtime": "../bower_components/handlebars/handlebars.runtime",
			}
		}
	}
};
