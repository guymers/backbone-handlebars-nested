module.exports = {
	options: {
		jshintrc: ".jshintrc"
	}
};

var grunt = require("grunt");
var files = grunt.config.get("files");

Object.keys(files).forEach(function(key) {
	"use strict";

	module.exports[key] = {
		src: files[key]
	};
});
