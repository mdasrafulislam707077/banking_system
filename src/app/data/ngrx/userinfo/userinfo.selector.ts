import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserInfo } from './userinfo.state';
const initUserInfo = createFeatureSelector<UserInfo>('userinfo');
export const userSelector = createSelector(initUserInfo, (state) => {
  return state;
});
