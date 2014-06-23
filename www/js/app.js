window.App = Ember.Application.create();


function debug(msg) {
	console.log(msg);
}



// Extend FixtureAdapter onto application
App.ApplicationAdapter = DS.FixtureAdapter.extend();
