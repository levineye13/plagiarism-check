import bcrypt from 'bcryptjs';

export const getPasswordHash = (password: string, salt: number): string => {
  let passwordHash = password;

  (async () => {
    const hash = await bcrypt.hash(password, salt);
    passwordHash = hash;
  })();

  return passwordHash;
};
