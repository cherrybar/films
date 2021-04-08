import JSONAPISerializer from '@ember-data/serializer/json-api';
import { underscore } from '@ember/string';

export default class InfoSerializer extends JSONAPISerializer {
  keyForAttribute(attr) {
    return underscore(attr);
  }

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload.data = []
    payload.data.push({
      attributes: {...payload},
      type: 'info',
      id: payload.id,
      title: payload.title
    })

    debugger


    return super.normalizeResponse(store, primaryModelClass, payload, id, requestType)
  }
}
