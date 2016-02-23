App.Artist = DS.Model.extend({
	name: DS.attr('string'),
	albums: DS.hasMany('album', {async: true})
});

App.Artist.FIXTURES = [
	{
		id: 10,
		name: 'The Beatles',
		albums: [1]
	}
]