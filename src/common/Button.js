import React from "react";

const Button = ({ label }) => (
  <div className="button-wrapper" type="submit">
    <button>{ label }</button>
  </div>
);

export default Button;
