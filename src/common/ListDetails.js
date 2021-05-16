import React from "react";

const ListDetails = ({ label, value }) => (
    <div className="details-list">
        <h3>{ label }</h3>
        <p>{ value }</p>
    </div>
);

export default ListDetails;