import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
      <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center w-100 min-h-100  rounded-lg gap-5 ">
        <div className="">
          <img
            src="https://i.pinimg.com/736x/51/2b/d6/512bd6ee85ad71612af7e953913f1717.jpg"
            alt=""
          />
        </div>
        <div className=" flex flex-col gap-5">
          <p className="text-5xl font-medium">Character website</p>
          <p className="text-lg font-medium text-center">join us!</p>
          <Link to="/register">
            <button className="border h-8 text-lg font-medium rounded-lg bg-blue-950 text-white w-full">
              register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
