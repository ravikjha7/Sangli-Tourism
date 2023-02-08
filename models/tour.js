const Mongoose = require('mongoose');
const { Schema } = Mongoose;

const TourSchema = new Schema({
    tourId: {
        type: String,
        required: true,
        unique: true
    },
    tours: {
        type: [Object],
        default: []
    }
});

module.exports = Mongoose.model('Tour', TourSchema);