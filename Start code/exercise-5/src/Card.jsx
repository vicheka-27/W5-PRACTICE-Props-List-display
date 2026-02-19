import React from "react";

export function Card({ cat }) {
  return (
    <div className="card">
      <img src={cat.image} alt={cat.breed} className="card-image" />
      <div className="card-content">
        <h2>{cat.breed}</h2>
        <p>{cat.description}</p>
      </div>
    </div>
  );
}
