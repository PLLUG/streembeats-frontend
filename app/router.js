import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('account', {}, function() {
    this.route('signin', {});
  });
});

export default Router;
