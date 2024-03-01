const express = require('express');
const router = express.Router();
const entertainmentCtrl = require('../../controllers/api/entertainments');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//All paths start with /services

//GET /services/entertainment - view all list of entertainment
router.get('/', ensureLoggedIn, entertainmentCtrl.index)

//POST /entertainment - create a new entertainment
router.post('/', ensureLoggedIn, entertainmentCtrl.create)

//GET /services/entertainment/:id - view entertainment detail
router.get('/:id', ensureLoggedIn, entertainmentCtrl.show)




module.exports = router;


