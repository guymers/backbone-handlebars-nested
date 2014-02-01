define(function(require) {
	"use strict";

	var NestedView = require("nested_view");

	var BaseView = NestedView.extend({
		template: null,

		initialize: function() {
			NestedView.prototype.initialize.apply(this, arguments);
			this.name = this.cid;

			if (this.renderEvent) {
				this.listenTo(this.model, this.renderEvent, this.render);
			}
		},

		getTemplate: function() {
			return this.template;
		}
	});

	NestedView.getView = function(name) {
		return require(name);
	};

	return BaseView;
});
