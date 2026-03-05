import NetInfo from "@react-native-community/netinfo";

import WebService from './web_service';
import endpointHelper from '../helpers/endpoint_helper';
import DeleteReason from '../models/DeleteReason';

export default class DeleteReasonService extends WebService {
  fetch() {
    NetInfo.fetch().then(state => {
      if (!state.isConnected) return;

      this.get(endpointHelper.listingEndpoint('delete_reasons'))
        .then(res => JSON.parse(res.data))
        .then(body => {
          const data = body.data;
          for (var i = 0; i < data.length; i++) {
            DeleteReason.create(data[i]);
          }
        })
    });
  }
}