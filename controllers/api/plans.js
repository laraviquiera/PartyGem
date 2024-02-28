const Plan = require('../../models/plan');

module.exports = {
    index,
    create,
    show,
    delete: deletePlan,
    update,
    edit
};

async function edit(req, res) {
    try {
        const plan = await Plan.findOne({ _id: req.params.id, user: req.user._id });
        if (!plan) {
            return res.status(404).json({ message: 'Plan not found' });
        }
        res.json(plan);
    } catch {
        res.status(500).json({ message: 'Server error' });
    }
}


async function update(req, res) {
    const plan = await Plan.findOneAndUpdate(
       {_id: req.params.id, user: req.user._id},
       req.body,
       {new: true}
     );
     res.json(plan);
   }

   
async function deletePlan(req, res) {
   const plan = await Plan.findOneAndDelete(
      {_id: req.params.id, user: req.user._id}
    );
    res.json(plan);
  }


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
        console.log(newPlan)
        res.json(newPlan);
    } catch (err) {
        console.log(err)
        res.json({ message: err.message });
    }
}