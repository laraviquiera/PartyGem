import './VenueDetails.css'

export default function VenueDetails({ venue }) {
  return (
    <>
    { venue &&
    <div className="service-details">
      <h2>{venue.name}</h2>
          <p><strong>Certification:</strong> {venue.certification}</p>
          <p><strong>Location:</strong> {venue.location.address},{venue.location.city},
          {venue.location.state}, {venue.location.zipcode}</p>
          <p><strong>Email:</strong> {venue.email}</p>
          <p><strong>Website:</strong> {venue.website ? <a href={venue.website} target="_blank">Click to visit</a> : ''}</p>
          <p><strong>Capacity:</strong> {venue.capacity}</p>
          <p><strong>Type:</strong> {venue.venueType}</p>
          <p><strong>Phone Number:</strong> {venue.phoneNumber}</p>
          <p><strong>Price:</strong> {venue.priceTier}</p>
          <img src={venue.businessLogo} style={{ width: '100px', height: '100px' }} />
    </div>
    }
    </>
  );
}