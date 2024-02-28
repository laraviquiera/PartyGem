const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../middleware/ensureLoggedIn');
const vendorsCtrl = require('../../controllers/api/vendors');
const ensureAdmin = require('../../config/ensureAdmin');

//POST /api/vendors/catering

//POST /api/vendors/entertainment

//POST /api/vendors/venues