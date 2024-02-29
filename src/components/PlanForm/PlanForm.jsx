import * as plansAPI from '../../utilities/plans-api';
import { useState } from 'react'
import './PlanForm.css'

export default function PlanForm({setForm}) {
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
  const [error, setError] = useState('');


  function handleChange(evt) {
    setFormData({...formData, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const response = await plansAPI.createPlan(formData);
    } catch {
      setError('Failed to create plan');
    }
  }
  

  return (
    <>
      <div className="form-container">
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
          <label>Services:</label>
          <input type="text" name="services" placeholder="e.g. Kitchen Woori Catering, SF Balloons, etc." value={formData.services} onChange={handleChange} />
          <label>Invitation Link:</label>
          <input type="text" name="invitationLink" value={formData.invitationLink} onChange={handleChange} />
          <label>Notes:</label>
          <textarea name="notes" value={formData.notes} onChange={handleChange}></textarea>
          <div>
          <button type="submit" onClick={()=> setForm(true)} Link to="/plans" className="submit-btn">Submit</button>&nbsp;
          <button onClick={()=> setForm(false)} className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </>
  );
}