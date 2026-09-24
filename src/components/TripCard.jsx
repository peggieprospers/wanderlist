import { Link } from 'react-router-dom';
import './TripCard.css';

function TripCard({ trip }) {
  const totalStops = trip.days.reduce(
    (total, day) => total + day.stops.length,
    0
  );

  return (
    <Link to={`/trip/${trip.id}`} className="trip-card">
      <h2 className="trip-card-name">{trip.name}</h2>
      <p className="trip-card-destination">{trip.destination}</p>
      <div className="trip-card-meta">
        <span>{trip.startDate} → {trip.endDate}</span>
        <span>{trip.days.length} day{trip.days.length !== 1 ? 's' : ''}</span>
        <span>{totalStops} stop{totalStops !== 1 ? 's' : ''}</span>
      </div>
    </Link>
  );
}

export default TripCard;