import React from 'react';

const Card = ({ label, value }) => {
  return (
    <div className="card">
      <h3>{label}</h3>
      <p>{value}</p>
    </div>
  );
};

export default Card;
