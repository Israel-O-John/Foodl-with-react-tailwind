import React from "react";
import Navbar from "./components/Navbar/Navbar";
import plate from "/src/assets/images/plate.png";
import black from "/src/assets/images/black.png";
import "./index.css";
import { useNavigate } from "react-router-dom";

export const App = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#FF9F59]">
      <Navbar />
      <div className="flex flex-col md:flex-row w-11/12 md:w-10/12 mx-auto justify-between items-center pt-16 md:pt-24 gap-10">
        <div>
          <h2 className="font-bold text-black text-3xl md:text-5xl max-w-md tracking-tight pb-8">
            Find recipes for the ingredients you have on hand
          </h2>
          <button
            onClick={() => navigate("/Search")}
            className="text-white font-medium text-2xl py-5 px-14 bg-black rounded-lg"
          >
            Search now
          </button>
        </div>
        <div>
          <img
            src={plate}
            className="w-full max-w-md md:max-w-xl"
            alt="plate with food"
          />
          <div className="absolute position -z-10 right-0">
            <img src={black} alt="" />
          </div>
        </div>
      </div>
      {/* commiting new changes test */}
    </div>
  );
};

export default App;
