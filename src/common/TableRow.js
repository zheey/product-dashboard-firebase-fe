import React from 'react';
import { Link } from "react-router-dom";

const TableRow = ({ rowData, headerList, rowIndex, link }) => {
    return(
        <tr className="table-row" key={rowIndex}>
            <td className="flex-basis-5"> {rowIndex + 1} </td>

            { headerList.map((header, columnIndex) => {
                    const headerKey = header.key;
                    const value = rowData[headerKey];
                    const rowKeyData = headerKey === "address" && typeof value === "object"
                    ? `${value.street}, ${value.city}, ${value.country}`
                    : headerKey === "customer" && typeof value === "object"
                    ? `${value.name}`
                    : value;
                    return (
                        <td className={header.className || "flex-basis-15"} key={columnIndex}>
                            {
                                rowData.hasOwnProperty(headerKey) ?
                                    rowData[headerKey].length > 0 ?
                                        header.link ?
                                            <Link to={link}>
                                                { rowKeyData }
                                            </Link>
                                            :
                                            rowKeyData
                                            :
                                            '-'
                                    :
                                    '-'
                            }
                        </td>
                    )
                })
            }
        </tr>
    )
};
export default TableRow;