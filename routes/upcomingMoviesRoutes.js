const express = require('express');
const router = express.Router();
const upcomingMoviesController = require('../controllers/upcomingMoviesController');

router.get('/', upcomingMoviesController.getUpcomingMovies); //http://localhost:3000/app/upcoming

router.get('/language', upcomingMoviesController.getUpcomingMoviesByLanguage); //http://localhost:3008/app/upcoming/language?original_language=en

router.get('/:id', upcomingMoviesController.getAlternativeTitleById); //http://localhost:3000/app/upcoming/(id)




module.exports = router;
