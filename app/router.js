import EmberRouter from '@ember/routing/router';
import config from 'mew2/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {

  // this.route('info', { path: '/info/:movie_id' });

  this.route('movie', { path: '/movie/:query' }, function(){
    this.route('info',{ path: '/info/:movie_id' })
  });
  // this.route('movie', function(){
  //   this.route('info', { path: '/info/:movie_id' })
  // });

  this.route('rentals', { path: '/rental' }, function() {
    this.route('show', { path: '/show/:movie_id' });
  });
});
