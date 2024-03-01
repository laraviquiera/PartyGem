import { Link } from 'react-router-dom';
import './EntertainmentList.css'


export default function EntertainmentList({ entertainments, handleEntertainmentClick }) {


  return (
    <div className="services-list">
      <h3>List of Entertainments</h3>
      {entertainments.map((entertainment) => (
        <div key={entertainment._id}>
          <Link to="#" onClick={() => handleEntertainmentClick(entertainment)}>
            {entertainment.name}
          </Link>
        </div>
      ))}
    </div>
  );
}