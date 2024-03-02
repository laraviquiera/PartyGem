import { useEffect, useState } from 'react';
import * as entertainmentsAPI from '../../utilities/entertainments-api';
import EntertainmentDetails from '../../components/EntertainmentDetails/EntertainmentDetails';
import EntertainmentList from '../../components/EntertainmentList/EntertainmentList';
import './EntertainmentPage.css'

export default function EntertainmentPage() {
  const [Entertainments, setEntertainments] = useState([]);
  const [selectedEntertainment, setSelectedEntertainment] = useState(null);
  const [selectedEntertainmentType, setSelectedEntertainmentType] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEntertainments = async () => {
      try {
        const fetchedEntertainments = await entertainmentsAPI.getEntertainments();
        setEntertainments(fetchedEntertainments);
      } catch (error) {
        setError('Failed to fetch entertainments: ', error);
      }
    };
    fetchEntertainments();
  }, []);

const handleEntertainmentClick = (entertainment) => {
    setSelectedEntertainmentType(entertainment.entertainmentType);
  };

  return (
    <div className="entertainment-bg">
      <div className="caterers-list">
        <EntertainmentList entertainments={Entertainments} handleCatererClick={handleEntertainmentClick} />
      </div>
      {selectedEntertainment && (
        <div className="selected-caterer">
          <EntertainmentDetails entertainment={selectedEntertainment} />
        </div>
      )}
    </div>
  );
}
