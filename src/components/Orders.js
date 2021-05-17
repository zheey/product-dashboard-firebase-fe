import React, { useEffect } from "react";
import BreadCrumb from "../common/BreadCrumb";
import Table from "../common/Table";
import { useOrder } from "../context/OrderContext";

const headerList = [
  { title: "Title", key: "title", className: "flex-basis-20", link: true },
  {
    title: "Booking Date",
    key: "bookingDate",
    type: "",
    className: "flex-basis-20"
  },
  { title: "Address", key: "address", type: "", className: "flex-basis-20" },
  { title: "Customer", key: "customer", type: "", className: "flex-basis-20" }
];

const Orders = ({ onClickAction }) => {
  const { orders, isLoading, getOrders } = useOrder();
  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return (
    <div className="main-wrapper">
      <BreadCrumb />
      <Table
        headerList={headerList}
        tableBodyData={orders}
        headerClassName=""
        tableClassName=""
        onClickAction={onClickAction}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Orders;
