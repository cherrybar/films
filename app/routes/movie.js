import Route from '@ember/routing/route';

import { inject as service } from '@ember/service';
//
// export default class PostRoute extends Route {
//   @service store
//
//   async model() {
//     return this.store.query(
//       'movie', {'api_key': 'a7e3dbcf50f7bb583986d636632cba3d', query: 'Jack Reacher'})
//       .then((results) => {
//         debugger
//         return {
//           movies: results,
//           meta: results.meta
//         }
//       })
//   }
// }


export default class InfinityRoute extends Route {
  @service infinity

  async model(params) {
    let api_key = 'a7e3dbcf50f7bb583986d636632cba3d'

    let paramsModified = {
      'api_key': api_key,
      query: params.query ? params.query : 'a'
    }
    return this.infinity.model('movie', paramsModified)
          .then((results) => {
            console.log(results)
        return {
          movies: results,
          meta: results.meta
        }
      });
  }
}

