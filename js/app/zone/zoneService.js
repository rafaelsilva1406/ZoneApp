/**
 *
 */
define(function(require) {
	'use strict';
    var h = require("./zoneModule");

    function zoneService() {
    	this.getGrocery = function (){
			var data = [
				{
					"name": "Monster Energy Drinks",
				},
				{
					"name": "Oreo Cookies",
				},
				{
					"name": "Dasani Waters",
				},
				{
					"name": "Soy Milk",
				},
				{
					"name":"100% Whole Wheat Bread",
				},
				{
					"name":"Caesar Salad Packs"
				},
			]
			return data;
		};
    }
    return h.service("zoneService", zoneService);
});