import { Link } from 'react-router-dom';
import './CaterersList.css'


export default function CaterersList({ caterers, handleCatererClick }) {

  return (
    <div className="services-list">
      <h3>List of Caterers</h3>
      {caterers.map((caterer) => (
        <div key={caterer._id}>
          <Link to="#" onClick={() => handleCatererClick(caterer)}>
            {caterer.name}
          </Link>
        </div>
      ))}
    </div>
  );
}