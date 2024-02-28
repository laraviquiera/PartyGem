export default function PlanDetails({ plan }) {
  const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  const formatTime = (time) => {
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    return new Date(`1970-01-01T${time}:00.000Z`).toLocaleString('en-US', options);
  };


  return (
    <div>
      <h2>{plan.eventName}</h2>
      <p>Date: {formatDate(plan.date)} </p>
      <p>Time: {formatTime(plan.time)}</p>
      <p>Location: {plan.location}</p>
      <p>Number of Guests: {plan.numberOfGuests}</p>
      <p>Budget: {plan.budget}</p>
      <p>Services: {plan.services.join(', ')}</p>
      <p>Invitation: <a href={plan.invitationLink} target="_blank" >{plan.invitationLink ? 'Link' : ''}</a></p>
      <p>Notes: {plan.notes}</p>
    </div>
  );
}
