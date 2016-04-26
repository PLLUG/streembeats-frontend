import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('account', {}, function() {
    this.route('signin', {});
    this.route('signup', {});
  });
  this.route('genres', {}, function() {
    this.route('genre', {path: ':id'});
  });
  this.route('artists', {}, function() {});
  this.route('albums', {}, function() {
    this.route('new');
 this.route('show', { path: ':id' });
  });
});

export default Router;
