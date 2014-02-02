module.exports = {
	options: {
		config: ".jscs.json"
	}
};

var grunt = require("grunt");
var files = grunt.config.get("files");

Object.keys(files).forEach(function(key) {
	"use strict";

	module.exports[key] = {
		files: {
			src: files[key]
		}
	};
});
