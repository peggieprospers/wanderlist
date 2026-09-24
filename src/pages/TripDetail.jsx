import { useNavigate, useParams, Link } from 'react-router-dom';
import DaySection from '../components/DaySection';
import './TripDetail.css';

function TripDetail({ trips, onDeleteTrip, onAddDay, onAddStop }) {
  const { tripId } = useParams();
  const navigate = useNavigate();
  const trip = trips.find((t) => t.id === tripId);

  if (!trip) {
    return (
      <div>
        <h1>Trip Not Found</h1>
        <p>We couldn't find a trip with that ID.</p>
        <Link to="/">Go back home</Link>
      </div>
    );
  }

  function handleDeleteTrip() {
    const confirmed = window.confirm(
      `Delete "${trip.name}"? This cannot be undone.`
    );
    if (confirmed) {
      onDeleteTrip(trip.id);
      navigate('/');
    }
  }

  return (
    <div>
      <Link to="/" className="back-link">
        ← Back to all trips
      </Link>

      <div className="trip-detail-header">
        <div className="trip-detail-header-top">
          <div>
            <h1>{trip.name}</h1>
            <p className="trip-detail-destination">{trip.destination}</p>
            <p className="trip-detail-dates">
              {trip.startDate} → {trip.endDate}
            </p>
          </div>
          <button className="btn-danger" onClick={handleDeleteTrip}>
            Delete Trip
          </button>
        </div>
      </div>

            {!trip.days || trip.days.length === 0 ? (
        <p className="empty-message">No days added yet for this trip.</p>
      ) : (
        <div className="days-list">
          {trip.days.map((day) => (
            <DaySection
              key={day.id}
              day={day}
              onAddStop={(dayId, newStop) => onAddStop(trip.id, dayId, newStop)}
            />
          ))}
        </div>
      )}

      <button className="btn-secondary btn-add-day" onClick={() => onAddDay(trip.id)}>
        + Add Day
      </button>
    </div>
  );
}

export default TripDetail;