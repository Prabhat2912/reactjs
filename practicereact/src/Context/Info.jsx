import React, { createContext, useContext, useState } from "react";

const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companyData, setCompanyData] = useState([]);

  const addCompany = (name, turnover) => {
    setCompanyData((prevData) => [
      ...prevData,
      { id: generateId(), name, turnover },
    ]);
  };

  const updateCompany = (id, name, turnover) => {
    setCompanyData((prevData) =>
      prevData.map((company) =>
        company.id === id ? { ...company, name, turnover } : company
      )
    );
  };

  const deleteCompany = (id) => {
    setCompanyData((prevData) =>
      prevData.filter((company) => company.id !== id)
    );
  };

  const generateId = () => {
    // Simple function to generate unique IDs (replace with your logic)
    return Math.floor(Math.random() * 1000);
  };

  return (
    <CompanyContext.Provider
      value={{ companyData, addCompany, updateCompany, deleteCompany }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompany = () => {
  return useContext(CompanyContext);
};
