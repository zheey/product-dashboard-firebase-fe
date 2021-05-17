import React from "react";

const ListDetails = ({
  label,
  value="",
  edit,
  type,
  onHandleChange,
  name,
  dataType
}) => {
  const newValue =
    dataType === "address" && typeof value === "object"
      ? `${value.street}, ${value.city}, ${value.country}`
      : dataType === "customer" && typeof value === "object"
      ? `${value.name}`
      : value;
  return (
    <div className="details-list">
      <h3>{label}</h3>
      {edit ? (
        <input
          name={name}
          type={type}
          value={newValue}
          onChange={e => onHandleChange(e)}
        />
      ) : (
        <p>{newValue}</p>
      )}
    </div>
  );
};
export default ListDetails;
