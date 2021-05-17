import React from "react";
import TableRow from "./TableRow";

const Table = ({
  headerList,
  tableBodyData,
  headerClassName = "",
  tableClassName = "",
  onClickAction,
  isLoading,
  page,
  limit
}) => {
  return (
    <table className={`tableContent ${tableClassName}`}>
      <thead className="tableHeader">
        <tr className={`${headerClassName}`}>
          <th className="flex-basis-5"> S/N </th>
          {headerList &&
            headerList.map((header, index) => (
              <th className={header.className || "flex-basis-15"} key={index}>
                {" "}
                {header.title}{" "}
              </th>
            ))}
        </tr>
      </thead>
      <tbody className="">
        {!isLoading ? tableBodyData &&
          tableBodyData.map((rowData, i) => {
            const rowIndex = (((page - 1) * limit)+ i)
            return <TableRow
              rowData={rowData}
              rowIndex={rowIndex}
              headerList={headerList}
              key={rowIndex}
              onClickAction={onClickAction}
              link={`/orders/${rowData._id}`}
            />
          }): <tr><td>...loading</td></tr>}
      </tbody>
    </table>
  );
};

export default Table;
