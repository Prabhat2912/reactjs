import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../features/Slice";
function DataForm() {
  const [cData, setCdata] = useState("");
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addData(cData));
    setCdata("");
  };

  return (
    <div className="p-4 shadow-md flex items-center justify-center w-full bg-green-300 h-[500px]   ">
      <form onSubmit={handleAdd} className="flex flex-row flex-wrap gap-x-3">
        <input
          type="text"
          className="px-5 py-2  w-[450px] bg-gray-100 rounded-md shadow-md "
          placeholder="Add Data.."
          onChange={(e) => setCdata(e.target.value)}
          value={cData}
        />
        <button
          type="submit"
          className="bg-orange-700 m-1 text-white border-green-700 border font-semibold hover:bg-white hover:text-orange-700 px-5 py-2 rounded-lg text-center shadow-md "
          style={{
            transition: "background-color 0.3s ease-in-out",

            transition: "color 0.2s ease-in-out",
          }}
        >
          Add Data
        </button>
      </form>
    </div>
  );
}

export default DataForm;
