import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      action=""
      className=" border border-slate-500 p-12 rounded-sm flex flex-col justify-center items-center"
    >
      <div className="flex flex-col w-full mb-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="bg-transparent border border-slate-400 rounded-sm px-1"
          value={email}
          placeholder="Please enter admin Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col w-full mb-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="bg-transparent border border-slate-400 rounded-sm px-1"
          placeholder="Enter Password"
        />
      </div>
      <button
        className="bg-blue-400 text-white uppercase font-semibold px-2 py-1 mt-12 rounded-sm shadow-sm hover:-translate-y-0.5 duration-100"
        onClick={() => navigate("/home")}
      >
        Login
      </button>
    </form>
  );
}
