import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import fileUpload from 'express-fileupload';
import fs from 'fs';
import path from 'path';
import { connectDB } from './config/dbConfig';
const serverless = require('serverless-http');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true
  })
);

fs.readdirSync(path.resolve(__dirname, './routes')).forEach(file => {
  app.use('/', require(`./routes/${file}`));
});

const PORT = process.env.PORT || 8000;

connectDB().catch(error => {
  console.error('Error connecting to database: ', error);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
const serverApp = serverless(app);

export default serverApp;
