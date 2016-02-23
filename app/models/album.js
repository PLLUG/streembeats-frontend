App.Album = DS.Model.extend({
	title: DS.attr('string'),
	artist: DS.belongsTo('artist'),
	songs: DS.hasMany('song', {async: true}),
	image: DS.attr('string'),
	year: DS.attr('number')
});

App.Album.FIXTURES = [
	{
		id: 1,
		title: 'Abbey Road',
		artist: 10,
		songs: [101, 102],
		image: 'AbbeyRoad.jpg',
		year: 1969
	}
]