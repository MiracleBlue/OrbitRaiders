// Main application module
define([
	'./gameEngine',
	'./GameObjects/GameObjects'
], function(
	GameEngine,
	GameObjects
) {
	// Start here.  Load up the main app and modules.
	console.log("OrbitRaiders!");
	var OrbitRaiders = Backbone.Model.extend({
		defaults: {
			objects: null
		},
		initialize: function() {
			console.log("OrbitRaiders initialize");
			var objects = new GameObjects();
			this.set("objects", objects);
		}
	});

	window.OrbitRaiders = new OrbitRaiders();
});