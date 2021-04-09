import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class InfoRoute extends Route {
  @service store;

  async model(params) {
    return this.store.queryRecord('info', {
      api_key: EmberENV.API.API_KEY,
      id: params.movie_id
    })
  }
}
