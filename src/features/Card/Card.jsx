import React from "react";
import "./Card.css";

const Card = ({ paragraphText, buttonText }) => {
  return (
    <div className="div">
      <p>{paragraphText}</p>
      <button className="button">{buttonText}</button>
    </div>
  );
};

export default Card;
