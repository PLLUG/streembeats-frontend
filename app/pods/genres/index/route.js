import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('genre');
  },

  setupController() {
    this.set('genres', this.currentModel);
  }
});
