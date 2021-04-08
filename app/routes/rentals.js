import Route from '@ember/routing/route';

import { inject as service } from '@ember/service';

export default class PostRoute extends Route {
  @service store

  async model() {
    let response = await fetch('/api/rentals.json');
    let parsed = await response.json();
    return parsed;
  }
}
