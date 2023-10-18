import React from 'react'

const Review = ({ name, rating, comment }) => {
    return (
      <div className="bg-primary p-6 S shadow-md mb-4">
        <h3 className="text-xl font-bold mb-2 font-roboto-slab">{name}</h3>
        <div className="text-yellow-500 mb-4 text-xl ">
          {'★'.repeat(rating)}
          {'☆'.repeat(5 - rating)}
        </div>
        <p className="text-secondary-200 font-roboto ">{comment}</p>
      </div>
    );
  };

export default Review
