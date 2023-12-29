import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
  const date = format(selectedDate, "PP");
  const { name, slots } = treatment;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const patientName = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    /*console.log(slot, name, phone, email); */
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: patientName,
      slot,
      email,
      phone,
    };
    console.log(booking);
    setTreatment(null);
  };

  return (
    <div>
      <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2 bg-accent text-white"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold text-left -mt-4">{name}</h3>
            <form
              onSubmit={handleBooking}
              className="grid grid-cols-1 gap-3 mt-10"
            >
              <input
                type="text"
                placeholder="Type here"
                value={date}
                disabled
                className="input mb-3 input-bordered w-full "
              />

              <select
                name="slot"
                className="select select-bordered w-full mb-3"
              >
                {slots.map((slot, i) => (
                  <option value={slot} key={i}>
                    {slot}
                  </option>
                ))}
              </select>
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="input mb-3 input-bordered w-full "
              />
              <input
                name="phone"
                type="text"
                placeholder="Phone Number"
                className="input mb-3 input-bordered w-full "
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input mb-3 input-bordered w-full "
              />
              <input
                type="submit"
                className="btn btn-accent w-full"
                value="submit"
              />
            </form>
          </div>
        </div>
      </>
    </div>
  );
};

export default BookingModal;
