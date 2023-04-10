import crypto from 'crypto';
import { UploadedFile } from 'express-fileupload';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { GetObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

const s3 = new S3Client({
  region: process.env.BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_USER_ACCESS_KEY,
    secretAccessKey: process.env.AWS_USER_SECRET_ACCESS_KEY
  }
});

const generateFileName = (bytes = 16) => crypto.randomBytes(bytes).toString('hex');

export const uploadToAwsS3 = async (file: UploadedFile, path: string): Promise<{ url: string }> => {
  try {
    const fileName = generateFileName();

    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: `${path}/${fileName}`,
      Body: file.data,
      ContentType: file.mimetype
    };

    await s3.send(new PutObjectCommand(params));

    const url = await getSignedUrl(s3, new GetObjectCommand(params), { expiresIn: 3600 });
    return { url };
  } catch (error) {
    throw new Error('Upload image failed.');
  }
};
