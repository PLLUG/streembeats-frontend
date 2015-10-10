import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signin() {
      let username = this.controller.get('username');
      let password = this.controller.get('password');

      if (username && password) {
        this.transitionTo('index');
      } else {
        alert('error');
      }
    }
  }
});
