const express = require('express');
const router = express.Router();
const peopleController = require('../controllers/peopleController');



router.get('/filtered', peopleController.listFilteredPeopleByDepartment);

router.get('/', peopleController.listPeople);

router.get('/:id', peopleController.getPersonById);

module.exports = router;