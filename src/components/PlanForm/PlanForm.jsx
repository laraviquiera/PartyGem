// import * as plansAPI from '../../utilities/plans-api';
import { useState } from 'react'

export default function PlanForm() {
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
      await fetch('/api/plans/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    } catch {
      setError('Failed to create plan');
    }
  }
  

  return (
    <>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Event Name:</label>
          <input type="text" name="eventName" value={formData.eventName} onChange={handleChange} required />
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          <label>Time:</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
          <label>Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
          <label>Number of Guests</label>
          <input type="number" name="numberOfGuests" value={formData.numberOfGuests} onChange={handleChange} required />
          <label>Budget</label>
          <input type="number" name="budget" value={formData.budget} onChange={handleChange} required />
          <label>Services</label>
          <input type="text" name="services" value={formData.services} onChange={handleChange} />
          <label>Invitation Link</label>
          <input type="text" name="invitationLink" value={formData.invitationLink} onChange={handleChange} />
          <label>Notes</label>
          <textarea name="notes" value={formData.notes} onChange={handleChange}></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </>
  );
}