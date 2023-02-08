const express = require('express');
const router = express.Router();

const users = require('./../controllers/users');

router.get('/getList', users.getList);
router.get('/getTour', users.getTour);

module.exports = router;