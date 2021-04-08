import Model, { attr } from '@ember-data/model';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class MovieModel extends Model {
  @attr title;
  @attr release_date;
  @attr poster_path;
  @attr vote_average;
}
