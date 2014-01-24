define([
	"../../BaseObject"
], function(
	BaseObject
) {
	return BaseObject.extend({
		defaults: {
			type: "ship",
			class: "BaseShip",
			name: "Default Ship"
		},
		initialize: function() {
			console.log("BaseShip!");
			console.log(this);
		}
	});
});