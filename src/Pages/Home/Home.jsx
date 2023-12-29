import React from "react";
import Banner from "./Banner/Banner";
import InfoCards from "./InfoCard/InfoCards";
import Services from "./Services/Services";
import DentalTerms from "./DentalTerms/DentalTerms";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import Testimonial from "./Testimonial/Testimonial";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <DentalTerms></DentalTerms>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
