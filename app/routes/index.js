import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class IndexRoute extends Route {
  @service store;


  async model(params) {
    return this.store.query('movie', {
      api_key: EmberENV.API.API_KEY,
      query: params.query ? params.query : 'a'
    })
  }
}

