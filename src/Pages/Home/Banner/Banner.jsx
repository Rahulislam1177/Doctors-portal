import React from "react";
import BannerImeges from "../../../assets/images/chair.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import BannerBg from "../../../assets/images/chair22.png";
const Banner = () => {
  return (
    <div
      style={{
        background: `url(${BannerBg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
      className="hero pt-20"
    >
      <div className="hero-content py-28 flex-col lg:flex-row-reverse">
        <img src={BannerImeges} className="rounded-lg shadow-2xl lg:w-1/2" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
