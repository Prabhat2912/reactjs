import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
function Header() {
  return (
    <header className={`sticky z-50 top-0 border-2 shadow-md }`}>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex  items-center">
            <img
              src="/public/logo.png"
              alt="logo"
              width={100}
              className="rounded-md"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
              style={{ transition: "background-color 0.3s ease-in-out" }}
            >
              Hello
            </Link>
            <Link
              to="#"
              className=" bg-black/80 border-black/80 border-[1px] text-white hover:bg-white hover:text-black/80  focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
              style={{
                transition: "background-color 0.3s ease-in-out",
              }}
            >
              Login
            </Link>
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 text-base"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 transition-colors">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                  }
                  style={{
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/view"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                  style={{
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                  View Data
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
