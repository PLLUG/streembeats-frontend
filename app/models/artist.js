import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany
} = DS;

let Artist = Model.extend({
	name: attr('string'),
	albums: hasMany('album', {async: true})
});

// Artist.reopenClass({
// 	FIXTURES: [
// 		{
// 			id: 10,
// 			name: 'The Beatles',
// 			albums: [1]
// 		}
// 	]
// });

export default Artist;