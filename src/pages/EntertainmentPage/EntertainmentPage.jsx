import EntertainmentDetails from '../../components/EntertainmentDetails/EntertainmentDetails';
import EntertainmentList from '../../components/EntertainmentList/EntertainmentList';


export default function EntertainmentPage(){

  return(
    <>
    <EntertainmentList />
    <EntertainmentDetails />
    </>
  );
}

// use a useEffect to load the caterers or the venues, etc.,
// then map that data into <Caterer>, <Venue>, etc. components.