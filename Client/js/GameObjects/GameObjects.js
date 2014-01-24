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
	return function() {
		this.ships = {
			ScoutShip: ScoutShip
		}
	};
});