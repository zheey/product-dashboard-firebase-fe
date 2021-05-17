import React, { useEffect, useState } from "react";
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
const LIMIT = 10;
const Orders = ({ onClickAction }) => {
  const { orders, isLoading, getOrders } = useOrder();
  const [paginate, setPaginate] = useState({
    page: 1,
    total: 0,
    totalPages: 0,
    paginatedOrder: []
  });

  useEffect(() => {
    const page = paginate.page;
    const total = orders ? orders.length : 0;
    const totalPages = Math.ceil(total / LIMIT);
    const paginatedOrder = orders ? orders.slice((page - 1) * LIMIT, page * LIMIT) : [];
    setPaginate({ page, total, totalPages, paginatedOrder });
  }, [paginate.page, orders]);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  const fetchPagination = direction => {
    let currentPage = paginate.page,
      total = paginate.total;

    let nextPage;
    if (direction === "next") {
      if (currentPage !== Math.ceil(total / LIMIT)) {
        nextPage = currentPage + 1;
      }
    } else if (direction === "previous") {
      if (currentPage !== 1) {
        nextPage = currentPage - 1;
      }
    } else if (direction === "first") {
      if (currentPage !== 1) {
        nextPage = 1;
      }
    } else if (direction === "last") {
      if (currentPage !== Math.ceil(total / LIMIT)) {
        nextPage = Math.ceil(total / LIMIT);
      }
    }

    if (nextPage) {
      setPaginate(prevState => ({
        ...prevState,
        page: nextPage
      }));
    }
  };
  return (
    <div className="main-wrapper">
      <BreadCrumb />
      <Table
        headerList={headerList}
        tableBodyData={paginate.paginatedOrder}
        headerClassName=""
        tableClassName=""
        onClickAction={onClickAction}
        isLoading={isLoading}
        page={paginate.page}
        limit={LIMIT}
      />
      <div className="nav-control-wrapper">
        <div className="nav-control">
          <div className="control" onClick={() => fetchPagination("first")}>
            {" "}
            {"<<"}&nbsp;{" "}
          </div>
          <div className="control" onClick={() => fetchPagination("previous")}>
            {" "}
            {"<"}{" "}
          </div>
          <div className="text">
            {" "}
            {`${paginate.page} / ${paginate.totalPages} of ${paginate.total}`}{" "}
          </div>
          <div className="control" onClick={() => fetchPagination("next")}>
            {" "}
            {">"} &nbsp;
          </div>
          <div className="control" onClick={() => fetchPagination("last")}>
            {" "}
            {">>"}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
