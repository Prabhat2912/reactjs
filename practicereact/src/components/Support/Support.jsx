import React, { useState } from "react";
import { IoMdChatboxes } from "react-icons/io";

function Support() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="fixed  text-center items-center  w-[50px] bottom-14 right-14  justify-center ">
      <button
        className={`rounded-full border-2 bg-gray-50 shadow-lg ${
          isHovered ? "p-[30px]" : "p-[25px]"
        }   `}
        style={{ transition: "padding 0.3s ease-in-out" }}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <IoMdChatboxes />
      </button>
    </div>
  );
}

export default Support;
