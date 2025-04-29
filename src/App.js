import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useReducer, useState, useEffect } from 'react';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import BookingPage from './pages/BookingPage';
import { initializeTimes, updateTimes } from './reducers/bookingReducer';
import ConfirmedBooking from './pages/ConfirmedBooking';

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTimes() {
      const times = await initializeTimes();
      dispatch({ type: 'initialize', times });
      setLoading(false);
    }
    fetchTimes();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // <-- You can customize this
  }

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/reservations"
          element={
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
