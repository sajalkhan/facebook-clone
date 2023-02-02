const mongoose = require('mongoose');

export const connectDB = async () => {
  mongoose.set('strictQuery', true);

  if (mongoose.connection.readyState > 1) {
    return;
  }

  try {
    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error('Unable to connect to the mongodb instance. Error: ', error);
    process.exit(1);
  }
};
