import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import BookingPage from './pages/BookingPage';
import { initializeTimes, updateTimes } from './reducers/bookingReducer';

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
