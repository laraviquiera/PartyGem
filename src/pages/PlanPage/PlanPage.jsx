import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as plansAPI from '../../utilities/plans-api';
// import PlanDetails from '../../components/PlanDetails/PlanDetails';
import PlanForm from '../../components/PlanForm/PlanForm';

export default function PlanPage() {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [form, setForm] = useState(false);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const fetchedPlans = await plansAPI.getPlans();
        setPlans(fetchedPlans);
      } catch (error) {
        console.error('Failed to fetch plans:', error);
      }
    };
    fetchPlans();
  }, []);

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <>
      {form ? (
        <PlanForm setForm={setForm} />
      ) : (
        <>
        <div className="event-list">
          <h1>Your Event List</h1>
          <button onClick={() => setForm(true)}>Make a new event</button>
          {plans.map((plan) => (
            <div key={plan._id}>
              <Link to="#" onClick={() => handlePlanClick(plan)}>
                {plan.eventName}
              </Link>
            </div>
          ))}
          </div>
          {selectedPlan && (
            <div>
              <h2>{selectedPlan.eventName}</h2>
              <p>Date: {selectedPlan.date}</p>
              <p>Time: {selectedPlan.time}</p>
              <p>Location: {selectedPlan.location}</p>
              <p>Number of Guests: {selectedPlan.numberOfGuests}</p>
              <p>Budget: {selectedPlan.budget}</p>
              <p>Services: {selectedPlan.services.join(', ')}</p>
              <p>Invitation Link: <a href={selectedPlan.invitationLink}>{selectedPlan.invitationLink}</a></p>
              <p>Notes: {selectedPlan.notes}</p>
            </div>
          )}
        </>
      )}
    </>
  );
}
