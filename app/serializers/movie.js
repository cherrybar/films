import JSONAPISerializer from '@ember-data/serializer/json-api';
import { underscore } from '@ember/string';

export default class MovieSerializer extends JSONAPISerializer {
  keyForAttribute(attr) {
    return underscore(attr);
  }

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload.data = [...payload.results];

    payload.data.forEach((el, index) => {
      payload.data[index].attributes = el;
      payload.data[index].id = el.id;
      payload.data[index].type = 'movie';
    })

    delete payload.results;

    return super.normalizeResponse(...arguments);
  }
}
