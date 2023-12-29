import React, { useState } from "react";
import BannerImeges from "../../assets/images/chair.png";
import BannerBg from "../../assets/images/chair22.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ setSelectedDate, selectedDate }) => {
  return (
    <div
      style={{
        background: `url(${BannerBg})`,
        backgroundSize: "cover",
      }}
      className="hero pt-20"
    >
      <div className="hero-content py-28 flex-col lg:flex-row-reverse">
        <img src={BannerImeges} className="rounded-lg shadow-2xl lg:w-1/2" />
        <div className="bg-white rounded-lg p-4 me-10">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
