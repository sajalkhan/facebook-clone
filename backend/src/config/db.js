const mongoose = require('mongoose');
const DB = process.env.DATABASE;

mongoose.set('strictQuery', true);
const connectDB = async () => {
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log('MongoDb Connected..');
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;