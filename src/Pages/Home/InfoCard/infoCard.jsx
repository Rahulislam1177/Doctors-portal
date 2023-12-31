import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, icon, bgClass } = card;

  return (
    <div
      className={`card  card-side text-white py-6 px-4 shadow-xl ${bgClass}`}
    >
      <figure>
        <img src={icon} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
