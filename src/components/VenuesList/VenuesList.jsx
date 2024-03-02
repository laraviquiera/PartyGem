import { Link } from 'react-router-dom';
import './VenuesList.css'


export default function VenuesList({ venues, handleVenueClick }) {


  return (
    <div className="services-list">
      <h3>List of Venues</h3>
      {venues.map((venue) => (
        <div key={venue._id}>
          <Link to="#" onClick={() => handleVenueClick(venue)}>
            {venue.name}
          </Link>
        </div>
      ))}
    </div>
  );
}