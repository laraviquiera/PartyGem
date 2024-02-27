const Plan = require('../../models/plan');

module.exports = {
    index,
    create,
    show
};

async function show (req, res) {
    const plan = await Plan.findById(req.params.id);
    res.json(plan);
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
        res.json(newPlan);
    } catch (err) {
        res.json({ message: err.message });
    }
}