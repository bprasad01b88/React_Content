/* eslint-disable import/no-extraneous-dependencies */
import CryptoJS from "crypto-js";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import moment from "moment";
import config from "../config";
import logger from "./logger";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

let localeData = require("dayjs/plugin/localeData");
let utc = require("dayjs/plugin/utc");
let timezone = require("dayjs/plugin/timezone");

dayjs.extend(localeData);
dayjs.extend(utc);
dayjs.extend(timezone);

export const removeLocalStorageToken = (navigate) => {
  if (localStorage.getItem(`${config.NAME_KEY}:token`)) {
    localStorage.setItem(`${config.NAME_KEY}:token`, null);
  }
  if (navigate) {
    navigate("/");
  }
};
export const setLocalStorageToken = (token) => {
  localStorage.setItem(
    `${config.NAME_KEY}:token`,
    CryptoJS.AES.encrypt(token, `${config.NAME_KEY}-token`).toString()
  );
};

export const getLocalStorageToken = () => {
  const token = localStorage.getItem(`${config.NAME_KEY}:token`);
  if (token) {
    const bytes = CryptoJS.AES.decrypt(token, `${config.NAME_KEY}-token`);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
  return false;
};

export const getLocalStorageLanguage = () => {
  const language = localStorage.getItem(`${config.NAME_KEY}:language`);
  if (language) {
    return ["en", "hi"].includes(language) ? language : config.DEFAULT_LANGUAGE;
  }
  return config.DEFAULT_LANGUAGE;
};

export function decodeQueryData(data) {
  return JSON.parse(
    `{"${decodeURI(data)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
      .replace("?", "")}"}`
  );
}

export const navigateWithParam = (data, navigate, pathname) => {
  const searchParams = new URLSearchParams(data).toString();
  navigate(`${pathname}?${searchParams}`);
};

export function dateFormatter(params, format) {
  return params ? moment(params).format(format ?? config.DATE_FORMAT) : "-";
}
export function dateFormatterDayJs(params, format) {
  return params ? dayjs(params).format(format ?? config.DATE_FORMAT) : "";
}
// .tz(moment.tz.guess())
export function dayJsDateFormatter(params, format) {
  return params
    ? dayjs(params)
        .tz(dayjs.tz.guess())
        .format(format ?? config.DATE_FORMAT)
    : "";
}

export function momentDateFormatter(param, format) {
  return moment(param, format);
}

export const momentTimeFormatter = (param) => {
  return moment(param);
};

export const convertToMinutes = (hours, min = 0) => {
  let minutes = hours * 60;

  return minutes + min;
};

export const getTime = (startTime, endTime, minute) => {
  let arr = [];
  for (
    let time = momentTimeFormatter(startTime);
    time <= momentTimeFormatter(endTime);
    time
      // .add(minute === 0 ? convertToMinutes(hour) : minute, "minutes")
      .add(minute, "minutes")
      .format("HH:mm")
  ) {
    arr.push(dateFormatter(time, "HH:mm"));
  }
  return arr;
};

export const firstLetterCaps = (text) => {
  try {
    if (text) {
      const originalString = text.toLowerCase().split("");
      originalString[0] = originalString[0].toUpperCase();
      return originalString.join("");
    } else {
      return text;
    }
  } catch (error) {
    logger(error);
  }
};

export function readMoreTextShow(
  data,
  showMoreText,
  extraReadClass,
  count = 40
) {
  if ([undefined, null, false].includes(data)) {
    return <>-</>;
  }
  if (data?.length < count) {
    return <>{data}</>;
  }

  return (
    <p className="mb-0">
      {data.substring(0, count)}...
      {showMoreText ? (
        <Link
          to="/"
          onClick={(e) => {
            e.preventDefault();
            showMoreText({ data });
          }}
          className={`${extraReadClass}`}
        >
          <strong>Read More</strong>
          {/* {t("common.readMore")} */}
        </Link>
      ) : (
        ""
      )}
    </p>
  );
}

export function PhoneNumber({ countryCode, contactNumber }) {
  if (countryCode && contactNumber) {
    return <>{`${countryCode}-${contactNumber}`}</>;
  }
  return <span className="center">-</span>;
}

export function phoneRegex() {
  let regex =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  return regex;
}

export const removeSessionStorage = (keyName) => {
  if (sessionStorage.getItem(`${config.NAME_KEY}:${keyName}`)) {
    sessionStorage.setItem(`${config.NAME_KEY}:${keyName}`, "");
  }
};

export const phoneNumberField = (e) => {
  let ASCIICode = e.which ? e.which : e.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
    e.preventDefault();
  }
};

