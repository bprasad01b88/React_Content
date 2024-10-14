import React from "react";
import barCodeImg from '../assests/images/itemBarcode.png';

const Invoice = () => {
    const printInvoice = () => {

        const invoice = document.getElementById("invoice");
        const printWindow = window.open("", "_blank");
        console.log("first", document.styleSheets)
        printWindow.document.write(`
            <html>
                <head>
                <title>Invoice</title>
                <style>
                    ${Array.from(document.styleSheets[1].cssRules)
                        .reduce((acc, cur) => acc + cur.cssText, "")}
                </style>
                </head>
                <body>
                ${invoice.outerHTML}
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    };

    return (
        <div>
            <div id="invoice" className="invoice">
                <div class="bill">
                    <div class="brand">
                        ONDOOR CONCEPTS LTD
                    </div>
                    <div class="address">
                        C14 LIG Colony Opposite Christian Eminent School
                    </div>
                    <div class="bill-details">
                        <div class="flex justify-between">
                            <div>CIN:U52100MP2014PLC033570</div>
                            <div>GSTIN:23AACCO0825C125</div>
                        </div>
                    </div>
                    <div className="bill-tax-head">TAX INVOICE(CASH)</div>
                    <div className="bill-to-head">Bill To Ondoor</div>
                    <div class="bill-details">
                        <div class="flex justify-between">
                            <div className="text-bold">MOB NO: 9786513420</div>
                            <div className="text-bold">GST NO: URD</div>
                        </div>
                    </div>
                    <div className="bill-details inv-mb-5">
                        <div class="flex justify-between">
                            <div className="text-bold">21/05/2024 17:28:45</div>
                            <div className="text-bold">Inv No: JB10257984</div>
                        </div>
                    </div>
                    <table class="table">
                        <tr class="header">
                            <th>
                                Particulars(HSN/Item)
                            </th>
                            <th>
                                MRP
                            </th>
                            <th>
                                ORP
                            </th>
                            <th>
                                Qty
                            </th>
                            <th>
                                Amount
                            </th>
                        </tr>
                        <tr>
                            <td>[220210]Fanta Soft Drink 750ML [CGST: 14.00% SGST: 14.00% Cess: 12.00%]</td>
                            <td>45.00</td>
                            <td>44.00</td>
                            <td>1.00</td>
                            <td className="text-end">44.00</td>
                        </tr>
                        <tr>
                            <td>[19253100]Sunfeast Bounce Choco Creme Biscuits 58 GM [CGST: 9.00% SGST: 9.00%]</td>
                            <td>10.00</td>
                            <td>10.00</td>
                            <td>1.00</td>
                            <td className="text-end">10.00</td>
                        </tr>
                        <tr>
                            <td>[960312]Colgate Super Flexi Medium ToothBrush [CGST: 9.00% SGST: 9.00%]</td>
                            <td>20.00</td>
                            <td>20.00</td>
                            <td>1.00</td>
                            <td className="text-end">20.00</td>
                        </tr>
                        <tr>
                            <td>[980419]Sunlite Sunflower Oil [CGST: 9.00% SGST: 9.00%]</td>
                            <td>20000.00</td>
                            <td>20000.00</td>
                            <td>100.00</td>
                            <td className="text-end">20000.00</td>
                        </tr>
                        <tr className="total">
                            <td>Items : 4</td>
                            <td></td>
                            <td className="text-bold">Total</td>
                            <td></td>
                            <td>20800.00</td>
                        </tr>
                    </table>
                    <table class="table gst-table">
                        <tr class="header">
                            <th>
                                HSN
                            </th>
                            <th className="gst-ml">
                                GST%
                            </th>
                            <th className="gst-ml">
                                TxAmt
                            </th>
                            <th className="gst-ml">
                                CGST
                            </th>
                            <th className="gst-ml">
                                SGST
                            </th>
                            <th className="gst-ml">
                                Csss
                            </th>
                            <th className="gst-ml">
                                Total
                            </th>
                        </tr>
                        <tr>
                            <td>220210</td>
                            <td className="gst-ml">28.0%</td>
                            <td className="gst-ml">31.43</td>
                            <td className="gst-ml">4.40</td>
                            <td className="gst-ml">4.40</td>
                            <td className="gst-ml">3.37</td>
                            <td className="text-end">44.00</td>
                        </tr>
                        <tr>
                            <td>19053100</td>
                            <td className="gst-ml">18.0%</td>
                            <td className="gst-ml">8.47</td>
                            <td className="gst-ml">0.76</td>
                            <td className="gst-ml">0.76</td>
                            <td className="gst-ml">0.00</td>
                            <td className="text-end">10.00</td>
                        </tr>
                        <tr>
                            <td>960312</td>
                            <td className="gst-ml">18.0%</td>
                            <td className="gst-ml">16.95</td>
                            <td className="gst-ml">1.53</td>
                            <td className="gst-ml">1.53</td>
                            <td className="gst-ml">0.00</td>
                            <td className="text-end">20.00</td>
                        </tr>
                        <tr>
                            <td>980419</td>
                            <td className="gst-ml">18.0%</td>
                            <td className="gst-ml">16.95</td>
                            <td className="gst-ml">1.53</td>
                            <td className="gst-ml">1.53</td>
                            <td className="gst-ml">0.00</td>
                            <td className="text-end">20000.00</td>
                        </tr>
                        <tr className="total">
                            <td className="text-bold">Total</td>
                            <td></td>
                            <td className="text-bold gst-ml">31.43</td>
                            <td className="text-bold gst-ml">4.40</td>
                            <td className="text-bold gst-ml">4.40</td>
                            <td className="text-bold gst-ml">3.77</td>
                            <td className="text-bold text-end">44.00</td>
                        </tr>
                    </table>
                    <div className="bill-amounts">
                        <div className="text-bold">
                            Payable Amount
                        </div>
                        <div className="text-bold">
                            20800.00
                        </div>
                    </div>
                    <div className="bill-amounts">
                        <div className="text-bold">
                            Cash Payment
                        </div>
                        <div className="text-bold">
                            20800.00
                        </div>
                    </div>
                    <div className="bill-amounts">
                        <div className="text-bold">
                            Cust Paid
                        </div>
                        <div className="text-bold">
                            21000.00
                        </div>
                    </div>
                    <div className="bill-amounts">
                        <div className="text-bold">
                            Change Return
                        </div>
                        <div className="text-bold">
                            20.00
                        </div>
                    </div>
                    <div className="invoice-note">
                        <div className="note-msg">
                            Note: This is a computer generated
                            invoice hence signature not required.
                        </div>
                        <div className="text-end">
                            <img src={barCodeImg} alt="productBarCode" className="barcode-img" />
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={printInvoice}>Print Invoice</button>
            <style>
                {`
                    .invoice {
                        font-family: 'VCR OSD Mono';
                        color: #000;
                        text-align:center;
                        display: flex;
                        justify-content: center;
                        font-size: 10px;
                    }
                    .invoice .brand{
                        font-size: 18px;
                        font-weight: bold;
                        text-decoration: underline;
                    }
                    .invoice .bill-details{
                        margin-top:8px;
                    }
                    .invoice .bill{
                        width: 300px;
                        box-shadow: 0 0 3px #aaa;
                        padding: 10px 10px;
                        box-sizing: border-box;
                    }
                    .invoice .bill-tax-head{
                        font-weight:700;
                        font-size:14px;
                        margin-top:5px;
                    }
                    .invoice .bill-to-head{
                        text-align: left;
                        font-weight: 600;
                    }
                    .invoice .text-bold{
                        font-weight:800;
                    }
                    .invoice .flex {
                        display: flex;
                    }
                    .invoice .justify-between {
                        justify-content: space-between;
                    }
                    .invoice .table{
                        border-collapse: collapse;
                        width: 100%;
                    }
                    .invoice .gst-table{
                        margin-top: 15px;
                    }
                    .invoice .table .header{
                        border-top: 1px solid #000;
                        border-bottom: 1px solid #000;
                    }
                    .invoice .table {
                        text-align: left;
                    }
                    .invoice .inv-mb-5{
                        margin-bottom: 5px;
                    }
                    .invoice .table .total td {
                        border-top: 1px solid #000;
                        border-bottom: 1px solid #000;
                    }
                    .invoice .table .net-amount td:first-of-type {
                        border-top: none;
                    }
                    .invoice td { 
                        padding-bottom: 3px;
                    }
                    .invoice .bill-amounts{
                        display: flex;
                        justify-content: space-between;
                        margin-left: 140px;
                        margin-top: 3px;
                    }
                    .invoice .text-end{
                        text-align: end;
                    }
                    .invoice .gst-ml{
                        padding-left: 12px;
                    }
                    .invoice .invoice-note{
                        display:flex;
                        justify-content: space-between;
                        margin-top:8px;
                    }
                    .invoice .note-msg{
                        text-align: justify;
                        max-width: 40%;
                    }
                    .invoice .barcode-img{
                        max-width:70%;
                    }
                `}
            </style>
        </div>
    );
};

export default Invoice;