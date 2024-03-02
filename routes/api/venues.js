const express = require('express');
const router = express.Router();
const venuesCtrl = require('../../controllers/api/venues');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//All paths start with /services

//GET /services/venues - view all list of caterers
router.get('/', ensureLoggedIn, venuesCtrl.index)

//POST /services - create a new venue
router.post('/', ensureLoggedIn, venuesCtrl.create)

//GET /services/venues/:id - view venue detail
router.get('/:id', ensureLoggedIn, venuesCtrl.show)




module.exports = router;


