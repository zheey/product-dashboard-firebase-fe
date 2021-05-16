import React, { useEffect, useState } from "react";
import ListDetails from "../common/ListDetails";
import BreadCrumb from "../common/BreadCrumb";
import { useOrder } from "../context/OrderContext";

const OrderDetails = ({ match, data }) => {
    const [order, setOrder] = useState(null);
    const { getOrderById } = useOrder();
  useEffect(() => {
      const orderId = match.params.id
    if(orderId) {
        const orderData = getOrderById(orderId);
        setOrder(orderData);
    }
  }, [getOrderById, match.params.id]);

  const handleClick = () => {};
  return (
    <div className="main-wrapper">
      <BreadCrumb />
      <div className="details-wrapper">
        <div className="header-wrapper">
          <h2>Product Details Page</h2>{" "}
          <div className="action-text" onClick={handleClick}>
            {" "}
            Edit{" "}
          </div>
        </div>
        <div className="deails-wrapper">
          <ListDetails label="Title" value="Test" />
          <ListDetails label="Booking Date" value="Tes" />
          <ListDetails label="Address" value="Test" />
          <ListDetails label="Customer" value="Test" />
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
