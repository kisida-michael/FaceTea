// ReviewSection.jsx
import React, { useState } from 'react';
import Review from './Review';
import Carousel from 'react-grid-carousel';

const ReviewSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
 


  
  const reviewsData = [
    { name: "Floyd Myers", comment: "This place is amazing!", rating: 4 },
    { name: "Ronald Ricardo", comment: "Best boba in Florida!", rating: 5 },
    { name: "Naomi Lopez", comment: "Delicious poke bowls!", rating: 4 },
    { name: "Floyd Myers", comment: "This place is amazing!", rating: 4 },
    { name: "Ronald Ricardo", comment: "Best boba in Florida!", rating: 5 },
    { name: "Naomi Lopez", comment: "Delicious poke bowls!", rating: 4 },
    //... add more reviews if you have them
  ];

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 3) % reviews.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(prev => (prev - 3 + reviews.length) % reviews.length);
  };

  return (
    <div className="w-full bg-white py-12 text-black">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Customer Feedback</h2>
      <div className='container mx-auto'>

      
      <Carousel
        cols={3}
        rows={1}
        gap={10}
        responsiveLayout={[
          { breakpoint: 1200, cols: 3 },
          { breakpoint: 990, cols: 2 },
          { breakpoint: 500, cols: 1 }
        ]}
      >
        {reviewsData.map((review, index) => (
          <Carousel.Item key={index}>
            <Review {...review} />
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
    </div>
  );
};

export default ReviewSection;
