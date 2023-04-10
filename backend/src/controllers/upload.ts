import { Request, Response } from 'express';
import { UploadedFile } from 'express-fileupload';
import { handleError, uploadToAwsS3 } from '../helpers';

type ImageType = {
  url: string;
};

export const uploadImages = async (req: Request, res: Response) => {
  try {
    const { path } = req.body;
    const images: ImageType[] = [];
    const files: UploadedFile[] = Object.values(req.files).flat() as UploadedFile[];

    for (const file of files) {
      const url: ImageType = await uploadToAwsS3(file, path);
      images.push(url);
    }
    res.json(images);
  } catch (error: any) {
    handleError(error, res);
  }
};
