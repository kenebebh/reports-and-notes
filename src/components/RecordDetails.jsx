import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRecordById } from "../helpers/localStorage";

export default function RecordDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [record, setRecord] = useState(null);

  useEffect(() => {
    const fetchRecord = async () => {
      if (id) {
        const fetchedRecord = await getRecordById(id);
        setRecord(fetchedRecord);
      }
    };

    fetchRecord();
  }, [id]);

  if (!record) {
    // Add loading indicator or other fallback UI here
    return null;
  }

  return (
    <div className="mb-20">
      <h2 className="text-lg font-semibold mb-4">Record Details</h2>
      <div className="flex justify-center items-center mb-6">
        <img
          src="/picture.jpeg"
          alt="image"
          className="w-32 h-32 rounded-full"
        />
      </div>
      {record && Object.keys(record).length > 0 && (
        <table className="table-auto w-full border border-gray-300 p-4">
          <tbody>
            {Object.entries(record).map(([label, value]) => (
              <tr key={label} className="border-b border-gray-300">
                <td className="p-2 border-r border-gray-300">{label}</td>
                <td className="p-2">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="self-end mt-6">
        <button
          className="bg-slate-800 text-blue-200 font-bold px-4 py-1 rounded-md shadow-md hover:-translate-y-0.5 duration-100"
          onClick={() => navigate("/all-records")}
        >
          Back to Records
        </button>
      </div>
    </div>
  );
}
