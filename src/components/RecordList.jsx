import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getRecordsFromLS } from "../helpers/localStorage";
import RecordItem from "./RecordItem";

export default function RecordList() {
  const navigate = useNavigate();

  const [records, setRecords] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // saving data to local storage
  useEffect(() => {
    setRecords(getRecordsFromLS());
  }, []);

  // Filter records based on the search query
  const filteredRecords = records.filter((record) => {
    const searchFields = ["name", "IdNo", "crimeCode"];

    // Check if the search query matches any of the fields
    return searchFields.some((field) =>
      String(record[field]).toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="flex flex-col items-center pt-4 pb-6 gap-y-6 min-w-[800px]">
      <h1 className="text-xl font-bold underline mb-4">Records Page</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search records by Criminal Name, ID No, Crime Code..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded-md w-96"
      />

      {filteredRecords.length > 0 ? (
        <div className="w-full">
          {filteredRecords.map((record) => (
            <RecordItem
              record={record}
              key={record.id}
              setRecords={setRecords}
            />
          ))}
        </div>
      ) : (
        <div>No matching records found</div>
      )}

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
