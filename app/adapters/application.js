import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  // host = 'https://api.themoviedb.org';
  //
  // namespace = '3';
  // pathForType(type) {
  //   return Ember.String.camelize(type);
  // }
  //
  //
  //
  // urlForQuery(query, modelName) {
  //   let baseUrl = this.buildURL(modelName);
  //   baseUrl = baseUrl.replace('show', 'movie')
  //   return `${baseUrl}/${query.id}`;
  // }
}
