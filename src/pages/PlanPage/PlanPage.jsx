import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as plansAPI from '../../utilities/plans-api';
import PlanForm from '../../components/PlanForm/PlanForm';
import PlanDetails from '../../components/PlanDetails/PlanDetails';
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
              <PlanDetails plan={selectedPlan}/ >
            </div>
          )}
        </>
      )}
    </div>
  );
}
