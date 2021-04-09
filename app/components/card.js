import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";
import { action } from '@ember/object';

export default class CardComponent extends Component {
  @tracked isShowingModal = false;

  @action
  toggleModal() {
    setTimeout(function (){
      this.isShowingModal = !this.isShowingModal
    }.bind(this), 200);
  }

  get releaseYear() {
    let { movie } = this.args;
    let releaseDate = movie['release_date'];

    return releaseDate ? new Date(releaseDate).getFullYear() : '';
  }

  get posterImage() {
    let { movie } = this.args;

    return movie.poster_path ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}` : '/assets/noImage.png'
  }
}
