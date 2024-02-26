const Plan = require('../../models/plan');

module.exports = {
    new: newPlan,
    create
};

async function create(req, res) {
  try {
      const plans = await Plan.find({ user: req.user._id }, 'eventName');
      res.json(plans);
  } catch (err) {
      console.log(err);
      res.json({ error: 'An error occurred' });
  }
}

async function newPlan(req, res) {
    try {
        const { eventName, date, time, location, numberOfGuests, budget, services, invitationLink, notes } = req.body;
        const newPlan = new Plan({
            user: req.user._id,
            eventName,
            date,
            time,
            location,
            numberOfGuests,
            budget,
            services,
            invitationLink,
            notes
        });
        await newPlan.save();
        res.json(newPlan);
    } catch (err) {
        res.json({ message: err.message });
    }
}