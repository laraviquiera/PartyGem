import './PlanDetails.css'

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
    <div className="plan-details">
      <h2>{plan.eventName}</h2>
      <p><strong>Date:</strong> {formatDate(plan.date)} </p>
      <p><strong>Time:</strong> {formatTime(plan.time)}</p>
      <p><strong>Location:</strong> {plan.location}</p>
      <p><strong>Number of Guests:</strong> {plan.numberOfGuests}</p>
      <p><strong>Budget:</strong> {plan.budget}</p>
      <p><strong>Services:</strong> {plan.services.join(', ')}</p>
      <p><strong>Invitation:</strong> <a href={plan.invitationLink} target="_blank" >{plan.invitationLink ? 'Link' : ''}</a></p>
      <p><strong>Notes:</strong> {plan.notes}</p>
    </div>
  );
}
