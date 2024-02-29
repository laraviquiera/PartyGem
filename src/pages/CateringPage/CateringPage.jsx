
import { useState } from "react";
import CaterersList from '../../components/CaterersList/CaterersList';
import CatererDetails from '../../components/CatererDetails/CatererDetails';
import VendorForm from '../../components/VendorForm/VendorForm';

export default function CateringPage() {
  const [caterers, setCaterers] = useState([]);

  const handleSubmit = (formData) => {
    setCaterers([...caterers, formData]);
  };

  return (
    <>
      <CaterersList caterers={caterers} />
      <VendorForm onSubmit={handleSubmit} />
    </>
  );
}

// use a useEffect to load the caterers or the venues, etc.,
// then map that data into <Caterer>, <Venue>, etc. components.