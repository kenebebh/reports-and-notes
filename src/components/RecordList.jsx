import React, {
  useState,
  useEffect,
  ReactEventHandler,
  FormEvent,
} from "react";
import { useNavigate } from "react-router-dom";
import { getRecordsFromLS } from "../helpers/localStorage";
import RecordItem from "./RecordItem";

export default function RecordList() {
  const navigate = useNavigate();

  const [records, setRecords] = useState([]);

  // delete record from LS
  const deleteItem = (id) => {
    const filteredRecords = records.filter((element, index) => {
      return element.id !== id;
    });
    setRecords(filteredRecords);
  };

  // edit record from LS
  const editItem = () => {
    console.log("click edit");
  };

  // saving data to local storage
  useEffect(() => {
    setRecords(getRecordsFromLS());
  }, []);

  return (
    <div className="flex flex-col items-center pt-4 pb-6 gap-y-6 min-w-[800px]">
      <h1 className="text-xl font-bold underline mb-4">Records Page</h1>

      {records && records.length > 0 && (
        <div className="w-full">
          {records.map((record) => (
            <RecordItem
              record={record}
              key={record.id}
              setRecords={setRecords}
            />
          ))}
        </div>
      )}
      {records.length < 1 && <div>No records added yet</div>}

      <div className="self-end mt-6">
        <button className="bg-slate-800 text-blue-200 font-bold px-4 py-1 rounded-md shadow-md hover:-translate-y-0.5 duration-100">
          <button onClick={() => navigate("/create-record")}>
            Add New Record
          </button>
        </button>
      </div>
    </div>
  );
}
