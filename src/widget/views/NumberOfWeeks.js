define(["BaseView", "hbs!./templates/number_of_weeks"], function(BaseView, template) {
	"use strict";

	var NumberOfWeeks = BaseView.extend({
		template: template,
		renderEvent: "change:weeks",
		numWeeks: 4,

		events: {
			"click .week-select": "week_select"
		},

		getTemplateData: function() {
			// http://stackoverflow.com/a/19506234
			var weeks = Array.apply(0, new Array(this.numWeeks)).map(function(element, index) {
				return index + 1;
			});

			return {
				week: this.model.get("weeks"),
				weeks: weeks
			};
		},

		week_select: function(event) {
			event.preventDefault();
			var week = this.$(event.currentTarget).data("week");
			this.model.set("weeks", week);
		}
	});

	return NumberOfWeeks;
});
