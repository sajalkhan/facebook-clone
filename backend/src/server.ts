import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import fileUpload from 'express-fileupload';
import fs from 'fs';
import path from 'path';
import { connectDB } from './config/dbConfig';
import serverless from 'serverless-http';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(fileUpload());

fs.readdirSync(path.resolve(__dirname, './routes')).forEach(file => {
  app.use('/', require(`./routes/${file}`));
});

const PORT = process.env.PORT || 8000;

connectDB().catch(error => {
  console.error('Error connecting to database: ', error);
});

if (process.env.ENVIRONMENT === 'production') {
  module.exports.handler = serverless(app);
} else {
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}
