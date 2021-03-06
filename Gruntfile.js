module.exports = function(grunt) {
	"use strict";

	var files = {
		config: ["Gruntfile.js", "grunt/**/*.js", "karma.conf.js"],
		source: ["src/**/*.js"],
		test: ["test/**/*.js"]
	};
	grunt.config.set("files", files);

	var configDir = "./grunt/config/";
	var packageJson = grunt.file.readJSON("package.json");

	var config = {
		pkg: packageJson
	};

	var fs = require("fs");
	fs.readdirSync(configDir)
		.map(function(file) {
			return file.replace(/\.js$/i, "");
		})
		.forEach(function(key) {
			config[key] = require(configDir + key);
		});

	grunt.initConfig(config);

	require("load-grunt-tasks")(grunt);

	grunt.registerTask("check", ["jshint", "jsvalidate", "jscs"]);
	grunt.registerTask("build", ["requirejs", "dom_munger"]);
	grunt.registerTask("test", ["karma:test"]);
};
