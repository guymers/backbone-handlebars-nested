define([
	"BaseView",
	"hbs!./templates/widget",
	"./Quantity",
	"./Day",
	"./NumberOfWeeks",
	"./Summary"
], function(BaseView, template) {
	"use strict";

	var Widget = BaseView.extend({
		template: template
	});

	return Widget;
});
