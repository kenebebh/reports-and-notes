import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getReportsFromLS = () => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    const data = localStorage.getItem("reports");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }
};

export const addReport = (newReport) => {
  let allReports = getReportsFromLS();
  allReports.push({ id: new Date().getTime().toString(), ...newReport });
  localStorage["reports"] = JSON.stringify(allReports);
  toast("Report Successfully Added");
};

export const getReportById = (id) => {
  const allReports = getReportsFromLS();
  const reportToEdit = allReports.find((report) => report.id === id);
  return reportToEdit;
};

export const editReport = (id, newReport) => {
  let allReports = getReportsFromLS();
  allReports = allReports.filter((report) => report.id !== id);
  allReports.push(newReport);
  localStorage["reports"] = JSON.stringify(allReports);
  toast("Report Successfully Edited");
};

export const deleteReport = (id) => {
  let allReports = getReportsFromLS();
  allReports = allReports.filter((report) => report.id !== id);
  localStorage["reports"] = JSON.stringify(allReports);
  toast("Report Successfully Deleted");
};

export const getRecordsFromLS = () => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    const data = localStorage.getItem("records");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }
};

export const addRecord = (newRecord) => {
  let allRecords = getRecordsFromLS();
  allRecords.push({ id: new Date().getTime().toString(), ...newRecord });
  localStorage["records"] = JSON.stringify(allRecords);
  toast("Record Successfully Added");
  // console.log(newRecord);
};

export const getRecordById = (id) => {
  const allRecords = getRecordsFromLS();
  const recordToEdit = allRecords.find((record) => record.id === id);
  return recordToEdit;
};

export const editRecord = (id, newRecord) => {
  let allRecords = getRecordsFromLS();
  allRecords = allRecords.filter((record) => record.id !== id);
  allRecords.push(newRecord);
  localStorage["records"] = JSON.stringify(allRecords);
  toast("Record Successfully Edited");
};

export const deleteRecord = (id) => {
  let allRecords = getRecordsFromLS();
  allRecords = allRecords.filter((record) => record.id !== id);
  localStorage["records"] = JSON.stringify(allRecords);
  toast("Record Successfully Deleted");
};

// export const findRecord = (id) => {
//   let allRecords = getRecordsFromLS();
//   searchedRecords = allRecords.filter((record) => record.id === id);
//   return searchedRecords
// }
