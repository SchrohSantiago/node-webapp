const express = require('express');
const router = express.Router();
const peopleController = require('../controllers/peopleController');

router.get('/', peopleController.listPeople);

router.get('/:id', peopleController.getPersonById);

//router.get('/top_rated', peopleController.listTopRatedSeries);


module.exports = router;