import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
function Card() {
  const [hovered, isHovered] = useState(false);
  return (
    <a
      href="/"
      onMouseEnter={() => {
        isHovered(true);
        console.log(hovered);
      }}
      onMouseLeave={() => {
        isHovered(false);
        console.log(hovered);
      }}
    >
      <div
        className=" flex flex-row flex-wrap w-[400px] transform hover:scale-105 hover:translate-y-[-10px] transition-transform p-4 rounded-md hover:border-orange-500 gap-y-[45px] h-[600px] border-2 "
        style={{
          transition: " border 0.3s ease-in-out",
          // width: hovered ? "416px" : "400px",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {" "}
        <div>
          <img
            src="https://images.pexels.com/photos/100653/pexels-photo-100653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="BMW"
            width={400}
            className="rounded-md"
          />
        </div>
        <div className="  p-1 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          culpa molestiae dolore at et officia? Quam necessitatibus enim earum
          commodi eaque recusandae id laudantium dolorem. Consequatur nemo id
          assumenda cumque ad animi, excepturi voluptate quos ipsa facilis saepe
          aut sunt vero dolores sint velit quis minima cupiditate, quo tenetur
          commodi?
        </div>
        <div className="text-orange-700 flex flex-row items-center">
          <FaArrowRight
            className={`transition-opacity duration-300 ease-in-out ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          />
          <span
            style={{
              marginLeft: hovered ? "10px" : "0px",
              transition: "margin-left 0.3s ease-in-out",
            }}
          >
            Read More
          </span>
        </div>
      </div>
    </a>
  );
}

export default Card;
