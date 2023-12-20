import React from "react";
import Header from "./components/Header/Header";

import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Support from "./components/Support/Support";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Support />
      <Footer />
    </>
  );
}

export default Layout;
