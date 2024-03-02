import { useEffect, useState } from 'react';
import * as venuesAPI from '../../utilities/venues-api';
import VenueDetails from '../../components/VenueDetails/VenueDetails';
import VenuesList from '../../components/VenuesList/VenuesList';
import './VenuesPage.css'

export default function VenuesPage() {
  const [venues, setVenues] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const fetchedVenues = await venuesAPI.getVenues();
        setVenues(fetchedVenues);
      } catch (error) {
        setError('Failed to fetch venues: ', error);
      }
    };
    fetchVenues();
  }, []);

const handleVenueClick = (venue) => {
    setSelectedVenue(venue);
  };

  return (
    <div className="venues-bg">
      <div className="caterers-list">
        <VenuesList venues={venues} handleCatererClick={handleVenueClick} />
      </div>
      {selectedVenue && (
        <div className="selected-caterer">
          <VenueDetails venue={selectedVenue} />
        </div>
      )}
    </div>
  );
}
