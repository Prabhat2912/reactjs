import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import DataForm from "./Components/Datai/DataForm";
import ViewData from "./Components/Datai/ViewData";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<DataForm />} />
        <Route path="/view" element={<ViewData />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
