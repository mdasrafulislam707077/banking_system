import { createReducer, on } from '@ngrx/store';
import {
  injectaccountInfo,
  updateAcountAmount,
  updateAcountlvl,
  updateAcountsecureStatus,
} from './accountinfo.action';
import { AccountInfo, accountInfo } from './accountinfo.state';

export const accountinfoReducer = createReducer(
  accountInfo,
  on(injectaccountInfo, (state, action: AccountInfo) => {
    return {
      ...state,
      account_lvl: action.account_lvl,
      account_type: action.account_type,
      amount: action.amount,
      create_time: action.create_time,
      secure: action.secure,
    };
  }),
  on(updateAcountlvl, (state, action: AccountInfo) => {
    return { ...state, account_lvl: action.account_lvl };
  }),
  on(updateAcountsecureStatus, (state, action: AccountInfo) => {
    return { ...state, secure: action.secure };
  }),
  on(updateAcountAmount, (state, action: AccountInfo) => {
    return { ...state, amount: action.amount };
  })
);
