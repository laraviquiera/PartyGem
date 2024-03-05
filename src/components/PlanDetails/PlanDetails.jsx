import { useState } from 'react';
import './PlanDetails.css'

export default function PlanDetails({ plan, onDeletePlan, onUpdatePlan, caterers, setCaterers }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedPlan, setUpdatedPlan] = useState(plan && plan);
  
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
    setUpdatedPlan({ ...updatedPlan, [name]: value });
    setCaterers([...caterers, handleInputChange])
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
      <h2>{plan.eventName}</h2>
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
            </select><br />
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
          <p><strong>Date:</strong> {formatDate(plan.date)}</p>
          <p><strong>Time:</strong> {formatTime(plan.time)}</p>
          <p><strong>Location:</strong> {plan.location}</p>
          <p><strong>Number of Guests:</strong> {plan.numberOfGuests}</p>
          <p><strong>Budget:</strong> {plan.budget}</p>
          <p><strong>Caterer:</strong> {plan.caterer.name}</p>
          <p><strong>Other Services:</strong> {plan.otherServices}</p>
          <p><strong>Invitation:</strong> <a href={plan.invitationLink} target="_blank">{plan.invitationLink ? 'Link' : ''}</a></p>
          <p><strong>Notes:</strong> {plan.notes}</p>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}