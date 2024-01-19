import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getRecordsFromLS, deleteRecord } from "../helpers/localStorage";

export default function RecordItem({ record, setRecords }) {
  const navigate = useNavigate();

  const { id, title, recordText } = record;

  const removeRecord = () => {
    deleteRecord(id);
    setRecords(getRecordsFromLS());
  };

  return (
    <ul className="flex w-full justify-center bg-gray-200/50 px-3 py-2 border-y border-stone-300">
      <div className="md:w-full lg:w-2/3 flex justify-between gap-12">
        <div className="flex flex-col">
          <li className="text-sm uppercase font-light text-slate-700">
            {title}
          </li>
          <li className="">{recordText}</li>
        </div>
        <div className="flex gap-x-3">
          <button onClick={() => navigate(`/edit-record/${id}`)}>
            <FaEdit />
          </button>
          <button onClick={() => removeRecord()}>
            <FaTrash />
          </button>
        </div>
      </div>
    </ul>
  );
}
