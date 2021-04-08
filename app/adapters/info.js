import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class InfoAdapter extends JSONAPIAdapter {
  host = 'https://api.themoviedb.org';

  namespace = '3';
  pathForType(type) {
    return Ember.String.camelize(type);
  }



  urlForQuery(query, modelName) {
    debugger
    let baseUrl = this.buildURL(modelName);
    baseUrl = baseUrl.replace('info', 'movie')
    return `${baseUrl}/${query.id}`;
}
}
