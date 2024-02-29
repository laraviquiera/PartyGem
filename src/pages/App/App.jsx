import { useState } from 'react';
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

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/services/catering" element={<CateringPage />} />
              <Route path="/services/entertainment" element={<EntertainmentPage />} />
              <Route path="/services/venues" element={<VenuesPage />} />
              <Route path="/services/vendor" element={<VendorPage />} />
              {user.isAdmin && <Route path="services/admin" element={<AdminPage />} />}
              <Route path="/plans" element={<PlanPage />} />
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
