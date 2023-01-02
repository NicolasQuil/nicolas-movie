import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-[300px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[300px] bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover "
            src="https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
