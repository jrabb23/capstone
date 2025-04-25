import React, { useState } from 'react';
import BookingForm from './BookingForm';

function Bookings() {
  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);

  const updateTimes = (date) => {
    console.log('Date selected:', date);
    setAvailableTimes([...availableTimes]); 
  };

  return (
    <div>
      <h2>Make a Reservation</h2>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </div>
  );
}

export default Bookings;
