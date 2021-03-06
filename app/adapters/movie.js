import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class MovieAdapter extends JSONAPIAdapter {
  host = 'https://api.themoviedb.org';
  namespace = '3/search';

  pathForType(type) {
    return Ember.String.camelize(type);
  }
}
