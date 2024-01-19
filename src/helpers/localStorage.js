import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
