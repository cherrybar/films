import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class InfinityRoute extends Route {
  @service infinity

  async model(params) {
    return this.infinity.model('movie', {
      'api_key': EmberENV.API.API_KEY,
      query: params.query
    }).then((movies) => {
      return { movies }
    });
  }
}

