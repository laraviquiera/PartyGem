const Plan = require('../../models/plan');

module.exports = {
    index,
    create,
    delete: deletePlan
};


async function deletePlan(req, res) {
    await Plan.findOneAndDelete(
      {_id: req.params.id, user: req.user._id}
    );
    res.json(plans);
  }

async function index(req, res) {
    const plans = await Plan.find({user: req.user._id});
    res.json(plans);
};

async function create(req, res) {
    try {
        const { eventName, date, time, location, numberOfGuests,
            budget, services, invitationLink, notes } = req.body;
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
        console.log(newPlan)
        res.json(newPlan);
    } catch (err) {
        console.log(err)
        res.json({ message: err.message });
    }
}