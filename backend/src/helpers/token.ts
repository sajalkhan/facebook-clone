import jwt from 'jsonwebtoken';

export const generateToken = (payload: object, expired: string) => {
  return jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: expired,
  });
};
