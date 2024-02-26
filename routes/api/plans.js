const express = require('express');
const router = express.Router();
const plansCtrl = require('../../controllers/api/plans');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//All paths start with /plans

//GET /plans/new - view new event plan form
router.get('/new', ensureLoggedIn, plansCtrl.new )

//POST /plans - create a new plan
router.post('/', ensureLoggedIn, plansCtrl.create)

//GET /plans - view all plans

//GET /plans/:id - view event detail

module.exports = router;