export const downloadPdf = (url) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = "Invoice.pdf";
  link.target = "_blank";
  link.click();
};

export const getPercentage = (value, percentage) => {
  return (value / 100) * percentage;
};

export const arrayDataToString = (data) => {
  let uniqueData = [...new Set(data)];
  let newData = "";
  if (uniqueData) {
    uniqueData?.map((item, key) => {
      return uniqueData?.length !== key + 1
        ? (newData += `${item}, `)
        : (newData += `${item}.`);
    });
  }
  return data ? newData : "-";
};

export const dateTimeFormatter = (date, format) => {
  return date ? moment(date).local().format(format) : "-";
};

export const showDateInBrowser = (data) => {
  try {
    return moment(data)
      .add(moment.duration(5.3, "hours"))
      .format("ddd, MMM D, YYYY hh:mm A");
  } catch (error) {
    return moment(data).format("DD/MM/YYYY hh:mm A");
  }
};
export const checkValidData = (data) => {
  return data || "-";
};
export const checkValidCount = (data) => {
  return <>{data || 0}</>;
};

export const checkValidPrice = (data) => {
  return (
    <>
      <sup>$</sup> {parseFloat(data || 0).toFixed(2)}
    </>
  );
};

export const checkValidAmount = (data) => {
  return <>₹ {parseFloat(data || 0).toFixed(2)}</>;
};

export function ImageElement({
  previewSource = "",
  source,
  alt = "image",
  ...rest
}) {
  let pattern = /^\//g;
  return (
    <>
      {previewSource ? (
        <img src={previewSource} alt={alt} {...rest} origin="anonymous" />
      ) : (
        <img
          src={`${config.IMAGE_URL}/${source?.replace(pattern, "")}`}
          alt={alt}
          {...rest}
        />
      )}
    </>
  );
}
export function commasFormatter(data) {
  return data.join(", ");
}

export const serialNumberFormatter = (page, sizePerPage, index) => {
  return (page - 1) * sizePerPage + index + 1;
};

export const linkFormatter = (name, link = "#", extraClassName = "") => {
  return (
    <Link className={`${extraClassName}`} to={link}>
      {name}
    </Link>
  );
};

export const nameFormatter = (firstName, lastName) => {
  return <>{firstName ? ` ${firstName} ${" "} ${lastName}` : "-"}</>;
};

export const textFormatter = (data) => {
  return data && data?.charAt(0)?.toUpperCase() + data.slice(1);
};

export const getMonths = () => {
  return dayjs.months();
};

export const getDateOfMonth = (month, year) => {
  return Array.from(
    { length: dayjs(`${year}-${month}-01`).daysInMonth() },
    (_, i) => i + 1
  );
};

export const disableStartDateFutureDays = (
  current,
  values,
  dateFormat,
  initialValues
) => {
  let date;
  const end = momentDateFormatter(values.endDate, dateFormat);
  if (values.endDate === "") {
    date = !current.isBefore(moment());
  } else if (initialValues?.startDate || values.startDate === "") {
    date = !(current.isBefore(moment()) && end.isAfter(current));
  } else {
    date = !(current.isBefore(moment()) && end.add(1, "day").isAfter(current));
  }

  return date;
};

export const disableEndDateFutureDays = (current, dateFormat, fromDate) => {
  let date;
  let start;
  if (fromDate === "") {
    start = momentDateFormatter(new Date(), dateFormat);
    // date = !start.isSameOrBefore(current);
  } else {
    start = momentDateFormatter(fromDate, dateFormat);
  }
  date = !(current.isSameOrAfter(start) && current.isSameOrBefore(moment()));
  return date;
};

export function dayJsFormatFormatter(params, format) {
  return dayjs(params, format);
}

export const getFullName = (first, middle, last) => {
  try {
    let name = firstLetterCaps(first);
    if (!name) {
      return "";
    }
    if (middle) {
      name += ` ${firstLetterCaps(middle)}`;
    }
    if (last) {
      name += ` ${firstLetterCaps(last)}`;
    }
    return name;
  } catch (error) {
    logger(error);
  }
};

