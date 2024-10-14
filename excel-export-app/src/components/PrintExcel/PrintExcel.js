import React from "react";
import { Table } from "react-bootstrap";

const PrintExcel = React.forwardRef(({ data }, ref) => {
    const headers = data.length > 0 ? Object.keys(data[0]) : [];
    const totalItems = data.reduce((acc, item) => parseFloat(acc) + (parseFloat(item.Items) || 0), 0);
    const totalQuantity = data.reduce((acc, item) => parseFloat(acc) + (parseFloat(item.Qty) || 0), 0);
    return (
    <div ref={ref} className="table-container overflow-auto">
      <Table className="ms-1 me-1">
      <thead className="table-head">
          <tr>
          {headers.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {data.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((val, i) => (
                <td key={i}>{val}</td>
              ))}
            </tr>
          ))}
           <tr>
            <td colSpan={3}>Grand Total</td>
            <td colSpan={2}>{totalQuantity.toFixed(2)}</td>
            <td colSpan={4}>{totalItems}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )});

  export default PrintExcel;