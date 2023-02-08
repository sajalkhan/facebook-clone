import { Response } from 'express';
export default class HttpError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const handleError = (err: Error, res: Response) => {
  if (err instanceof HttpError) {
    res.status(err.statusCode).send({ message: err.message });
  } else {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};
