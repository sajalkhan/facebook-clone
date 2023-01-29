import express from "express";
import cors from "cors";
import path from "path";

const { readdirSync } = require("fs");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

//routes
//Note: https://www.geeksforgeeks.org/node-js-fs-readdirsync-method/
readdirSync(path.resolve (__dirname, './routes')).map((file: string) => app.use("/", require("./routes/" + file)));


//Database Connection
const PORT = process.env.PORT || 8000;
const connectDB = require("./config/dbConfig");
try {
  connectDB();
  app.listen(PORT, () => console.log(`server started on port ${PORT}`));
} catch (error) {
  console.log("error mongodb connection");
}