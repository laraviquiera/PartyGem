const express = require('express');
const router = express.Router();
const plansCtrl = require('../../controllers/api/plans');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//All paths start with /plans

//GET /plans - view all list of plans
router.get('/', ensureLoggedIn, plansCtrl.index)

//POST /plans - create a new plan
router.post('/', ensureLoggedIn, plansCtrl.create)

//GET /plans/:id - view event detail
router.get('/:id', ensureLoggedIn, plansCtrl.show)

module.exports = router;


