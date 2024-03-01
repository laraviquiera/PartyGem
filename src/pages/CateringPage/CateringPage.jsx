import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VendorForm from '../../components/VendorForm/VendorForm';
import CatererDetails from '../../components/CatererDetails/CatererDetails';
import CaterersList from '../../components/CaterersList/CaterersList';

export default function CateringPage({cateringAPI}) {
  const [caterers, setCaterers] = useState([]);
  const [selectedCaterer, setSelectedCaterer] = useState(null);
  const [form, setForm] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    cuisineType: '',
    location: '',
    email: '',
    phoneNumber: '',
    priceTier: '',
    businessLogo: '',
  });


  useEffect(() => {
    const fetchCaterers = async () => {
      try {
        const fetchedCaterers = await cateringAPI.getCaterers();
        setCaterers(fetchedCaterers);
      } catch {
        setError('Failed to fetch caterers');
      }
    };
    fetchCaterers();
  }, []);

  const handleCatererClick = (caterer) => {
    setSelectedCaterer(caterer);
  };


  return (
    <div className="catering-bg">
      {form ? (
        <VendorForm setForm={setForm} />
      ) : (
        <>
          <div className="caterers-list">
            <h1 className="catering-page-title">List of Caterers</h1>
            <CaterersList caterers={caterers} handleCatererClick={handleCatererClick} />
          </div>
          {selectedCaterer && (
            <div className="selected-plan">
              <CatererDetails caterer={selectedCaterer} />
            </div>
          )}
        </>
      )}
    </div>
  );
}