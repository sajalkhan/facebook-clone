import { RequestHandler, NextFunction } from 'express';
import fs from 'fs';

const validateFiles: RequestHandler = async (req: any, res: any, next: NextFunction) => {
  try {
    if (!req.files || Object.values(req.files).flat().length === 0) {
      return res.status(400).json({ message: 'No files selected.' });
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
      return res.status(400).json({ message: error.message });
    }

    next();
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

const removeTmp = (path: string): void => {
  fs.unlink(path, err => {
    if (err) throw err;
  });
};

export default validateFiles;
