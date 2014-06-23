App.Router.map(function() {
	this.route("home", { path: '/' });
	this.route("about", { path: "/about" });
	this.resource("users", function() {
		
	});
});

App.HomeRoute = Ember.Route.extend({
	setupController: function(controller) {
		// Set the IndexController's `title`
		controller.set('title', "My App");
	}
});

App.UsersRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('user');
	}
});
