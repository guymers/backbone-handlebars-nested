module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		jshint: {
			options: {
				jshintrc: ".jshintrc"
			},
			gruntfile: {
				src: "Gruntfile.js"
			},
			sourcefiles: {
				src: ["src/**/*.js"]
			}
		},

		jsvalidate: {
			options: {
				globals: {},
				esprimaOptions: {},
				verbose: false
			},
			targetName: {
				files: {
					src: ["<%=jshint.sourcefiles.src%>"]
				}
			}
		},

		requirejs: {
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
		},

		dom_munger: {
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
		}
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-jsvalidate");
	grunt.loadNpmTasks("grunt-contrib-requirejs");
	grunt.loadNpmTasks("grunt-dom-munger");

	grunt.registerTask("check", ["jshint", "jsvalidate"]);
	grunt.registerTask("build", ["requirejs", "dom_munger"]);
};
