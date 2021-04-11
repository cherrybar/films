import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import {tracked} from "@glimmer/tracking";

export default class SearchComponent extends Component {
  @service router;
  @tracked query = '';

  @action
  fetchData() {
    Ember.run.debounce(this, function (){
      if (this.query) {
        this.router.transitionTo('search.movie', this.query);
      } else {
        this.router.transitionTo('search');
      }
    }, 500);
  }
}

