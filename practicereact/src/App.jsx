import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./Layout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Company from "./components/Company/Company";
import Charging from "./components/Charging/Charging";
import Sustainability from "./components/Sustainability/Sustainability";
import Resources from "./components/Resources/Resources";
import News from "./components/News/News";
import About from "./components/About/About";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="company" element={<Company />} />
        <Route path="charging" element={<Charging />} />
        <Route path="sustainability" element={<Sustainability />} />
        <Route path="resources" element={<Resources />} />
        <Route path="news" element={<News />} />
        <Route path="about" element={<About />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
