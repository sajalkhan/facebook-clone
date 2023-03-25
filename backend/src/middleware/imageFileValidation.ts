import { Request, Response, RequestHandler, NextFunction } from 'express';
import HttpError, { handleError } from '../helpers/errorHandler';
import fs from 'fs';

const validateFiles: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.files || Object.values(req.files).flat().length === 0) {
      throw new HttpError('No files selected.', 400);
    }

    const files: any = Object.values(req.files).flat();

    try {
      files.forEach(file => {
        const { mimetype, size, tempFilePath } = file;
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

        if (!allowedTypes.includes(mimetype)) {
          removeTmp(tempFilePath);
          throw new Error('Unsupported format.');
        }

        if (size > 1024 * 1024 * 2) {
          removeTmp(tempFilePath);
          throw new Error('File size is too large.');
        }
      });
    } catch (error: any) {
      throw new HttpError(error.message, 400);
    }

    next();
  } catch (error: any) {
    handleError(error, res);
  }
};

const removeTmp = (path: string): void => {
  fs.unlink(path, err => {
    if (err) throw err;
  });
};

export default validateFiles;
