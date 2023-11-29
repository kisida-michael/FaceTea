import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import Header from '../components/Header';
import LocationSection from '../components/LocationSection';
import Menu from '../components/Menu';
import About from '../components/About';
import ReviewSection from '../components/ReviewSection';
import Footer from '../components/Footer';
import { NavbarProvider } from './NavbarContext';
// ... other imports

const LocationDependentContent = () => {
  const { location } = useParams(); // This is the location parameter from the URL
  const [storeDetails, setStoreDetails] = useState({});


  return (
    <div className='w-full bg-secondary-100 overflow-hidden'>
      <NavbarProvider>
        <Navbar2 />
        <Header storeDetails={storeDetails} locationURL={location} />
        <About />
        <LocationSection locationURL = {location} />
        <Menu locationURL={location} />
        <br></br>
        <ReviewSection locationURL={location} />    
        <Footer />
      </NavbarProvider>
    </div>
  );
};

export default LocationDependentContent;
