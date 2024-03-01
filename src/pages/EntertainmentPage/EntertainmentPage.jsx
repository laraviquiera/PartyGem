import { useEffect, useState } from 'react';
import * as entertainmentAPI from '../../utilities/entertainments-api';
import EntertainmentDetails from '../../components/EntertainmentDetails/EntertainmentDetails';
import EntertainmentList from '../../components/EntertainmentList/EntertainmentList';
import './EntertainmentPage.css'

export default function EntertainmentPage() {
  const [Entertainments, setEntertainments] = useState([]);
  const [selectedEntertainment, setSelectedEntertainment] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEntertainments = async () => {
      try {
        const fetchedEntertainments = await entertainmentAPI.getEntertainments();
        setEntertainments(fetchedEntertainments);
      } catch (error) {
        setError('Failed to fetch entertainments: ', error);
      }
    };
    fetchEntertainments();
  }, []);

const handleEntertainmentClick = (entertainment) => {
    setSelectedEntertainment(entertainment);
  };

  return (
    <div className="entertainment-bg">
      <div className="caterers-list">
        <EntertainmentList entertainments={Entertainments} handleCatererClick={handleEntertainmentClick} />
      </div>
      {selectedEntertainment && (
        <div className="selected-caterer">
          <EntertainmentDetails caterer={selectedEntertainment} />
        </div>
      )}
    </div>
  );
}
