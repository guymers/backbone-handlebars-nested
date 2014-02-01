define(["widget/Widget", "widget/views/Widget"], function(Widget, WidgetView) {
	"use strict";

	var widget = new Widget();
	var view = new WidgetView({
		el: "#container",
		model: widget
	});
	view.render();
});
