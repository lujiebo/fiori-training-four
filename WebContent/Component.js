jQuery.sap.registerModulePath("sharedlib", "/sharedlib/");
// jQuery.sap.registerModulePath("com.sap.srive.ui.work", "/work");

sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, Device, JSONModel) {
	"use strict";

	return UIComponent.extend("com.shunyu.lujb.fiori-training-four.Component", {

		metadata: {
			manifest: "json"
		},
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			// enable routing
			this.getRouter().initialize();
		}
	});
});