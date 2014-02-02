define(["widget/Widget"], function(Widget) {
	"use strict";

	describe("widget model", function() {

		it("defaults", function() {
			var widget = new Widget();

			expect(widget.get("day")).toEqual("monday");
		});

	});

});
