import { useState } from "react";
import * as cateringAPI from '../../utilities/caterers-api'
import './VendorForm.css'

export default function VendorForm({ isAdmin }) {
  const [vendorFormData, setVendorFormData] = useState({
    serviceType: "",
    name: "",
    location: {
      address: "",
      city: "",
      state: "",
      zipcode: ""
    },
    website: "",
    email: "",
    phoneNumber: "",
    priceTier: "",
    businessLogo: "",
    cuisineType: "",
    capacity: 0,
    venueType: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendorFormData({ ...vendorFormData, [name]: value });
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setVendorFormData({
      ...vendorFormData,
      location: {
        ...vendorFormData.location,
        [name]: value,
      },
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await cateringAPI.addCaterer(vendorFormData)
      setSubmitted(true);
    } catch {
      setError("Error submitting form:");
    }
  };

  const [error, setError] = useState('');

  return (
    <div>
      {isAdmin && !submitted ? (
        <form onSubmit={handleSubmit} className="main-form">
       <label>
        Service Type:
        <select
          name="serviceType"
          value={vendorFormData.serviceType}
          onChange={handleChange}
          required
        >
          <option value="">Select Service Type</option>
          <option value="catering">Catering</option>
          <option value="entertainment">Entertainment</option>
          <option value="venue">Venue</option>
        </select>
      </label>
      <label>
        Company Name:
        <input
          type="text"
          name="name"
          value={vendorFormData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={vendorFormData.location.address}
          onChange={handleLocationChange}
          required
        />
      </label>
      <label>
        City:
        <input
          type="text"
          name="city"
          value={vendorFormData.location.city}
          onChange={handleLocationChange}
          required
        />
      </label>
      <label>
        State:
        <input
          type="text"
          name="state"
          value={vendorFormData.location.state}
          onChange={handleLocationChange}
          required
        />
      </label>
      <label>
        Zipcode:
        <input
          type="text"
          name="zipcode"
          value={vendorFormData.location.zipcode}
          onChange={handleLocationChange}
          required
        />
      </label>
      <label>
        Website:
        <input
          type="url"
          name="website"
          value={vendorFormData.website}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={vendorFormData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={vendorFormData.phoneNumber}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Price Tier:
        <select
          name="priceTier"
          value={vendorFormData.priceTier}
          onChange={handleChange}
          required
        >
          <option value="">Select Price Tier</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
        </select>
      </label>
      <label>
        Business Logo URL:
        <input
          type="url"
          name="businessLogo"
          value={vendorFormData.businessLogo}
          onChange={handleChange}
        />
      </label>
      {vendorFormData.serviceType === "catering" && (
        <>
          <label>
            Cuisine Type:
            <select
              name="cuisineType"
              value={vendorFormData.cuisineType}
              onChange={handleChange}
              required
            >
              <option value="">Select Cuisine Type</option>
              <option value="American">American</option>
              <option value="African">African</option>
              <option value="Asian Fusion">Asian Fusion</option>
              <option value="Chinese">Chinese</option>
              <option value="French">French</option>
              <option value="Indian">Indian</option>
              <option value="Italian">Italian</option>
              <option value="Japanese">Japanese</option>
              <option value="Korean">Korean</option>
              <option value="Mediterranean">Mediterranean</option>
              <option value="Mexican">Mexican</option>
              <option value="Middle Eastern">Middle Eastern</option>
              <option value="Southern">Southern</option>
              <option value="Taiwanese">Taiwanese</option>
              <option value="Thai">Thai</option>
              <option value="Vietnamese">Vietnamese</option>
              <option value="Others">Others</option>
            </select>
          </label>
        </>
      )}
      {vendorFormData.serviceType === "entertainment" && (
        <>
          <label>
            Entertainment Type:
            <select
              name="type"
              value={vendorFormData.type}
              onChange={handleChange}
              required
            >
              <option value="">Select Entertainment Type</option>
              <option value="Clowns & Magicians">Clowns & Magicians</option>
              <option value="Dancers">Dancers</option>
              <option value="Face Painting">Face Painting</option>
              <option value="Live Bands & DJs">Live Bands & DJs</option>
              <option value="Mascots & Princess Characters">Mascots & Princess Characters</option>
              <option value="Photo Booths">Photo Booths</option>
    
            </select>
          </label>
        </>
      )}
      {vendorFormData.serviceType === "venue" && (
        <>
          <label>
            Capacity:
            <input
              type="number"
              name="capacity"
              value={vendorFormData.capacity}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Venue Type:
            <select
              name="venueType"
              value={vendorFormData.venueType}
              onChange={handleChange}
              required
            >
              <option value="">Select Venue Type</option>
              <option value="indoor">Indoor</option>
              <option value="outdoor">Outdoor</option>
              <option value="both">Both</option>
            </select>
          </label>
        </>
      )}
      <button type="submit">Submit</button>
    </form>
      ) : (
      <div className="">
        <p>Name:{vendorFormData.name}</p>
        <p>
        Location:
        {vendorFormData.location.address},
        {vendorFormData.location.city},
        {vendorFormData.location.state},
        {vendorFormData.location.zipcode}
        </p>
        <p>Website:{vendorFormData.website}</p>
        <p>Email:{vendorFormData.email}</p>
        <p>Phone Number:{vendorFormData.phoneNumber}</p>
        <p>Price:{vendorFormData.priceTier}</p>
        <img src={vendorFormData.businessLogo} style={{ width: '100px', height: '100px' }}></img>
        {vendorFormData.serviceType === "catering" && (
            <p>Cuisine Type: {vendorFormData.cuisineType}</p>
          )}
          {vendorFormData.serviceType === "entertainment" && (
            <p>Entertainment Type: {vendorFormData.entertainmentType}</p>
          )}
          {vendorFormData.serviceType === "venue" && (
            <>
              <p>Capacity: {vendorFormData.capacity}</p>
              <p>Venue Type: {vendorFormData.venueType}</p>
            </>
          )}
      </div>
      )}
    </div>
  );
}
