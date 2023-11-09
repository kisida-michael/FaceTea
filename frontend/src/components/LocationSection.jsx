// LocationSection.jsx
import React, { useState, useEffect } from "react";
import Address from "./Address";
import StoreHours from "./StoreHours";

const LocationSection = ({ locationURL }) => {
  const [location, setLocation] = useState("");
  useEffect(() => {
    if (locationURL === "lake-mary") {
      setLocation("Lake Mary");
    } else if (locationURL === "orange-city") {
      setLocation("Orange City");
    }
    setLocation(locationInfo[locationURL]);

  }, [locationURL]); // Only re-run the effect if locationURL changes



  const locationInfo = {
    "lake-mary":{
    location: "Lake Mary",
    address: "3801 W Lake Mary Blvd #177, Lake Mary, FL 32746",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.8247446766572!2d-81.34817392296327!3d28.754649078521815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7731df22f40c7%3A0x4f56ff5f5418c630!2sFace%20Tea%20(Lake%20Mary)!5e0!3m2!1sen!2sus!4v1699514166294!5m2!1sen!2sus"
    },
    "orange-city":{
    location: "Orange City",
    address: "2631 Enterprise Rd #600, Orange City, FL 32763",
    mapSrc:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13969.885640081515!2d-81.2910769!3d28.9140518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7118ed4bd093f%3A0x6b02b1b9bdb2a1a4!2sFace%20Tea%20%26%20Poke%20Bowl%20(orange%20city)!5e0!3m2!1sen!2sus!4v1699518530073!5m2!1sen!2sus"
    },


  };

  const hours = [
    { day: "Monday", openTime: "8:00am", closeTime: "10:00pm" },
    { day: "Tuesday", openTime: "8:00am", closeTime: "10:00pm" },
    { day: "Tuesday", openTime: "8:00am", closeTime: "10:00pm" },
    { day: "Tuesday", openTime: "8:00am", closeTime: "10:00pm" },
    { day: "Tuesday", openTime: "8:00am", closeTime: "10:00pm" },
    { day: "Tuesday", openTime: "8:00am", closeTime: "10:00pm" },
    { day: "Tuesday", openTime: "8:00am", closeTime: "10:00pm" },
    // ... add other days
  ];

  return (
    <div className="w-full bg-white py-12 text-gray-800">
      <h2 className="text-3xl  text-primary font-bold mb-6 text-center">
        Our Location & Hours
      </h2>
      <div className="flex mx-auto justify-center gap-12">
        <div className="border-2 p-2 border-secondary-300">
        {location && <Address {...location} />}
          <div className="p-4">
          <h3 className="text-xl font-semibold mb-3">Store Hours</h3>
          {hours.map((hour) => (
            <StoreHours  key={hour.day} {...hour} />
          ))}
          </div>
        </div>
        <div className="p-8 border-2 border-secondary-300 shadow-sm w-1/3">
          <div>
            <iframe
              src={location.mapSrc}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;