import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getRecordsFromLS, deleteRecord } from "../helpers/localStorage";

export default function RecordItem({ record, setRecords }) {
  const navigate = useNavigate();

  const { id, name, remarks } = record;

  const removeRecord = () => {
    deleteRecord(id);
    setRecords(getRecordsFromLS());
  };

  return (
    <ul className="flex w-full justify-center bg-gray-200/50 px-3 py-2 border-y border-stone-300">
      <div className="md:w-full lg:w-2/3 flex justify-between gap-12">
        <div className="flex gap-x-4">
          <div>
            <img
              src="/picture.jpeg"
              alt="image"
              className="w-16 h-16 rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <li className="text-sm uppercase font-light text-slate-700">
              {name}
            </li>
            <li className="">{remarks}</li>
          </div>
        </div>
        <div className="flex gap-x-3 items-center justify-center">
          <button onClick={() => navigate(`/edit-record/${id}`)}>
            <FaEdit />
          </button>
          <button onClick={() => removeRecord()}>
            <FaTrash />
          </button>
          <button
            onClick={() => navigate(`/record/${id}`)}
            className="bg-slate-700 text-white font-semibold px-4 py-1 rounded-md shadow-md hover:-translate-y-0.5 duration-100"
          >
            View
          </button>
        </div>
      </div>
    </ul>
  );
}
