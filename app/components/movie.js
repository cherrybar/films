import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MovieComponent extends Component {
  @service router;
  @tracked query = '';
  @tracked isShowingModal = false;

  @action
  toggleModal() {
    this.isShowingModal = !this.isShowingModal
  }

  @action
  fetchData() {
    Ember.run.debounce(this, function (){
      this.router.transitionTo('movie', this.query);
    }, 500);
  }
}
