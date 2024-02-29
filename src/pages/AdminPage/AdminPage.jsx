import VendorForm from '../../components/VendorForm/VendorForm';
import "./AdminPage.css"

export default function AdminPage() {
  return (
      <div className="vend-container">
        <div className="main-form">
        <h1>New Service Form (Admin Only)</h1>
            <VendorForm />
        </div>
      </div>
  )
}
