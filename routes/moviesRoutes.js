const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

// Definir las rutas de películas
router.get('/popular', moviesController.getPopulars);
router.get('/:movie_id/credits', moviesController.getCredits);
router.get('/:movie_id/recommendations', moviesController.getRecommendations);
router.get('/genre', moviesController.getMoviesByGenre);


module.exports = router;