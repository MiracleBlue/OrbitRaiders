// This is the main GameObjects controller.  It pulls in all the game objects dependencies like ships and debris.
// The main app file only needs to load in GameObjects to load in all the stuff!
define([
	// Ships
	"./Ships/Scout/Scout"		// ScoutShip
], function(
	// Ships
	ScoutShip
) {
	// Set up ships
	return Backbone.DeepModel.extend({
		defaults: {
			ships: null,
			world: null
		},
		initialize: function() {
			var ships = {
				ScoutShip: ScoutShip
			};
			
			var world = new Backbone.Collection();

			this.set("ships", ships);
			console.log("ships!  ", this.get("ships"));
		}
	})
});