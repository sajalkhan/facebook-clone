import jwt from 'jsonwebtoken';

export const generateToken = (payload: object, expired: string) => {
  const secret: string = process.env.TOKEN_SECRET || '3xgDmbD8WC';

  return jwt.sign(payload, secret, {
    expiresIn: expired
  });
};
