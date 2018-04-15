import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('aboutus');
  this.route('courses');
  this.route('contactus');
  this.route('downloads');
  this.route('ourmission');
});

Router.reopen({
  notifyGoogleAnalytics: function () {
    if (typeof ga === 'function') {
      return ga('send', 'pageview', {
        'page': this.get('url'),
        'title': this.get('url')
      });
    }
  }.on('didTransition')
});

export default Router;