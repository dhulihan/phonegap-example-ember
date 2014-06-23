App.UsersController = Ember.ArrayController.extend({
	actions: {
		createUser: function(){
			var name = this.get("name");
			var email = this.get("email");			
			if (!name.trim()) { return; }

			var user = this.store.createRecord("user", {
				name: name,
				email: email
			});

			// Clear text field
			this.set('name', '')

			user.save();
		}	
	},
	numHappy: function() {
		return this.filterBy('isHappy', true).get('length');
	}.property('@each.isHappy')
})


