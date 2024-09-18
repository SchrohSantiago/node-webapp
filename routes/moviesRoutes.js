// routes/moviesRoutes.js
const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

// Definir todas las rutas
router.get('/movies', moviesController.getAll);
router.get('/movies/:id', moviesController.getById);
router.get('/movie/popular', moviesController.getPopulars);
router.get('/movie/:movie_id/credits', moviesController.getCredits);
router.get('/movie/:movie_id/recommendations', moviesController.getRecommendations);
router.get('/movies/adult', moviesController.getAdultMovies);

module.exports = router;
