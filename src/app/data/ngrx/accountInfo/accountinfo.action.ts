import { createAction, props } from '@ngrx/store';
import { AccountInfo } from './accountinfo.state';
export const injectaccountInfo = createAction('injectaccountInfo', props<AccountInfo>());
export const updateAcountAmount = createAction('updateAcountAmount', props<AccountInfo>());
export const updateAcountlvl = createAction('updateAcountlvl', props<AccountInfo>());
export const updateAcountsecureStatus = createAction(
  'updateAcountsecureStatus',
  props<AccountInfo>()
);
