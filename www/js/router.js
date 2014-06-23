App.Router.map(function() {
	this.route("about", { path: "/about" });
	this.resource("users", {path: "/"}, function() {
		this.route('sad');	
		this.route('happy');	
	});
});

App.AboutRoute = Ember.Route.extend({
  setupController: function(controller) {
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

App.UsersSadRoute = Ember.Route.extend({
	model: function() {
		return this.store.filter('user', function(user){
			return !user.get('isHappy');
		})
	},
	renderTemplate: function(controller){
		this.render('users/index', {controller: controller});
	}
})

App.UsersHappyRoute = Ember.Route.extend({
	model: function() {
		return this.store.filter('user', function(user){
			return user.get('isHappy');
		})
	},
	renderTemplate: function(controller){
		this.render('users/index', {controller: controller});
	}
})