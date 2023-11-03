import React from "react";
import "./button.css";
const Button = ({ setButtonPressed }) => {
  return (
    <div className="todoFusion__btn">
      {" "}
      <button onClick={() => setButtonPressed(true)}>Add</button>
    </div>
  );
};

export default Button;
