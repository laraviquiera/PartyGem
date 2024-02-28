const express = require('express');
const router = express.Router();
const plansCtrl = require('../../controllers/api/plans');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//All paths start with /plans

//GET /plans - view all list of plans
router.get('/', ensureLoggedIn, plansCtrl.index)

//POST /plans - create a new plan
router.post('/', ensureLoggedIn, plansCtrl.create)

//DELETE /plans/:id - delete
router.delete('/:id', ensureLoggedIn, plansCtrl.delete)

//PUT /plans/:id - update




module.exports = router;


