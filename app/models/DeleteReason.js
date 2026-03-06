import realm from '../db/schema';

const MODEL_NAME = 'DeleteReason';

const DeleteReason = (() => {
  return {
    getAll,
    create
  }

  function getAll() {
    return realm.objects(MODEL_NAME).sorted('display_order', false);
  }

  function create(item) {
    realm.write(() => {
      realm.create(MODEL_NAME, _buildData(item), 'modified');
    });
  }

  function _buildData(item) {
    const params = {
      id: item.id,
      name_km: item.name_km,
      name_en: item.name_en,
      display_order: item.display_order,
    };
    return params;
  }
})();

export default DeleteReason;