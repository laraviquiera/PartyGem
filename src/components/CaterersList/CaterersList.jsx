import { Link } from 'react-router-dom';

export default function CaterersList({ caterers, handleCatererClick }) {
  return (
    <div className="list">
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