export function dayJsFormatter(params) {
  return dayjs(params);
}
export function enterOnlyNumericValue(e) {
  const ASCIICode = e.which ? e.which : e.keyCode;
  const keyCode = e.charCode;
  if (
    (ASCIICode > 31 && ASCIICode > 57) ||
    keyCode === 43 ||
    keyCode === 42 ||
    keyCode === 45 ||
    keyCode === 47 ||
    keyCode === 33 ||
    keyCode === 35 ||
    keyCode === 36 ||
    keyCode === 37 ||
    keyCode === 38 ||
    keyCode === 44 ||
    keyCode === 40 ||
    keyCode === 41 ||
    keyCode === 39 ||
    keyCode === 34 ||
    keyCode === 32
    // ||
    // keyCode === 46
  ) {
    e.preventDefault();
  }
}

export const enterOnlyDecimalValue = (e) => {
  const { key, target } = e;
  const currentValue = target.value;
  console.log("key", key);

  if (
    !/^\d$/.test(key) &&
    key !== "." &&
    key !== "Backspace" &&
    key !== "Delete" &&
    key !== "ArrowLeft" &&
    key !== "ArrowRight" &&
    key !== "Tab" &&
    key !== "Enter"
  ) {
    e.preventDefault();
  }
  if (key === "." && currentValue.includes(".")) {
    e.preventDefault();
  }
};

export const SubHeader = ({ headerTitle, subheaderHead }) => {
  return (
    <>
      <div className={subheaderHead}>
        <h6 className="subheader-title m-0">{headerTitle}</h6>
      </div>
    </>
  );
};

export const handlePrint = (divId, setBillingModal = false) => {
  let printContents = document.getElementById(divId)?.innerHTML;

  if (printContents !== null) {
    var winPrint = window.open(
      "",
      "_blank",
      "left=0,top=0,width=1000,height=800,toolbar=0,scrollbars=0,status=0"
    );
    if (winPrint) {
      winPrint.document.write(
        "<html><head><style>@media print{body{-webkit-print-color-adjust: exact!important;print-color-adjust:exact !important;}}.invoice{font-family: Roboto, sans-serif; color: #000;  text-align:center; display: flex;justify-content: center; font-size: 10px;}.brand{font-family: Roboto, sans-serif;font-size: 26px; font-weight: bold;  text-decoration: underline; text-align: center;}.address{font-family: Roboto, sans-serif;text-align:center;font-size:13.5px;font-weight:600;} .bill-details{margin-top:8px;}.bill{width: 400px;padding: 10px 10px;box-sizing: border-box;}.bill-tax-head{font-family: Roboto, sans-serif;font-weight:700;font-size:18px;margin-top:5px;text-align:center}.gst-text{font-family: Roboto, sans-serif;font-size:13px}.bill-to-head{font-family: Roboto, sans-serif;text-align: left;font-weight: 600;font-size:14px;}.inv-font-family{font-family: Roboto, sans-serif;}.text-bold{font-weight:800;} .text-bold-600{font-weight:600;} .flex{display: flex;}.justify-between {justify-content: space-between;} .table{border-collapse: collapse;width: 100%;} .gst-table{margin-top: 15px;} .table .header{font-family: Roboto, sans-serif;border-top: 1px solid #000;border-bottom: 1px solid #000;} .table {text-align: left;} .inv-mb-5{margin-bottom: 5px;} .table .total td {border-top: 1px solid #000;border-bottom: 1px solid #000;} .table .net-amount td:first-of-type {border-top: none;} td { padding-bottom: 3px;}.row-mb tr td{font-family: Roboto, sans-serif;font-size:13.5px;} .row-mb tr td:last-child{padding-right:10px;} .bill-amounts{display: flex;justify-content: space-between;margin-left: 140px;margin-top: 3px;} .payable-amt{margin-right:10px;} .text-end{text-align: end; flex:1;} .text-right{text-align : right} .gst-ml{padding-left: 8px;} .gst-total{padding-left:12px;} .invoice-note{display:flex;margin-top:15px; justify-content:space-between; align-items:flex-start;margin-bottom:15px;} .note-msg{font-family: Roboto, sans-serif;margin-top:10px;font-size:13px;} .barcode-img{margin-top : -30px; height: 140px; text-align:end; width:200px;}.payable-size{font-size:16px;}}</style>"
      );

      winPrint.document.write("</head><body>");
      winPrint.document.write(printContents);
      winPrint.document.write("</body></html>");
      winPrint.document.close();
      winPrint.focus();
      winPrint.print();
      winPrint.close();
      if (setBillingModal) {
        setBillingModal(false);
      }
    }
  }
};

