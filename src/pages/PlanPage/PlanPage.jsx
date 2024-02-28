import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as plansAPI from '../../utilities/plans-api';
import PlanForm from '../../components/PlanForm/PlanForm';
import './PlanPage.css'

export default function PlanPage() {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [form, setForm] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const fetchedPlans = await plansAPI.getPlans();
        setPlans(fetchedPlans);
      } catch {
        setError('Failed to fetch plans:');
      }
    };
    fetchPlans();
  }, []);

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  const formatTime = (time) => {
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    return new Date(`1970-01-01T${time}:00.000Z`).toLocaleString('en-US', options);
  };

  return (
    <div className="plan-bg">
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
            <div className="selected-plan">
              <h2>{selectedPlan.eventName}</h2>
              <p>Date: {formatDate(selectedPlan.date)} </p>
              <p>Time: {formatTime(selectedPlan.time)}</p>
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
    </div>
  );
}
