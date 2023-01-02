import React from "react";
import { Link } from "react-router-dom";

function Page1(props) {
  let item = props.item;

  return (
    <div className="m-auto">
      <Link to={"/page2/" + item.imdbID}>
        <img
          className="p-4 w-full h-auto block rounded-[60px] transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-110 hover: duration-300 ..."
          src={item.Poster}
          alt=""
        />
      </Link>
    </div>
  );
}

export default Page1;
