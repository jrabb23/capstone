import React, { useState, useEffect } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [errors, setErrors] = useState({});

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'update', date: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    submitForm(formData);
  };

  useEffect(() => {
    const newErrors = {};

    if (!date) newErrors.date = 'Date is required.';
    if (!time) newErrors.time = 'Time is required.';
    if (guests < 1 || guests > 10) newErrors.guests = 'Guests must be between 1 and 10.';
    if (!occasion) newErrors.occasion = 'Occasion is required.';

    setErrors(newErrors);
  }, [date, time, guests, occasion]);

  const formIsValid = Object.keys(errors).length === 0;

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '300px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        aria-label="Reservation date"
        value={date}
        onChange={handleDateChange}
        required
      />
      {errors.date && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.date}</p>}

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        aria-label="Reservation time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="" disabled>Choose a time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      {errors.time && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.time}</p>}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        aria-label="Number of guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value))}
        required
      />
      {errors.guests && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.guests}</p>}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        aria-label="Occasion for booking"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="" disabled>Select</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {errors.occasion && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errors.occasion}</p>}

      <input
        type="submit"
        value="Make Your Reservation"
        disabled={!formIsValid}
      />
    </form>
  );
}

export default BookingForm;
