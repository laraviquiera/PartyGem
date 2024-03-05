import * as plansAPI from '../../utilities/plans-api';
import { useState } from 'react'
import './PlanForm.css'

export default function PlanForm({ setForm, caterers, onAddPlan, formData, setFormData }) {
  const [error, setError] = useState('');


  function handleChange(evt) {
    setFormData({...formData, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      onAddPlan(formData)
    } catch {
      setError('Failed to create plan');
    }
  }

  return (
    <>
      <div className="planform-container">
        <h1 className="form-heading">PLAN YOUR EVENT</h1>
        <form onSubmit={handleSubmit}>
          <label>Event Name:</label>
          <input type="text" name="eventName" placeholder="e.g. Henry's 3rd Birthday" value={formData.eventName} onChange={handleChange} required />
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          <label>Time:</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
          <label>Location:</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
          <label>Number of Guests:</label>
          <input type="number" name="numberOfGuests" value={formData.numberOfGuests} onChange={handleChange} required />
          <label>Budget:</label>
          <input type="number" name="budget" value={formData.budget} onChange={handleChange} required />
          <label>Caterer:</label>
            <select name="caterer" value={formData.caterer} onChange={handleChange}>
              <option value="">Select a caterer</option>
                {caterers.map((caterer) => (
              <option key={caterer._id} value={caterer._id}>
                {caterer.name}
              </option>
              ))}
            </select>
            <label>Other services:</label>
          <input
            type="text"
            name="otherServices"
            placeholder="e.g. SF Balloons, Live Band, etc."
            value={formData.otherServices}
            onChange={handleChange}
          />
          <label>Invitation Link:</label>
          <input type="text" name="invitationLink" value={formData.invitationLink} onChange={handleChange} />
          <label>Notes:</label>
          <textarea name="notes" value={formData.notes} onChange={handleChange}></textarea>
          <div>
          <button type="submit" className="submit-btn">Submit</button>&nbsp;
          <button onClick={()=> setForm(false)} className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </>
  );
}