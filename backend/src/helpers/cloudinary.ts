import { UploadedFile } from 'express-fileupload';
import cloudinary from 'cloudinary';
import fs from 'fs';

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

export const uploadToCloudinary = async (file: UploadedFile, path: string): Promise<{ url: string }> => {
  try {
    const res = await new Promise<cloudinary.UploadApiResponse>((resolve, reject) => {
      cloudinary.v2.uploader.upload(
        file.tempFilePath,
        {
          folder: path
        },
        (err, res) => {
          if (err) {
            removeTmp(file.tempFilePath);
            reject(new Error('Upload image failed.'));
          }
          resolve(res);
        }
      );
    });
    return {
      url: res.secure_url
    };
  } catch (error) {
    throw new Error('Upload image failed.');
  }
};

export const removeTmp = (path: string) => {
  fs.unlink(path, err => {
    if (err) {
      if (err.code === 'ENOENT') {
        return;
      } else {
        throw err;
      }
    }
  });
};
