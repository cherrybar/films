import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class InfoAdapter extends JSONAPIAdapter {
  host = 'https://api.themoviedb.org';
  namespace = '3';

  pathForType(type) {
    return Ember.String.camelize(type);
  }

  urlForQueryRecord(query, modelName) {
    let baseUrl = this.buildURL(modelName).replace('info', 'movie');
    return `${baseUrl}/${query.id}`;
}
}
