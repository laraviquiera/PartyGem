const express = require('express');
const router = express.Router();
const cateringCtrl = require('../../controllers/api/caterers');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//All paths start with /services

//GET /services/catering - view all list of caterers
router.get('/', ensureLoggedIn, cateringCtrl.index)

//POST /services - create a new caterer
router.post('/', ensureLoggedIn, cateringCtrl.create)

//GET /services/catering/:id - view caterer detail
router.get('/:id', ensureLoggedIn, cateringCtrl.show)




module.exports = router;


