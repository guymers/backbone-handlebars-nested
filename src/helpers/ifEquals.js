define(["handlebars.runtime"], function(Handlebars) {
	"use strict";

	var ifEquals = function(v1, v2, options) {
		if (v1 === v2) {
			return options.fn(this);
		}

		return options.inverse(this);
	};

	Handlebars.registerHelper("ifEquals", ifEquals);

	return ifEquals;
});
