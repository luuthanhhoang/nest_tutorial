import * as bcrypt from 'bcrypt';

export function encodePassword(password: string): string {
  const SALT = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, SALT);
}

export function comparePassword(password: string, hash: string): string {
  return bcrypt.compareSync(password, hash);
}
