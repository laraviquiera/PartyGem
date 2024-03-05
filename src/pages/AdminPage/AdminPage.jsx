import { useState } from "react";
import VendorForm from "../../components/VendorForm/VendorForm";
import "./AdminPage.css";

export default function AdminPage({ caterers, venues }) {
  const [isAdmin, setIsAdmin] = useState(true);
  
  return (
    <div className="vend-container">
      <div className="main-form">
        <h1>New Service Form (Admin Only)</h1>
        <VendorForm isAdmin={isAdmin} caterers={caterers} venues={venues} />
      </div>
    </div>
  );
}