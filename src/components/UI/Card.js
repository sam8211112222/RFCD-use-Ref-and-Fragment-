import React from "react";
import cardclass from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${cardclass.card} ${props.className}`}>
      {props.children}
    </div>
  );
};
export default Card;
