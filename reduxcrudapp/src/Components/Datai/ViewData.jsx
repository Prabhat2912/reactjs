import React, { useState } from "react";
import { updateData, deleteData, getData } from "../../features/Slice";
import { useDispatch, useSelector } from "react-redux";

function ViewData() {
  const dispatch = useDispatch();
  const [isDataVisible, setIsDataVisible] = useState(false);
  const crudD = useSelector((state) => state.datas);
  const [getData, setGetData] = useState("");
  const [isclicked, setIsClicked] = useState(false);
  const [ID, setID] = useState("");
  const handleShowData = () => {
    setIsDataVisible((prev) => !prev);
  };

  const handleGetData = (id) => {
    const data = dispatch(getData(id));
    setGetData(data);
    setID("");
  };

  return (
    <div className="bg-green-300 min-h-[550px] flex flex-col justify-start p-4 items-center ">
      <button
        onClick={handleShowData}
        className={`${
          !isDataVisible ? "bg-orange-300" : "bg-gray-300"
        } p-3 text-center rounded-2xl w-[100px] shadow-lg`}
        style={{ transition: "background-color 0.3s ease-in-out" }}
      >
        {isDataVisible ? "Hide Data" : "Show Data"}
      </button>
      {isDataVisible && crudD.map((c) => <Data key={c.id} data={c} />)}
    </div>
  );
}

export default ViewData;

function Data({ data }) {
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);
  const [dataT, setDataT] = useState(data.text);

  const handleUpdate = () => {
    dispatch(updateData({ id: data.id, text: dataT }));
    setIsEditable(false);
  };

  const handleDelete = () => {
    dispatch(deleteData(data.id));
  };

  return (
    <div className=" bg-transparent p-x-1 flex justify-center items-center flex-row gap-x-2 py-3">
      <div className="flex flex-row bg-orange-300 rounded-xl shadow-md items-center">
        <div className=" p-1 flex flex-row gap-x-2  ">
          <input
            className={`${
              isEditable ? "bg-orange-500" : "bg-transparent"
            } p-2 m-2 outline-none rounded-xl`}
            defaultValue={data.text}
            value={dataT}
            onChange={(e) => setDataT(e.target.value)}
            readOnly={!isEditable}
          />
        </div>
        <div>
          <button
            onClick={() => {
              if (!isEditable) {
                setIsEditable(true);
              } else {
                handleUpdate();
              }
            }}
            className="p-2 m-2 bg-violet-800 text-white rounded-md"
          >
            Update
          </button>
        </div>
        <div>
          <button
            onClick={handleDelete}
            className="p-2 m-2 bg-violet-800 text-white rounded-md"
          >
            Delete
          </button>
        </div>
      </div>{" "}
    </div>
  );
}
