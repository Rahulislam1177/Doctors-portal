import React from "react";
import Review from "./review";
import people1 from "../../../assets/images/people-1.png";
import people2 from "../../../assets/images/people-2.png";
import people3 from "../../../assets/images/people-3.png";
import testomonialIcom from "../../../assets/images/Mask Group 7@2x.png";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      img: people1,
      review:
        "it is a long establised fact that by the readable content of a lot layout. The point of using lorem a more-less normal distribu to using Content here,content",
      location: "California",
    },
    {
      _id: 2,
      name: "Winson Herry",
      img: people2,
      review:
        "it is a long establised fact that by the readable content of a lot layout. The point of using lorem a more-less normal distribu to using Content here,content",
      location: "California",
    },
    {
      _id: 3,
      name: "Winson Herry",
      img: people3,
      review:
        "it is a long establised fact that by the readable content of a lot layout. The point of using lorem a more-less normal distribu to using Content here,content",
      location: "California",
    },
  ];

  return (
    <div className="container mx-auto py-16">
      <div className="flex justify-between">
        <div>
          <h5 className="text-secondary font-samibold">Testimonial</h5>
          <h3 className="text-accent text-3xl mb-8">What Our Patients Says</h3>
        </div>
        <div className="flex justify-end">
          <img className="w-1/4 " src={testomonialIcom} alt="" />
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 ">
        {reviews.map((review) => (
          <Review key={review._id} reviewItem={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
