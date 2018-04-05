import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('single');
  this.route('sample');
  this.route('personal');
  this.route('line-chart');
  this.route('fake-bars');
  this.route('charLuisito');
  this.route('prospect1');
  this.route('prospect2');
  this.route('prospect3');
  this.route('generalHistoricalChart');
  this.route('comparativeHistoricalChart');
  this.route('individualHistoricalChart');
});

export default Router;
