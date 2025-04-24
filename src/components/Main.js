import React, { useReducer } from 'react';
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './reducers/bookingReducer'; 

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <h1>Book a Table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}

export default Main;
