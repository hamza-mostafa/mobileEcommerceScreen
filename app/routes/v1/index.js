const express = require('express');
const router = express.Router();
const coffeeMachines = require('./coffeeMachines');
const coffeePodsRouter = require('./coffeePods');
const indexRouter = require('./mainIndex');

router.use('/coffee-machines' , coffeeMachines);
router.use('/coffee-pods', coffeePodsRouter);
router.use('/', indexRouter);

module.exports = router;
