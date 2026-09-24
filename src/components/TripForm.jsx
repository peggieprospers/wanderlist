import { useState } from 'react';
import './TripForm.jsx';

function TripForm({ onSubmit, onCancel }) {
  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !destination.trim() || !startDate || !endDate) {
      setError('Please fill in all fields.');
      return;
    }

    if (new Date(endDate) < new Date(startDate)) {
      setError('End date cannot be before start date.');
      return;
    }

    const newTrip = {
      id: Date.now().toString(),
      name: name.trim(),
      destination: destination.trim(),
      startDate,
      endDate,
      days: [],
    };

    onSubmit(newTrip);
  }

  return (
    <form className="trip-form" onSubmit={handleSubmit}>
      <h2>Create a New Trip</h2>

      {error && <p className="trip-form-error">{error}</p>}

      <div className="trip-form-field">
        <label htmlFor="name">Trip Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Summer in Italy"
        />
      </div>

      <div className="trip-form-field">
        <label htmlFor="destination">Destination</label>
        <input
          id="destination"
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="e.g. Rome, Florence, Venice"
        />
      </div>

      <div className="trip-form-row">
        <div className="trip-form-field">
          <label htmlFor="startDate">Start Date</label>
          <input
            id="startDate"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="trip-form-field">
          <label htmlFor="endDate">End Date</label>
          <input
            id="endDate"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      <div className="trip-form-actions">
        <button type="button" className="btn-secondary" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn-primary">
          Create Trip
        </button>
      </div>
    </form>
  );
}

export default TripForm;