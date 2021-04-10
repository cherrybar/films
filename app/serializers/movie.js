import JSONAPISerializer from '@ember-data/serializer/json-api';
import { underscore } from '@ember/string';

export default class MovieSerializer extends JSONAPISerializer {
  keyForAttribute(attr) {
    return underscore(attr);
  }

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    //transform server response to JSON API format
    payload.data = [...payload.results];

    payload.data.forEach((el, index) => {
      payload.data[index].attributes = el;
      payload.data[index].id = el.id;
      payload.data[index].type = 'movie';
    });

    //meta is needed for Infinity Model
    payload.meta = {};
    payload.meta['total_pages'] = payload['total_pages'];
    payload.meta['total_results'] = payload["total_results"];
    payload.meta.page = payload.page;

    delete payload.results;

    return super.normalizeResponse(...arguments);
  }
}
