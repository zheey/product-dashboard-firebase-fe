import React from "react";

const TextField = ({ type, name, value="", onChange=()=>{}, label }) => (
    <div className="text-wrapper">
        <label>{label}</label>
        <input type={type} name={name} value={value} onChange={(e) => onChange(e)}/>
    </div>
);

export default TextField;