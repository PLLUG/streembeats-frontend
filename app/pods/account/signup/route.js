import Ember from 'ember';

export default Ember.Route.extend({
  signUpWithFacebook() {
    this.get('session').open('facebook-oauth2').then(() => {
      this.transitionTo('index');
    }, (error) => {
      alert(error);
    });
  },

  signUpWithTwitter() {
    this.get('session').open('twitter').then(() => {

    }, (error) {
      alert(error);
    });
  }
 });
