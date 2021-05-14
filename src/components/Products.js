import React, { useEffect } from "react";
import BreadCrumb from "../common/BreadCrumb";
import Table from "../common/Table";
import { productService } from "../services/productService";

const headerList = [
    {title: "Title", key: "title", className: "flex-basis-20"},
    {title: "Booking Date", key: "bookingDate", type: '', className: "flex-basis-20"},
    {title: "Address", key: "address", type: '', className: "flex-basis-20"},
    {title: "Customer", key: "customer", type: '', className: "flex-basis-20"}
];

const Mentors = ({onClickAction}) => {   
  useEffect(() => {
    productService.getProducts()
    .then(
        products => {
            console.log("products",products);
        },
        error => {
            console.log(error);
        });
  },[]);
  return (
    <div className="main-wrapper">
        <BreadCrumb />
        <Table
            headerList={headerList}
            tableBodyData={[]}
            headerClassName=""
            tableClassName = ""
            onClickAction={onClickAction}
        />
    </div>
  );
};

export default Mentors;
