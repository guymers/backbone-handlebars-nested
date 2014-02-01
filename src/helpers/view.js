define(["handlebars.runtime", "nested_view"], function(Handlebars, NestedView) {
	"use strict";

	Handlebars.registerHelper("view", NestedView.viewHelper);

	return NestedView.viewHelper;
});
