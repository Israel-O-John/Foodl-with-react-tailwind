import React from "react";
import Foodl from "/src/assets/icons/Foodl.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="w-full bg-[#FF9F59]">
      <div className="w-10/12 mx-auto pt-6  flex justify-between items-center">
        <img src={Foodl} alt="Foodl" />
        <div>
          <ul className="flex items-center gap-6 md:gap-12">
            <li className="font-bold text-sm md:text-lg text-black">
              <Link to="/">Home</Link>
            </li>
            <li className="text-sm md:text-lg text-black">
              <Link to="/Search">Search</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
