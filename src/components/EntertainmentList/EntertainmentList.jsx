import { Link } from 'react-router-dom';
import './EntertainmentList.css'


export default function EntertainmentList({ entertainments, handleEntertainmentClick }) {

  return (
    <div className="services-list">
      <h3>Entertainment List Coming Soon!</h3>
      {entertainments.map((entertainment) => (
        <div key={entertainment._id}>
          <Link to={`/entertainment/${entertainment.entertainmentType}`} onClick={() => handleEntertainmentClick(entertainment)}>
            {entertainment.entertainmentType}
          </Link>
        </div>
      ))}
    </div>
  );
}