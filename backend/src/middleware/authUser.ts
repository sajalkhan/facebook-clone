import { NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import ErrorHandler from '../helpers/errorHandler';

export const authUser = async (req: any, res: any, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader ? authHeader.slice(7) : '';

    if (!token) {
      throw new ErrorHandler('Invalid Authentication', 400);
    }

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET) as { userId: string };
    req.user = decoded;
    next();
  } catch (error) {
    if (error instanceof ErrorHandler) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Server Error' });
  }
};
