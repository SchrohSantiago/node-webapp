const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/empleadosController');

router.get('/empleados', empleadosController.getAll);
router.get('/empleados/:id', empleadosController.getById);

module.exports = router;
