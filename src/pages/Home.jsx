import { useState } from 'react';
import TripCard from '../components/TripCard';
import TripForm from '../components/TripForm';
import './Home.css';

function Home({ trips, onAddTrip }) {
  const [showForm, setShowForm] = useState(false);

  function handleCreateTrip(newTrip) {
    onAddTrip(newTrip);
    setShowForm(false);
  }

  return (
    <div>
      <div className="home-header">
        <h1>My Trips</h1>
        <button className="btn-primary" onClick={() => setShowForm(true)}>
          + New Trip
        </button>
      </div>

      {showForm && (
        <TripForm
          onSubmit={handleCreateTrip}
          onCancel={() => setShowForm(false)}
        />
      )}

      {trips.length === 0 ? (
        <p className="empty-message">
          No trips yet. Click "+ New Trip" to create your first one!
        </p>
      ) : (
        <div className="trip-grid">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;