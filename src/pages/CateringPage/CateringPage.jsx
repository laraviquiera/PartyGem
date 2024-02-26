import CatererDetails from '../../components/CatererDetails/CatererDetails'
import CaterersList from '../../components/CaterersList/CaterersList';

export default function CateringPage(){

  return(
    <>
    <CaterersList />
    <CatererDetails />
    </>
  );
}

// use a useEffect to load the caterers or the venues, etc.,
// then map that data into <Caterer>, <Venue>, etc. components.