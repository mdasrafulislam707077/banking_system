export interface AccountInfo {
  account_type?: string;
  amount?: number;
  account_lvl?: number;
  create_time?: string;
  secure?: boolean;
}
export const accountInfo: AccountInfo = {
  account_type: '',
  amount: 0,
  account_lvl: 0,
  create_time: '',
  secure: false,
};
