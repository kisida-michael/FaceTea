import React from "react";
import TitleShape from "./TitleShape";
import Review from "./Review";

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    comment: `I love this place.  They make excellent milk tea and have an amazing selection, especially some of their more unique options.  Can never go wrong adding the cheese cream (not sure what it's called) onto the milk tea.  It's a calming atmosphere, always smells great when you walk in.  Love that they have some board games available, which is great for those that want to sit down with their drink and socialize a bit.  It is a small space so not much seating available when it's busy.  Overall a great place, and definitely a must visit for the milk tea.`,
  },
  {
    name: "Jane Doe",
    rating: 4,
    comment: `Nice teashop and some snacks in Lake Mary. The Jasmine Milk tea is refreshing and flavorful. The salt and pepper popcorn chicken is tasty. I would order less pepper next time because a lot of pepper makes it hot. I’m happy with my experience today.

    Ps: the boba texture is different from most of the boba I ever had. I wouldn’t say good or not, it’s just different. I like it too`,
  },
  // ... more reviews
];

const Reviews = () => {
  return (
    <div className="min-h-screen bg-secondary-300 flex mt-20" id="reviews">
      <div className="container mx-auto text-center">
        <div className="flex pt-20 mx-auto justify-center">
          <div className="flex flex-col">
            <TitleShape title="Reviews" />
          </div>
        </div>
        <section className="py-12 px-4">
          <h2 className="text-2xl font-bold mb-8 text-secondary-900 font-roboto-slab ">
           Hear from our Customers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <Review
                key={index}
                name={review.name}
                rating={review.rating}
                comment={review.comment}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reviews;
