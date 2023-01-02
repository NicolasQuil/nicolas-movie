import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const inputRef = useRef(); // Listener to input
  const nav = useNavigate(); // Navigate page
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <h1 onClick={() => {
        nav(-1);
      }}
        className="text-red-400 text-4xl font-bold cursor-pointer hover:text-red-600 transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-110 hover: duration-300 ...">
        Nicolas Movies 🎬
      </h1>
      <div>
        <input
          placeholder="Search..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              nav("/" + inputRef.current.value);
            }
          }}
          ref={inputRef}
          type="text"
          className="shadow appearance-none  rounded-[50px]  w-full py-2 px-4 bg-gray-800 text-center leading-tight focus:outline-none focus:shadow-outline  hover:bg-red-500 focus:bg-white text-black"
        />
      </div>
    </div>
  );
}
export default Navbar;
