const express = require('express');
const router = express.Router();
const entertainmentsCtrl = require('../../controllers/api/entertainments');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//All paths start with /services

//GET /services/entertainment - view all list of entertainment
router.get('/', ensureLoggedIn, entertainmentsCtrl.index)

//POST /entertainment - create a new entertainment
router.post('/', ensureLoggedIn, entertainmentsCtrl.create)

//GET /services/entertainment/:id - view entertainment detail
router.get('/:id', ensureLoggedIn, entertainmentsCtrl.show)




module.exports = router;


