const Place = require('./../models/place');
const Tour = require('./../models/tour');

module.exports.addPlace = async (req, res) => {

    try {

        const place = new Place(req.body);
        await place.save();

        return res.status(200).json({
            message: "Place Added !!!"
        })

    } catch (e) {
        return res.status(400).json({
            message: e.message
        });
    }

}

module.exports.addTour = async (req, res) => {

    try {

        const { id, title, description, image } = req.body;

        let tour = await Tour.find({ "tourId": id });

        if (tour.length === 0) tour = new Tour({ "tourId": id });
        else tour = tour[0];

        console.log(tour);

        tour.tours.push({
            "title": title,
            "description": description,
            "image": image
        });

        await tour.save();

        return res.status(200).json({
            message: "Tour Added !!!"
        });


    } catch (e) {

        return res.status(400).json({
            message: e.message
        });

    }

}