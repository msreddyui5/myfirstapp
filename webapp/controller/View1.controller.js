sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller,MessageToast) {
	"use strict";

	return Controller.extend("demo.button.controller.View1", {
		onInit: function () {

		},
		
		onPress: function (evt) {
			MessageToast.show(evt.getSource().getId() + " Pressed");
		}
	});
});