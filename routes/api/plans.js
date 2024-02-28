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

//DELETE /plans/:id - delete
router.delete('/:id', ensureLoggedIn, plansCtrl.delete)

//GET /plans/:id/edit - edit
router.put('/:id/edit', ensureLoggedIn, plansCtrl.edit)

//PUT /plans/:id - update
router.put('/:id', ensureLoggedIn, plansCtrl.update)





module.exports = router;


