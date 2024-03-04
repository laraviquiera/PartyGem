import { useEffect, useState } from 'react';
import CatererDetails from '../../components/CatererDetails/CatererDetails';
import CaterersList from '../../components/CaterersList/CaterersList';
import './CateringPage.css'

export default function CateringPage({ caterers }) {
  const [selectedCaterer, setSelectedCaterer] = useState(null);


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
