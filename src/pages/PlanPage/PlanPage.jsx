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
  const [formData, setFormData] = useState({
    eventName: '',
    date: '',
    time: '',
    location: '',
    numberOfGuests: '',
    budget: '',
    services: '',
    invitationLink: '',
    notes: ''
  });

  

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

  const handleDeletePlan = async (id) => {
    try {
      await plansAPI.deletePlan(id);
      setPlans((prevPlans) => prevPlans.filter((plan) => plan._id !== id));
      setSelectedPlan(null);
    } catch (error) {
      setError('Failed to delete plan');
    }
  };

  const handleUpdatePlan = async (id, updatedData) => {
    try {
      await plansAPI.updatePlan(id, updatedData);
      const updatedPlans = await plansAPI.getPlans();
      setPlans(updatedPlans);
      setSelectedPlan(null);
    } catch (error) {
      setError('Failed to update plan');
    }
  };
  
  const updateFormData = (data) => {
    setFormData(data);
  };


  return (
    <div className="plan-bg">
      {form ? (
        <PlanForm setForm={setForm} />
      ) : (
        <>
        <div className="event-list">
          <h1 className="plan-page-title">Your Event List</h1>
          <button onClick={() => setForm(true)}>Make a new event</button>
          <div className="list">
          {plans.map((plan) => (
            <div key={plan._id}>
              <Link to="#" onClick={() => handlePlanClick(plan)}>
                {plan.eventName}
              </Link>
            </div>
          ))}
          </div>
          </div>
          {selectedPlan && (
            <div className="selected-plan">
              <PlanDetails
              plan={selectedPlan}
              onDeletePlan={handleDeletePlan} 
              onUpdatePlan={handleUpdatePlan}
              formData={formData}
              updateFormData={updateFormData}
              setFormData={setFormData}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
