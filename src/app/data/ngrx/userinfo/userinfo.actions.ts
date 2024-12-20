import { createAction, props } from '@ngrx/store';

export const loadInitInfo = createAction(
  'set_user_name_with_id',
  props<{ id: number; username: string; auth: boolean; email: string }>()
);
export const clearUserInfo = createAction('reset_all');
