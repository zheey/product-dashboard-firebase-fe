import React from "react";
import TableRow from "./TableRow";

const Table = ({
  headerList,
  tableBodyData,
  headerClassName = "",
  tableClassName = "",
  onClickAction
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
        {tableBodyData &&
          tableBodyData.map((rowData, rowIndex) => {
            return <TableRow
              rowData={rowData}
              rowIndex={rowIndex}
              headerList={headerList}
              key={rowIndex}
              onClickAction={onClickAction}
            />
          })}
      </tbody>
    </table>
  );
};

export default Table;