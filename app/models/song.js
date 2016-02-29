import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

let Song = Model.extend({
	title: attr('string'),
	album: belongsTo('album')
});

export default Song;

Song.FIXTURES = [
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