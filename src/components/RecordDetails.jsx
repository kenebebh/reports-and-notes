import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRecordById } from "../helpers/localStorage";

export default function RecordDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [record, setRecord] = useState({});
  console.log(id);

  useEffect(() => {
    if (id) {
      const record = getRecordById(id);
      setRecord(record);
      console.log(record);
    }
  }, [id]);

  const {
    IdNo,
    OfficersInCharge,
    address,
    arrestDate,
    arrestTime,
    complexion,
    crimeCode,
    dateConvicted,
    height,
    lga,
    name,
    occupation,
    officersInCharge,
    picture,
    remarks,
    sex,
    stateOfOrigin,
    weight,
  } = record;

  const recordDetails = [
    { label: "ID No", value: IdNo },
    { label: "Officers In Charge", value: OfficersInCharge },
    { label: "Address", value: address },
    { label: "Arrest Date", value: arrestDate },
    { label: "Arrest Time", value: arrestTime },
    { label: "Complexion", value: complexion },
    { label: "Crime Code", value: crimeCode },
    { label: "Date Convicted", value: dateConvicted },
    { label: "Height", value: height },
    { label: "LGA", value: lga },
    { label: "Name", value: name },
    { label: "Occupation", value: occupation },
    { label: "Officers In Charge", value: officersInCharge },
    // Add more labels and values as needed
    { label: "Remarks", value: remarks },
    { label: "Sex", value: sex },
    { label: "State of Origin", value: stateOfOrigin },
    { label: "Weight", value: weight },
  ];
  return (
    <div className=" mb-20">
      <h2 className="text-lg font-semibold mb-4">Record Details</h2>
      <div className="flex justify-center items-center mb-6">
        <img
          src="/picture.jpeg"
          alt="image"
          className="w-32 h-32 rounded-full"
        />
      </div>
      <table className="table-auto w-full border border-gray-300 p-4">
        <tbody>
          {recordDetails.map(({ label, value }) => (
            <tr key={label} className="border-b border-gray-300">
              <td className="p-2 border-r border-gray-300">{label}</td>
              <td className="p-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="self-end mt-6">
        <button className="bg-slate-800 text-blue-200 font-bold px-4 py-1 rounded-md shadow-md hover:-translate-y-0.5 duration-100">
          <button onClick={() => navigate("/all-records")}>
            Back to Records
          </button>
        </button>
      </div>
    </div>
  );
}