export const handlePrintSticker = (divId, setBillingModal = false) => {
  let printContents = document.getElementById(divId)?.innerHTML;

  if (printContents !== null) {
    var winPrint = window.open(
      "",
      "_blank",
      "left=0,top=0,width=1000,height=800,toolbar=0,scrollbars=0,status=0"
    );
    if (winPrint) {
      winPrint.document.write(
        `<html><head><style>@media print {
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
              margin-top:5rem;
          }
        }
        .discountcard {
          font-family: Roboto, sans-serif;
          color: #000;
          text-align: center;
          display: flex;
          justify-content: center;
          font-size: 10px;
        
        }
        .pop-sticker-card {
          width: auto;
          min-width: 350px;
          max-width: 100%;
          border: 2px solid black;
          display: inline-block;
          overflow: hidden;
          text-align:center;
          transform:rotate(90deg);
          margin-bottom:11rem;
        }
        .px-3 {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .px-1 {
          padding-left: 0.25rem;
          padding-right: 0.25rem;
        }
        .my-1 {
          margin-bottom: 0.25rem;
          margin-top: 0.25rem;
        }
        .m-0 {
          margin: 0;
        }
        .ps-1 {
          padding-left: 0.25rem;
        }
        .pop-title {
          font-family: Roboto, sans-serif;
          font-size: 20px;
          font-weight: 700;
          word-wrap: break-word;
          white-space: normal;
          max-width: 400px;
          text-align:center;
        }
        .pop-orp-title {
          font-size: 23px;
        }
        .pop-orpprice-cnt {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
          min-width: 0;
        }
        .pop-orpprice-cnt .pop-main-price {
          font-size: 100px;
          font-weight: 1000;
          flex-basis: content;
        }
        .pop-main-price {
          line-height: 140px;
        }
        .pop-stcker-title {
          border-bottom: 2px solid black;
        }
        .pop-mrpdiscount-cnt {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }
        .pop-discount-title {
          font-size: 26px;
          font-weight: 700;
        }
        .pop-mrp,
        .pop-rs {
          font-size: 20px;
          font-weight: 400;
        }
        .pop-mrp-amount {
          font-size: 20px;
          font-weight: 600;
        }
        .pop-table-container {
          max-width: 100%;
          overflow: auto;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        .pop-table-container .table-head th:before {
          height: 0 !important;
          width: 0 !important;
        }
        .pop-print-container {
          background-color: #fff;
          height: calc(100% - 115px);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .pop-buyone-title {
          font-size: 90px;
          font-weight: 900;
          line-height: 75px;
          font-family: serif;
        }
        .buyone-discount-title {
          font-size: 65px;
          font-weight: 1000;
          line-height: 65px;
        }
        .pop-title-buyone {
          line-height: 22px;
        }
        .pop-off-title {
          font-size: 45px;
          font-weight: 700;
          line-height: 45px;
        }
        .super-saver-title {
          background-color: black;
          color: white;
          font-size: 25px;
          font-weight: 500;
        }
        .pop-main-discount {
          line-height: 65px;
        }
        </style></head><body>`
      );

      winPrint.document.write(printContents);
      winPrint.document.write("</body></html>");
      winPrint.document.close();
      winPrint.focus();
      winPrint.print();
      winPrint.close();
      if (setBillingModal) {
        setBillingModal(false);
      }
    }
  }
};

