import { useState } from 'react';
import './StopForm.css';

const CATEGORIES = ['Sightseeing', 'Food', 'Transport', 'Other'];

function StopForm({ onSubmit, onCancel }) {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('Sightseeing');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      setError('Stop name is required.');
      return;
    }

    const newStop = {
      id: Date.now().toString(),
      name: name.trim(),
      time: time.trim(),
      category,
      notes: notes.trim(),
    };

    onSubmit(newStop);
  }

  return (
    <form className="stop-form" onSubmit={handleSubmit}>
      {error && <p className="trip-form-error">{error}</p>}

      <div className="trip-form-field">
        <label htmlFor="stopName">Stop Name</label>
        <input
          id="stopName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Colosseum Tour"
        />
      </div>

      <div className="trip-form-row">
        <div className="trip-form-field">
          <label htmlFor="stopTime">Time</label>
          <input
            id="stopTime"
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="e.g. 10:00 AM"
          />
        </div>

        <div className="trip-form-field">
          <label htmlFor="stopCategory">Category</label>
          <select
            id="stopCategory"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="trip-form-field">
        <label htmlFor="stopNotes">Notes (optional)</label>
        <input
          id="stopNotes"
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="e.g. Book tickets in advance"
        />
      </div>

      <div className="trip-form-actions">
        <button type="button" className="btn-secondary" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn-primary">
          Add Stop
        </button>
      </div>
    </form>
  );
}

export default StopForm;