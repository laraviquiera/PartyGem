export default function PlanDetails({ plan }) {
  return (
    <div>
      <h2>{plan.eventName}</h2>
      <p>Date: {plan.date}</p>
      <p>Time: {plan.time}</p>
      <p>Location: {plan.location.address}, {plan.location.city}, {plan.location.state}, {plan.location.country}</p>
      <p>Number of Guests: {plan.numberOfGuests}</p>
      <p>Budget: {plan.budget}</p>
      <p>Services: {plan.services.join(', ')}</p>
      <p>Invitation Link: {plan.invitationLink}</p>
      <p>Notes: {plan.notes}</p>
    </div>
  );
}
