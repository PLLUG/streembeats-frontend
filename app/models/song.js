App.Song = DS.Model.extend({
	title: DS.attr('string'),
	album: DS.belongsTo('album')
});

App.Song.FIXTURES = [
	{
		id: 101,
		title: 'Oh! Darling',
		album: 1
	},
	{
		id: 102,
		title: 'Octopus\'s Garden',
		album: 1
	}
]