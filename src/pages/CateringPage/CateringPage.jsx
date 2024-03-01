import { useEffect, useState } from 'react';
import VendorForm from '../../components/VendorForm/VendorForm'
import CatererDetails from '../../components/CatererDetails/CatererDetails';
import CaterersList from '../../components/CaterersList/CaterersList';

export default function CateringPage({ cateringAPI, VendorFormData }) {
  const [caterers, setCaterers] = useState([]);
  const [selectedCaterer, setSelectedCaterer] = useState(null);
  const [vendorFormData, setVendorFormData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCaterers = async () => {
      try {
        const fetchedCaterers = await cateringAPI.getCaterers();
        setCaterers(fetchedCaterers);
      } catch (error) {
        setError('Failed to fetch caterers: ' + error.message);
      }
    };
    fetchCaterers();
  }, [cateringAPI]);

  const handleCatererClick = (caterer) => {
    setSelectedCaterer(caterer);
  };

  const handleFormSubmit = (formData) => {
    setVendorFormData(formData);
  };

  return (
    <div className="catering-bg">
      <div className="caterers-list">
        <h1 className="catering-page-title">List of Caterers</h1>
        <CaterersList caterers={caterers} handleCatererClick={handleCatererClick} />
      </div>
      {selectedCaterer && (
        <div className="selected-caterer">
          <CatererDetails caterer={selectedCaterer} VendorFormData={VendorFormData} />
        </div>
      )}
    </div>
  );
}
