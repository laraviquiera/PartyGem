import './CatererDetails.css'

export default function CatererDetails({ caterer }) {
  return (
    <>
    { caterer &&
    <div className="service-details">
      <h2>{caterer.name}</h2>
          <p><strong>Cuisine:</strong> {caterer.cuisineType}</p>
          <p><strong>Certification:</strong> {caterer.certification}</p>
          <p><strong>Location:</strong> {caterer.location.address}, {caterer.location.city}, 
          {caterer.location.state}, {caterer.location.zipcode}</p>
          <p><strong>Email:</strong> {caterer.email}</p>
          <p><strong>Website:</strong> {caterer.website ? <a href={caterer.website} target="_blank">Click to visit</a> : ''}</p>
          <p><strong>Phone Number:</strong> {caterer.phoneNumber}</p>
          <p><strong>Price:</strong> {caterer.priceTier}</p>
          <img src={caterer.businessLogo} style={{ width: '100px', height: '100px' }} />
    </div>
    }
    </>
  );
}