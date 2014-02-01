define(["BaseView", "hbs!./templates/quantity"], function(BaseView, template) {
	"use strict";

	var Quantity = BaseView.extend({
		template: template,
		renderEvent: "change:quantity",

		events: {
			"change input": "quantity_change"
		},

		quantity_change: function(event) {
			var quantity = this.$(event.currentTarget).val();
			this.model.set("quantity", quantity);
		}
	});

	return Quantity;
});
