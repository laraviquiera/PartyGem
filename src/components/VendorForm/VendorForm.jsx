import { useState } from "react";

export default function VendorForm() {
  const [vendorFormData, setVendorFormData] = useState({
    serviceType: "",
    name: "",
    location: {
      address: "",
      city: "",
      state: "",
      country: "",
    },
    email: "",
    phoneNumber: "",
    priceTier: "",
    businessLogo: "",
  });

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
      console.log("Form submitted:", vendorFormData);
    } catch {
      setError("Error submitting form:");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
          <option value="$$$">$$</option>
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
              <option value="Asian Fusion">African</option>
              <option value="Chinese">African</option>
              <option value="French">African</option>
              <option value="Indian">African</option>
              <option value="Italian">African</option>
              <option value="Japanese">African</option>
              <option value="Korean">African</option>
              <option value="Mediterranean">African</option>
              <option value="Mexican">African</option>
              <option value="Middle Eastern">African</option>
              <option value="Southern">African</option>
              <option value="Taiwanese">African</option>
              <option value="Thai">African</option>
              <option value="Vietnamese">African</option>
              <option value="Others">African</option>
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
              <option value="Clowns & Magicians">Clowns & Magicians</option>
              <option value="Clowns & Magicians">Clowns & Magicians</option>
              <option value="Clowns & Magicians">Clowns & Magicians</option>
              <option value="Clowns & Magicians">Clowns & Magicians</option>
    
            </select>
          </label>
        </>
      )}
      {vendorFormData.serviceType === "venue" && (
        <>
          {/* Additional fields for venue */}
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
  );
}
