import Component from '@glimmer/component';

export default class CardComponent extends Component {
  get releaseYear() {
    let { movie } = this.args
    let releaseDate = movie['release_date']
    return new Date(releaseDate).getFullYear()
  }

  get posterImage() {
    let {movie} = this.args
    let src

    if (movie.poster_path) {
      src = 'https://image.tmdb.org/t/p/w300/' + movie.poster_path
    } else {
      src = '/assets/noImage.png'
    }

    return src
  }
}
