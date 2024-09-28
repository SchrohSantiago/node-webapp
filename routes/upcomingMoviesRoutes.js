const express = require('express');
const router = express.Router();
const upcomingMoviesController = require('../controllers/upcomingMoviesController');

router.get('/', upcomingMoviesController.getUpcomingMovies);

router.get('/:id', upcomingMoviesController.getAlternativeTitleById);

router.get('/lang', upcomingMoviesController.getUpcomingMoviesByLang);



module.exports = router;
