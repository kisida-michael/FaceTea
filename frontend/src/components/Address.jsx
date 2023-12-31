// Address.jsx
import React from 'react';

const Address = ({ location, address }) => {
  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-3">{location}</h3>
      <p>{address}</p>
    </div>
  );
};

export default Address;
