import JSONAPISerializer from '@ember-data/serializer/json-api';
import { underscore } from '@ember/string';

export default class InfoSerializer extends JSONAPISerializer {
  keyForAttribute(attr) {
    return underscore(attr);
  }

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    //transform server response to JSON API format
    payload.data = {};
    payload.data.attributes = {...payload};
    payload.data.type = 'info';
    payload.data.id = payload.id;
    payload.data.title = payload.title;

    return super.normalizeResponse(store, primaryModelClass, payload, id, requestType);
  }
}
