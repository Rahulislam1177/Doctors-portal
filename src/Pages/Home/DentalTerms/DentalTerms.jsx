import React from "react";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import tratment from "../../../assets/images/treatment.png";

const DentalTerms = () => {
  return (
    <div className="hero container mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="ps-10 w-1/2">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-8 w-1/2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
        <img src={tratment} className="rounded-lg shadow-2xl lg:w-1/3" />
      </div>
    </div>
  );
};

export default DentalTerms;
