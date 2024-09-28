const express = require('express');
const router = express.Router();
const upcomingMoviesController = require('../controllers/upcomingMoviesController');

router.get('/', upcomingMoviesController.getUpcomingMovies); //http://localhost:3000/app/upcoming

router.get('/:id', upcomingMoviesController.getAlternativeTitleById); //http://localhost:3000/app/upcoming/(id)

router.get('/', upcomingMoviesController.getUpcomingMoviesByPopularity); //http://localhost:3008/app/upcoming?sortBy=popularity



module.exports = router;
