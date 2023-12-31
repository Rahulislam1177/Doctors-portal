import React from "react";
import clock from "../../../assets/images/clock.png";
import phone from "../../../assets/images/phone.png";
import marker from "../../../assets/images/marker.png";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9.00 am to 5.00pm everyday",
      icon: clock,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 2,
      name: "Our Locations",
      description: "Open 9.00 am to 5.00pm everyday",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Us",
      description: "Open 9.00 am to 5.00pm everyday",
      icon: phone,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
  ];

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 ">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
