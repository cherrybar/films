import Component from '@glimmer/component';

export default class InfoComponent extends Component {
  get posterStyles() {
    let {movie} = this.args
    return movie.poster_path ? `background-image: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6647701316854867) 35%, rgba(255,255,255,0) 100%),
    url(https://image.tmdb.org/t/p/w500${movie.poster_path})` : ''
  }

  get genres() {
    //movie could has a lot of genres, so here we limit displaying amount
    let {movie} = this.args
    return movie.genres.slice(0, 4)
  }
}

