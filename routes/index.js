const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/moviesController');

router.get('/movies', empleadosController.getAll);
router.get('/movies/:id', empleadosController.getById);

module.exports = router;