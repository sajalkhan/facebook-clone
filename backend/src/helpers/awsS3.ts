import { UploadedFile } from 'express-fileupload';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({
  region: process.env.BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_USER_ACCESS_KEY,
    secretAccessKey: process.env.AWS_USER_SECRET_ACCESS_KEY
  }
});

export const uploadToAwsS3 = async (file: UploadedFile, path: string): Promise<{ url: string }> => {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: `${path}/${file.name}`,
    Body: file.data,
    ContentType: file.mimetype
  };

  try {
    await s3.send(new PutObjectCommand(params));
    const url = `https://${params.Bucket}.s3.amazonaws.com/${encodeURIComponent(params.Key)}`;
    return { url };
  } catch (error) {
    throw new Error('Upload image failed.');
  }
};
