import { accountinfoReducer } from './accountInfo/account.reducers';
import { initInfoLoad } from './userinfo/userinfo.reducers';
export interface NGStorage {
  userinfo: Object;
}

export const NGRXstorage = {
  userinfo: initInfoLoad,
  accountinfo: accountinfoReducer,
};
