import React from "react";

function Logo({ width = "100%" }) {
  return (
    <img
      src="https://images.pexels.com/photos/638479/pexels-photo-638479.jpeg"
      style={{ width }}
      alt="Logo placeholder"
      className="rounded-xl"
    />
  );
}

export default Logo;
