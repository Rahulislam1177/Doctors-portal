import React from "react";

const Review = ({ reviewItem }) => {
  const { name, img, location, review } = reviewItem;
  return (
    <div className="card p-6 shadow-xl">
      <p>{review}</p>

      <div className="flex item-center mt-10">
        <div className="me-5">
          <figure>
            <img
              className="rounded-full rounded-2  border-2 border-secondary p-1"
              src={img}
              alt="Shoes"
            />
          </figure>
        </div>
        <div>
          <h2 className="text-1xl font-semibold">{name}</h2>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
