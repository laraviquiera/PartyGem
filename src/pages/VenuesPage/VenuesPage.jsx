import VenueDetails from "../../components/VenueDetails/VenueDetails";
import VenuesList from "../../components/VenuesList/VenuesList";

export default function VenuesPage(){

  return(
    <>
    <VenuesList />
    <VenueDetails />
    </>
  );
}

// use a useEffect to load the caterers or the venues, etc.,
// then map that data into <Caterer>, <Venue>, etc. components.