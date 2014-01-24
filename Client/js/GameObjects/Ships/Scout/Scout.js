define([
	"../BaseShip/BaseShip"
], function(
	BaseShip
) {
	return BaseShip.extend({
		defaults: {
			class: "ScoutShip",
			name: "Scout Ship"
		},
		initialize: function() {
			console.log("Scout!");
		}
	});
});