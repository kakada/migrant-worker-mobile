'use strict';

const CategorySchema = {
  name: 'Category',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    id: 'int',
    name: 'string',
    image_local: 'string?',
    image_url: 'string?',
    audio_local: 'string?',
    audio_url: 'string?',
    description: 'string?',
    type: 'string',
    parent_id: 'int?',
    last: { type: 'bool', default: false },
    leaf: { type: 'bool', default: false },
  }
};

export default CriteriaSchema;
