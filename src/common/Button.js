import React from "react";

const Button = ({ label, disabled }) => (
  <div className="button-wrapper" type="submit">
    <button disabled={disabled}>{ label }</button>
  </div>
);

export default Button;
