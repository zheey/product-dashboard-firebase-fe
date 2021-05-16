import React, { useEffect, useReducer } from "react";
import BreadCrumb from "../common/BreadCrumb";
import Table from "../common/Table";
import { ordersService } from "../services/ordersService";
import { OrderInitialState } from "../constants";
import { orderReducer } from "../reducers/orderReducer";
import { useAuth } from "../context/AuthContext";

const headerList = [
    {title: "Title", key: "title", className: "flex-basis-20", link: true},
    {title: "Booking Date", key: "bookingDate", type: '', className: "flex-basis-20"},
    {title: "Address", key: "address", type: '', className: "flex-basis-20"},
    {title: "Customer", key: "customer", type: '', className: "flex-basis-20"}
];

const Orders = ({ onClickAction }) => {  
  const { setOrders, orders } = useAuth(); 
  const [productActions, setProductActions] = useReducer(orderReducer,OrderInitialState)
    useEffect(() => {
      setOrders(productActions.orders);
      //  ordersService.getProducts()
      // .then(
      //     products => {
      //         console.log("products",products);
      //     },
      //     error => {
      //         console.log(error);
      //     });
    },[productActions.orders, setOrders]);
  return (
    <div className="main-wrapper">
        <BreadCrumb />
        <Table
            headerList={headerList}
            tableBodyData={orders}
            headerClassName=""
            tableClassName = ""
            onClickAction={onClickAction}
        />
    </div>
  );
};

export default Orders;
