const express = require('express');
const router = express.Router();
const seriesController = require('../controllers/seriesController');

router.get('/', seriesController.listSeries);



router.get('/top_rated', seriesController.listTopRatedSeries);

router.get('/filter',seriesController.getMoviesByGenre)

router.get('/lenguaje', seriesController.listFilteredSeriesByLanguage);

router.get('/serie/:id', seriesController.getSerieById);

module.exports = router;
