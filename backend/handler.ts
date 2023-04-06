import awsServerlessExpress from 'aws-serverless-express';
import app from './src/server';

const server = awsServerlessExpress.createServer(app);

const handler = (event, context) => {
  return awsServerlessExpress.proxy(server, event, context);
};

export default handler;
