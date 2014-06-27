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
		}.property('@each.isHappy')
	},
	allAreHappy: function (key, value) {
		console.log(key)
		if(value === undefined) {
			// getter
			return !!this.get('length') && this.isEvery('isHappy');
		} else {
			// setter
			this.setEach('isHappy', value);
			this.invoke('save');
			return value;
		}
	}.property('@each.isHappy'),	
	hasHappy: function() {
		return this.get('numHappy') > 0;
	}.property('numHappy'),
	numHappy: function() {
		return this.filterBy('isHappy', true).get('length');
	}.property('@each.isHappy')
})


