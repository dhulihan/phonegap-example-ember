App.Router.map(function() {
	this.route("about", { path: "/about" });
	this.resource("users", {path: "/"}, function() {
		this.route('dead');	
		this.route('alive');	
	});
});

App.AboutRoute = Ember.Route.extend({
  setupController: function(controller) {
    // `controller` is the instance of ApplicationController
    controller.set('greeting', "Hello there.");
  }	
});

App.UsersRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('user');
	}
});


App.UsersIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('users');
	}
});

App.UsersDeadRoute = Ember.Route.extend({
	model: function() {
		return this.store.filter('user', function(user){
			return !user.get('alive');
		})
	},
	renderTemplate: function(controller){
		this.render('users/index', {controller: controller});
	}
})

App.UsersAliveRoute = Ember.Route.extend({
	model: function() {
		return this.store.filter('user', function(user){
			return user.get('alive');
		})
	},
	renderTemplate: function(controller){
		this.render('users/index', {controller: controller});
	}
})