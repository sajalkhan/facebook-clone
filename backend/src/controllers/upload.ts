import { Request, Response } from 'express';
import { handleError } from '../helpers';

export const uploadImages = async (__: Request, res: Response) => {
  try {
    res.json('welcome from image upload');
  } catch (error: any) {
    handleError(error, res);
  }
};
