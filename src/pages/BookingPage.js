import React from 'react';
import BookingForm from '../components/BookingForm';
import { useNavigate } from 'react-router-dom'; 
import { submitAPI } from '../api'; 

function BookingPage({ availableTimes, dispatch }) {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmed'); 
    }
  };

  return (
    <main className="booking-page">
      <h1>Reserve a Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm} 
      />
    </main>
  );
}

export default BookingPage;
