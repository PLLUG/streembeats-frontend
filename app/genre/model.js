import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  wiki_link: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date')
});
