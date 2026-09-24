import './StopCard.css';

function StopCard({ stop }) {
  return (
    <div className="stop-card">
            <div className="stop-card-top">
        {stop.time ? (
          <span className="stop-card-time">{stop.time}</span>
        ) : (
          <span className="stop-card-time stop-card-time-empty">No time set</span>
        )}
        <span className={`stop-card-category category-${stop.category.toLowerCase()}`}>
          {stop.category}
        </span>
      </div>
      <h3 className="stop-card-name">{stop.name}</h3>
      {stop.notes && <p className="stop-card-notes">{stop.notes}</p>}
    </div>
  );
}

export default StopCard;