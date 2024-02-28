import { useEffect, useState } from 'react';
import * as plansAPI from '../../utilities/plans-api';
import PlanDetails from '../../components/PlanDetails/PlanDetails';
import PlanForm from '../../components/PlanForm/PlanForm';

export default function PlanPage() {
  const [plans, setPlans] = useState([]);
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

  return (
    <>
    {
    form
      ? <PlanForm setForm={setForm}/>
      : <>
        <h1>Your Event List</h1>
        <button onClick={()=> setForm(true)}>Make a new event</button>
         {plans.map((plan) => (
          <PlanDetails key={plan._id} plan={plan} />
          ))}
        </>
    }
    </>
  );
}

