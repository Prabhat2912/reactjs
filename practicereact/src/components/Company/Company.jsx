import React, { useState } from "react";
import { CompanyProvider, useCompany } from "../../Context/Info";

function YourComponent() {
  const { companyData, addCompany, updateCompany, deleteCompany } =
    useCompany();
  const [name, setName] = useState("");
  const [turnover, setTurnover] = useState(0);

  const handleAdd = () => {
    addCompany(name, turnover);
    setName("");
    setTurnover(0);
  };

  const handleUpdate = (id) => {
    updateCompany(id, "Updated Name", 9999);
  };

  const handleDelete = (id) => {
    deleteCompany(id);
  };

  return (
    <div className="flex flex-col ">
      <div className=" flex flex-col flex-wrap gap-y-4 p-2 justify-center items-center ">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Company Name"
          />
        </div>
        <div>
          {" "}
          <input
            type="number"
            value={turnover}
            onChange={(e) => setTurnover(e.target.value)}
            placeholder="Turnover"
          />
        </div>
        <div>
          <button
            onClick={handleAdd}
            className="rounded-md p-3"
            style={{ transition: "background-color,1s,ease-in-out" }}
          >
            Add Company
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        {" "}
        <h1>Company List</h1>
        <ul className="bg-orange-500 rounded-md p-2 border-2">
          {companyData.map((company) => (
            <li key={company.id} className=" bg-green-400 rounded-md p-2 m-1">
              {company.name} - Turnover: {company.turnover}
              <button
                onClick={() => handleUpdate(company.id)}
                className="m-1 p-2"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(company.id)}
                className="p-2 m-1"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Company() {
  return (
    <CompanyProvider>
      <YourComponent />
    </CompanyProvider>
  );
}
export default Company;
