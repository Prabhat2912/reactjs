import React, { useState } from "react";

import Card from "../Card/Card";
function Home() {
  return (
    <div className="flex flex-wrap flex-row gap-y-[35px] px-14 ">
      <div className="flex flex-wrap flex-row items-center w-full justify-center ">
        <div className="flex flex-wrap flex-col py-3 gap-y-7 w-full min-w-[364px] max-w-[50%] ">
          <h1 className="text-[60px]   font-[Gilroy, Arial, sans-serif] font-semibold ">
            Electricity for homes and businesses throughout the country
          </h1>
          <p className="text-[20px]">
            You can register to trade at any time. It is a simple and quick
            process.
          </p>
          <div>
            <button
              className="bg-orange-700 m-1 text-white border-orange-700 border font-semibold hover:bg-white hover:text-orange-700 px-5 py-2 rounded-lg text-center "
              style={{
                transition: "background-color 0.3s ease-in-out",
              }}
            >
              Come to business
            </button>
          </div>
        </div>

        <div className=" flex flex-row flex-wrap  gap-[1.875rem] py-[50px] w-[50%] min-w-[365px] justify-center ">
          <div>
            <img
              src="https://www.hsorka.is/media/vnxpeo43/7.jpg?width=600&height=1000&v=1d98d64ebc9feb0&format=webp"
              alt="bmw"
              width={300}
              className="rounded-md"
            />
          </div>
          <div className="h-[300px]">
            <img
              src="https://www.hsorka.is/media/5plfaarh/gfr_0204-pano.jpg?width=600&height=600&v=1d9e577bf391b40&format=webp"
              alt="bmw"
              width={300}
              className="rounded-md"
            />
          </div>
          <div>
            <img
              src="https://www.hsorka.is/media/sfrbbonx/6.jpg?width=600&height=600&v=1d98d64e5ed7210&format=webp"
              alt="bmw"
              width={300}
              className="rounded-md"
            />
          </div>
          <div>
            <img
              src="https://www.hsorka.is/media/wklgrtnl/8.jpg?cc=0.4337003003003004,0,0.16669969969969967,0.0000000000000001136868377216&width=600&height=1000&v=1d98d64e750f9b0&format=webp"
              alt="bmw"
              width={300}
              className="rounded-md lg:my-[-200px]"
            />
          </div>
        </div>
      </div>

      <div className=" w-full flex flex-row flex-wrap justify-center ">
        <div className="  w-[50%] flex justify-start  px-2 py-5 min-w-[365px] ">
          <img
            src="https://www.hsorka.is/media/rmrpzao5/2021_webasto_charging_detail_connector_1.jpg?width=1120&height=1528&v=1d8e8b610561b00&format=webp"
            alt="img"
            width={500}
            className="rounded-md"
          />
        </div>
        <div className=" flex flex-col flex-wrap justify-center items-start min-w-[365px] w-[50%] px-16 py-3 gap-[1.875rem] ">
          <p className="text-orange-700 font-bold font-sans ">
            Charging subscription
          </p>
          <h1 className="text-[60px] font-semibold ">
            Rent a charging station from ISK 3,490 per month
          </h1>

          <div className="flex justify-center text-center">
            <button
              className="bg-orange-700 m-1 text-white border-orange-700 border font-semibold hover:bg-white hover:text-orange-700 px-4 py-2 rounded-lg text-center transition-colors "
              style={{
                transition: "background-color 0.3s ease-in-out",
              }}
            >
              Find out
            </button>
          </div>
        </div>
      </div>

      <div className=" w-full flex flex-row flex-wrap justify-center ">
        <div className=" flex flex-col flex-wrap justify-center items-start min-w-[365px] w-[50%] px-16 py-3 gap-[1.875rem] ">
          <p className="text-green-700 font-bold font-sans ">Sustainability</p>
          <h1 className="text-[60px] font-semibold ">
            <span className="text-green-700">Green certified electricity</span>{" "}
            for homes and businesses
          </h1>

          <div className="flex justify-center text-center">
            <button
              className="bg-green-700 m-1 text-white border-green-700 border font-semibold hover:bg-white hover:text-green-700 px-4 py-2 rounded-lg text-center transition-colors "
              style={{
                transition: "background-color 0.3s ease-in-out",
              }}
            >
              Find out
            </button>
          </div>
        </div>
        <div className="  w-[50%] flex justify-end py-5 px-2 min-w-[365px] ">
          <img
            src="https://www.hsorka.is/media/vnxpeo43/7.jpg?width=1120&height=1528&v=1d98d64ebc9feb0&format=webp"
            alt="img"
            width={500}
            className="rounded-md"
          />
        </div>
      </div>

      <div className="flex flex-wrap flex-col gap-y-[60px]  py-3 ">
        <div className="font-bold text-[60px] ">News</div>
        <div className="flex flex-row flex-wrap gap-x-[80px]  justify-center  ">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Home;
