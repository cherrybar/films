import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class InfoAdapter extends JSONAPIAdapter {
  host = 'https://api.themoviedb.org';
  namespace = '3';

  pathForType(type) {
    return Ember.String.camelize(type);
  }

  urlForQueryRecord(query, modelName) {
    //ember data builds url as '/3/info/ by default, that's why here it has to be changed
    let baseUrl = this.buildURL(modelName).replace('info', 'movie');
    return `${baseUrl}/${query.id}`;
}
}
