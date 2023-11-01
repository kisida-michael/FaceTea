// import React from 'react'

// const Review = ({ name, rating, comment }) => {
//     return (
//       <div className="bg-primary p-6 S shadow-md mb-4 ">
//         <h3 className="text-xl font-bold mb-2 font-roboto-slab">{name}</h3>
//         <div className="text-yellow-500 mb-4 text-xl ">
//           {'★'.repeat(rating)}
//           {'☆'.repeat(5 - rating)}
//         </div>
//         <p className="text-secondary-200 font-roboto ">{comment}</p>
//       </div>
//     );
//   };

// export default Review
// Review.jsx
import React from 'react';

const Review = ({ name, comment, rating }) => {
  return (
    <div className="bg-primary p-6 rounded shadow-md  mx-4">
      <div className="flex justify-center mb-4">
        {/* Placeholder for avatar */}
        <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
      </div>
      <h3 className="text-center font-semibold mb-2">{name}</h3>
      <p className="text-sm mb-2">{comment}</p>
      <div className="flex justify-center">
        {/* Replace with your own stars component */}
        <span>{'⭐'.repeat(rating)}</span>
      </div>
    </div>
  );
};

export default Review;
