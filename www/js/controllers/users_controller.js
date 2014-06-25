App.UsersController = Ember.ArrayController.extend({
	actions: {
		clearHappy: function(){
			var happy = this.filterBy('isHappy', true);
			happy.invoke('deleteRecord');
			happy.invoke('save');
		}, 
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
		},
		happy: function() {
			return this.filterBy('isHappy', true).get('length');
		}.property('@each.isCompleted')
	},
	hasHappy: function() {
		return this.get('numHappy') > 0;
	}.property('numHappy'),
	numHappy: function() {
		return this.filterBy('isHappy', true).get('length');
	}.property('@each.isHappy')
})


