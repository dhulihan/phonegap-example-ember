App.User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  isHappy: DS.attr('boolean')
});

App.User.FIXTURES = [
	 {
		id: 1,
		name: "Bob Jones",
		email: "bob@example.com",
		isHappy: true
	 },
	 {
		id: 2,
		name: "Ralph Douglas",
		email: "mac@example.com",
		isHappy: false
	 },
	 {
		id: 3,
		name: "Darren Wibble",
		email: "darren@example.com",
		isHappy: true
	 },	 
];