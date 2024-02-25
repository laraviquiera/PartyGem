import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthPage from '../AuthPage/AuthPage';
import ServicesPage from '../ServicesPage/ServicesPage';
import PlanPage from '../PlanPage/PlanPage';
import PlanForm from '../../components/PlanForm/PlanForm';
import AboutPage from '../AboutPage/AboutPage';
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
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/plan" element={<PlanPage />} />
              <Route path="/plan/new" element={<PlanForm />} />
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
