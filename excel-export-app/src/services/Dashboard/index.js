import APIrequest from "../axios";

export const userlogin = (payload) => {
  return APIrequest("v1/sopos/Login/posLogin", payload, "POST");
};

export const getAllCocoNameUserWise = async (payload) => {
  const res = await APIrequest(
    "v1/sopos/NewTransfer/getAllCOCONameUserWise",
    payload,
    "POST"
  );
  return res?.data;
};

export const getLoadAllStoreDocket = async (payload) => {
  const res = await APIrequest(
    "v1/sopos/NewTransfer/getLoadAllStoreDocket",
    payload,
    "POST"
  );
  return res?.data;
};

export const getVehicleNumber = async (payload) => {
  const res = await APIrequest(
    "v1/sopos/NewTransfer/getAllVehiclesNumberUserWise",
    payload,
    "POST"
  );
  return res?.data;
};

export const getAllInterCocoIndent = async (payload) => {
  const res = await APIrequest(
    "v1/sopos/NewTransfer/getAllInterCocoIndent",
    payload,
    "POST"
  );
  return res?.data;
};

export const getAllInterCocoIndentDetails = async (payload) => {
  const res = await APIrequest(
    "v1/sopos/NewTransfer/getAllInterCocoIndentDetailes",
    payload,
    "POST"
  );
  return res?.data;
};

export const getCocoListFromAndTo = async (payload) => {
  const res = await APIrequest(
    "v1/sopos/NewTransfer/getCocoListFromAndTo",
    payload,
    "POST"
  );
  return res?.data;
}