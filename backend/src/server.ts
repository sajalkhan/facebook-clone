const Express = require("express");
const cors = require("cors");
const path = require ('path');
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
dotenv.config();

const app = Express();
app.use(Express.json());
app.use(cors());

//routes
//Note: https://www.geeksforgeeks.org/node-js-fs-readdirsync-method/
readdirSync(path.resolve (__dirname, './routes')).map((file: string) => app.use("/", require("./routes/" + file)));


//Database Connection
const PORT = process.env.PORT || 8000;
const connectDB = require("./config/db");
try {
  connectDB();
  app.listen(PORT, () => console.log(`server started on port ${PORT}`));
} catch (error) {
  console.log("error mongodb connection");
}