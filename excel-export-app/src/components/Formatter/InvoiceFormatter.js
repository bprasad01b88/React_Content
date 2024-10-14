import React from "react";
import { firstLetterCaps } from "../../utils";
import Barcode from "react-barcode";

function InvoiceFormatter({ rowData, id }) {
  let tArr = [];
  let cgstArr = [];
  let cessArr = [];
  let netAmountArr = [];
  let totalTaxAmount = 0;
  let totalCSgstAmount = 0;
  let totalCessAmount = 0;
  let totalNetAmount = 0;
  let payableAmount = 0;
  let showHeading = false;
  let totalOfferAmount = 0;

  // calculate tax amount on the basis of gst rate
  const calculateTaxAmount = (orp, gstRate, is_offer) => {
    const mrp = is_offer === "1" ? 0 : orp;
    const gst = gstRate / 100;
    const gst_rate = gst;

    const net_price = mrp / (1 + gst_rate);

    tArr.push(net_price);
    let newArr = [...new Set(tArr)];
    const sum = newArr.reduce((partialSum, a) => partialSum + a, 0);
    totalTaxAmount = parseFloat(sum).toFixed(2);
    return parseFloat(net_price).toFixed(2);
  };

  // calculate cgst and sgst amount on the basis of tax amount
  const calculateCGST = (cgst, txAm) => {
    const mrp = txAm;
    const cgst_rate = cgst / 100;
    const cgst_amount = cgst_rate * mrp;
    cgstArr.push(cgst_amount);
    let newArr = [...new Set(cgstArr)];
    const sum = newArr.reduce((partialSum, a) => partialSum + a, 0);
    totalCSgstAmount = parseFloat(sum).toFixed(2);
    return parseFloat(cgst_amount).toFixed(2);
  };

  // calculate cess amount on the basis of tax amount
  const calculateCess = (cess, txAm) => {
    const mrp = txAm;
    const cess_rate = cess / 100;
    const cess_amount = cess_rate * mrp;
    cessArr.push(cess_amount);
    let newArr = [...new Set(cessArr)];
    const sum = newArr.reduce((partialSum, a) => partialSum + a, 0);
    totalCessAmount = parseFloat(sum).toFixed(2);
    return parseFloat(cess_amount).toFixed(2);
  };

  // calculate totalamount on the basis of taxamount, cgst, sgst and cess rate
  const calculateTotalPrice = (tx, cgst, sgst, cess) => {
    const total =
      parseFloat(tx) + parseFloat(cgst) + parseFloat(sgst) + parseFloat(cess);
    netAmountArr.push(total);
    let newArr = [...new Set(netAmountArr)];
    const sum = newArr.reduce((partialSum, a) => partialSum + a, 0);
    totalNetAmount = Math.round(sum).toFixed(2);
    return parseFloat(total).toFixed(2);
  };

  // calculate net payable amount on the vbasis of acm offers
  const calculatePayableAmount = (data) => {
    data?.reduce((_acc, val) => {
      payableAmount += parseFloat(val.amount);
    }, {});
    return Math.round(payableAmount).toFixed(2);
  };

  // setting one row in table if hsnno are same
  const productData = rowData?.productList?.reduce((acc, data) => {
    const existingRow =acc.find(row => row.hsn_code === data.hsn_code && row.GSTTaxRate === data.GSTTaxRate);
    if (existingRow) {
      // If hsn_code and gst_tax_rate is already present, update the existing row
      existingRow.price += parseFloat(data?.amount);
      existingRow.GSTTaxRate = data?.GSTTaxRate;
      existingRow.cgst = data?.cgst;
      existingRow.cess = data?.sgst;
      existingRow.cess = data?.cess;
      existingRow.is_offer = data?.is_offer;
    } else {
      // If hsn_code and gst_tax_rate is not present, add a new row
      acc.push({
        hsn_code: data?.hsn_code,
        price: parseFloat(data?.amount),
        GSTTaxRate: data?.GSTTaxRate,
        cgst: data?.cgst,
        sgst: data?.sgst,
        cess: data?.cess,
        is_offer: data?.is_offer,
      });
    }
    return acc;
  }, []);

  // Check for is_offer values are equal to 1
  let isOfferFound = false;
  for (let item of rowData?.productList) {
    if (item?.is_offer === "1") {
      isOfferFound = true;
      break;
    }
  }
  showHeading = isOfferFound;

  // check if offer value are equal and greater than 1 and get sum of all amount
  const offerProducts = rowData?.productList?.filter(
    (product) => product.is_offer === "1"
  );
  if (offerProducts.length > 0) {
    const total = offerProducts.reduce(
      (acc, product) => (acc += parseFloat(product.amount)),
      0
    );
    totalOfferAmount = parseFloat(total).toFixed(2);
  }

  return (
    <>
      <div id={id} className="invoice d-none">
        <div className="bill">
          <div className="brand">ONDOOR CONCEPTS LTD</div>
          <div className="address">{rowData?.store_address}</div>
          <div className="bill-details">
            <div className="flex justify-between">
              <div className="gst-text">CIN:U52100MP2014PTC033570</div>
              <div className="gst-text">GSTIN:23AACCO0825C1Z5</div>
            </div>
          </div>
          <div className="bill-tax-head">
            TAX INVOICE({firstLetterCaps(rowData?.pmode)})
          </div>
          <div className="bill-to-head">Bill To: {rowData?.coco_id === "0" ? rowData?.customer_name : rowData?.coco_name}</div>
          <div className="bill-details">
            <div className="flex justify-between">
              <div className="bill-to-head">
                MOB NO: {rowData?.coco_id === "0" ? rowData?.mobile_number : "NA"}
              </div>
              <div className="bill-to-head">GST NO: {rowData?.customer_gst_no || "URD"} </div>
            </div>
          </div>
          <div className="bill-details inv-mb-5">
            <div className="flex justify-between">
              <div className="bill-to-head">{rowData?.date_added}</div>
              <div className="bill-to-head">Inv No: {rowData?.order_id}</div>
            </div>
          </div>
          <table className="table row-mb">
            <tr className="header">
              <th>Particular(HSN/Item)</th>
              <th className="gst-ml">MRP</th>
              <th className="gst-ml">ORP</th>
              <th className="gst-ml">Qty</th>
              <th className="gst-ml">Amount</th>
            </tr>
            {rowData?.productList?.map((item, index) => (
              <tr key={index}>
                <td>
                  [{item?.hsn_code}]{item?.product_name} [
                  {item.GSTTaxRate ? `GST: ${item.GSTTaxRate}%` : null}{" "}
                  {item?.sgst ? `SGST:${item?.sgst}%` : null}{" "}
                  {item?.cgst ? `CGST:${item?.cgst}%` : null}{" "}
                  {item?.cess ? `CESS:${item?.cess}%` : null}]
                </td>
                <td className="gst-ml">{parseFloat(item?.mrp)?.toFixed(2)}</td>
                <td className="gst-ml">
                  {parseFloat(item?.price)?.toFixed(2)}
                </td>
                <td className="gst-ml">
                  {parseFloat(item?.quantity)?.toFixed(2)}
                </td>
                <td className="text-end">
                  {parseFloat(item?.amount)?.toFixed(2)}
                </td>
              </tr>
            ))}
            <tr className="total">
              <td className="text-bold-600">
                Items : {rowData?.productList?.length}
              </td>
              <td></td>
              <td className="text-bold-600">Total</td>
              <td></td>
              <td className="text-end">
                {calculatePayableAmount(rowData?.productList)}
              </td>
            </tr>
          </table>
          <table className="table gst-table row-mb">
            <tr className="header">
              <th>HSN</th>
              <th className="gst-ml">GST%</th>
              <th className="gst-ml">TxAmt</th>
              <th>CGST</th>
              <th className="gst-ml">SGST</th>
              <th className="gst-ml">Cess</th>
              <th className="gst-total">Total</th>
            </tr>
            {productData?.map((data, index) => (
              <tr key={index}>
                <td>{data?.hsn_code}</td>
                <td className="gst-ml">
                  {parseFloat(data?.GSTTaxRate).toFixed(1)}%
                </td>
                <td className="gst-ml">
                  {calculateTaxAmount(
                    data?.price,
                    data?.GSTTaxRate,
                    data?.is_offer
                  )}
                </td>
                <td>
                  {calculateCGST(
                    data?.cgst,
                    calculateTaxAmount(
                      data?.price,
                      data?.GSTTaxRate,
                      data?.is_offer
                    )
                  )}
                </td>
                <td className="gst-ml">
                  {calculateCGST(
                    data?.sgst,
                    calculateTaxAmount(
                      data?.price,
                      data?.GSTTaxRate,
                      data?.is_offer
                    )
                  )}
                </td>
                <td className="gst-ml">
                  {calculateCess(
                    data?.cess,
                    calculateTaxAmount(
                      data?.price,
                      data?.GSTTaxRate,
                      data?.is_offer
                    )
                  )}
                </td>
                <td className="gst-total">
                  {calculateTotalPrice(
                    calculateTaxAmount(
                      data?.price,
                      data?.GSTTaxRate,
                      data?.is_offer
                    ),
                    calculateCGST(
                      data?.cgst,
                      calculateTaxAmount(
                        data?.price,
                        data?.GSTTaxRate,
                        data?.is_offer
                      )
                    ),
                    calculateCGST(
                      data?.sgst,
                      calculateTaxAmount(
                        data?.price,
                        data?.GSTTaxRate,
                        data?.is_offer
                      )
                    ),
                    calculateCess(
                      data?.cess,
                      calculateTaxAmount(
                        data?.price,
                        data?.GSTTaxRate,
                        data?.is_offer
                      )
                    )
                  )}
                </td>
              </tr>
            ))}
            <tr className="total">
              <td className="text-bold-600 inv-font-family">Total</td>
              <td></td>
              <td className="text-bold-600 gst-ml inv-font-family">
                {totalTaxAmount}
              </td>
              <td className="text-bold-600 gst-ml inv-font-family">
                {totalCSgstAmount}
              </td>
              <td className="text-bold-600 gst-ml inv-font-family">
                {totalCSgstAmount}
              </td>
              <td className="text-bold-600 gst-ml inv-font-family">
                {totalCessAmount}
              </td>
              <td className="text-bold-600 inv-font-family gst-ml">
                {totalNetAmount}
              </td>
            </tr>
          </table>
          {showHeading && (
            <div className="bill-amounts">
              <div className="text-bold-600 payable-size inv-font-family">
                Special Discount:
              </div>
              <div className="text-bold-600 payable-size inv-font-family payable-amt">
                {totalOfferAmount}
              </div>
            </div>
          )}
          <div className="bill-amounts">
            <div className="text-bold-600 payable-size inv-font-family">
              Payable Amount:
            </div>
            <div className="text-bold-600 payable-size inv-font-family payable-amt">
              {totalNetAmount}
            </div>
          </div>
          <div className="bill-amounts">
            <div className="text-bold-600 payable-size inv-font-family">
              Cash Payment:
            </div>
            <div className="text-bold-600 payable-size inv-font-family payable-amt">
              {totalNetAmount}
            </div>
          </div>
          {/* <div className="bill-amounts">
            <div className="text-bold-600 payable-size inv-font-family">Cust Paid:</div>
            <div className="text-bold-600 payable-size inv-font-family payable-amt">
              300.00
            </div>
          </div>
          <div className="bill-amounts">
            <div className="text-bold-600 payable-size inv-font-family">Change Returned:</div>
            <div className="text-bold-600 payable-size inv-font-family payable-amt">
              40.50
            </div>
          </div> */}
          <div className="invoice-note">
            <div className="note-msg">
              Note: This is a computer generated invoice hence signature not
              required.
            </div>
            <div className="text-end">
              <Barcode value={rowData?.order_id} className="barcode-img" />
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default InvoiceFormatter;
