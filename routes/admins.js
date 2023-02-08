const express = require('express');
const router = express.Router();

const admins = require('./../controllers/admins');

router.post('/addPlace', admins.addPlace);
router.post('/addTour', admins.addTour);

module.exports = router;