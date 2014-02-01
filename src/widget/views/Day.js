define(["BaseView", "hbs!./templates/day"], function(BaseView, template) {
	"use strict";

	var Day = BaseView.extend({
		template: template,
		renderEvent: "change:day",
		days: ["monday", "wednesday", "friday"],

		events: {
			"change .day-select": "day_change"
		},

		getTemplateData: function() {
			return {
				day: this.model.get("day"),
				days: this.days
			};
		},

		day_change: function(event) {
			var day = this.$(event.currentTarget).val();
			this.model.set("day", day);
		}
	});

	return Day;
});
