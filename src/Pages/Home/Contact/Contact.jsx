import React from "react";
import contactBg from "../../../assets/images/ContactBg.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <div
      style={{
        background: `url(${contactBg})`,
        backgroundSize: "cover",
      }}
      className="py-10"
    >
      <div className="hero w-1/2 container mx-auto">
        <div className="hero-content p-0 flex-col lg:flex-row-reverse">
          <div className=" text-white text-center">
            <h2 className="text-secondary mb-4">Contact Us</h2>
            <h1 className="text-3xl font-bold mb-4">Stay connected with us</h1>

            <form className="mb-5" action="">
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered w-full max-w-xs mb-5"
              />
              <br />
              <input
                type="email"
                placeholder="Subject"
                className="input input-bordered w-full max-w-xs mb-5"
              />
              <input
                type="text"
                placeholder="Your message"
                className="input input-bordered input-lg w-full max-w-xs mb-5 w-96 "
              />
            </form>
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
