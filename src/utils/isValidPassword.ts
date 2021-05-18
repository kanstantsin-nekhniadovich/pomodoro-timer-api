import { PASSWORD_MAX_LENGTH } from '../constants';

export const isValidPassword = (password: string) => {
  if (password.length < PASSWORD_MAX_LENGTH) {
    return false;
  }

  return true;
};
