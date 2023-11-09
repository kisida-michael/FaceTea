// Hours.jsx
import React from 'react';
//work
const Hours = ({ day, openTime, closeTime }) => {
  return (
    <div className="flex justify-between mb-2">
      <span>{day}</span>
      <span>{`${openTime} - ${closeTime}`}</span>
    </div>
  );
};

export default Hours;
