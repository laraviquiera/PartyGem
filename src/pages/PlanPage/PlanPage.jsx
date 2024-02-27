import { useEffect, useState } from 'react';
import * as plansAPI from '../../utilities/plans-api';
import PlanDetails from '../../components/PlanDetails/PlanDetails';

export default function PlanPage() {
  const [plans, setPlans] = useState([]);

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
      <h1>Your Event List</h1>
      {plans.map((plan) => (
        <PlanDetails key={plan._id} plan={plan} />
      ))}
    </>
  );
}

