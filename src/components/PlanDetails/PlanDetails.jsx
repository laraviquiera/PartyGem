import { useEffect, useState } from 'react';
import * as plansAPI from '../../utilities/plans-api';
import './PlanDetails.css'

export default function PlanDetails({ selectedPlan, id, onDeletePlan, onUpdatePlan, caterers, venues }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedPlan, setUpdatedPlan] = useState(selectedPlan && selectedPlan);
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    async function getPlan() {
      const planDetail = await plansAPI.getPlanDetail(id)
      setPlan(planDetail)
    }
    getPlan();
  }, [])
  
  const handleDelete = () => onDeletePlan(plan._id);

  const handleUpdate = () => {
    setIsUpdating(true);
  };

  const handleSave = () => {
    onUpdatePlan(plan._id, updatedPlan);
    setIsUpdating(false);
  };

  const handleCancel = () => {
    setIsUpdating(false);
    setUpdatedPlan(plan);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === 'caterer' && name === 'venue' ? value : value;
    setUpdatedPlan({ ...updatedPlan, [name]: updatedValue });
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString('en-US', options);
  };
  
  const formatTime = (time) => {
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    return new Date(`2022-01-01T${time}`).toLocaleString('en-US', options);
  };


  return (
    <div className="plan-details">
      <h2>{plan && plan.eventName}</h2>
      {isUpdating ? (
        <>
          <label>Date: </label>
          <input type="date" name="date" value={updatedPlan.date} onChange={handleInputChange} /><br />
          <label>Time: </label>
          <input type="time" name="time" value={updatedPlan.time} onChange={handleInputChange} /><br />
          <label>Location: </label>
          <input type="text" name="location" value={updatedPlan.location} onChange={handleInputChange} /><br />
          <label>Number of Guests: </label>
          <input type="number" name="numberOfGuests" value={updatedPlan.numberOfGuests} onChange={handleInputChange} /><br />
          <label>Budget: </label>
          <input type="text" name="budget" value={updatedPlan.budget} onChange={handleInputChange} /><br />
          <label>Caterer:</label>
            <select name="caterer" value={updatedPlan.caterer} onChange={handleInputChange}>
              <option value="">Select a caterer</option>
                {caterers && caterers.map((caterer) => (
              <option key={caterer._id} value={caterer._id}>
                {caterer.name}
              </option>
              ))}
            </select> <br />
          <label>Venue:</label>
            <select name="venue" value={updatedPlan.venue} onChange={handleInputChange}>
              <option value="">Select a venue</option>
                {venues && venues.map((venue) => (
              <option key={venue._id} value={venue._id}>
                {venue.name}
              </option>
              ))}
            </select>
            <br />
          <label>Other Services: </label>
          <input type="text" name="otherServices" value={updatedPlan.otherServices} onChange={handleInputChange} /><br />
          <label>Invitation Link: </label>
          <input type="text" name="invitationLink" value={updatedPlan.invitationLink} onChange={handleInputChange} /><br />
          <label>Notes: </label>
          <textarea name="notes" value={updatedPlan.notes} onChange={handleInputChange} /><br />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <p><strong>Date:</strong> {formatDate(plan && plan.date)}</p>
          <p><strong>Time:</strong> {formatTime(plan && plan.time)}</p>
          <p><strong>Location:</strong> {plan && plan.location}</p>
          <p><strong>Number of Guests:</strong> {plan && plan.numberOfGuests}</p>
          <p><strong>Budget:</strong> {plan && plan.budget}</p>
          {!isUpdating && plan && plan.caterer && (
          <p><strong>Caterer:</strong> {plan && plan.caterer.name}</p>
          )}
          {!isUpdating && plan && plan.venue && (
          <p><strong>Venue:</strong> {plan && plan.venue.name}</p>
          )}
          <p><strong>Other Services:</strong> {plan && plan.otherServices}</p>
          <p><strong>Invitation:</strong> <a href={plan && plan.invitationLink} target="_blank">{plan && plan.invitationLink ? 'Link' : ''}</a></p>
          <p><strong>Notes:</strong> {plan && plan.notes}</p>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}