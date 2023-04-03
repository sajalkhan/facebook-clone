import { UploadedFile } from 'express-fileupload';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import fs from 'fs';

const s3 = new S3Client({
  region: process.env.BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_USER_ACCESS_KEY,
    secretAccessKey: process.env.AWS_USER_SECRET_ACCESS_KEY
  }
});

export const uploadToAwsS3 = async (file: UploadedFile, path: string): Promise<{ url: string }> => {
  try {
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: `${path}/${file.name}`,
      Body: fs.createReadStream(file.tempFilePath),
      ContentType: file.mimetype
    };

    await s3.send(new PutObjectCommand(params));
    removeTmp(file.tempFilePath);

    const url = `https://${params.Bucket}.s3.amazonaws.com/${encodeURIComponent(params.Key)}`;
    return { url };
  } catch (error) {
    throw new Error('Upload image failed.');
  }
};

const removeTmp = (path: string) => {
  fs.unlink(path, err => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.log(`File ${path} does not exist.`);
      } else {
        throw err;
      }
    }
  });
};
