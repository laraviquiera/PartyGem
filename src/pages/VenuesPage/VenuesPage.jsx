import { useEffect, useState } from 'react';
import VenueDetails from '../../components/VenueDetails/VenueDetails';
import VenuesList from '../../components/VenuesList/VenuesList';
import './VenuesPage.css'

export default function VenuesPage({ venues }) {
  const [selectedVenue, setSelectedVenue] = useState(null);


const handleVenueClick = (venue) => {
    setSelectedVenue(venue);
  };

  return (
    <div className="venues-bg">
      <div className="caterers-list">
        <VenuesList venues={venues} handleVenueClick={handleVenueClick} />
      </div>
      {selectedVenue && (
        <div className="selected-caterer">
          <VenueDetails venue={selectedVenue} />
        </div>
      )}
    </div>
  );
}
