import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MovieComponent extends Component {
  @service router;
  @tracked query = '';

  @action
  fetchData() {
    Ember.run.debounce(this, function (){
      if (this.query) {
        this.router.transitionTo('movie', this.query);
      } else {
        //there is no any provided endpoint that allows to get all movies without 'query' param,
        //so in case when search input is empty set 'a' by default
        this.router.transitionTo('movie', 'a');
      }
    }, 500);
  }
}
