import React, {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import Header from '../components/Header';
import LocationSection from '../components/LocationSection';
import Menu from '../components/Menu';
import Reviews from '../components/Review';
// import ReviewSection from '../components/ReviewSection';
import Footer from '../components/Footer';
import { NavbarProvider } from './NavbarContext';
// ... other imports

const LocationDependentContent = () => {
  const { location } = useParams(); // This is the location parameter from the URL
  const [storeDetails, setStoreDetails] = useState({});

  useEffect(() => {

    console.log(location);
    // Here you would fetch or determine the store details based on the location parameter
    // For example:
    // const storeInfo = getStoreInfo(location); // A function to fetch store details
    // setStoreDetails(storeInfo);
  }, [location]);

  // Now you can pass down the storeDetails or location to your components
  return (
    <div className='w-full bg-secondary-100'>
      <NavbarProvider>
        <Navbar2 />
        <Header storeDetails={storeDetails} locationURL={location} />
        <LocationSection locationURL = {location} />
        <Menu locationURL={location} />
        <br></br>
        {/* <ReviewSection locationURL={location} />     */}
    
       
        {/* ... */}
        <Footer />
      </NavbarProvider>
    </div>
  );
};

export default LocationDependentContent;
