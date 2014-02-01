/* jshint unused: false */
var require = {
	baseUrl: "src",
	paths: {
		almond: "../bower_components/almond/almond",
		hbs: "../bower_components/require-handlebars-plugin/hbs",
		jquery: "../bower_components/jquery/jquery",
		backbone: "../bower_components/backbone/backbone",
		underscore: "../bower_components/underscore/underscore",
		handlebars: "../bower_components/handlebars/handlebars",
		nested_view: "../bower_components/nested-view/lib/nested_view"
	},
	hbs: {
		helpers: true,
		helperDirectory: "helpers/",
		i18n: false,
		templateExtension: "html",
		partialsUrl: ""
	},
	shim: {
		jquery: {
			exports: "$"
		},
		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		},
		underscore: {
			exports: "_"
		},
		handlebars: {
			exports: "Handlebars"
		},
		"handlebars.runtime": {
			exports: "Handlebars"
		},
		nested_view: {
			deps: ["backbone", "underscore", "handlebars.runtime"],
			exports: "NestedView"
		}
	}
};
