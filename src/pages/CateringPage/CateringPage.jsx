import { useEffect, useState } from 'react';
import * as cateringAPI from '../../utilities/caterers-api';
import CatererDetails from '../../components/CatererDetails/CatererDetails';
import CaterersList from '../../components/CaterersList/CaterersList';
import './CateringPage.css'

export default function CateringPage() {
  const [caterers, setCaterers] = useState([]);
  const [selectedCaterer, setSelectedCaterer] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCaterers = async () => {
      try {
        const fetchedCaterers = await cateringAPI.getCaterers();
        setCaterers(fetchedCaterers);
      } catch (error) {
        setError('Failed to fetch caterers: ', error);
      }
    };
    fetchCaterers();
  }, []);

const handleCatererClick = (caterer) => {
    setSelectedCaterer(caterer);
  };

  return (
    <div className="catering-bg">
      <div className="caterers-list">
        <CaterersList caterers={caterers} handleCatererClick={handleCatererClick} />
      </div>
      {selectedCaterer && (
        <div className="selected-caterer">
          <CatererDetails caterer={selectedCaterer} />
        </div>
      )}
    </div>
  );
}
