import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useForm } from "../helpers/useForm";
import { addRecord, getRecordById, editRecord } from "../helpers/localStorage";

export default function RecordForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [mediaPreview, setMediaPreview] = useState("");

  const [thumbnail, setThumbnail] = useState("");

  const { inputValues, resetForm, handleInputChange, setForm } = useForm({
    name: "",
    picture: "",
    address: "",
    IdNo: "",
    sex: "",
    height: "",
    weight: "",
    crimeCode: "",
    lga: "",
    complexion: "",
    occupation: "",
    stateOfOrigin: "",
    arrestDate: "",
    arrestTime: "",
    dateConvicted: "",
    remarks: "",
    officersInCharge: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    id ? editRecord(id, inputValues) : addRecord(inputValues);
    resetForm();
  };

  useEffect(() => {
    if (id) {
      const record = getRecordById(id);
      setForm(record);
    }
  }, [id]);

  return (
    <div className="mb-12">
      <div className="flex flex-col gap-y-2">
        <button
          onClick={() => navigate("/all-records")}
          className="hover:-translate-y-0.5 duration-100 bg-slate-200 rounded-full p-3 w-10"
        >
          <FaArrowLeft />
        </button>
        <h1 className="text-xl font-bold self-center">
          {id ? "Edit" : "Create"} Record
        </h1>
      </div>

      {/* form */}
      <div className="form-container mt-3">
        <form
          autoComplete="off"
          className=" border border-slate-300 px-4 py-4 rounded-md flex flex-col justify-center bg-stone-100 items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col w-full mb-3">
            <label>Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={inputValues?.name}
              onChange={handleInputChange}
              className="bg-white/90 border border-slate-400 rounded-sm px-1"
              required
            ></input>
          </div>
          <div className="space-y-4 w-full mb-4">
            <h3 className="font-">Criminal's Picture</h3>

            <div className="max-h-[300px] overflow-hidden w-full">
              <label
                className="h-[220px] w-[200px] cursor-pointer overflow-hidden rounded-2xl"
                htmlFor="picture"
              >
                {!mediaPreview ? (
                  <div className="mx-auto rounded-2xl bg-slate-200 py-16 text-center">
                    <p className="mt-5 text-slate-400">Add criminals picture</p>
                  </div>
                ) : (
                  <img
                    className="w-full object-cover object-center"
                    src={mediaPreview}
                  />
                )}
              </label>
              <input
                name="picture"
                id="picture"
                onChange={(e) => {
                  e.target.files && setThumbnail(e.target.files[0]);
                  setMediaPreview(
                    e.target.files ? URL.createObjectURL(e.target.files[0]) : ""
                  );
                }}
                className="hidden"
                type="file"
              />
            </div>
          </div>
          <div className="flex flex-col w-full mb-3">
            <label>Address</label>
            <input
              id="address"
              name="address"
              type="text"
              value={inputValues?.address}
              onChange={handleInputChange}
              className="bg-white/90 border border-slate-400 rounded-sm px-1"
              required
            ></input>
          </div>
          <div className="flex flex-col w-full mb-3">
            <label>Identification Number</label>
            <input
              id="IdNo"
              name="IdNo"
              type="number"
              value={inputValues?.IdNo}
              onChange={handleInputChange}
              className="bg-white/90 border border-slate-400 rounded-sm px-1"
              required
            ></input>
          </div>
          <div className="flex flex-col w-full mb-3">
            <label>Sex</label>
            <input
              id="sex"
              name="sex"
              type="text"
              value={inputValues?.sex}
              onChange={handleInputChange}
              className="bg-white/90 border border-slate-400 rounded-sm px-1"
              required
            ></input>
          </div>
          <div className="flex flex-col w-full mb-3">
            <label>Height</label>
            <input
              id="height"
              name="height"
              type="number"
              value={inputValues?.height}
              onChange={handleInputChange}
              className="bg-white/90 border border-slate-400 rounded-sm px-1"
              required
            ></input>
          </div>
          <div className="flex flex-col w-full mb-3">
            <label>Weight</label>
            <input
              id="weight"
              name="weight"
              type="number"
              value={inputValues?.weight}
              onChange={handleInputChange}
              className="bg-white/90 border border-slate-400 rounded-sm px-1"
              required
            ></input>
          </div>
          <div className="flex flex-col w-full mb-3">
            <label>Crime Code</label>
            <input
              id="crimeCode"
              name="crimeCode"
              type="number"
              value={inputValues?.crimeCode}
              onChange={handleInputChange}
              className="bg-white/90 border border-slate-400 rounded-sm px-1"
              required
            ></input>
          </div>
          <div className="flex flex-col w-full mb-3">
            <label>LGA</label>
            <input
              id="lga"
              name="lga"
              type="text"
              value={inputValues?.lga}
              onChange={handleInputChange}
              className="bg-white/90 border border-slate-400 rounded-sm px-1"
              required
            ></input>
          </div>
          <div className="flex flex-col w-full mb-3">
            <label>Complexion</label>
            <input
              id="complexion"
              name="complexion"
              type="text"
              value={inputValues?.complexion}
              onChange={handleInputChange}
              className="bg-white/90 border border-slate-400 rounded-sm px-1"
              required
            ></input>
          </div>
          <div className="flex flex-col w-full mb-3">
            <label>Occupation</label>
            <input
              id="occupation"
              name="occupation"
              type="text"
              value={inputValues?.occupation}
              onChange={handleInputChange}
              className="bg-white/90 border border-slate-400 rounded-sm px-1"
              required
            ></input>
          </div>
          <div className="flex flex-col w-full mb-3">
            <label>State Of Origin</label>
            <input
              id="stateOfOrigin"
              name="stateOfOrigin"
              type="text"
              value={inputValues?.stateOfOrigin}
              onChange={handleInputChange}
              className="bg-white/90 border border-slate-400 rounded-sm px-1"
              required
            ></input>
          </div>
          <div className="flex flex-col w-full mb-3">
            <label>Arrest Date</label>
            <input
              id="arrestDate"
              name="arrestDate"
              type="text"
              value={inputValues?.arrestDate}
              onChange={handleInputChange}
              className="bg-white/90 border border-slate-400 rounded-sm px-1"
              required
            ></input>
          </div>{" "}
          <div className="flex flex-col w-full mb-3">
            <label>Arrest Time</label>
            <input
              id="arrestTime"
              name="arrestTime"
              type="text"
              value={inputValues?.arrestTime}
              onChange={handleInputChange}
              className="bg-white/90 border border-slate-400 rounded-sm px-1"
              required
            ></input>
          </div>
          <div className="flex flex-col w-full mb-3">
            <label>Date Convicted</label>
            <input
              id="dateConvicted"
              name="dateConvicted"
              type="text"
              value={inputValues?.dateConvicted}
              onChange={handleInputChange}
              className="bg-white/90 border border-slate-400 rounded-sm px-1"
              required
            ></input>
          </div>
          <div className="flex flex-col mb-3">
            <label>Remarks</label>
            <textarea
              id="remarks"
              name="remarks"
              value={inputValues?.remarks}
              onChange={handleInputChange}
              className="bg-white/90 border border-slate-400 rounded-sm px-1"
              rows={4}
              cols={40}
            />
          </div>
          <div className="flex flex-col w-full mb-3">
            <label>Officers in Charge</label>
            <input
              id="officersInCharge"
              name="officersInCharge"
              type="text"
              value={inputValues?.officersInCharge}
              onChange={handleInputChange}
              className="bg-white/90 border border-slate-400 rounded-sm px-1"
              required
            ></input>
          </div>
          <br></br>
          <button
            type="submit"
            className="bg-slate-800 text-white font-bold px-4 py-1 mt-6 rounded-md shadow-md hover:-translate-y-0.5 duration-100"
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
}
