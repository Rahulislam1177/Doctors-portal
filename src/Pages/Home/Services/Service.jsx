import React from "react";

const Service = ({ service }) => {
  const { name, description, img } = service;

  return (
    <div className="card py-6 px-4 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-2xl font-samibold">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
