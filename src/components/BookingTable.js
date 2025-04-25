import React from 'react';

function BookingTable() {
  const bookingData = [
    { name: "John Doe", date: "2025-04-25", time: "17:00" },
    { name: "Jane Smith", date: "2025-04-26", time: "18:00" },
    { name: "Chris Pine", date: "2025-04-27", time: "19:00" }
  ];

  return (
    <div>
      <h2>Booking Data</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.map((booking, index) => (
            <tr key={index}>
              <td>{booking.name}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingTable;
