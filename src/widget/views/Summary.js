define(["BaseView", "hbs!./templates/summary"], function(BaseView, template) {
	"use strict";

	var Summary = BaseView.extend({
		template: template,
		renderEvent: "change"
	});

	return Summary;
});
