import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useForm } from "../helpers/useForm";
import { addReport, getReportById, editReport } from "../helpers/localStorage";

export default function ReportForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { inputValues, resetForm, handleInputChange, setForm } = useForm({
    title: "",
    reportText: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    id ? editReport(id, inputValues) : addReport(inputValues);
    resetForm();
  };

  useEffect(() => {
    if (id) {
      const report = getReportById(id);
      setForm(report);
    }
  }, [id]);

  return (
    <div className="">
      <div className="flex flex-col gap-y-2">
        <button
          onClick={() => navigate("/all-reports")}
          className="hover:-translate-y-0.5 duration-100 bg-slate-200 rounded-full p-3 w-10"
        >
          <FaArrowLeft />
        </button>
        <h1 className="text-xl font-bold self-center">
          {id ? "Edit" : "Create"} Report
        </h1>
      </div>

      {/* form */}
      <div className="form-container mt-3">
        <form
          autoComplete="off"
          className=" border border-slate-500 px-4 py-4 rounded-md flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col w-full mb-3">
            <label>Title</label>
            <input
              id="title"
              name="title"
              type="text"
              value={inputValues?.title}
              onChange={handleInputChange}
              className="bg-transparent border border-slate-400 rounded-sm px-1"
              required
            ></input>
          </div>
          <div className="flex flex-col">
            <label>Report Text</label>
            <textarea
              id="reportText"
              name="reportText"
              value={inputValues?.reportText}
              onChange={handleInputChange}
              className="bg-transparent border border-slate-400 rounded-sm px-1"
              rows={4}
              cols={40}
            />
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
