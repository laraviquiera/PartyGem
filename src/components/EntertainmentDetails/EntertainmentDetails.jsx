import './EntertainmentDetails.css'

export default function EntertainmentDetails({ entertainment }) {
  return (
    <>
    { entertainment &&
    <div className="service-details">
      <h2>{entertainment.name}</h2>
          <p><strong>Category:</strong> {entertainment.entertainmentType}</p>
          <p><strong>Location:</strong> {entertainment.location.address}, {entertainment.location.city},
          {entertainment.location.state}, {entertainment.location.zipcode}</p>
          <p><strong>Email:</strong> {entertainment.email}</p>
          <p><strong>Phone Number:</strong> {entertainment.phoneNumber}</p>
          <p><strong>Price:</strong> {entertainment.priceTier}</p>
          <img src={entertainment.businessLogo} style={{ width: '100px', height: '100px' }} />
    </div>
    }
    </>
  );
}