export const handleSaleReturnInvoice = (divId) => {
  let printContents = document.getElementById(divId)?.innerHTML;

  if (printContents !== null) {
    var winPrint = window.open(
      "",
      "_blank",
      "left=0,top=0,width=1000,height=800,toolbar=0,scrollbars=0,status=0"
    );
    if (winPrint) {
      winPrint.document.write(
        "<html><head><style>@media print{body{-webkit-print-color-adjust: exact!important;print-color-adjust:exact !important;}}.salereturn-invoice{font-family: Roboto, sans-serif; color: #000;  text-align:center; display: flex;justify-content: center; font-size: 13.5px;}.bill{width: 400px;padding: 10px 10px;box-sizing: border-box;}.brand{font-family: Roboto, sans-serif;font-size: 24px; font-weight: bold;  text-decoration: underline; text-align: center;}.sub-brand{font-family: Roboto, sans-serif;font-size: 22px; font-weight: bold;  text-decoration: underline; text-align: center;}.address{font-family: Roboto, sans-serif;text-align:center;font-size:13.5px;font-weight:600;} .bill-details{margin-top:8px;}.flex{display: flex;}.justify-between {justify-content: space-between;} .gst-text{font-family: Roboto, sans-serif;font-size:13.5px}.bill-tax-head{font-family: Roboto, sans-serif;font-weight:700;font-size:18px;margin-top:5px;text-align:center}.inv-mb-5{margin-bottom: 5px;} .bill-to-head{font-family: Roboto, sans-serif;text-align: left;font-weight: 600;font-size:13.5px;}.table{border-collapse: collapse;width: 100%;} .table .header{font-family: Roboto, sans-serif;border-top: 1px solid #000;border-bottom: 1px solid #000;}.header th{font-size:13.5px} .row-mb tr td{font-family: Roboto, sans-serif;font-size:13.5px;} .row-mb tr th:last-child{padding-left:10px;} .row-mb tr td:last-child{padding-left:10px;}.white-space{white-space : nowrap;} .gst-ml{padding-left: 3px;} .veg-pl{padding-left : 8px;} .table .total td {border-top: 1px solid #000;border-bottom: 1px solid #000;} .text-bold-600{font-weight:600;} .bill-amounts{display: flex;justify-content: space-between;margin-left: 230px;margin-top: 3px;} .payable-size{font-size:13px;}.inv-font-family{font-family: Roboto, sans-serif;}.payable-amt{margin-right:10px;} .table {text-align: left;} .table .net-amount td:first-of-type {border-top: none;} td { padding-bottom: 3px;} .sr-mt-5{padding-top:8px;}.bill-bottom{margin-bottom:100px;}.mob-mt-2{margin-top:5px;} .justify-center{justify-content: center;} .border-bottom{border-bottom:1px solid #000;}}</style>"
      );

      winPrint.document.write("</head><body>");
      winPrint.document.write(printContents);
      winPrint.document.write("</body></html>");
      winPrint.document.close();
      winPrint.focus();
      winPrint.print();
      winPrint.close();
    }
  }
};

const getItem = (path, label, key, icon, children, withAuth) => {
  if (children) {
    return { label, key, icon, children, path, withAuth };
  }
  return { label, key, icon, path, withAuth };
};

export const getSideBarData = (arr) => {
  if (arr instanceof Array) {
    return arr.reduce((prev, item) => {
      if (item?.belongsToSidebar) {
        if (item.children instanceof Array) {
          const children = item.children.reduce(
            (prevElement, currentSubChild) => {
              if (currentSubChild?.belongsToSidebar) {
                prevElement.push(
                  getItem(
                    currentSubChild?.path,
                    currentSubChild?.name,
                    currentSubChild?.key,
                    currentSubChild?.icon,
                    ""
                  )
                );
              }
              return prevElement;
            },
            []
          );
          prev.push(
            getItem(item?.path, item?.name, item?.key, item?.icon, children)
          );
        } else {
          prev.push(getItem(item?.path, item?.name, item?.key, item?.icon));
        }
      }
      return prev;
    }, []);
  }
  return [];
};

// function for download / export excel file
export const exportToExcel = (data, fileName) => {
  // Create a new workbook
  const wb = XLSX.utils.book_new();

  // Convert data to worksheet
  const ws = XLSX.utils.json_to_sheet(data);

  // append the worksheet to the workbook
  XLSX.utils.book_append_sheet(wb, ws, fileName);

  // Generate the binary string for the excel file
  const wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });

  // Create a buffer from the binary string
  const buffer = new ArrayBuffer(wbout.length);
  const view = new Uint8Array(buffer);
  for (let i = 0; i < wbout.length; ++i) {
    view[i] = wbout.charCodeAt(i) & 0xff;
  }

  // Save the buffer as an excel file
  const blob = new Blob([buffer], { type: "application/octet-stream" });
  saveAs(blob, `${fileName}.xlsx`);
};
