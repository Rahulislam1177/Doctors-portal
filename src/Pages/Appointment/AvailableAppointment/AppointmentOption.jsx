import React from "react";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;

  return (
    <div className="card p-8 shadow-xl">
      <div className=" text-center">
        <h2 className="text-2xl font-samibold text-secondary">{name}</h2>
        <p className="mb-7">{slots[0]}</p>

        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
            onClick={() => setTreatment(appointmentOption)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
