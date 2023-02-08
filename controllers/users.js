const Place = require('./../models/place');
const Tour = require('./../models/tour');

module.exports.getList = async (req, res) => {

    try {

        const Places = await Place.find({});

        return res.status(200).json({
            places: Places
        });

    } catch (e) {
        return res.status(400).json({
            message: e.message
        });

    }

}

module.exports.getTour = async (req, res) => {

    try {

        const Tours = await Tour.find({ "tourId": req.query.id });

        console.log(req.query.id);

        return res.status(200).json({
            tours: Tours
        });

    } catch (e) {

        return res.status(400).json({
            message: e.message
        });

    }

}