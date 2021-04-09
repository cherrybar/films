import EmberRouter from '@ember/routing/router';
import config from 'mew2/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('movie', { path: '/:query' },
    function(){
      this.route('info',{ path: '/info/:movie_id' })
    },
  );

});
