window.App = Ember.Application.create();

function debug(msg) {
	console.log(msg);
}

// Extend FixtureAdapter onto application
//App.ApplicationAdapter = DS.FixtureAdapter.extend();
App.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'app-emberjs'
});

Handlebars.registerHelper('link', function(options) {
    var result = '<a href="http://www.example.com">'
               + options.fn(this)
               + '</a>';
    return new Handlebars.SafeString(result);
});

App.ConfirmButtonComponent = Ember.Component.extend({
  actions: {
    showConfirmation: function() {
      this.toggleProperty('isShowingConfirmation'); 
    },

    confirm: function() {
      this.toggleProperty('isShowingConfirmation');
      this.sendAction('action', this.get('param'));
    }
  }
});


