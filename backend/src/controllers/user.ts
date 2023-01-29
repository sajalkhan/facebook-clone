import { Request, Response } from 'express';

export const home = (_req: Request, res: Response) => {
  res.send('welcome from user home');
};
