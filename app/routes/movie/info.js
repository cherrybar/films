import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class InfoRoute extends Route {
  @service store;

  async model(params) {
    debugger
    let api_key = 'a7e3dbcf50f7bb583986d636632cba3d';
    return this.store.query('info', {api_key: api_key, id: params.movie_id})
  }
}
