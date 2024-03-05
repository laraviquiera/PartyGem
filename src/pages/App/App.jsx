import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthPage from '../AuthPage/AuthPage';
import CateringPage from '../CateringPage/CateringPage';
import EntertainmentPage from '../EntertainmentPage/EntertainmentPage';
import VenuesPage from '../VenuesPage/VenuesPage';
import VendorPage from '../VendorPage/VendorPage';
import PlanPage from '../PlanPage/PlanPage';
import AboutPage from '../AboutPage/AboutPage';
import AdminPage from '../AdminPage/AdminPage';
import NavBar from '../../components/NavBar/NavBar';
import * as cateringAPI from '../../utilities/caterers-api';
import * as venuesAPI from '../../utilities/venues-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [caterers, setCaterers] = useState([]);
  const [venues, setVenues] = useState([]);
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

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const fetchedVenues = await venuesAPI.getVenues();
        setVenues(fetchedVenues);
      } catch (error) {
        setError('Failed to fetch venues: ', error);
      }
    };
    fetchVenues();
  }, []);

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/services/catering" element={<CateringPage caterers={caterers} setCaterers={setCaterers}/>} />
              <Route path="/services/entertainment" element={<EntertainmentPage />} />
              <Route path="/services/venues" element={<VenuesPage venues={venues} setVenues={setVenues} />} />
              <Route path="/services/vendor" element={<VendorPage />} />
              {user.isAdmin && <Route path="services/admin" element={<AdminPage />} />}
              <Route path="/plans" element={<PlanPage caterers={caterers} setCaterers={setCaterers} venues={venues} setVenues={setVenues} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
      <Routes>
      <Route path="/about" element={<AboutPage />} />
      </Routes>
    </main>
  );
}
