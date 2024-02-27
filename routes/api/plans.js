const express = require('express');
const router = express.Router();
const plansCtrl = require('../../controllers/api/plans');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//All paths start with /plans

//GET /plans - view all list of plans
router.get('/', ensureLoggedIn, plansCtrl.index)

//POST /plans/new - create a new plan
router.post('/new', ensureLoggedIn, plansCtrl.create )


//GET /plans - view all plans

//GET /plans/:id - view event detail

module.exports = router;


