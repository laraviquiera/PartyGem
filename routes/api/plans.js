const express = require('express');
const router = express.Router();
const plansCtrl = require('../../controllers/api/plans');

//All paths start with /plans

//GET /plans/new - view new event plan form
router.get('/new', plansCtrl.newPlan )

//POST /plans - create a new plan
router.post('/', plansCtrl.create)

//GET /plans - view all events

//GET /plans/:id - view event detail

module.exports = router;


