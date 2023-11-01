// LocationSection.jsx
import React from 'react';
import Address from './Address';
// import StoreHours from './StoreHours';

const LocationSection = () => {
  const locationInfo = {
    location: "Lake Mary Outlet",
    address: "1234 Lake Mary Blvd, Lake Mary, FL 32746"
  };

  const hours = [
    { day: "Monday", openTime: "8:00am", closeTime: "10:00pm" },
    { day: "Tuesday", openTime: "8:00am", closeTime: "10:00pm" },
    // ... add other days
  ];

  return (
    <div className="w-full bg-white py-12 text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Location & Hours</h2>
      
      <div className="flex justify-center items-start gap-12">
        <Address {...locationInfo} />
        
        <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Store Hours</h3>
          {/* {hours.map(hour => (
            <StoreHours key={hour.day} {...hour} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
