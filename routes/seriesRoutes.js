const express = require('express');
const router = express.Router();
const seriesController = require('../controllers/seriesController');

router.get('/', seriesController.listSeries);

router.get('/:id', seriesController.getSerieById);

router.get('/top_rated', seriesController.listTopRatedSeries);


module.exports = router;
