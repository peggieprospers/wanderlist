import { useState } from 'react';
import StopCard from './StopCard';
import StopForm from './StopForm';
import './DaySection.css';

function DaySection({ day, onAddStop }) {
  const [showStopForm, setShowStopForm] = useState(false);

  function handleAddStop(newStop) {
    onAddStop(day.id, newStop);
    setShowStopForm(false);
  }

  return (
    <div className="day-section">
      <div className="day-section-header">
        <h2>Day {day.dayNumber}</h2>
        <span className="day-section-date">{day.date || 'No date set'}</span>
      </div>

      {day.stops.length === 0 ? (
        <p className="day-section-empty">No stops added yet.</p>
      ) : (
        <div className="day-section-stops">
          {day.stops.map((stop) => (
            <StopCard key={stop.id} stop={stop} />
          ))}
        </div>
      )}

      {showStopForm ? (
        <StopForm
          onSubmit={handleAddStop}
          onCancel={() => setShowStopForm(false)}
        />
      ) : (
        <button
          className="btn-add-stop"
          onClick={() => setShowStopForm(true)}
        >
          + Add Stop
        </button>
      )}
    </div>
  );
}

export default DaySection;