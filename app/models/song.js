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

Song.reopenClass({
	FIXTURES: [
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
});

export default Song;