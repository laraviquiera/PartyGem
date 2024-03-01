// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Plan = require('./models/plan');
const Caterer = require('./models/caterer');
const Entertainment = require('./models/entertainment');

// Local variables will come in handy for holding retrieved documents
let user, plan, caterer, entertainment;
let users, plans, caterers, entertainments;
