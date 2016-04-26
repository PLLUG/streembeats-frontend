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
	year: attr('number')
});

export default Album;