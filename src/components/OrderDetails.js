import React, { useEffect, useState } from "react";
import ListDetails from "../common/ListDetails";
import BreadCrumb from "../common/BreadCrumb";
import { useOrder } from "../context/OrderContext";
import Button from "../common/Button";
import { orderService } from "../services/ordersService";

const OrderDetails = ({ match, data }) => {
  const [order, setOrder] = useState(null);
  const [orderId, setOrderId] = useState({});
  const [editInput, setEditInput] = useState(false);
  const [editData, setEditData] = useState({});
  const [editing, setEditing] = useState(false);
  const { getOrderById, updateOrder } = useOrder();
  useEffect(() => {
    setOrderId(match.params.id);

  }, [match.params.id]);

  useEffect(() => {
    if (orderId && !order) {
      const orderData = getOrderById(orderId);
      orderData && setOrder(orderData);
    }
  }, [getOrderById, match.params.id, orderId, order]);

  const handleClick = () => {
    setEditInput(!editInput);
    setEditData(order);
    if (editInput) {
      setOrder(editData);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setOrder({
      ...order,
      [name]: value
    });
  };

  const retrieveOrder = async() => {
    const orderData = await updateOrder(order, order._id);
    setOrder(orderData);
  };

  const handleOrderEdit = (event) => {
      event.preventDefault();
    setEditing(true);
    orderService.editOrders(order, order._id).then(
      updatedOrder => {
        retrieveOrder();
        setEditing(false);
        handleClick();
      },
      error => {
        setEditing(false);
        console.log(error);
      }
    );
  };

  return (
    <div className="main-wrapper">
      <BreadCrumb />
      <div className="details-wrapper">
        <div className="header-wrapper">
          <h2>Product Details Page</h2>{" "}
          <div className="action-text" onClick={handleClick}>
            {` ${editInput ? "Cancel" : "Edit"} `}
          </div>
        </div>
        <form onSubmit={handleOrderEdit}>
        <div className="deails-wrapper">
          <ListDetails
            label="Title"
            value={order ? order.title : ''}
            edit={editInput}
            onHandleChange={handleChange}
            type="text"
            name="title"
          />
          <ListDetails
            label="Booking Date"
            value={order ? order.bookingDate : ''}
            edit={editInput}
            onHandleChange={handleChange}
            type="date"
            name="bookingDate"
            dataType="date"
          />
          <ListDetails label="Address" value={order ? order.address : ''} dataType="address"/>
          <ListDetails label="Customer" value={order ? order.customer : ''} dataType="customer"/>
        </div>
        {editInput && (
          <div className="edit-form">
            <Button label={editing ? " ...submitting": "Submit"} disabled={editing}/>
          </div>
        )}
        </form>
      </div>
    </div>
  );
};

export default OrderDetails;
