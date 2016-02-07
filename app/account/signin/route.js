import Ember from 'ember';

export default Ember.Route.extend({
  model() {

    
  },

  actions: {
    signInViaFacebook() {
      this.get('session').open('facebook-oauth2').then(() => {
        this.transitionTo('index');
      }, (error) => {
        console.log(error);
      });
    },

    signInViaTwitter() {
      this.get('session').open('twitter').then(() => {
        this.transitionTo('index');
      }, (error) => {
        console.log(error);
      });
    }
  }
});
