import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";
import { format } from "date-fns";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const [appointmentOptions, setAppointmentOptions] = useState([]);

  useEffect(() => {
    fetch("AppointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  });

  return (
    <div className="mb-10">
      <div className="text-center my-10">
        <h3 className="text-secondary ">
          Available Services on {format(selectedDate, "PP")}
        </h3>
        <p className="text-accent ">Please select a service.</p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 ">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          setTreatment={setTreatment}
          selectedDate={selectedDate}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
