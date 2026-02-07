const DeleteReasonSchema = {
  name: 'DeleteReason',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name_km: 'string',
    name_en: 'string',
    display_order: 'int'
  }
}

export default DeleteReasonSchema;