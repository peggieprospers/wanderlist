import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TripDetail from './pages/TripDetail';
import NotFound from './pages/NotFound';
import initialTrips from './data/trips';
import './App.css';

function App() {
  const [trips, setTrips] = useState(initialTrips);

  function addTrip(newTrip) {
    setTrips((prevTrips) => [...prevTrips, newTrip]);
  }

  function deleteTrip(tripId) {
    setTrips((prevTrips) => prevTrips.filter((trip) => trip.id !== tripId));
  }

  function addDay(tripId) {
    setTrips((prevTrips) =>
      prevTrips.map((trip) => {
        if (trip.id !== tripId) return trip;

        const newDay = {
          id: Date.now().toString(),
          dayNumber: trip.days.length + 1,
          date: '',
          stops: [],
        };

        return { ...trip, days: [...trip.days, newDay] };
      })
    );
  }

  function addStop(tripId, dayId, newStop) {
    setTrips((prevTrips) =>
      prevTrips.map((trip) => {
        if (trip.id !== tripId) return trip;

        const updatedDays = trip.days.map((day) => {
          if (day.id !== dayId) return day;
          return { ...day, stops: [...day.stops, newStop] };
        });

        return { ...trip, days: updatedDays };
      })
    );
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={<Home trips={trips} onAddTrip={addTrip} />}
          />
          <Route
            path="/trip/:tripId"
            element={
              <TripDetail
                trips={trips}
                onDeleteTrip={deleteTrip}
                onAddDay={addDay}
                onAddStop={addStop}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;