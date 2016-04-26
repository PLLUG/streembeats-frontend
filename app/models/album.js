import DS from 'ember-data';

const {
  Model,
  attr,
  hasMany,
  belongsTo
} = DS;

let Album = Model.extend({
	id: attr('number'),
	title: attr('string'),
	artist: belongsTo('artist'),
	songs: hasMany('song', {async: true}),
	image: attr('string'),
	year: attr('number')
});

export default Album;