import './CatererDetails.css'

export default function CatererDetails({ caterer }) {
  return (
    <>
    { caterer &&
    <div className="service-details">
      <h2>{caterer.name}</h2>
          <p><strong>Cuisine:</strong> {caterer.cuisineType}</p>
          <p><strong>Location:</strong> {caterer.location.address}</p>
          <p><strong>Email:</strong> {caterer.email}</p>
          <p><strong>Phone Number:</strong> {caterer.phoneNumber}</p>
          <p><strong>Price:</strong> {caterer.priceTier}</p>
          <img src={caterer.businessLogo} style={{ width: '100px', height: '100px' }} />
    </div>
    }
    </>
  );
}