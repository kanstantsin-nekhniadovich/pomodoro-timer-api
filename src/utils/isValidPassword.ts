export const PASSWORD_MAX_LENGTH = 8;

export const isValidPassword = (password: string) => {
  if (password.length < PASSWORD_MAX_LENGTH) {
    return false;
  }

  return true;
};
