import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class MovieComponent extends Component {
  @tracked isShowingModal = false;

  @action
  toggleModal() {
    this.isShowingModal = !this.isShowingModal
  }

}
