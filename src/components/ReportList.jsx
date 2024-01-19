import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getReportsFromLS } from "../helpers/localStorage";
import ReportItem from "./ReportItem";

export default function ReportList() {
  const navigate = useNavigate();

  const [reports, setReports] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // saving data to local storage
  useEffect(() => {
    setReports(getReportsFromLS());
  }, []);

  // Filter reports based on the search query
  const filteredReports = reports.filter((report) => {
    // Check if the search query matches the report title
    return report.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="flex flex-col items-center pt-4 pb-6 gap-y-6 min-w-[800px]">
      <h1 className="text-xl font-bold underline mb-4">Reports Page</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search reports by title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded-md"
      />

      {filteredReports.length > 0 ? (
        <div className="w-full">
          {filteredReports.map((report) => (
            <ReportItem
              report={report}
              key={report.id}
              setReports={setReports}
            />
          ))}
        </div>
      ) : (
        <div>No matching reports found</div>
      )}

      <div className="self-end mt-6">
        <button className="bg-slate-800 text-blue-200 font-bold px-4 py-1 rounded-md shadow-md hover:-translate-y-0.5 duration-100">
          <button onClick={() => navigate("/create-report")}>
            Add New Report
          </button>
        </button>
      </div>
    </div>
  );
}
