module.exports = function(config) {
	"use strict";

	config.set({
		basePath: "",
		frameworks: ["jasmine", "requirejs"],

		files: [
			{pattern: "bower_components/**/*.js", included: false},
			{pattern: "src/config.js", included: true},
			{pattern: "src/**/*.js", included: false},
			{pattern: "test/**/*Spec.js", included: false},
			"test/test-main.js"
		],

		exclude: [
			"src/main.js"
		]
	});
};
