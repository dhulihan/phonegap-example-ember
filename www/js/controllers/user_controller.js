App.UserController = Ember.ObjectController.extend({
	isEditing: false,
	acceptChanges: function() {
		this.set('isEditing', false);

		if (Ember.isEmpty(this.get('model.name'))) {
		 	this.send('removeUser');
		} else {
			this.get('model').save();
		}
	},
	alive: function(key, value){
		var model = this.get('model');

		if (value === undefined) {
			// property being used as a getter
			return model.get('alive');
		} else {
			// property being used as a setter
			model.set('alive', value);
			model.save();
			return value;
		}
	}.property('model.alive'),	
	editUser: function() {
		debug("editUser called.");
		this.set('isEditing', true);
	},
	removeUser: function() {
		var user = this.get('model');
		user.deleteRecord();
		user.save();
	}
})