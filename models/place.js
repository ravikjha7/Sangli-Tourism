const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const PlaceSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }
});

module.exports = Mongoose.model('Place', PlaceSchema);