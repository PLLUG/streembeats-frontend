import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany,
  belongsTo
} = DS;

let Album = Model.extend({
	title: attr('string'),
	artist: belongsTo('artist'),
	songs: hasMany('song', {async: true}),
	image: attr('string'),
	year: attr('number'),
});

export default Album;

Album.FIXTURES = [
	{
		id: 1,
		title: 'Abbey Road',
		artist: 10,
		songs: [101, 102],
		image: 'AbbeyRoad.jpg',
		year: 1969
	}
]