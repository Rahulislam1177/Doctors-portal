import React from "react";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import Doctors from "../../../assets/images/doctor-small.png";
import makeAppointmentBg from "../../../assets/images/bg-blue.png";

const MakeAppointment = () => {
  return (
    <div
      style={{
        background: `url(${makeAppointmentBg})`,
        backgroundSize: "cover",
      }}
      className=""
    >
      <div className="hero container mx-auto mt-28">
        <div className=" hero-content p-0 flex-col lg:flex-row-reverse">
          <div className="ps-8 w-1/2 text-white">
            <h2 className="text-secondary">Appointment</h2>
            <h1 className="text-3xl font-bold">Make an appointment Today</h1>
            <p className="py-8 w-1/2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content
            </p>
            <PrimaryButton>GET STARTED</PrimaryButton>
          </div>
          <img src={Doctors} className="rounded-lg lg:w-1/3 -mt-24" />
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
