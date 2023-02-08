const Mongoose = require('mongoose');

Mongoose.set('strictQuery', true);

const connectDB = async () => {
    try {
        await Mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connection SuccessFul !!!");
    } catch (err) {
        console.log("Connection Failed !!!");
        console.log(err);
    }

};

module.exports = connectDB