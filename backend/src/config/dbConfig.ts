const mongoose = require('mongoose');

const connectDB = async () => {
  mongoose.set('strictQuery', true);
  if (mongoose.connection.readyState > 1) return;

  try {
    await mongoose
      .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .catch(function (reason: any) {
        console.log('Unable to connect to the mongodb instance. Error: ', reason);
      });
  } catch (err: any) {
    process.exit(1);
  }
};

module.exports = connectDB;
