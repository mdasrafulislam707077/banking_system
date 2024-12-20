// item.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { clearUserInfo, loadInitInfo } from './userinfo.actions';
import { initialState } from './userinfo.state';

export const initInfoLoad = createReducer(
  initialState,
  on(loadInitInfo, (state, action: any) => ({
    ...state,
    id: action.id,
    username: action.username,
    auth: action.auth,
    email: action.email,
  })),
  on(clearUserInfo, (state, action: any) => ({
    ...initialState,
  }))
);
