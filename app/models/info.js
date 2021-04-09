import Model, { attr } from '@ember-data/model';

export default class InfoModel extends Model {
  @attr title;
  @attr release_date;
  @attr poster_path;
  @attr vote_average;
  @attr genres;
  @attr runtime;
  @attr overview;
}
