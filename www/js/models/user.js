App.User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  alive: DS.attr('boolean')
});

App.User.FIXTURES = [
	 {
		id: 1,
		name: "Bob Jones",
		email: "bob@example.com",
		alive: true
	 },
	 {
		id: 2,
		name: "Mac Douglas",
		email: "mac@example.com",
		alive: false
	 },
	 {
		id: 3,
		name: "Darren Wibble",
		email: "darren@example.com",
		alive: true
	 },	 
];