import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="w-full absolute h-16 bg-blue-400 flex justify-between items-center px-6">
      <div>
        <h2 className="text-white font-bold text-lg">Criminal App</h2>
      </div>
      <div>
        <button
          className="px-2 py-1 text-lg text-white/90 font-bold hover:underline"
          onClick={() => navigate("/all-records")}
        >
          Go to Records
        </button>
        <button
          className="px-2 py-1 text-lg text-white/90 font-bold hover:underline"
          onClick={() => navigate("/all-reports")}
        >
          Go to Reports
        </button>
      </div>
    </nav>
  );
}
