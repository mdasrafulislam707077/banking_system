export interface UserInfo {
  username: string;
  id: number;
  email: string;
  phone: string;
  account_type: string;
  first_name: string;
  last_name: string;
  auth: boolean;
}

export const initialState: UserInfo = {
  auth: false,
  username: '',
  id: 0,
  email: '',
  phone: '',
  account_type: '',
  first_name: '',
  last_name: '',
};
