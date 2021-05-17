import React from 'react';
import { Link } from "react-router-dom";

const TableRow = ({ rowData, headerList, rowIndex, onClickAction, showAction, link }) => {
    return(
        <tr className="table-row" key={rowIndex}>
            <td className="flex-basis-5"> {rowIndex + 1} </td>

            { headerList.map((header, columnIndex) => {
                    const headerKey = header.key;

                    return (
                        <td className={header.className || "flex-basis-15"} key={columnIndex}>
                            {
                                rowData.hasOwnProperty(headerKey) ?
                                    rowData[headerKey].length > 0 ?
                                        header.link ?
                                            <Link to={link}>
                                                { rowData[headerKey] }
                                            </Link>
                                            :
                                            rowData[headerKey]
                                            :
                                            '-'
                                    :
                                    '-'
                            }
                        </td>
                    )
                })
            }
            {
                onClickAction && 
                <td className="action-text" onClick={() => onClickAction(rowData.id)}> Edit </td>
            }
        </tr>
    )
};
export default TableRow;